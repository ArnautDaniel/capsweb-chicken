// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37598 = arguments.length;
var i__29223__auto___37599 = (0);
while(true){
if((i__29223__auto___37599 < len__29222__auto___37598)){
args__29229__auto__.push((arguments[i__29223__auto___37599]));

var G__37600 = (i__29223__auto___37599 + (1));
i__29223__auto___37599 = G__37600;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq37597){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37597));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37602 = arguments.length;
var i__29223__auto___37603 = (0);
while(true){
if((i__29223__auto___37603 < len__29222__auto___37602)){
args__29229__auto__.push((arguments[i__29223__auto___37603]));

var G__37604 = (i__29223__auto___37603 + (1));
i__29223__auto___37603 = G__37604;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq37601){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37601));
});

var g_QMARK__37605 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_37606 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__37605){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__37605))
,null));
var mkg_37607 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__37605,g_37606){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__37605,g_37606))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__37605,g_37606,mkg_37607){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__37605).call(null,x);
});})(g_QMARK__37605,g_37606,mkg_37607))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__37605,g_37606,mkg_37607){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_37607).call(null,gfn);
});})(g_QMARK__37605,g_37606,mkg_37607))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__37605,g_37606,mkg_37607){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_37606).call(null,generator);
});})(g_QMARK__37605,g_37606,mkg_37607))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29315__auto___37627 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__29315__auto___37627){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37628 = arguments.length;
var i__29223__auto___37629 = (0);
while(true){
if((i__29223__auto___37629 < len__29222__auto___37628)){
args__29229__auto__.push((arguments[i__29223__auto___37629]));

var G__37630 = (i__29223__auto___37629 + (1));
i__29223__auto___37629 = G__37630;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37627))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37627){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37627),args);
});})(g__29315__auto___37627))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__29315__auto___37627){
return (function (seq37608){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37608));
});})(g__29315__auto___37627))
;


var g__29315__auto___37631 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__29315__auto___37631){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37632 = arguments.length;
var i__29223__auto___37633 = (0);
while(true){
if((i__29223__auto___37633 < len__29222__auto___37632)){
args__29229__auto__.push((arguments[i__29223__auto___37633]));

var G__37634 = (i__29223__auto___37633 + (1));
i__29223__auto___37633 = G__37634;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37631))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37631){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37631),args);
});})(g__29315__auto___37631))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__29315__auto___37631){
return (function (seq37609){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37609));
});})(g__29315__auto___37631))
;


var g__29315__auto___37635 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__29315__auto___37635){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37636 = arguments.length;
var i__29223__auto___37637 = (0);
while(true){
if((i__29223__auto___37637 < len__29222__auto___37636)){
args__29229__auto__.push((arguments[i__29223__auto___37637]));

var G__37638 = (i__29223__auto___37637 + (1));
i__29223__auto___37637 = G__37638;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37635))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37635){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37635),args);
});})(g__29315__auto___37635))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__29315__auto___37635){
return (function (seq37610){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37610));
});})(g__29315__auto___37635))
;


var g__29315__auto___37639 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__29315__auto___37639){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37640 = arguments.length;
var i__29223__auto___37641 = (0);
while(true){
if((i__29223__auto___37641 < len__29222__auto___37640)){
args__29229__auto__.push((arguments[i__29223__auto___37641]));

var G__37642 = (i__29223__auto___37641 + (1));
i__29223__auto___37641 = G__37642;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37639))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37639){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37639),args);
});})(g__29315__auto___37639))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__29315__auto___37639){
return (function (seq37611){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37611));
});})(g__29315__auto___37639))
;


var g__29315__auto___37643 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__29315__auto___37643){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37644 = arguments.length;
var i__29223__auto___37645 = (0);
while(true){
if((i__29223__auto___37645 < len__29222__auto___37644)){
args__29229__auto__.push((arguments[i__29223__auto___37645]));

var G__37646 = (i__29223__auto___37645 + (1));
i__29223__auto___37645 = G__37646;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37643))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37643){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37643),args);
});})(g__29315__auto___37643))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__29315__auto___37643){
return (function (seq37612){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37612));
});})(g__29315__auto___37643))
;


