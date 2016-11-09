(ns om-slider.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(def num-sliders (atom {:n 5}))

(def reconciler
  (om/reconciler {:state num-sliders}))

(defui slider
  Object
  (render [this]
          (let [{:keys [id left top]} (om/props this)]
            (dom/input #js
                       {:type "range"
                        :id id
                        :min 5
                        :max 100
                        :step 1
                        ;; :value (:n (om/props this)) ;first n elements do NOT track rest
                        :style #js {:width "360px"
                                    :left left
                                    :top top
                                    :position "absolute"}
                        :onChange
                        (fn [e]
                          (swap! num-sliders assoc :n e.target.value))}))))
  
(def slider-factory (om/factory slider))

(defui slider-generator
  Object
  (render [this]
          (apply dom/div nil
                 (map #(slider-factory {:react-key %
                                        :id  %
                                        :left (str
                                               (*
                                                (/ (.-innerWidth js/window)
                                                   (:n (om/props this)))
                                               %) "px")                                            
                                        :top (str
                                              (*
                                               (/ (.-innerHeight js/window)
                                                  (:n (om/props this)))
                                              %) "px")})
                      (range (:n (om/props this)))))))

(om/add-root! reconciler
              slider-generator (gdom/getElement "app"))
