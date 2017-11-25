// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('capsweb_frontend.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('reagent.core');
capsweb_frontend.core.atom_input = (function capsweb_frontend$core$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (p1__14230_SHARP_){
return cljs.core.reset_BANG_(value,p1__14230_SHARP_.target.value);
})], null)], null);
});
capsweb_frontend.core.ajax_test = (function capsweb_frontend$core$ajax_test(vals){
var c__12304__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12304__auto__){
return (function (){
var f__12305__auto__ = (function (){var switch__12242__auto__ = ((function (c__12304__auto__){
return (function (state_14243){
var state_val_14244 = (state_14243[(1)]);
if((state_val_14244 === (1))){
var inst_14231 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14232 = ["/general-js-query?preamble=select-shows&constraint=like-name-",vals];
var inst_14233 = (new cljs.core.PersistentVector(null,2,(5),inst_14231,inst_14232,null));
var inst_14234 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",inst_14233);
var inst_14235 = cljs_http.client.get(inst_14234);
var state_14243__$1 = state_14243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14243__$1,(2),inst_14235);
} else {
if((state_val_14244 === (2))){
var inst_14237 = (state_14243[(2)]);
var inst_14238 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_14237);
var inst_14239 = console.log(inst_14238);
var inst_14240 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_14237);
var inst_14241 = console.log(inst_14240);
var state_14243__$1 = (function (){var statearr_14245 = state_14243;
(statearr_14245[(7)] = inst_14239);

return statearr_14245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14243__$1,inst_14241);
} else {
return null;
}
}
});})(c__12304__auto__))
;
return ((function (switch__12242__auto__,c__12304__auto__){
return (function() {
var capsweb_frontend$core$ajax_test_$_state_machine__12243__auto__ = null;
var capsweb_frontend$core$ajax_test_$_state_machine__12243__auto____0 = (function (){
var statearr_14246 = [null,null,null,null,null,null,null,null];
(statearr_14246[(0)] = capsweb_frontend$core$ajax_test_$_state_machine__12243__auto__);

(statearr_14246[(1)] = (1));

return statearr_14246;
});
var capsweb_frontend$core$ajax_test_$_state_machine__12243__auto____1 = (function (state_14243){
while(true){
var ret_value__12244__auto__ = (function (){try{while(true){
var result__12245__auto__ = switch__12242__auto__(state_14243);
if(cljs.core.keyword_identical_QMARK_(result__12245__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12245__auto__;
}
break;
}
}catch (e14247){if((e14247 instanceof Object)){
var ex__12246__auto__ = e14247;
var statearr_14248_14250 = state_14243;
(statearr_14248_14250[(5)] = ex__12246__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14243);

return cljs.core.cst$kw$recur;
} else {
throw e14247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12244__auto__,cljs.core.cst$kw$recur)){
var G__14251 = state_14243;
state_14243 = G__14251;
continue;
} else {
return ret_value__12244__auto__;
}
break;
}
});
capsweb_frontend$core$ajax_test_$_state_machine__12243__auto__ = function(state_14243){
switch(arguments.length){
case 0:
return capsweb_frontend$core$ajax_test_$_state_machine__12243__auto____0.call(this);
case 1:
return capsweb_frontend$core$ajax_test_$_state_machine__12243__auto____1.call(this,state_14243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
capsweb_frontend$core$ajax_test_$_state_machine__12243__auto__.cljs$core$IFn$_invoke$arity$0 = capsweb_frontend$core$ajax_test_$_state_machine__12243__auto____0;
capsweb_frontend$core$ajax_test_$_state_machine__12243__auto__.cljs$core$IFn$_invoke$arity$1 = capsweb_frontend$core$ajax_test_$_state_machine__12243__auto____1;
return capsweb_frontend$core$ajax_test_$_state_machine__12243__auto__;
})()
;})(switch__12242__auto__,c__12304__auto__))
})();
var state__12306__auto__ = (function (){var statearr_14249 = (f__12305__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12305__auto__.cljs$core$IFn$_invoke$arity$0() : f__12305__auto__.call(null));
(statearr_14249[(6)] = c__12304__auto__);

return statearr_14249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12306__auto__);
});})(c__12304__auto__))
);

return c__12304__auto__;
});
capsweb_frontend.core.shared_state = (function capsweb_frontend$core$shared_state(){
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return ((function (val){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The value is: ",cljs.core.deref(val)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Change it here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [capsweb_frontend.core.atom_input,val], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button is-success",cljs.core.cst$kw$on_DASH_click,((function (val){
return (function (){
return capsweb_frontend.core.ajax_test(cljs.core.deref(val));
});})(val))
], null),"AJAX"], null)], null);
});
;})(val))
});
capsweb_frontend.core.mount_root = (function capsweb_frontend$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [capsweb_frontend.core.shared_state], null),document.getElementById("app"));
});
capsweb_frontend.core.init_BANG_ = (function capsweb_frontend$core$init_BANG_(){
return capsweb_frontend.core.mount_root();
});
