// Compiled by ClojureScript 1.9.946 {}
goog.provide('capsweb_frontend.core');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('reagent.core');
capsweb_frontend.core.atom_input = (function capsweb_frontend$core$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__32051_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__32051_SHARP_.target.value);
})], null)], null);
});
capsweb_frontend.core.ajax_test = (function capsweb_frontend$core$ajax_test(vals){
var c__30531__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30531__auto__){
return (function (){
var f__30532__auto__ = (function (){var switch__30510__auto__ = ((function (c__30531__auto__){
return (function (state_32064){
var state_val_32065 = (state_32064[(1)]);
if((state_val_32065 === (1))){
var inst_32052 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32053 = ["/general-js-query?preamble=select-shows&constraint=like-name-",vals];
var inst_32054 = (new cljs.core.PersistentVector(null,2,(5),inst_32052,inst_32053,null));
var inst_32055 = clojure.string.join.call(null,"",inst_32054);
var inst_32056 = cljs_http.client.get.call(null,inst_32055);
var state_32064__$1 = state_32064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32064__$1,(2),inst_32056);
} else {
if((state_val_32065 === (2))){
var inst_32058 = (state_32064[(2)]);
var inst_32059 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_32058);
var inst_32060 = console.log(inst_32059);
var inst_32061 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32058);
var inst_32062 = console.log(inst_32061);
var state_32064__$1 = (function (){var statearr_32066 = state_32064;
(statearr_32066[(7)] = inst_32060);

return statearr_32066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32064__$1,inst_32062);
} else {
return null;
}
}
});})(c__30531__auto__))
;
return ((function (switch__30510__auto__,c__30531__auto__){
return (function() {
var capsweb_frontend$core$ajax_test_$_state_machine__30511__auto__ = null;
var capsweb_frontend$core$ajax_test_$_state_machine__30511__auto____0 = (function (){
var statearr_32067 = [null,null,null,null,null,null,null,null];
(statearr_32067[(0)] = capsweb_frontend$core$ajax_test_$_state_machine__30511__auto__);

(statearr_32067[(1)] = (1));

return statearr_32067;
});
var capsweb_frontend$core$ajax_test_$_state_machine__30511__auto____1 = (function (state_32064){
while(true){
var ret_value__30512__auto__ = (function (){try{while(true){
var result__30513__auto__ = switch__30510__auto__.call(null,state_32064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30513__auto__;
}
break;
}
}catch (e32068){if((e32068 instanceof Object)){
var ex__30514__auto__ = e32068;
var statearr_32069_32071 = state_32064;
(statearr_32069_32071[(5)] = ex__30514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32072 = state_32064;
state_32064 = G__32072;
continue;
} else {
return ret_value__30512__auto__;
}
break;
}
});
capsweb_frontend$core$ajax_test_$_state_machine__30511__auto__ = function(state_32064){
switch(arguments.length){
case 0:
return capsweb_frontend$core$ajax_test_$_state_machine__30511__auto____0.call(this);
case 1:
return capsweb_frontend$core$ajax_test_$_state_machine__30511__auto____1.call(this,state_32064);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
capsweb_frontend$core$ajax_test_$_state_machine__30511__auto__.cljs$core$IFn$_invoke$arity$0 = capsweb_frontend$core$ajax_test_$_state_machine__30511__auto____0;
capsweb_frontend$core$ajax_test_$_state_machine__30511__auto__.cljs$core$IFn$_invoke$arity$1 = capsweb_frontend$core$ajax_test_$_state_machine__30511__auto____1;
return capsweb_frontend$core$ajax_test_$_state_machine__30511__auto__;
})()
;})(switch__30510__auto__,c__30531__auto__))
})();
var state__30533__auto__ = (function (){var statearr_32070 = f__30532__auto__.call(null);
(statearr_32070[(6)] = c__30531__auto__);

return statearr_32070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30533__auto__);
});})(c__30531__auto__))
);

return c__30531__auto__;
});
capsweb_frontend.core.shared_state = (function capsweb_frontend$core$shared_state(){
var val = reagent.core.atom.call(null,"");
return ((function (val){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#stateid","div#stateid",-184536106),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The value is now: ",cljs.core.deref.call(null,val)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Change it here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [capsweb_frontend.core.atom_input,val], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"button is-success",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (val){
return (function (){
return capsweb_frontend.core.ajax_test.call(null,cljs.core.deref.call(null,val));
});})(val))
], null),"AJAX"], null)], null);
});
;})(val))
});
capsweb_frontend.core.mount_root = (function capsweb_frontend$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [capsweb_frontend.core.shared_state], null),document.getElementById("app"));
});
capsweb_frontend.core.init_BANG_ = (function capsweb_frontend$core$init_BANG_(){
return capsweb_frontend.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1512085771842
