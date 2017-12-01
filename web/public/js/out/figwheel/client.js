// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e38681){if((e38681 instanceof Error)){
var e = e38681;
return "Error: Unable to stringify";
} else {
throw e38681;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38684 = arguments.length;
switch (G__38684) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38682_SHARP_){
if(typeof p1__38682_SHARP_ === 'string'){
return p1__38682_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38682_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29229__auto__ = [];
var len__29222__auto___38687 = arguments.length;
var i__29223__auto___38688 = (0);
while(true){
if((i__29223__auto___38688 < len__29222__auto___38687)){
args__29229__auto__.push((arguments[i__29223__auto___38688]));

var G__38689 = (i__29223__auto___38688 + (1));
i__29223__auto___38688 = G__38689;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38686){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38686));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29229__auto__ = [];
var len__29222__auto___38691 = arguments.length;
var i__29223__auto___38692 = (0);
while(true){
if((i__29223__auto___38692 < len__29222__auto___38691)){
args__29229__auto__.push((arguments[i__29223__auto___38692]));

var G__38693 = (i__29223__auto___38692 + (1));
i__29223__auto___38692 = G__38693;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38690){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38690));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38694){
var map__38695 = p__38694;
var map__38695__$1 = ((((!((map__38695 == null)))?((((map__38695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38695):map__38695);
var message = cljs.core.get.call(null,map__38695__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38695__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28051__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28039__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28039__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28039__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34424__auto___38774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___38774,ch){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___38774,ch){
return (function (state_38746){
var state_val_38747 = (state_38746[(1)]);
if((state_val_38747 === (7))){
var inst_38742 = (state_38746[(2)]);
var state_38746__$1 = state_38746;
var statearr_38748_38775 = state_38746__$1;
(statearr_38748_38775[(2)] = inst_38742);

(statearr_38748_38775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (1))){
var state_38746__$1 = state_38746;
var statearr_38749_38776 = state_38746__$1;
(statearr_38749_38776[(2)] = null);

(statearr_38749_38776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (4))){
var inst_38699 = (state_38746[(7)]);
var inst_38699__$1 = (state_38746[(2)]);
var state_38746__$1 = (function (){var statearr_38750 = state_38746;
(statearr_38750[(7)] = inst_38699__$1);

return statearr_38750;
})();
if(cljs.core.truth_(inst_38699__$1)){
var statearr_38751_38777 = state_38746__$1;
(statearr_38751_38777[(1)] = (5));

} else {
var statearr_38752_38778 = state_38746__$1;
(statearr_38752_38778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (15))){
var inst_38706 = (state_38746[(8)]);
var inst_38721 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38706);
var inst_38722 = cljs.core.first.call(null,inst_38721);
var inst_38723 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38722);
var inst_38724 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38723)].join('');
var inst_38725 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38724);
var state_38746__$1 = state_38746;
var statearr_38753_38779 = state_38746__$1;
(statearr_38753_38779[(2)] = inst_38725);

(statearr_38753_38779[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (13))){
var inst_38730 = (state_38746[(2)]);
var state_38746__$1 = state_38746;
var statearr_38754_38780 = state_38746__$1;
(statearr_38754_38780[(2)] = inst_38730);

(statearr_38754_38780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (6))){
var state_38746__$1 = state_38746;
var statearr_38755_38781 = state_38746__$1;
(statearr_38755_38781[(2)] = null);

(statearr_38755_38781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (17))){
var inst_38728 = (state_38746[(2)]);
var state_38746__$1 = state_38746;
var statearr_38756_38782 = state_38746__$1;
(statearr_38756_38782[(2)] = inst_38728);

(statearr_38756_38782[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (3))){
var inst_38744 = (state_38746[(2)]);
var state_38746__$1 = state_38746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38746__$1,inst_38744);
} else {
if((state_val_38747 === (12))){
var inst_38705 = (state_38746[(9)]);
var inst_38719 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38705,opts);
var state_38746__$1 = state_38746;
if(cljs.core.truth_(inst_38719)){
var statearr_38757_38783 = state_38746__$1;
(statearr_38757_38783[(1)] = (15));

} else {
var statearr_38758_38784 = state_38746__$1;
(statearr_38758_38784[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (2))){
var state_38746__$1 = state_38746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38746__$1,(4),ch);
} else {
if((state_val_38747 === (11))){
var inst_38706 = (state_38746[(8)]);
var inst_38711 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38712 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38706);
var inst_38713 = cljs.core.async.timeout.call(null,(1000));
var inst_38714 = [inst_38712,inst_38713];
var inst_38715 = (new cljs.core.PersistentVector(null,2,(5),inst_38711,inst_38714,null));
var state_38746__$1 = state_38746;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38746__$1,(14),inst_38715);
} else {
if((state_val_38747 === (9))){
var inst_38706 = (state_38746[(8)]);
var inst_38732 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38733 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38706);
var inst_38734 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38733);
var inst_38735 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38734)].join('');
var inst_38736 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38735);
var state_38746__$1 = (function (){var statearr_38759 = state_38746;
(statearr_38759[(10)] = inst_38732);

return statearr_38759;
})();
var statearr_38760_38785 = state_38746__$1;
(statearr_38760_38785[(2)] = inst_38736);

(statearr_38760_38785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (5))){
var inst_38699 = (state_38746[(7)]);
var inst_38701 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38702 = (new cljs.core.PersistentArrayMap(null,2,inst_38701,null));
var inst_38703 = (new cljs.core.PersistentHashSet(null,inst_38702,null));
var inst_38704 = figwheel.client.focus_msgs.call(null,inst_38703,inst_38699);
var inst_38705 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38704);
var inst_38706 = cljs.core.first.call(null,inst_38704);
var inst_38707 = figwheel.client.autoload_QMARK_.call(null);
var state_38746__$1 = (function (){var statearr_38761 = state_38746;
(statearr_38761[(8)] = inst_38706);

(statearr_38761[(9)] = inst_38705);

return statearr_38761;
})();
if(cljs.core.truth_(inst_38707)){
var statearr_38762_38786 = state_38746__$1;
(statearr_38762_38786[(1)] = (8));

} else {
var statearr_38763_38787 = state_38746__$1;
(statearr_38763_38787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (14))){
var inst_38717 = (state_38746[(2)]);
var state_38746__$1 = state_38746;
var statearr_38764_38788 = state_38746__$1;
(statearr_38764_38788[(2)] = inst_38717);

(statearr_38764_38788[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (16))){
var state_38746__$1 = state_38746;
var statearr_38765_38789 = state_38746__$1;
(statearr_38765_38789[(2)] = null);

(statearr_38765_38789[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (10))){
var inst_38738 = (state_38746[(2)]);
var state_38746__$1 = (function (){var statearr_38766 = state_38746;
(statearr_38766[(11)] = inst_38738);

return statearr_38766;
})();
var statearr_38767_38790 = state_38746__$1;
(statearr_38767_38790[(2)] = null);

(statearr_38767_38790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (8))){
var inst_38705 = (state_38746[(9)]);
var inst_38709 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38705,opts);
var state_38746__$1 = state_38746;
if(cljs.core.truth_(inst_38709)){
var statearr_38768_38791 = state_38746__$1;
(statearr_38768_38791[(1)] = (11));

} else {
var statearr_38769_38792 = state_38746__$1;
(statearr_38769_38792[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34424__auto___38774,ch))
;
return ((function (switch__34336__auto__,c__34424__auto___38774,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34337__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34337__auto____0 = (function (){
var statearr_38770 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38770[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34337__auto__);

(statearr_38770[(1)] = (1));

return statearr_38770;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34337__auto____1 = (function (state_38746){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_38746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e38771){if((e38771 instanceof Object)){
var ex__34340__auto__ = e38771;
var statearr_38772_38793 = state_38746;
(statearr_38772_38793[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38794 = state_38746;
state_38746 = G__38794;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34337__auto__ = function(state_38746){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34337__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34337__auto____1.call(this,state_38746);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34337__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34337__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___38774,ch))
})();
var state__34426__auto__ = (function (){var statearr_38773 = f__34425__auto__.call(null);
(statearr_38773[(6)] = c__34424__auto___38774);

return statearr_38773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___38774,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38795_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38795_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38797 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38797){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38796){if((e38796 instanceof Error)){
var e = e38796;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38797], null));
} else {
var e = e38796;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38797))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38798){
var map__38799 = p__38798;
var map__38799__$1 = ((((!((map__38799 == null)))?((((map__38799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38799):map__38799);
var opts = map__38799__$1;
var build_id = cljs.core.get.call(null,map__38799__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38799,map__38799__$1,opts,build_id){
return (function (p__38801){
var vec__38802 = p__38801;
var seq__38803 = cljs.core.seq.call(null,vec__38802);
var first__38804 = cljs.core.first.call(null,seq__38803);
var seq__38803__$1 = cljs.core.next.call(null,seq__38803);
var map__38805 = first__38804;
var map__38805__$1 = ((((!((map__38805 == null)))?((((map__38805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38805):map__38805);
var msg = map__38805__$1;
var msg_name = cljs.core.get.call(null,map__38805__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38803__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38802,seq__38803,first__38804,seq__38803__$1,map__38805,map__38805__$1,msg,msg_name,_,map__38799,map__38799__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38802,seq__38803,first__38804,seq__38803__$1,map__38805,map__38805__$1,msg,msg_name,_,map__38799,map__38799__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38799,map__38799__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38807){
var vec__38808 = p__38807;
var seq__38809 = cljs.core.seq.call(null,vec__38808);
var first__38810 = cljs.core.first.call(null,seq__38809);
var seq__38809__$1 = cljs.core.next.call(null,seq__38809);
var map__38811 = first__38810;
var map__38811__$1 = ((((!((map__38811 == null)))?((((map__38811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38811):map__38811);
var msg = map__38811__$1;
var msg_name = cljs.core.get.call(null,map__38811__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38809__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38813){
var map__38814 = p__38813;
var map__38814__$1 = ((((!((map__38814 == null)))?((((map__38814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38814):map__38814);
var on_compile_warning = cljs.core.get.call(null,map__38814__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38814__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38814,map__38814__$1,on_compile_warning,on_compile_fail){
return (function (p__38816){
var vec__38817 = p__38816;
var seq__38818 = cljs.core.seq.call(null,vec__38817);
var first__38819 = cljs.core.first.call(null,seq__38818);
var seq__38818__$1 = cljs.core.next.call(null,seq__38818);
var map__38820 = first__38819;
var map__38820__$1 = ((((!((map__38820 == null)))?((((map__38820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38820):map__38820);
var msg = map__38820__$1;
var msg_name = cljs.core.get.call(null,map__38820__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38818__$1;
var pred__38822 = cljs.core._EQ_;
var expr__38823 = msg_name;
if(cljs.core.truth_(pred__38822.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38823))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38822.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38823))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38814,map__38814__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto__,msg_hist,msg_names,msg){
return (function (state_38912){
var state_val_38913 = (state_38912[(1)]);
if((state_val_38913 === (7))){
var inst_38832 = (state_38912[(2)]);
var state_38912__$1 = state_38912;
if(cljs.core.truth_(inst_38832)){
var statearr_38914_38961 = state_38912__$1;
(statearr_38914_38961[(1)] = (8));

} else {
var statearr_38915_38962 = state_38912__$1;
(statearr_38915_38962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (20))){
var inst_38906 = (state_38912[(2)]);
var state_38912__$1 = state_38912;
var statearr_38916_38963 = state_38912__$1;
(statearr_38916_38963[(2)] = inst_38906);

(statearr_38916_38963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (27))){
var inst_38902 = (state_38912[(2)]);
var state_38912__$1 = state_38912;
var statearr_38917_38964 = state_38912__$1;
(statearr_38917_38964[(2)] = inst_38902);

(statearr_38917_38964[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (1))){
var inst_38825 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38912__$1 = state_38912;
if(cljs.core.truth_(inst_38825)){
var statearr_38918_38965 = state_38912__$1;
(statearr_38918_38965[(1)] = (2));

} else {
var statearr_38919_38966 = state_38912__$1;
(statearr_38919_38966[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (24))){
var inst_38904 = (state_38912[(2)]);
var state_38912__$1 = state_38912;
var statearr_38920_38967 = state_38912__$1;
(statearr_38920_38967[(2)] = inst_38904);

(statearr_38920_38967[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (4))){
var inst_38910 = (state_38912[(2)]);
var state_38912__$1 = state_38912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38912__$1,inst_38910);
} else {
if((state_val_38913 === (15))){
var inst_38908 = (state_38912[(2)]);
var state_38912__$1 = state_38912;
var statearr_38921_38968 = state_38912__$1;
(statearr_38921_38968[(2)] = inst_38908);

(statearr_38921_38968[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (21))){
var inst_38861 = (state_38912[(2)]);
var inst_38862 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38863 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38862);
var state_38912__$1 = (function (){var statearr_38922 = state_38912;
(statearr_38922[(7)] = inst_38861);

return statearr_38922;
})();
var statearr_38923_38969 = state_38912__$1;
(statearr_38923_38969[(2)] = inst_38863);

(statearr_38923_38969[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (31))){
var inst_38891 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38912__$1 = state_38912;
if(cljs.core.truth_(inst_38891)){
var statearr_38924_38970 = state_38912__$1;
(statearr_38924_38970[(1)] = (34));

} else {
var statearr_38925_38971 = state_38912__$1;
(statearr_38925_38971[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (32))){
var inst_38900 = (state_38912[(2)]);
var state_38912__$1 = state_38912;
var statearr_38926_38972 = state_38912__$1;
(statearr_38926_38972[(2)] = inst_38900);

(statearr_38926_38972[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (33))){
var inst_38887 = (state_38912[(2)]);
var inst_38888 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38889 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38888);
var state_38912__$1 = (function (){var statearr_38927 = state_38912;
(statearr_38927[(8)] = inst_38887);

return statearr_38927;
})();
var statearr_38928_38973 = state_38912__$1;
(statearr_38928_38973[(2)] = inst_38889);

(statearr_38928_38973[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (13))){
var inst_38846 = figwheel.client.heads_up.clear.call(null);
var state_38912__$1 = state_38912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38912__$1,(16),inst_38846);
} else {
if((state_val_38913 === (22))){
var inst_38867 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38868 = figwheel.client.heads_up.append_warning_message.call(null,inst_38867);
var state_38912__$1 = state_38912;
var statearr_38929_38974 = state_38912__$1;
(statearr_38929_38974[(2)] = inst_38868);

(statearr_38929_38974[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (36))){
var inst_38898 = (state_38912[(2)]);
var state_38912__$1 = state_38912;
var statearr_38930_38975 = state_38912__$1;
(statearr_38930_38975[(2)] = inst_38898);

(statearr_38930_38975[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (29))){
var inst_38878 = (state_38912[(2)]);
var inst_38879 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38880 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38879);
var state_38912__$1 = (function (){var statearr_38931 = state_38912;
(statearr_38931[(9)] = inst_38878);

return statearr_38931;
})();
var statearr_38932_38976 = state_38912__$1;
(statearr_38932_38976[(2)] = inst_38880);

(statearr_38932_38976[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (6))){
var inst_38827 = (state_38912[(10)]);
var state_38912__$1 = state_38912;
var statearr_38933_38977 = state_38912__$1;
(statearr_38933_38977[(2)] = inst_38827);

(statearr_38933_38977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (28))){
var inst_38874 = (state_38912[(2)]);
var inst_38875 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38876 = figwheel.client.heads_up.display_warning.call(null,inst_38875);
var state_38912__$1 = (function (){var statearr_38934 = state_38912;
(statearr_38934[(11)] = inst_38874);

return statearr_38934;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38912__$1,(29),inst_38876);
} else {
if((state_val_38913 === (25))){
var inst_38872 = figwheel.client.heads_up.clear.call(null);
var state_38912__$1 = state_38912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38912__$1,(28),inst_38872);
} else {
if((state_val_38913 === (34))){
var inst_38893 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38912__$1 = state_38912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38912__$1,(37),inst_38893);
} else {
if((state_val_38913 === (17))){
var inst_38852 = (state_38912[(2)]);
var inst_38853 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38854 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38853);
var state_38912__$1 = (function (){var statearr_38935 = state_38912;
(statearr_38935[(12)] = inst_38852);

return statearr_38935;
})();
var statearr_38936_38978 = state_38912__$1;
(statearr_38936_38978[(2)] = inst_38854);

(statearr_38936_38978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (3))){
var inst_38844 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38912__$1 = state_38912;
if(cljs.core.truth_(inst_38844)){
var statearr_38937_38979 = state_38912__$1;
(statearr_38937_38979[(1)] = (13));

} else {
var statearr_38938_38980 = state_38912__$1;
(statearr_38938_38980[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (12))){
var inst_38840 = (state_38912[(2)]);
var state_38912__$1 = state_38912;
var statearr_38939_38981 = state_38912__$1;
(statearr_38939_38981[(2)] = inst_38840);

(statearr_38939_38981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (2))){
var inst_38827 = (state_38912[(10)]);
var inst_38827__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38912__$1 = (function (){var statearr_38940 = state_38912;
(statearr_38940[(10)] = inst_38827__$1);

return statearr_38940;
})();
if(cljs.core.truth_(inst_38827__$1)){
var statearr_38941_38982 = state_38912__$1;
(statearr_38941_38982[(1)] = (5));

} else {
var statearr_38942_38983 = state_38912__$1;
(statearr_38942_38983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (23))){
var inst_38870 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38912__$1 = state_38912;
if(cljs.core.truth_(inst_38870)){
var statearr_38943_38984 = state_38912__$1;
(statearr_38943_38984[(1)] = (25));

} else {
var statearr_38944_38985 = state_38912__$1;
(statearr_38944_38985[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (35))){
var state_38912__$1 = state_38912;
var statearr_38945_38986 = state_38912__$1;
(statearr_38945_38986[(2)] = null);

(statearr_38945_38986[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (19))){
var inst_38865 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38912__$1 = state_38912;
if(cljs.core.truth_(inst_38865)){
var statearr_38946_38987 = state_38912__$1;
(statearr_38946_38987[(1)] = (22));

} else {
var statearr_38947_38988 = state_38912__$1;
(statearr_38947_38988[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (11))){
var inst_38836 = (state_38912[(2)]);
var state_38912__$1 = state_38912;
var statearr_38948_38989 = state_38912__$1;
(statearr_38948_38989[(2)] = inst_38836);

(statearr_38948_38989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (9))){
var inst_38838 = figwheel.client.heads_up.clear.call(null);
var state_38912__$1 = state_38912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38912__$1,(12),inst_38838);
} else {
if((state_val_38913 === (5))){
var inst_38829 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38912__$1 = state_38912;
var statearr_38949_38990 = state_38912__$1;
(statearr_38949_38990[(2)] = inst_38829);

(statearr_38949_38990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (14))){
var inst_38856 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38912__$1 = state_38912;
if(cljs.core.truth_(inst_38856)){
var statearr_38950_38991 = state_38912__$1;
(statearr_38950_38991[(1)] = (18));

} else {
var statearr_38951_38992 = state_38912__$1;
(statearr_38951_38992[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (26))){
var inst_38882 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38912__$1 = state_38912;
if(cljs.core.truth_(inst_38882)){
var statearr_38952_38993 = state_38912__$1;
(statearr_38952_38993[(1)] = (30));

} else {
var statearr_38953_38994 = state_38912__$1;
(statearr_38953_38994[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (16))){
var inst_38848 = (state_38912[(2)]);
var inst_38849 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38850 = figwheel.client.heads_up.display_exception.call(null,inst_38849);
var state_38912__$1 = (function (){var statearr_38954 = state_38912;
(statearr_38954[(13)] = inst_38848);

return statearr_38954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38912__$1,(17),inst_38850);
} else {
if((state_val_38913 === (30))){
var inst_38884 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38885 = figwheel.client.heads_up.display_warning.call(null,inst_38884);
var state_38912__$1 = state_38912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38912__$1,(33),inst_38885);
} else {
if((state_val_38913 === (10))){
var inst_38842 = (state_38912[(2)]);
var state_38912__$1 = state_38912;
var statearr_38955_38995 = state_38912__$1;
(statearr_38955_38995[(2)] = inst_38842);

(statearr_38955_38995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (18))){
var inst_38858 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38859 = figwheel.client.heads_up.display_exception.call(null,inst_38858);
var state_38912__$1 = state_38912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38912__$1,(21),inst_38859);
} else {
if((state_val_38913 === (37))){
var inst_38895 = (state_38912[(2)]);
var state_38912__$1 = state_38912;
var statearr_38956_38996 = state_38912__$1;
(statearr_38956_38996[(2)] = inst_38895);

(statearr_38956_38996[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38913 === (8))){
var inst_38834 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38912__$1 = state_38912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38912__$1,(11),inst_38834);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34424__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34336__auto__,c__34424__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34337__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34337__auto____0 = (function (){
var statearr_38957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38957[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34337__auto__);

(statearr_38957[(1)] = (1));

return statearr_38957;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34337__auto____1 = (function (state_38912){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_38912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e38958){if((e38958 instanceof Object)){
var ex__34340__auto__ = e38958;
var statearr_38959_38997 = state_38912;
(statearr_38959_38997[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38998 = state_38912;
state_38912 = G__38998;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34337__auto__ = function(state_38912){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34337__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34337__auto____1.call(this,state_38912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34337__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34337__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto__,msg_hist,msg_names,msg))
})();
var state__34426__auto__ = (function (){var statearr_38960 = f__34425__auto__.call(null);
(statearr_38960[(6)] = c__34424__auto__);

return statearr_38960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto__,msg_hist,msg_names,msg))
);

return c__34424__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34424__auto___39027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___39027,ch){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___39027,ch){
return (function (state_39013){
var state_val_39014 = (state_39013[(1)]);
if((state_val_39014 === (1))){
var state_39013__$1 = state_39013;
var statearr_39015_39028 = state_39013__$1;
(statearr_39015_39028[(2)] = null);

(statearr_39015_39028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (2))){
var state_39013__$1 = state_39013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39013__$1,(4),ch);
} else {
if((state_val_39014 === (3))){
var inst_39011 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39013__$1,inst_39011);
} else {
if((state_val_39014 === (4))){
var inst_39001 = (state_39013[(7)]);
var inst_39001__$1 = (state_39013[(2)]);
var state_39013__$1 = (function (){var statearr_39016 = state_39013;
(statearr_39016[(7)] = inst_39001__$1);

return statearr_39016;
})();
if(cljs.core.truth_(inst_39001__$1)){
var statearr_39017_39029 = state_39013__$1;
(statearr_39017_39029[(1)] = (5));

} else {
var statearr_39018_39030 = state_39013__$1;
(statearr_39018_39030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (5))){
var inst_39001 = (state_39013[(7)]);
var inst_39003 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39001);
var state_39013__$1 = state_39013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39013__$1,(8),inst_39003);
} else {
if((state_val_39014 === (6))){
var state_39013__$1 = state_39013;
var statearr_39019_39031 = state_39013__$1;
(statearr_39019_39031[(2)] = null);

(statearr_39019_39031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (7))){
var inst_39009 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
var statearr_39020_39032 = state_39013__$1;
(statearr_39020_39032[(2)] = inst_39009);

(statearr_39020_39032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (8))){
var inst_39005 = (state_39013[(2)]);
var state_39013__$1 = (function (){var statearr_39021 = state_39013;
(statearr_39021[(8)] = inst_39005);

return statearr_39021;
})();
var statearr_39022_39033 = state_39013__$1;
(statearr_39022_39033[(2)] = null);

(statearr_39022_39033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__34424__auto___39027,ch))
;
return ((function (switch__34336__auto__,c__34424__auto___39027,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34337__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34337__auto____0 = (function (){
var statearr_39023 = [null,null,null,null,null,null,null,null,null];
(statearr_39023[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34337__auto__);

(statearr_39023[(1)] = (1));

return statearr_39023;
});
var figwheel$client$heads_up_plugin_$_state_machine__34337__auto____1 = (function (state_39013){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_39013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e39024){if((e39024 instanceof Object)){
var ex__34340__auto__ = e39024;
var statearr_39025_39034 = state_39013;
(statearr_39025_39034[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39035 = state_39013;
state_39013 = G__39035;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34337__auto__ = function(state_39013){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34337__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34337__auto____1.call(this,state_39013);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34337__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34337__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___39027,ch))
})();
var state__34426__auto__ = (function (){var statearr_39026 = f__34425__auto__.call(null);
(statearr_39026[(6)] = c__34424__auto___39027);

return statearr_39026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___39027,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto__){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto__){
return (function (state_39041){
var state_val_39042 = (state_39041[(1)]);
if((state_val_39042 === (1))){
var inst_39036 = cljs.core.async.timeout.call(null,(3000));
var state_39041__$1 = state_39041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39041__$1,(2),inst_39036);
} else {
if((state_val_39042 === (2))){
var inst_39038 = (state_39041[(2)]);
var inst_39039 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39041__$1 = (function (){var statearr_39043 = state_39041;
(statearr_39043[(7)] = inst_39038);

return statearr_39043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39041__$1,inst_39039);
} else {
return null;
}
}
});})(c__34424__auto__))
;
return ((function (switch__34336__auto__,c__34424__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34337__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34337__auto____0 = (function (){
var statearr_39044 = [null,null,null,null,null,null,null,null];
(statearr_39044[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34337__auto__);

(statearr_39044[(1)] = (1));

return statearr_39044;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34337__auto____1 = (function (state_39041){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_39041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e39045){if((e39045 instanceof Object)){
var ex__34340__auto__ = e39045;
var statearr_39046_39048 = state_39041;
(statearr_39046_39048[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39049 = state_39041;
state_39041 = G__39049;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34337__auto__ = function(state_39041){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34337__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34337__auto____1.call(this,state_39041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34337__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34337__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto__))
})();
var state__34426__auto__ = (function (){var statearr_39047 = f__34425__auto__.call(null);
(statearr_39047[(6)] = c__34424__auto__);

return statearr_39047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto__))
);

return c__34424__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39056){
var state_val_39057 = (state_39056[(1)]);
if((state_val_39057 === (1))){
var inst_39050 = cljs.core.async.timeout.call(null,(2000));
var state_39056__$1 = state_39056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39056__$1,(2),inst_39050);
} else {
if((state_val_39057 === (2))){
var inst_39052 = (state_39056[(2)]);
var inst_39053 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39054 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39053);
var state_39056__$1 = (function (){var statearr_39058 = state_39056;
(statearr_39058[(7)] = inst_39052);

return statearr_39058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39056__$1,inst_39054);
} else {
return null;
}
}
});})(c__34424__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__34336__auto__,c__34424__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34337__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34337__auto____0 = (function (){
var statearr_39059 = [null,null,null,null,null,null,null,null];
(statearr_39059[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34337__auto__);

(statearr_39059[(1)] = (1));

return statearr_39059;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34337__auto____1 = (function (state_39056){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_39056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e39060){if((e39060 instanceof Object)){
var ex__34340__auto__ = e39060;
var statearr_39061_39063 = state_39056;
(statearr_39061_39063[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39064 = state_39056;
state_39056 = G__39064;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34337__auto__ = function(state_39056){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34337__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34337__auto____1.call(this,state_39056);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34337__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34337__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto__,figwheel_version,temp__4657__auto__))
})();
var state__34426__auto__ = (function (){var statearr_39062 = f__34425__auto__.call(null);
(statearr_39062[(6)] = c__34424__auto__);

return statearr_39062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto__,figwheel_version,temp__4657__auto__))
);

return c__34424__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39065){
var map__39066 = p__39065;
var map__39066__$1 = ((((!((map__39066 == null)))?((((map__39066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39066.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39066):map__39066);
var file = cljs.core.get.call(null,map__39066__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39066__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39066__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39068 = "";
var G__39068__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39068),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39068);
var G__39068__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39068__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39068__$1);
if(cljs.core.truth_((function (){var and__28039__auto__ = line;
if(cljs.core.truth_(and__28039__auto__)){
return column;
} else {
return and__28039__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39068__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39068__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39069){
var map__39070 = p__39069;
var map__39070__$1 = ((((!((map__39070 == null)))?((((map__39070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39070):map__39070);
var ed = map__39070__$1;
var formatted_exception = cljs.core.get.call(null,map__39070__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39070__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39070__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39072_39076 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39073_39077 = null;
var count__39074_39078 = (0);
var i__39075_39079 = (0);
while(true){
if((i__39075_39079 < count__39074_39078)){
var msg_39080 = cljs.core._nth.call(null,chunk__39073_39077,i__39075_39079);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39080);

var G__39081 = seq__39072_39076;
var G__39082 = chunk__39073_39077;
var G__39083 = count__39074_39078;
var G__39084 = (i__39075_39079 + (1));
seq__39072_39076 = G__39081;
chunk__39073_39077 = G__39082;
count__39074_39078 = G__39083;
i__39075_39079 = G__39084;
continue;
} else {
var temp__4657__auto___39085 = cljs.core.seq.call(null,seq__39072_39076);
if(temp__4657__auto___39085){
var seq__39072_39086__$1 = temp__4657__auto___39085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39072_39086__$1)){
var c__28890__auto___39087 = cljs.core.chunk_first.call(null,seq__39072_39086__$1);
var G__39088 = cljs.core.chunk_rest.call(null,seq__39072_39086__$1);
var G__39089 = c__28890__auto___39087;
var G__39090 = cljs.core.count.call(null,c__28890__auto___39087);
var G__39091 = (0);
seq__39072_39076 = G__39088;
chunk__39073_39077 = G__39089;
count__39074_39078 = G__39090;
i__39075_39079 = G__39091;
continue;
} else {
var msg_39092 = cljs.core.first.call(null,seq__39072_39086__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39092);

var G__39093 = cljs.core.next.call(null,seq__39072_39086__$1);
var G__39094 = null;
var G__39095 = (0);
var G__39096 = (0);
seq__39072_39076 = G__39093;
chunk__39073_39077 = G__39094;
count__39074_39078 = G__39095;
i__39075_39079 = G__39096;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39097){
var map__39098 = p__39097;
var map__39098__$1 = ((((!((map__39098 == null)))?((((map__39098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39098):map__39098);
var w = map__39098__$1;
var message = cljs.core.get.call(null,map__39098__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28039__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28039__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28039__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39100 = cljs.core.seq.call(null,plugins);
var chunk__39101 = null;
var count__39102 = (0);
var i__39103 = (0);
while(true){
if((i__39103 < count__39102)){
var vec__39104 = cljs.core._nth.call(null,chunk__39101,i__39103);
var k = cljs.core.nth.call(null,vec__39104,(0),null);
var plugin = cljs.core.nth.call(null,vec__39104,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39110 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39100,chunk__39101,count__39102,i__39103,pl_39110,vec__39104,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39110.call(null,msg_hist);
});})(seq__39100,chunk__39101,count__39102,i__39103,pl_39110,vec__39104,k,plugin))
);
} else {
}

var G__39111 = seq__39100;
var G__39112 = chunk__39101;
var G__39113 = count__39102;
var G__39114 = (i__39103 + (1));
seq__39100 = G__39111;
chunk__39101 = G__39112;
count__39102 = G__39113;
i__39103 = G__39114;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39100);
if(temp__4657__auto__){
var seq__39100__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39100__$1)){
var c__28890__auto__ = cljs.core.chunk_first.call(null,seq__39100__$1);
var G__39115 = cljs.core.chunk_rest.call(null,seq__39100__$1);
var G__39116 = c__28890__auto__;
var G__39117 = cljs.core.count.call(null,c__28890__auto__);
var G__39118 = (0);
seq__39100 = G__39115;
chunk__39101 = G__39116;
count__39102 = G__39117;
i__39103 = G__39118;
continue;
} else {
var vec__39107 = cljs.core.first.call(null,seq__39100__$1);
var k = cljs.core.nth.call(null,vec__39107,(0),null);
var plugin = cljs.core.nth.call(null,vec__39107,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39119 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39100,chunk__39101,count__39102,i__39103,pl_39119,vec__39107,k,plugin,seq__39100__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39119.call(null,msg_hist);
});})(seq__39100,chunk__39101,count__39102,i__39103,pl_39119,vec__39107,k,plugin,seq__39100__$1,temp__4657__auto__))
);
} else {
}

var G__39120 = cljs.core.next.call(null,seq__39100__$1);
var G__39121 = null;
var G__39122 = (0);
var G__39123 = (0);
seq__39100 = G__39120;
chunk__39101 = G__39121;
count__39102 = G__39122;
i__39103 = G__39123;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39125 = arguments.length;
switch (G__39125) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39126_39131 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39127_39132 = null;
var count__39128_39133 = (0);
var i__39129_39134 = (0);
while(true){
if((i__39129_39134 < count__39128_39133)){
var msg_39135 = cljs.core._nth.call(null,chunk__39127_39132,i__39129_39134);
figwheel.client.socket.handle_incoming_message.call(null,msg_39135);

var G__39136 = seq__39126_39131;
var G__39137 = chunk__39127_39132;
var G__39138 = count__39128_39133;
var G__39139 = (i__39129_39134 + (1));
seq__39126_39131 = G__39136;
chunk__39127_39132 = G__39137;
count__39128_39133 = G__39138;
i__39129_39134 = G__39139;
continue;
} else {
var temp__4657__auto___39140 = cljs.core.seq.call(null,seq__39126_39131);
if(temp__4657__auto___39140){
var seq__39126_39141__$1 = temp__4657__auto___39140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39126_39141__$1)){
var c__28890__auto___39142 = cljs.core.chunk_first.call(null,seq__39126_39141__$1);
var G__39143 = cljs.core.chunk_rest.call(null,seq__39126_39141__$1);
var G__39144 = c__28890__auto___39142;
var G__39145 = cljs.core.count.call(null,c__28890__auto___39142);
var G__39146 = (0);
seq__39126_39131 = G__39143;
chunk__39127_39132 = G__39144;
count__39128_39133 = G__39145;
i__39129_39134 = G__39146;
continue;
} else {
var msg_39147 = cljs.core.first.call(null,seq__39126_39141__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39147);

var G__39148 = cljs.core.next.call(null,seq__39126_39141__$1);
var G__39149 = null;
var G__39150 = (0);
var G__39151 = (0);
seq__39126_39131 = G__39148;
chunk__39127_39132 = G__39149;
count__39128_39133 = G__39150;
i__39129_39134 = G__39151;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29229__auto__ = [];
var len__29222__auto___39156 = arguments.length;
var i__29223__auto___39157 = (0);
while(true){
if((i__29223__auto___39157 < len__29222__auto___39156)){
args__29229__auto__.push((arguments[i__29223__auto___39157]));

var G__39158 = (i__29223__auto___39157 + (1));
i__29223__auto___39157 = G__39158;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39153){
var map__39154 = p__39153;
var map__39154__$1 = ((((!((map__39154 == null)))?((((map__39154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39154):map__39154);
var opts = map__39154__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39152){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39152));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39159){if((e39159 instanceof Error)){
var e = e39159;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39159;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39160){
var map__39161 = p__39160;
var map__39161__$1 = ((((!((map__39161 == null)))?((((map__39161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39161):map__39161);
var msg_name = cljs.core.get.call(null,map__39161__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1512059530462
