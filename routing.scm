(use srfi-18 spiffy intarweb uri-common spiffy-cookies html-tags uri-match spiffy-uri-match sxml-serializer spiffy-directory-listing sql-de-lite json)

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

;;;Router
;;;This is a very simple router that takes
;;;the uri path and looks it up in the *global-alist*
;;;*global-alist* defines an alist that holds the uri
;;;as the key and the value as a function that sends a
;;;response expression which is returned to the router
;;;and evaluated



;;;If it's not in the routing alist
;;;send a 404 response
(define (send-fof-response)
  (send-status 404 "Spooky!"
	       "<p>Ghost Doggo is looking for your page.</p>
<img src='public/assets/404.jpg'>"))
