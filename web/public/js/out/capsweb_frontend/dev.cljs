(ns ^:figwheel-no-load capsweb-frontend.dev
  (:require
    [capsweb-frontend.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
