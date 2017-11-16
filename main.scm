(use srfi-18 spiffy intarweb uri-common spiffy-cookies html-tags uri-match spiffy-uri-match sxml-serializer spiffy-directory-listing sql-de-lite json)

(define css-dir '())

(define css-list '("bulma.css"))

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
		 (@ (href "css/bulma.css")))
	   (link (@ (rel "icon"))
		 (@ (type "image/jpg"))
		 (@ (href "littlec.jpg")))
	   (meta (@ (charset "utf-8"))
		 (@ (name "viewport"))
		 (@ (content
		     "width=device-width, initial-scale=1 maximum-scale=1"))))
     (body ,body-code))))

;;;Very destructive function
;;;Where page logic is a quasiquoted list
;;;that has the body html
(define (make-page! route title page-logic)
  (set! *global-alist* (alist-delete! route *global-alist*))
  (set! *global-alist*
    (cons (list route
		(lambda ()
		  (standard-header title page-logic))) *global-alist*)))

					;-------------------------------------


(define *global-alist* '(("/" main-caps)
			 ("/main/caps" main-caps)
			 ("/set-cookie" cookie-auth)
			 ("/badcookie" bad-cookie)
			 ("/cookie-page" cookie-page)
			 ("/test" tester-page)
			 ("/search" search-bar)))


	    				;--------------------------------------------

(define search-bar
  (lambda ()
    (make-page!
     "/search" "Search"
     `((section
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
	      "Serving the Atlanta Food Industry"))))
       (br)
       (script (@ (src "/searchbar.js"))
	       (@ (type "text/javascript")))
       (div
	(@ (class "columns"))
	(div
	 (@ (class "column is-5 is-offset-2"))
	 (form
	  (@ (action "/check-search")) 
	  (@ (method "get"))
	  (div
	   (@ (class "field has-addons"))
	   (div
	    (@ (class "control"))
	    (input
	     (@ (class "input"))
	     (@ (id "searchbar"))
	     (@ (type "text"))
	     (@ (placeholder "Search"))))))))
       (div
	(@ (class "columns"))
	(div (@ (class "column is-5 is-offset-2"))
	     (@ (id "jsonTableDiv"))))))
	   
    
    (redirect-to (uri-reference "/search"))))

(define main-caps
  (lambda ()
    (send-sxml-response
     (map (lambda (x)
	    `(a (@ (href ,(car x)))
		,(car x) (br)))
	  *global-alist*))))

(define cookie-auth
  (lambda ()
    (set-cookie! "auth" "password")
    (redirect-to (uri-reference "/cookie-page"))))

(define cookie-page
  (lambda ()
    (if (read-cookie "auth")
	(send-response
	 body: "You got cookies! Where's the milk?")
	(redirect-to (uri-reference "/badcookie")))))

(define bad-cookie
  (lambda ()
    (send-response
     body: "Shoo shoo cookie monster!")))
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

(define (send-js-search)
  (let* ((uri (request-uri (current-request)))
	(uri-q (uri-query uri)))
    (if (null? uri-q)
	(send-response
	 status: 'ok
	 body: "Couldn't find")
        (let*
	    ((qur (cdr (assoc 'name uri-q)))
	     (result (call-with-database "animals.db"
					 (lambda (db)
					   (fetch-all
					    (prepare db
						     (format "SELECT * from genre where name LIKE \'%~a%\' ;" qur)))))))
	  (with-headers `((connection close))
			(lambda ()
			  (write-logged-response)))
	  (json-write
		  (map (lambda (x)
			 (second x))
		       result)
		  (response-port (current-response)))))))
	  
(set! *global-alist* (cons (list "/searchjs" send-js-search) *global-alist*))  
	  
(define (send-sxml-response sxml)
  (with-headers `((connection close))
                (lambda ()
                  (write-logged-response)))
  (serialize-sxml sxml
		  method: 'xml
                  output: (response-port (current-response))))



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

(thread-join! thread)
