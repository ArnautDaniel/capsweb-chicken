// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
goog.require('devtools.context');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__29229__auto__ = [];
var len__29222__auto___36631 = arguments.length;
var i__29223__auto___36632 = (0);
while(true){
if((i__29223__auto___36632 < len__29222__auto___36631)){
args__29229__auto__.push((arguments[i__29223__auto___36632]));

var G__36633 = (i__29223__auto___36632 + (1));
i__29223__auto___36632 = G__36633;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__36626){
var vec__36627 = p__36626;
var context = cljs.core.nth.call(null,vec__36627,(0),null);
var footer = cljs.core.nth.call(null,vec__36627,(1),null);
var console = devtools.context.get_console.call(null);
try{var message = (((e instanceof Error))?(function (){var or__28051__auto__ = e.message;
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):".")),"\n\n"].join('');
var footer_msg = ((!((footer == null)))?footer:["\n\n","---\n","Please report the issue here: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var group_collapsed = (console["groupCollapsed"]);
var log = (console["log"]);
var group_end = (console["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(console,header);

log.apply(console,details);

return group_end.call(console);
}catch (e36630){var e__$1 = e36630;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq36624){
var G__36625 = cljs.core.first.call(null,seq36624);
var seq36624__$1 = cljs.core.next.call(null,seq36624);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36625,seq36624__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1512059526982
