(use srfi-18 spiffy intarweb uri-common spiffy-cookies html-tags uri-match spiffy-uri-match sxml-serializer spiffy-directory-listing)

(define css-dir "css/")

(define css-list '("bulma.css"))

;;;Model

(define (send-sxml-response sxml)
  (with-headers `((connection close))
                (lambda ()
                  (write-logged-response)))
  (serialize-sxml sxml
                  output: (response-port (current-response))))


					;-------------------------------------


(define *global-alist* '((/ main-caps)))


(define (main-caps)
  (send-sxml-response
   `(html
     (head (title "Central Atlanta Props & Sets")
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
      (div
       (@ (class "columns"))
       (div
	(@ (class "column"))
	(section
	 (@ (class "section"))
	 (div
	  (@ (class "container is-fluid"))
	  (h1 (@ (class "title")) "About Us")
	  (div
	   (@ (class "content"))
	   (strong "Central Atlanta Props & Sets")
	   " provides a large variety of set dressing rental items for the entertainment and event industries!  We have almost 200,000 sqft of warehouse space consisting of the industrial, office, rustic, exterior, and antique items you need for your project!"
	   (br)(br)
	   "At" (strong " CAPS ")
	   "we make customer service our number one priority.  The owner,"
	   (strong " Bob Lucas ")
	   "has worked in the film industry for 30 years and is well aware of the stressful and hectic enviroment that comes with working in film.  With this experience under our belt we hope to eliminate any worries you may have in trying to find your props and set pieces by making you a priority.  Our staff shares the same vision as Bob in making"
	   (strong " CAPS ") "a place where you know you'll find the help you need." (br) (br)
	   (div
	    (@ (class "box"))
	    (img
	    (@ (src "outdoors.jpg"))
	    (@ (width "100%"))
	    (@ (height "300"))))))))
       (div
	(@ (class "column is-5"))
	(section (@ (class "section"))
		 (div
		  (@ (class "card"))
		  (header
		   (@ (class "card-header"))
		   (p
		    (@ (class "card-header-title"))
		    "Contact Us"))
		  (div
		   (@ (class "card-content"))
		   (div
		    (@ (class "content"))
		    "We are located at "
		    (a
		     (@ (href "https://goo.gl/maps/7YbUEj1tjMU2"))
		     (strong "675 Metropolitan Parkway SW, Suite 5121 Atlanta, GA 30310"))
		    (br)(br)
		       
		    "Our office number is "
		    (a
		     (@ (href "tel:4702256709"))
		     (strong "(470) 225-6709"))
		    "or Bob can be reached directly at "
		    (a
		     (@ (href "tel:6613735060"))
		     (strong "(661) 373-5060"))
		    (br) (br)
		    "Office hours are Monday to Friday from 7AM to 5PM."
		    (br)(br)
		    "You may reach us by email at "
		    (a (@ (href "mailto:capsga@outlook.com"))
		       (strong "capsga@outlook.com"))
		    (br)(br)
		    (style 
			"#myFrame { width:100%; height:300px;")
		    
		    (iframe
		     (@ (src "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.937956493795!2d-84.41048094876069!3d33.736420441658744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50312ce8be399%3A0xcf6785bd9a60a421!2s675+Metropolitan+Pkwy+SW%2C+Atlanta%2C+GA+30310!5e0!3m2!1sen!2sus!4v1509559600409"))
		     (@ (id "myFrame"))
		     (@ (frameborder "0"))
		     (@ (style "border:0"))
			 "allowfullscreen")
		    (br)(br)
		    (a
		     (@ (class "twitter-timeline"))
		     (@ (data-width "100%"))
		     (@ (data-height"300"))
		     (@ (data-theme="light"))
		     (@ (href "https://twitter.com/CAPSAtlanta?ref_src=twsrc%5Etfw"))
		     "Tweets by CAPSAtlanta")
		    (script
		     (@ (async))
		     (@ (src "https://platform.twitter.com/widgets.js"))
		     (@ (charset "utf-8")))))))))
      
      (footer
       (@ (class "footer is-dark"))
       (div
	(@ (class "container"))
	(div
	 (@ (class "content has-text-centered"))
	 (p ""))))))))
  
	   
	    				;--------------------------------------------
;;;Router
(define (app)
  (let* ((uri (request-uri (current-request))))
    (set! css-dir (current-request))
    (cond
     ((and (assq (first (uri-path uri)) *global-alist*)
	   (string= (second (uri-path uri)) ""))
      (eval (cdr (assq (first (uri-path uri)) *global-alist*))))
     ((assoc (string->symbol (second (uri-path uri))) *global-alist*)
      (eval (cdr (assq (string->symbol (second (uri-path uri))) *global-alist*))))
     ((string=? "css" (second (uri-path uri)))
      (send-static-file (string-append (second (uri-path uri))
				       "/"
				       (third (uri-path uri)))))
     ((equal? "jpg" (pathname-extension (second (uri-path uri))))
      (send-static-file (second (uri-path uri))))
     (else
      (send-response
       body: "Couldn't find that chummy")))))

;;;Why the hell does spiffy-uri-match not support hot-reloading?

(handle-directory spiffy-directory-listing)

(define thread
  (thread-start!
   (lambda ()
     (error-log "error.log")
     (vhost-map `((".*" . ,(lambda (c) (app)))))
     (start-server port: 80))))

(thread-join! thread)
