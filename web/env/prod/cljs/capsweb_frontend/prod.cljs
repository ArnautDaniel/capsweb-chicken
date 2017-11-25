(ns capsweb-frontend.prod
  (:require
    [capsweb-frontend.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
