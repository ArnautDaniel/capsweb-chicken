(ns figwheel.connect.build-app (:require [capsweb-frontend.dev] [figwheel.client] [capsweb-frontend.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/capsweb-frontend.core.mount-root (apply js/capsweb-frontend.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'capsweb-frontend.core/mount-root' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

