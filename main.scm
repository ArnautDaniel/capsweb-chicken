(use srfi-18 spiffy intarweb uri-common spiffy-cookies html-tags uri-match spiffy-uri-match sxml-serializer spiffy-directory-listing sql-de-lite json)


;;;Model

(define (send-sxml-response sxml)
  (with-headers `((connection close))
                (lambda ()
                  (write-logged-response)))
  (serialize-sxml sxml
		  method: 'xml
                  output: (response-port (current-response))))

(define (standard-header title-name body-code)
  (send-sxml-response
   `(html
     (head (title ,title-name)
	   (link (@ (rel "stylesheet"))
		 (@ (type "text/css"))
		 (@ (href "css/iziToast.css")))
	   (script
	    (@ (src "js/iziToast.js"))
	    (@ (type "text/javascript")))
	   
	   (link (@ (rel "stylesheet"))
		 (@ (type "text/css"))
		 (@ (href "css/bulma.css")))
	   (link (@ (rel "icon"))
		 (@ (type "image/jpg"))
		 (@ (href "littlec.jpg")))
	   (meta (@ (charset "utf-8"))
		 (@ (name "viewport"))
		 (@ (content
		     "width=device-width, initial-scale=1 maximum-scale=1"))))
     (body
      (section
       (@ (class "hero is-caps"))
       (div
	(@ (class "hero-body"))
	(div
	 (@ (class "container"))
	 (h1 (@ (class "title"))
	     (img (@ (src "caps-logo.jpg"))
		  (@ (height "300"))
		  (@ (width "300"))))
	 (h2 (@ (class "subtitle"))
	     "Serving the Atlanta Film Industry"))))
      ,body-code))))

;;;Very destructive function
;;;Where page logic is a quasiquoted list
;;;that has the body html
(define (make-page! route title page-logic)
  (set! *global-alist* (alist-delete! route *global-alist*))
  (set! *global-alist*
	(cons (list route
		    (lambda ()
		      (standard-header title page-logic))) *global-alist*)))

(define (make-ajax-page! route func)
  (set! *global-alist* (alist-delete! route *global-alist*))
  (set! *global-alist*
	(cons (list route func) *global-alist*)))

(define *global-alist* '(("/search" search-bar)))



;;;Destroys itself after compiling...isn't that odd.
(define search-bar
  (lambda ()
    (make-page!
     "/search" "Search"
     `((br)
       (script (@ (src "/searchbar.js"))
	       (@ (type "text/javascript")))
       (div
	(@ (class "columns"))
	(div
	 (@ (class "column is-5 is-offset-2"))
	 (div
	  (@ (class "field has-addons"))
	  (div
	   (@ (class "control"))
	   (input
	    (@ (class "input"))
	    (@ (id "searchbar"))
	    (@ (type "text"))
	    (@ (placeholder "Search"))))
	  (button (@ (class "button is-success"))
		  (@ (id "addshowbtn"))
		  "Add"))))
       (div
	(@ (class "columns"))
	(div (@ (class "column is-5 is-offset-2"))
	     (@ (id "jsonTableDiv"))))))
    
    
    (redirect-to (uri-reference "/search"))))

;;;Router
;;;This is a very simple router that takes
;;;the uri path and looks it up in the *global-alist*
;;;*global-alist* defines an alist that holds the uri
;;;as the key and the value as a function that sends a
;;;response expression which is returned to the router
;;;and evaluated

(define (router)
  (let* ((uri (request-uri (current-request)))
	 (p-uri (uri-path uri)))
    (set! last-req (current-request))
    (choose-route p-uri)))


;;;This is the tricky one
(define (make-uri-string p-uri)
  (cond
   ((null? p-uri) "")
   ((symbol? (car p-uri))
    (string-append (symbol->string (car p-uri))
		   (make-uri-string (cdr p-uri))))
   ((null? (cdr p-uri))
    (car p-uri))
   (else
    (string-append (car p-uri) "/"
		   (make-uri-string (cdr p-uri))))))

(define (choose-route p-uri)
  (let* ((n-uri (make-uri-string p-uri))
	 (query-uri (assoc n-uri *global-alist*)))
    (cond
     ((pathname-extension n-uri)
      (send-static-file n-uri))
     (query-uri
      (eval (cdr query-uri)))
     (else
      (send-fof-response)))))

;;;If it's not in the routing alist
;;;send a 404 response
(define (send-fof-response)
  (send-status 404 "Spooky!"
	       "<p>Ghost Doggo is looking for your page.</p>
<img src='404.jpg'>"))



;;; General querying through AJAX
(define (call-db-with-param quer qur)
  (call-with-database "devel.db"
		      (lambda (db)
			(fetch-alists
			 (prepare db
				  (format "~a '~a' LIMIT 30;" quer qur))))))

(define (ajax-response data-list)
  ( with-headers `((connection close))
		 (lambda ()
		   (write-logged-response)))
  (json-write data-list
	      (response-port (current-response))))

(define (query-show query item)
  (let*
      ((item-val (cdr (assoc query item)))
       (result (call-db-with-param "SELECT * from shows WHERE name like "
			   (string-append "%" item-val "%"))))
    (ajax-response
     (map (lambda (x)
	    (list (cdr (assoc 'showid x))
		  (cdr (assoc query x))))
	  result))))
	  

(define (query-id query item)
  (let ((item-val (cdr (assoc query item))))
    (call-db-with-param "SELECT * from shows where showid="
			item-val)))

(define (query-set query item)
  (let*
      ((constraint (cdr (assoc 'id item)))
       (item-val (cdr (assoc query item))))
    (if constraint
	(call-db-with-param
	 (string-append "SELECT * from sets WHERE showid=" constraint " AND name like ")
	 (string-append "%" item-val "%"))
	(call-db-with-param
	 "SELECT * from sets WHERE name like "
	(string-append "%" item "%")))))
		      
(define (general-query func query item)
  (ajax-response
   (map (lambda (x)
	  (cdr (assoc query x)))
	(func query item))))

(define (general-js-query)
  (let* ((uri (request-uri (current-request)))
	 (uri-q (uri-query uri)))
    (cond
     ((equal? (cdr (assoc 'query uri-q)) "show")
      (query-show 'name uri-q))
     ((equal? (cdr (assoc 'query uri-q)) "set")
      (general-query query-set 'name uri-q))
     ((equal? (cdr (assoc 'id uri-q)) "id")
      (general-query query-id 'id uri-q))
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
	       (result (call-with-database "devel.db"
					   (lambda (db)
					     (fetch-all
					      (prepare db (format "SELECT * from shows  where name='~a' LIMIT 10;" qur)))))))
	  (cond ((null? result)
		 (and
		  (call-with-database "devel.db"
				      (lambda (db)
					(exec (sql db "INSERT INTO shows(name) values(?);") qur)))
		  (send-status 200 "" "")))
		(else 
		 (send-response code: '404
				body: "Nope!")))))))

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