var g__29315__auto___37647 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__29315__auto___37647){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37648 = arguments.length;
var i__29223__auto___37649 = (0);
while(true){
if((i__29223__auto___37649 < len__29222__auto___37648)){
args__29229__auto__.push((arguments[i__29223__auto___37649]));

var G__37650 = (i__29223__auto___37649 + (1));
i__29223__auto___37649 = G__37650;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37647))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37647){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37647),args);
});})(g__29315__auto___37647))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__29315__auto___37647){
return (function (seq37613){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37613));
});})(g__29315__auto___37647))
;


var g__29315__auto___37651 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__29315__auto___37651){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37652 = arguments.length;
var i__29223__auto___37653 = (0);
while(true){
if((i__29223__auto___37653 < len__29222__auto___37652)){
args__29229__auto__.push((arguments[i__29223__auto___37653]));

var G__37654 = (i__29223__auto___37653 + (1));
i__29223__auto___37653 = G__37654;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37651))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37651){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37651),args);
});})(g__29315__auto___37651))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__29315__auto___37651){
return (function (seq37614){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37614));
});})(g__29315__auto___37651))
;


var g__29315__auto___37655 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__29315__auto___37655){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37656 = arguments.length;
var i__29223__auto___37657 = (0);
while(true){
if((i__29223__auto___37657 < len__29222__auto___37656)){
args__29229__auto__.push((arguments[i__29223__auto___37657]));

var G__37658 = (i__29223__auto___37657 + (1));
i__29223__auto___37657 = G__37658;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37655))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37655){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37655),args);
});})(g__29315__auto___37655))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__29315__auto___37655){
return (function (seq37615){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37615));
});})(g__29315__auto___37655))
;


var g__29315__auto___37659 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__29315__auto___37659){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37660 = arguments.length;
var i__29223__auto___37661 = (0);
while(true){
if((i__29223__auto___37661 < len__29222__auto___37660)){
args__29229__auto__.push((arguments[i__29223__auto___37661]));

var G__37662 = (i__29223__auto___37661 + (1));
i__29223__auto___37661 = G__37662;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37659))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37659){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37659),args);
});})(g__29315__auto___37659))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__29315__auto___37659){
return (function (seq37616){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37616));
});})(g__29315__auto___37659))
;


var g__29315__auto___37663 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__29315__auto___37663){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37664 = arguments.length;
var i__29223__auto___37665 = (0);
while(true){
if((i__29223__auto___37665 < len__29222__auto___37664)){
args__29229__auto__.push((arguments[i__29223__auto___37665]));

var G__37666 = (i__29223__auto___37665 + (1));
i__29223__auto___37665 = G__37666;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37663))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37663){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37663),args);
});})(g__29315__auto___37663))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__29315__auto___37663){
return (function (seq37617){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37617));
});})(g__29315__auto___37663))
;


var g__29315__auto___37667 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__29315__auto___37667){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37668 = arguments.length;
var i__29223__auto___37669 = (0);
while(true){
if((i__29223__auto___37669 < len__29222__auto___37668)){
args__29229__auto__.push((arguments[i__29223__auto___37669]));

var G__37670 = (i__29223__auto___37669 + (1));
i__29223__auto___37669 = G__37670;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37667))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37667){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37667),args);
});})(g__29315__auto___37667))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__29315__auto___37667){
return (function (seq37618){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37618));
});})(g__29315__auto___37667))
;


var g__29315__auto___37671 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__29315__auto___37671){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37672 = arguments.length;
var i__29223__auto___37673 = (0);
while(true){
if((i__29223__auto___37673 < len__29222__auto___37672)){
args__29229__auto__.push((arguments[i__29223__auto___37673]));

var G__37674 = (i__29223__auto___37673 + (1));
i__29223__auto___37673 = G__37674;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37671))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37671){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37671),args);
});})(g__29315__auto___37671))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__29315__auto___37671){
return (function (seq37619){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37619));
});})(g__29315__auto___37671))
;


