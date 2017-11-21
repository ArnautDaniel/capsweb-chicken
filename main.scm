(use srfi-18 spiffy intarweb uri-common spiffy-cookies html-tags uri-match spiffy-uri-match
     sxml-serializer spiffy-directory-listing sql-de-lite json srfi-14)

(load "routing.scm")
(load "model.scm")
;;;General SELECTING

(define (alist-keys alist) (map car alist))
(define (alist-values alist) (map cdr alist))

(define (json-to-sql preamble constraint)
  (string-append
   (json-to-preamble preamble)
   (json-to-constraint constraint)))

(define (json-to-preamble x)
  (let ((split (string-split x "-")))
    (string-append (first split) " * from " (second split) " where")))

(define (json-to-constraint x)
  (let ((split (string-split x "::")))
    (reduce (lambda (why who)
              (string-append why " and " who))
            "  "
            (map (lambda (y)
                   (change-to-constraint (string-split y "-")))
                 split))))



(define (change-to-constraint t)
  (let ((len (length t)))
    (cond
     ((equal? "like" (car t))
      (string-append " " (second t) " " (first t) 
                     (if (= 2 len)
                         " '%'"
                         (string-append "'%" (third t) "%'"))  " "))
     (else
      (string-append " " (second t) " " (first t) " " (third t) " ")))))
  
;;; General querying through AJAX
(define (call-db-with-param sqls)
  (call-with-database "devel.db"
		      (lambda (db)
			(fetch-alists
			 (prepare db
				  sqls)))))


(define (prepare-ajax-response data-list)
  (map (lambda (x)
         (alist-values x))
       data-list))


(define (ajax-response data-list)
  ( with-headers `((connection close))
		 (lambda ()
		   (write-logged-response)))
  (json-write data-list
	      (response-port (current-response))))

(define (general-js-query)
  (let* ((uri (request-uri (current-request)))
         (uri-q (uri-query uri))
         (preamble  (cdr (assoc 'preamble uri-q)))
         (constraint (cdr (assoc 'constraint uri-q))))
    (cond
     ((not (null? preamble))
      (ajax-response
       (prepare-ajax-response (call-db-with-param (json-to-sql preamble constraint)))))
     (else
      (send-fof-response)))))

(make-ajax-page! "/general-js-query" general-js-query)

;;;AJAX function;  Works!
;;;Tested with 50,000k rows!
;;;Need a function for pushing server util uri's to the global-alist

(define (addshowjs)
  (let* ((uri (request-uri (current-request)))
	 (uri-q (uri-query uri)))
    (if (null? uri-q)
	(send-response code: '404
		       body: "Nope")
	(let* ((qur (cdr (assoc 'name uri-q)))
	       (type (cdr (assoc 'type uri-q)))
	       (result
		(call-with-database "devel.db"
				    (lambda (db)
				      (fetch-all
				       (prepare db (format "SELECT * from shows  where name='~a' LIMIT 10;" qur)))))))
	  (cond ((null? result)
		 (and
		  (cond ((equal? type "set")
			 (add-set qur (cdr (assoc 'id uri-q))))
			((equal? type "item")
			 (add-item qur (cdr (assoc 'id uri-q))))
		        ((equal? type "show")
			 (add-show qur))
			(else
			 (send-fof-response)))
		  (send-status 200 "" "")))
		(else 
		 (send-response code: '404
				body: "Nope!")))))))

(define (add-show qur)
  (call-with-database "devel.db"
		      (lambda (db)
			(exec (sql db "INSERT INTO shows(name) values(?);") qur))))

(define (add-set qur id)
  (call-with-database "devel.db"
		      (lambda (db)
			(exec (sql db "INSERT INTO sets(name, showid) values(?, ?);") qur id))))

(define (add-item qur id)
  (let*
      ((results (call-with-database "devel.db"
		 (lambda (db)
		   (fetch-alist
		    (prepare db (format "SELECT * from sets WHERE setid=~a" id))))))
       (show-id (cdr (assoc 'showid results)))
       (set-id (cdr (assoc 'setid results))))
    (call-with-database "devel.db"
			(lambda (db)
			  (exec (sql db "INSERT INTO items(description, showid, setid) values (?, ?, ?);")
				     qur show-id set-id)))))

(make-ajax-page! "/addshowjs" addshowjs)

(handle-directory spiffy-directory-listing)


;;;Start spiffy in a thread with everything sent to
;;;the procedure (router)
;;;allows hot reloading of router
;;;use (thread-join! thread) for executable
(define thread
  (thread-start!
   (lambda ()
     (error-log "error.log")
     (vhost-map `((".*" . ,(lambda (c) (router)))))
     (start-server port: 8000))))

