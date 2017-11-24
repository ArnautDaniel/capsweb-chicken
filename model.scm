(use srfi-18 spiffy intarweb uri-common spiffy-cookies html-tags uri-match spiffy-uri-match
     sxml-serializer spiffy-directory-listing sql-de-lite json)


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
           (script (@ (id "template"))
                   (@ (type "text/x-handlebars-template"))
                   (@ (src "js/templates/test.templ")))
           (script
            (@ (src "js/handlebars-4.js"))
            (@ (type "text/javascript")))
           (script
            (@ (src "js/jquery.js"))
            (@ (type "text/javascript")))
           (script
            (@ (src "js/underscore.js"))
            (@ (type "text/javascript")))
           (script
            (@ (src "js/backbone.js"))
            (@ (type "text/javascript")))
           (script
            (@ (src "js/backbone.radio.js"))
            (@ (type "text/javascript")))
           (script
            (@ (src "js/json2.js"))
            (@ (type "text/javascript")))
           (script
            (@ (src "js/backbone.marionette.js"))
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
       (a (@ (class "button is-success"))
          (@ (href "/search"))
          "Test")
       (script (@ (src "/searchbar.js"))
               (@ (type "text/javascript")))
       (nav (@ (id "breadbar"))
            (@ (class "breadcrumb is-centered has-bullet-separator"))
            (@ (aria-label "breadcrumbs"))
            (ul (@ (id "breadbar-ul"))
                (li (a (@ (href "#"))
                       "Search"))))
       
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
                  "Add")))
        (div
         (@ (class "column control"))
         (input
          (@ (class "input"))
          (@ (id "backbone-search"))
          (@ (type "text"))
          (@ (placeholder "B Search"))))
        (div
         (@ (class "column"))
         (@ (id "info-js-hook"))))
       
       (div
        (@ (class "columns"))
        (div (@ (class "column is-5 is-offset-2"))
             (@ (id "jsonTableDiv"))))))
    
    
    (redirect-to (uri-reference "/search"))))