var g__29315__auto___37675 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__29315__auto___37675){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37676 = arguments.length;
var i__29223__auto___37677 = (0);
while(true){
if((i__29223__auto___37677 < len__29222__auto___37676)){
args__29229__auto__.push((arguments[i__29223__auto___37677]));

var G__37678 = (i__29223__auto___37677 + (1));
i__29223__auto___37677 = G__37678;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37675))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37675){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37675),args);
});})(g__29315__auto___37675))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__29315__auto___37675){
return (function (seq37620){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37620));
});})(g__29315__auto___37675))
;


var g__29315__auto___37679 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__29315__auto___37679){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37680 = arguments.length;
var i__29223__auto___37681 = (0);
while(true){
if((i__29223__auto___37681 < len__29222__auto___37680)){
args__29229__auto__.push((arguments[i__29223__auto___37681]));

var G__37682 = (i__29223__auto___37681 + (1));
i__29223__auto___37681 = G__37682;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37679))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37679){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37679),args);
});})(g__29315__auto___37679))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__29315__auto___37679){
return (function (seq37621){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37621));
});})(g__29315__auto___37679))
;


var g__29315__auto___37683 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__29315__auto___37683){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37684 = arguments.length;
var i__29223__auto___37685 = (0);
while(true){
if((i__29223__auto___37685 < len__29222__auto___37684)){
args__29229__auto__.push((arguments[i__29223__auto___37685]));

var G__37686 = (i__29223__auto___37685 + (1));
i__29223__auto___37685 = G__37686;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37683))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37683){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37683),args);
});})(g__29315__auto___37683))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__29315__auto___37683){
return (function (seq37622){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37622));
});})(g__29315__auto___37683))
;


var g__29315__auto___37687 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__29315__auto___37687){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37688 = arguments.length;
var i__29223__auto___37689 = (0);
while(true){
if((i__29223__auto___37689 < len__29222__auto___37688)){
args__29229__auto__.push((arguments[i__29223__auto___37689]));

var G__37690 = (i__29223__auto___37689 + (1));
i__29223__auto___37689 = G__37690;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37687))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37687){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37687),args);
});})(g__29315__auto___37687))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__29315__auto___37687){
return (function (seq37623){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37623));
});})(g__29315__auto___37687))
;


var g__29315__auto___37691 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__29315__auto___37691){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37692 = arguments.length;
var i__29223__auto___37693 = (0);
while(true){
if((i__29223__auto___37693 < len__29222__auto___37692)){
args__29229__auto__.push((arguments[i__29223__auto___37693]));

var G__37694 = (i__29223__auto___37693 + (1));
i__29223__auto___37693 = G__37694;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37691))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37691){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37691),args);
});})(g__29315__auto___37691))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29315__auto___37691){
return (function (seq37624){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37624));
});})(g__29315__auto___37691))
;


var g__29315__auto___37695 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__29315__auto___37695){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37696 = arguments.length;
var i__29223__auto___37697 = (0);
while(true){
if((i__29223__auto___37697 < len__29222__auto___37696)){
args__29229__auto__.push((arguments[i__29223__auto___37697]));

var G__37698 = (i__29223__auto___37697 + (1));
i__29223__auto___37697 = G__37698;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37695))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37695){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37695),args);
});})(g__29315__auto___37695))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__29315__auto___37695){
return (function (seq37625){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37625));
});})(g__29315__auto___37695))
;


var g__29315__auto___37699 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__29315__auto___37699){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37700 = arguments.length;
var i__29223__auto___37701 = (0);
while(true){
if((i__29223__auto___37701 < len__29222__auto___37700)){
args__29229__auto__.push((arguments[i__29223__auto___37701]));

var G__37702 = (i__29223__auto___37701 + (1));
i__29223__auto___37701 = G__37702;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29315__auto___37699))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29315__auto___37699){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29315__auto___37699),args);
});})(g__29315__auto___37699))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__29315__auto___37699){
return (function (seq37626){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37626));
});})(g__29315__auto___37699))
;

