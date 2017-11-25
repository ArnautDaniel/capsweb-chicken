// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__13673__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13674__i = 0, G__13674__a = new Array(arguments.length -  0);
while (G__13674__i < G__13674__a.length) {G__13674__a[G__13674__i] = arguments[G__13674__i + 0]; ++G__13674__i;}
  args = new cljs.core.IndexedSeq(G__13674__a,0,null);
} 
return G__13673__delegate.call(this,args);};
G__13673.cljs$lang$maxFixedArity = 0;
G__13673.cljs$lang$applyTo = (function (arglist__13675){
var args = cljs.core.seq(arglist__13675);
return G__13673__delegate(args);
});
G__13673.cljs$core$IFn$_invoke$arity$variadic = G__13673__delegate;
return G__13673;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13676__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13677__i = 0, G__13677__a = new Array(arguments.length -  0);
while (G__13677__i < G__13677__a.length) {G__13677__a[G__13677__i] = arguments[G__13677__i + 0]; ++G__13677__i;}
  args = new cljs.core.IndexedSeq(G__13677__a,0,null);
} 
return G__13676__delegate.call(this,args);};
G__13676.cljs$lang$maxFixedArity = 0;
G__13676.cljs$lang$applyTo = (function (arglist__13678){
var args = cljs.core.seq(arglist__13678);
return G__13676__delegate(args);
});
G__13676.cljs$core$IFn$_invoke$arity$variadic = G__13676__delegate;
return G__13676;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
