// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__28734__auto__ = (((value == null))?null:value);
var m__28735__auto__ = (devtools.format._header[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,value);
} else {
var m__28735__auto____$1 = (devtools.format._header["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__28734__auto__ = (((value == null))?null:value);
var m__28735__auto__ = (devtools.format._has_body[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,value);
} else {
var m__28735__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__28734__auto__ = (((value == null))?null:value);
var m__28735__auto__ = (devtools.format._body[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,value);
} else {
var m__28735__auto____$1 = (devtools.format._body["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o29645 = temp__4655__auto__;
var temp__4655__auto____$1 = (o29645["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o29646 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o29646["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o29647 = temp__4655__auto____$2;
return (o29647["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o29648 = temp__4655__auto__;
var temp__4655__auto____$1 = (o29648["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o29649 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o29649["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o29650 = temp__4655__auto____$2;
return (o29650["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o29651 = temp__4655__auto__;
var temp__4655__auto____$1 = (o29651["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o29652 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o29652["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o29653 = temp__4655__auto____$2;
return (o29653["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o29654 = temp__4655__auto__;
var temp__4655__auto____$1 = (o29654["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o29655 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o29655["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o29656 = temp__4655__auto____$2;
return (o29656["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o29657 = temp__4655__auto__;
var temp__4655__auto____$1 = (o29657["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o29658 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o29658["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o29659 = temp__4655__auto____$2;
return (o29659["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o29660 = temp__4655__auto__;
var temp__4655__auto____$1 = (o29660["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o29661 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o29661["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o29662 = temp__4655__auto____$2;
return (o29662["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o29663 = temp__4655__auto__;
var temp__4655__auto____$1 = (o29663["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o29664 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o29664["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o29665 = temp__4655__auto____$2;
return (o29665["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__29229__auto__ = [];
var len__29222__auto___29667 = arguments.length;
var i__29223__auto___29668 = (0);
while(true){
if((i__29223__auto___29668 < len__29222__auto___29667)){
args__29229__auto__.push((arguments[i__29223__auto___29668]));

var G__29669 = (i__29223__auto___29668 + (1));
i__29223__auto___29668 = G__29669;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq29666){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29666));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29229__auto__ = [];
var len__29222__auto___29671 = arguments.length;
var i__29223__auto___29672 = (0);
while(true){
if((i__29223__auto___29672 < len__29222__auto___29671)){
args__29229__auto__.push((arguments[i__29223__auto___29672]));

var G__29673 = (i__29223__auto___29672 + (1));
i__29223__auto___29672 = G__29673;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq29670){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29670));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29229__auto__ = [];
var len__29222__auto___29675 = arguments.length;
var i__29223__auto___29676 = (0);
while(true){
if((i__29223__auto___29676 < len__29222__auto___29675)){
args__29229__auto__.push((arguments[i__29223__auto___29676]));

var G__29677 = (i__29223__auto___29676 + (1));
i__29223__auto___29676 = G__29677;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq29674){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29674));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29229__auto__ = [];
var len__29222__auto___29679 = arguments.length;
var i__29223__auto___29680 = (0);
while(true){
if((i__29223__auto___29680 < len__29222__auto___29679)){
args__29229__auto__.push((arguments[i__29223__auto___29680]));

var G__29681 = (i__29223__auto___29680 + (1));
i__29223__auto___29680 = G__29681;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq29678){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29678));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29229__auto__ = [];
var len__29222__auto___29683 = arguments.length;
var i__29223__auto___29684 = (0);
while(true){
if((i__29223__auto___29684 < len__29222__auto___29683)){
args__29229__auto__.push((arguments[i__29223__auto___29684]));

var G__29685 = (i__29223__auto___29684 + (1));
i__29223__auto___29684 = G__29685;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq29682){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29682));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29229__auto__ = [];
var len__29222__auto___29687 = arguments.length;
var i__29223__auto___29688 = (0);
while(true){
if((i__29223__auto___29688 < len__29222__auto___29687)){
args__29229__auto__.push((arguments[i__29223__auto___29688]));

var G__29689 = (i__29223__auto___29688 + (1));
i__29223__auto___29688 = G__29689;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq29686){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29686));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29229__auto__ = [];
var len__29222__auto___29691 = arguments.length;
var i__29223__auto___29692 = (0);
while(true){
if((i__29223__auto___29692 < len__29222__auto___29691)){
args__29229__auto__.push((arguments[i__29223__auto___29692]));

var G__29693 = (i__29223__auto___29692 + (1));
i__29223__auto___29692 = G__29693;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq29690){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29690));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29229__auto__ = [];
var len__29222__auto___29701 = arguments.length;
var i__29223__auto___29702 = (0);
while(true){
if((i__29223__auto___29702 < len__29222__auto___29701)){
args__29229__auto__.push((arguments[i__29223__auto___29702]));

var G__29703 = (i__29223__auto___29702 + (1));
i__29223__auto___29702 = G__29703;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__29697){
var vec__29698 = p__29697;
var state_override = cljs.core.nth.call(null,vec__29698,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__29698,state_override){
return (function (p1__29694_SHARP_){
return cljs.core.merge.call(null,p1__29694_SHARP_,state_override);
});})(vec__29698,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq29695){
var G__29696 = cljs.core.first.call(null,seq29695);
var seq29695__$1 = cljs.core.next.call(null,seq29695);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__29696,seq29695__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29229__auto__ = [];
var len__29222__auto___29705 = arguments.length;
var i__29223__auto___29706 = (0);
while(true){
if((i__29223__auto___29706 < len__29222__auto___29705)){
args__29229__auto__.push((arguments[i__29223__auto___29706]));

var G__29707 = (i__29223__auto___29706 + (1));
i__29223__auto___29706 = G__29707;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq29704){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29704));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29229__auto__ = [];
var len__29222__auto___29710 = arguments.length;
var i__29223__auto___29711 = (0);
while(true){
if((i__29223__auto___29711 < len__29222__auto___29710)){
args__29229__auto__.push((arguments[i__29223__auto___29711]));

var G__29712 = (i__29223__auto___29711 + (1));
i__29223__auto___29711 = G__29712;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq29708){
var G__29709 = cljs.core.first.call(null,seq29708);
var seq29708__$1 = cljs.core.next.call(null,seq29708);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__29709,seq29708__$1);
});


//# sourceMappingURL=format.js.map?rel=1512059515658