var g__29328__auto___37724 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__29328__auto___37724){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37725 = arguments.length;
var i__29223__auto___37726 = (0);
while(true){
if((i__29223__auto___37726 < len__29222__auto___37725)){
args__29229__auto__.push((arguments[i__29223__auto___37726]));

var G__37727 = (i__29223__auto___37726 + (1));
i__29223__auto___37726 = G__37727;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37724))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37724){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37724);
});})(g__29328__auto___37724))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__29328__auto___37724){
return (function (seq37703){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37703));
});})(g__29328__auto___37724))
;


var g__29328__auto___37728 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__29328__auto___37728){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37729 = arguments.length;
var i__29223__auto___37730 = (0);
while(true){
if((i__29223__auto___37730 < len__29222__auto___37729)){
args__29229__auto__.push((arguments[i__29223__auto___37730]));

var G__37731 = (i__29223__auto___37730 + (1));
i__29223__auto___37730 = G__37731;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37728))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37728){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37728);
});})(g__29328__auto___37728))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__29328__auto___37728){
return (function (seq37704){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37704));
});})(g__29328__auto___37728))
;


var g__29328__auto___37732 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__29328__auto___37732){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37733 = arguments.length;
var i__29223__auto___37734 = (0);
while(true){
if((i__29223__auto___37734 < len__29222__auto___37733)){
args__29229__auto__.push((arguments[i__29223__auto___37734]));

var G__37735 = (i__29223__auto___37734 + (1));
i__29223__auto___37734 = G__37735;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37732))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37732){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37732);
});})(g__29328__auto___37732))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__29328__auto___37732){
return (function (seq37705){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37705));
});})(g__29328__auto___37732))
;


var g__29328__auto___37736 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__29328__auto___37736){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37737 = arguments.length;
var i__29223__auto___37738 = (0);
while(true){
if((i__29223__auto___37738 < len__29222__auto___37737)){
args__29229__auto__.push((arguments[i__29223__auto___37738]));

var G__37739 = (i__29223__auto___37738 + (1));
i__29223__auto___37738 = G__37739;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37736))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37736){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37736);
});})(g__29328__auto___37736))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__29328__auto___37736){
return (function (seq37706){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37706));
});})(g__29328__auto___37736))
;


var g__29328__auto___37740 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__29328__auto___37740){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37741 = arguments.length;
var i__29223__auto___37742 = (0);
while(true){
if((i__29223__auto___37742 < len__29222__auto___37741)){
args__29229__auto__.push((arguments[i__29223__auto___37742]));

var G__37743 = (i__29223__auto___37742 + (1));
i__29223__auto___37742 = G__37743;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37740))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37740){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37740);
});})(g__29328__auto___37740))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__29328__auto___37740){
return (function (seq37707){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37707));
});})(g__29328__auto___37740))
;


var g__29328__auto___37744 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__29328__auto___37744){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37745 = arguments.length;
var i__29223__auto___37746 = (0);
while(true){
if((i__29223__auto___37746 < len__29222__auto___37745)){
args__29229__auto__.push((arguments[i__29223__auto___37746]));

var G__37747 = (i__29223__auto___37746 + (1));
i__29223__auto___37746 = G__37747;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37744))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37744){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37744);
});})(g__29328__auto___37744))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__29328__auto___37744){
return (function (seq37708){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37708));
});})(g__29328__auto___37744))
;


var g__29328__auto___37748 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__29328__auto___37748){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37749 = arguments.length;
var i__29223__auto___37750 = (0);
while(true){
if((i__29223__auto___37750 < len__29222__auto___37749)){
args__29229__auto__.push((arguments[i__29223__auto___37750]));

var G__37751 = (i__29223__auto___37750 + (1));
i__29223__auto___37750 = G__37751;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37748))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37748){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37748);
});})(g__29328__auto___37748))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__29328__auto___37748){
return (function (seq37709){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37709));
});})(g__29328__auto___37748))
;


