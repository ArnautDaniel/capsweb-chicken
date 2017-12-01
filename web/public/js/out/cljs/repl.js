// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38393){
var map__38394 = p__38393;
var map__38394__$1 = ((((!((map__38394 == null)))?((((map__38394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38394):map__38394);
var m = map__38394__$1;
var n = cljs.core.get.call(null,map__38394__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38394__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38396_38418 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38397_38419 = null;
var count__38398_38420 = (0);
var i__38399_38421 = (0);
while(true){
if((i__38399_38421 < count__38398_38420)){
var f_38422 = cljs.core._nth.call(null,chunk__38397_38419,i__38399_38421);
cljs.core.println.call(null,"  ",f_38422);

var G__38423 = seq__38396_38418;
var G__38424 = chunk__38397_38419;
var G__38425 = count__38398_38420;
var G__38426 = (i__38399_38421 + (1));
seq__38396_38418 = G__38423;
chunk__38397_38419 = G__38424;
count__38398_38420 = G__38425;
i__38399_38421 = G__38426;
continue;
} else {
var temp__4657__auto___38427 = cljs.core.seq.call(null,seq__38396_38418);
if(temp__4657__auto___38427){
var seq__38396_38428__$1 = temp__4657__auto___38427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38396_38428__$1)){
var c__28890__auto___38429 = cljs.core.chunk_first.call(null,seq__38396_38428__$1);
var G__38430 = cljs.core.chunk_rest.call(null,seq__38396_38428__$1);
var G__38431 = c__28890__auto___38429;
var G__38432 = cljs.core.count.call(null,c__28890__auto___38429);
var G__38433 = (0);
seq__38396_38418 = G__38430;
chunk__38397_38419 = G__38431;
count__38398_38420 = G__38432;
i__38399_38421 = G__38433;
continue;
} else {
var f_38434 = cljs.core.first.call(null,seq__38396_38428__$1);
cljs.core.println.call(null,"  ",f_38434);

var G__38435 = cljs.core.next.call(null,seq__38396_38428__$1);
var G__38436 = null;
var G__38437 = (0);
var G__38438 = (0);
seq__38396_38418 = G__38435;
chunk__38397_38419 = G__38436;
count__38398_38420 = G__38437;
i__38399_38421 = G__38438;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38439 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28051__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38439);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38439)))?cljs.core.second.call(null,arglists_38439):arglists_38439));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38400_38440 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38401_38441 = null;
var count__38402_38442 = (0);
var i__38403_38443 = (0);
while(true){
if((i__38403_38443 < count__38402_38442)){
var vec__38404_38444 = cljs.core._nth.call(null,chunk__38401_38441,i__38403_38443);
var name_38445 = cljs.core.nth.call(null,vec__38404_38444,(0),null);
var map__38407_38446 = cljs.core.nth.call(null,vec__38404_38444,(1),null);
var map__38407_38447__$1 = ((((!((map__38407_38446 == null)))?((((map__38407_38446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38407_38446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38407_38446):map__38407_38446);
var doc_38448 = cljs.core.get.call(null,map__38407_38447__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38449 = cljs.core.get.call(null,map__38407_38447__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38445);

cljs.core.println.call(null," ",arglists_38449);

if(cljs.core.truth_(doc_38448)){
cljs.core.println.call(null," ",doc_38448);
} else {
}

var G__38450 = seq__38400_38440;
var G__38451 = chunk__38401_38441;
var G__38452 = count__38402_38442;
var G__38453 = (i__38403_38443 + (1));
seq__38400_38440 = G__38450;
chunk__38401_38441 = G__38451;
count__38402_38442 = G__38452;
i__38403_38443 = G__38453;
continue;
} else {
var temp__4657__auto___38454 = cljs.core.seq.call(null,seq__38400_38440);
if(temp__4657__auto___38454){
var seq__38400_38455__$1 = temp__4657__auto___38454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38400_38455__$1)){
var c__28890__auto___38456 = cljs.core.chunk_first.call(null,seq__38400_38455__$1);
var G__38457 = cljs.core.chunk_rest.call(null,seq__38400_38455__$1);
var G__38458 = c__28890__auto___38456;
var G__38459 = cljs.core.count.call(null,c__28890__auto___38456);
var G__38460 = (0);
seq__38400_38440 = G__38457;
chunk__38401_38441 = G__38458;
count__38402_38442 = G__38459;
i__38403_38443 = G__38460;
continue;
} else {
var vec__38409_38461 = cljs.core.first.call(null,seq__38400_38455__$1);
var name_38462 = cljs.core.nth.call(null,vec__38409_38461,(0),null);
var map__38412_38463 = cljs.core.nth.call(null,vec__38409_38461,(1),null);
var map__38412_38464__$1 = ((((!((map__38412_38463 == null)))?((((map__38412_38463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38412_38463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38412_38463):map__38412_38463);
var doc_38465 = cljs.core.get.call(null,map__38412_38464__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38466 = cljs.core.get.call(null,map__38412_38464__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38462);

cljs.core.println.call(null," ",arglists_38466);

if(cljs.core.truth_(doc_38465)){
cljs.core.println.call(null," ",doc_38465);
} else {
}

var G__38467 = cljs.core.next.call(null,seq__38400_38455__$1);
var G__38468 = null;
var G__38469 = (0);
var G__38470 = (0);
seq__38400_38440 = G__38467;
chunk__38401_38441 = G__38468;
count__38402_38442 = G__38469;
i__38403_38443 = G__38470;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__38414 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38415 = null;
var count__38416 = (0);
var i__38417 = (0);
while(true){
if((i__38417 < count__38416)){
var role = cljs.core._nth.call(null,chunk__38415,i__38417);
var temp__4657__auto___38471__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38471__$1)){
var spec_38472 = temp__4657__auto___38471__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38472));
} else {
}

var G__38473 = seq__38414;
var G__38474 = chunk__38415;
var G__38475 = count__38416;
var G__38476 = (i__38417 + (1));
seq__38414 = G__38473;
chunk__38415 = G__38474;
count__38416 = G__38475;
i__38417 = G__38476;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38414);
if(temp__4657__auto____$1){
var seq__38414__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38414__$1)){
var c__28890__auto__ = cljs.core.chunk_first.call(null,seq__38414__$1);
var G__38477 = cljs.core.chunk_rest.call(null,seq__38414__$1);
var G__38478 = c__28890__auto__;
var G__38479 = cljs.core.count.call(null,c__28890__auto__);
var G__38480 = (0);
seq__38414 = G__38477;
chunk__38415 = G__38478;
count__38416 = G__38479;
i__38417 = G__38480;
continue;
} else {
var role = cljs.core.first.call(null,seq__38414__$1);
var temp__4657__auto___38481__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38481__$2)){
var spec_38482 = temp__4657__auto___38481__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38482));
} else {
}

var G__38483 = cljs.core.next.call(null,seq__38414__$1);
var G__38484 = null;
var G__38485 = (0);
var G__38486 = (0);
seq__38414 = G__38483;
chunk__38415 = G__38484;
count__38416 = G__38485;
i__38417 = G__38486;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1512059529769
