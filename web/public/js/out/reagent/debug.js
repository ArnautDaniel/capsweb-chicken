// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__32372__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32373__i = 0, G__32373__a = new Array(arguments.length -  0);
while (G__32373__i < G__32373__a.length) {G__32373__a[G__32373__i] = arguments[G__32373__i + 0]; ++G__32373__i;}
  args = new cljs.core.IndexedSeq(G__32373__a,0,null);
} 
return G__32372__delegate.call(this,args);};
G__32372.cljs$lang$maxFixedArity = 0;
G__32372.cljs$lang$applyTo = (function (arglist__32374){
var args = cljs.core.seq(arglist__32374);
return G__32372__delegate(args);
});
G__32372.cljs$core$IFn$_invoke$arity$variadic = G__32372__delegate;
return G__32372;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__32375__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32375 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32376__i = 0, G__32376__a = new Array(arguments.length -  0);
while (G__32376__i < G__32376__a.length) {G__32376__a[G__32376__i] = arguments[G__32376__i + 0]; ++G__32376__i;}
  args = new cljs.core.IndexedSeq(G__32376__a,0,null);
} 
return G__32375__delegate.call(this,args);};
G__32375.cljs$lang$maxFixedArity = 0;
G__32375.cljs$lang$applyTo = (function (arglist__32377){
var args = cljs.core.seq(arglist__32377);
return G__32375__delegate(args);
});
G__32375.cljs$core$IFn$_invoke$arity$variadic = G__32375__delegate;
return G__32375;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1512059521159