var g__29328__auto___37752 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__29328__auto___37752){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37753 = arguments.length;
var i__29223__auto___37754 = (0);
while(true){
if((i__29223__auto___37754 < len__29222__auto___37753)){
args__29229__auto__.push((arguments[i__29223__auto___37754]));

var G__37755 = (i__29223__auto___37754 + (1));
i__29223__auto___37754 = G__37755;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37752))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37752){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37752);
});})(g__29328__auto___37752))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__29328__auto___37752){
return (function (seq37710){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37710));
});})(g__29328__auto___37752))
;


var g__29328__auto___37756 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__29328__auto___37756){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37757 = arguments.length;
var i__29223__auto___37758 = (0);
while(true){
if((i__29223__auto___37758 < len__29222__auto___37757)){
args__29229__auto__.push((arguments[i__29223__auto___37758]));

var G__37759 = (i__29223__auto___37758 + (1));
i__29223__auto___37758 = G__37759;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37756))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37756){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37756);
});})(g__29328__auto___37756))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__29328__auto___37756){
return (function (seq37711){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37711));
});})(g__29328__auto___37756))
;


var g__29328__auto___37760 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__29328__auto___37760){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37761 = arguments.length;
var i__29223__auto___37762 = (0);
while(true){
if((i__29223__auto___37762 < len__29222__auto___37761)){
args__29229__auto__.push((arguments[i__29223__auto___37762]));

var G__37763 = (i__29223__auto___37762 + (1));
i__29223__auto___37762 = G__37763;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37760))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37760){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37760);
});})(g__29328__auto___37760))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__29328__auto___37760){
return (function (seq37712){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37712));
});})(g__29328__auto___37760))
;


var g__29328__auto___37764 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__29328__auto___37764){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37765 = arguments.length;
var i__29223__auto___37766 = (0);
while(true){
if((i__29223__auto___37766 < len__29222__auto___37765)){
args__29229__auto__.push((arguments[i__29223__auto___37766]));

var G__37767 = (i__29223__auto___37766 + (1));
i__29223__auto___37766 = G__37767;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37764))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37764){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37764);
});})(g__29328__auto___37764))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__29328__auto___37764){
return (function (seq37713){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37713));
});})(g__29328__auto___37764))
;


var g__29328__auto___37768 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__29328__auto___37768){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37769 = arguments.length;
var i__29223__auto___37770 = (0);
while(true){
if((i__29223__auto___37770 < len__29222__auto___37769)){
args__29229__auto__.push((arguments[i__29223__auto___37770]));

var G__37771 = (i__29223__auto___37770 + (1));
i__29223__auto___37770 = G__37771;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37768))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37768){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37768);
});})(g__29328__auto___37768))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__29328__auto___37768){
return (function (seq37714){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37714));
});})(g__29328__auto___37768))
;


var g__29328__auto___37772 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__29328__auto___37772){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37773 = arguments.length;
var i__29223__auto___37774 = (0);
while(true){
if((i__29223__auto___37774 < len__29222__auto___37773)){
args__29229__auto__.push((arguments[i__29223__auto___37774]));

var G__37775 = (i__29223__auto___37774 + (1));
i__29223__auto___37774 = G__37775;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37772))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37772){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37772);
});})(g__29328__auto___37772))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__29328__auto___37772){
return (function (seq37715){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37715));
});})(g__29328__auto___37772))
;


var g__29328__auto___37776 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__29328__auto___37776){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37777 = arguments.length;
var i__29223__auto___37778 = (0);
while(true){
if((i__29223__auto___37778 < len__29222__auto___37777)){
args__29229__auto__.push((arguments[i__29223__auto___37778]));

var G__37779 = (i__29223__auto___37778 + (1));
i__29223__auto___37778 = G__37779;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37776))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37776){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37776);
});})(g__29328__auto___37776))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__29328__auto___37776){
return (function (seq37716){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37716));
});})(g__29328__auto___37776))
;


var g__29328__auto___37780 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__29328__auto___37780){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37781 = arguments.length;
var i__29223__auto___37782 = (0);
while(true){
if((i__29223__auto___37782 < len__29222__auto___37781)){
args__29229__auto__.push((arguments[i__29223__auto___37782]));

var G__37783 = (i__29223__auto___37782 + (1));
i__29223__auto___37782 = G__37783;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37780))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37780){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37780);
});})(g__29328__auto___37780))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__29328__auto___37780){
return (function (seq37717){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37717));
});})(g__29328__auto___37780))
;


