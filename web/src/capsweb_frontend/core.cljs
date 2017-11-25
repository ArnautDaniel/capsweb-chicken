(ns capsweb-frontend.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [reagent.core :as r]))

;; -------------------------
;; Views
(defn atom-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn ajax-test [vals]
  (go (let [response
            (<!
             (http/get
              (clojure.string/join
               ""
               ["/general-js-query?preamble=select-shows&constraint=like-name-" vals])))]
        (.log js/console (:status response))
        (.log js/console (:body response)))))


(defn shared-state []
  (let [val (r/atom "")]
    (fn []
      [:div
       [:p "The value is now: " @val]
       [:p "Change it here: " [atom-input val]]
       [:button {:class "button is-success"
                 :on-click #(ajax-test @val)}
        "AJAX"]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [shared-state] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