var g__29328__auto___37784 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__29328__auto___37784){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37785 = arguments.length;
var i__29223__auto___37786 = (0);
while(true){
if((i__29223__auto___37786 < len__29222__auto___37785)){
args__29229__auto__.push((arguments[i__29223__auto___37786]));

var G__37787 = (i__29223__auto___37786 + (1));
i__29223__auto___37786 = G__37787;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37784))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37784){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37784);
});})(g__29328__auto___37784))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__29328__auto___37784){
return (function (seq37718){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37718));
});})(g__29328__auto___37784))
;


var g__29328__auto___37788 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__29328__auto___37788){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37789 = arguments.length;
var i__29223__auto___37790 = (0);
while(true){
if((i__29223__auto___37790 < len__29222__auto___37789)){
args__29229__auto__.push((arguments[i__29223__auto___37790]));

var G__37791 = (i__29223__auto___37790 + (1));
i__29223__auto___37790 = G__37791;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37788))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37788){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37788);
});})(g__29328__auto___37788))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__29328__auto___37788){
return (function (seq37719){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37719));
});})(g__29328__auto___37788))
;


var g__29328__auto___37792 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__29328__auto___37792){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37793 = arguments.length;
var i__29223__auto___37794 = (0);
while(true){
if((i__29223__auto___37794 < len__29222__auto___37793)){
args__29229__auto__.push((arguments[i__29223__auto___37794]));

var G__37795 = (i__29223__auto___37794 + (1));
i__29223__auto___37794 = G__37795;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37792))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37792){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37792);
});})(g__29328__auto___37792))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__29328__auto___37792){
return (function (seq37720){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37720));
});})(g__29328__auto___37792))
;


var g__29328__auto___37796 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__29328__auto___37796){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37797 = arguments.length;
var i__29223__auto___37798 = (0);
while(true){
if((i__29223__auto___37798 < len__29222__auto___37797)){
args__29229__auto__.push((arguments[i__29223__auto___37798]));

var G__37799 = (i__29223__auto___37798 + (1));
i__29223__auto___37798 = G__37799;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37796))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37796){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37796);
});})(g__29328__auto___37796))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__29328__auto___37796){
return (function (seq37721){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37721));
});})(g__29328__auto___37796))
;


var g__29328__auto___37800 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__29328__auto___37800){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37801 = arguments.length;
var i__29223__auto___37802 = (0);
while(true){
if((i__29223__auto___37802 < len__29222__auto___37801)){
args__29229__auto__.push((arguments[i__29223__auto___37802]));

var G__37803 = (i__29223__auto___37802 + (1));
i__29223__auto___37802 = G__37803;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37800))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37800){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37800);
});})(g__29328__auto___37800))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__29328__auto___37800){
return (function (seq37722){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37722));
});})(g__29328__auto___37800))
;


var g__29328__auto___37804 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__29328__auto___37804){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37805 = arguments.length;
var i__29223__auto___37806 = (0);
while(true){
if((i__29223__auto___37806 < len__29222__auto___37805)){
args__29229__auto__.push((arguments[i__29223__auto___37806]));

var G__37807 = (i__29223__auto___37806 + (1));
i__29223__auto___37806 = G__37807;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});})(g__29328__auto___37804))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29328__auto___37804){
return (function (args){
return cljs.core.deref.call(null,g__29328__auto___37804);
});})(g__29328__auto___37804))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__29328__auto___37804){
return (function (seq37723){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37723));
});})(g__29328__auto___37804))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37810 = arguments.length;
var i__29223__auto___37811 = (0);
while(true){
if((i__29223__auto___37811 < len__29222__auto___37810)){
args__29229__auto__.push((arguments[i__29223__auto___37811]));

var G__37812 = (i__29223__auto___37811 + (1));
i__29223__auto___37811 = G__37812;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__37808_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__37808_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq37809){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37809));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__37813_SHARP_){
return (new Date(p1__37813_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1512059528390
