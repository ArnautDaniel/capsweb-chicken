// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28051__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28051__auto__){
return or__28051__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28051__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
var or__28051__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28051__auto____$1)){
return or__28051__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36926_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36926_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36927 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36928 = null;
var count__36929 = (0);
var i__36930 = (0);
while(true){
if((i__36930 < count__36929)){
var n = cljs.core._nth.call(null,chunk__36928,i__36930);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36931 = seq__36927;
var G__36932 = chunk__36928;
var G__36933 = count__36929;
var G__36934 = (i__36930 + (1));
seq__36927 = G__36931;
chunk__36928 = G__36932;
count__36929 = G__36933;
i__36930 = G__36934;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36927);
if(temp__4657__auto__){
var seq__36927__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36927__$1)){
var c__28890__auto__ = cljs.core.chunk_first.call(null,seq__36927__$1);
var G__36935 = cljs.core.chunk_rest.call(null,seq__36927__$1);
var G__36936 = c__28890__auto__;
var G__36937 = cljs.core.count.call(null,c__28890__auto__);
var G__36938 = (0);
seq__36927 = G__36935;
chunk__36928 = G__36936;
count__36929 = G__36937;
i__36930 = G__36938;
continue;
} else {
var n = cljs.core.first.call(null,seq__36927__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36939 = cljs.core.next.call(null,seq__36927__$1);
var G__36940 = null;
var G__36941 = (0);
var G__36942 = (0);
seq__36927 = G__36939;
chunk__36928 = G__36940;
count__36929 = G__36941;
i__36930 = G__36942;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__36943){
var vec__36944 = p__36943;
var _ = cljs.core.nth.call(null,vec__36944,(0),null);
var v = cljs.core.nth.call(null,vec__36944,(1),null);
var and__28039__auto__ = v;
if(cljs.core.truth_(and__28039__auto__)){
return v.call(null,dep);
} else {
return and__28039__auto__;
}
}),cljs.core.filter.call(null,(function (p__36947){
var vec__36948 = p__36947;
var k = cljs.core.nth.call(null,vec__36948,(0),null);
var v = cljs.core.nth.call(null,vec__36948,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36960_36968 = cljs.core.seq.call(null,deps);
var chunk__36961_36969 = null;
var count__36962_36970 = (0);
var i__36963_36971 = (0);
while(true){
if((i__36963_36971 < count__36962_36970)){
var dep_36972 = cljs.core._nth.call(null,chunk__36961_36969,i__36963_36971);
if(cljs.core.truth_((function (){var and__28039__auto__ = dep_36972;
if(cljs.core.truth_(and__28039__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36972));
} else {
return and__28039__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36972,(depth + (1)),state);
} else {
}

var G__36973 = seq__36960_36968;
var G__36974 = chunk__36961_36969;
var G__36975 = count__36962_36970;
var G__36976 = (i__36963_36971 + (1));
seq__36960_36968 = G__36973;
chunk__36961_36969 = G__36974;
count__36962_36970 = G__36975;
i__36963_36971 = G__36976;
continue;
} else {
var temp__4657__auto___36977 = cljs.core.seq.call(null,seq__36960_36968);
if(temp__4657__auto___36977){
var seq__36960_36978__$1 = temp__4657__auto___36977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36960_36978__$1)){
var c__28890__auto___36979 = cljs.core.chunk_first.call(null,seq__36960_36978__$1);
var G__36980 = cljs.core.chunk_rest.call(null,seq__36960_36978__$1);
var G__36981 = c__28890__auto___36979;
var G__36982 = cljs.core.count.call(null,c__28890__auto___36979);
var G__36983 = (0);
seq__36960_36968 = G__36980;
chunk__36961_36969 = G__36981;
count__36962_36970 = G__36982;
i__36963_36971 = G__36983;
continue;
} else {
var dep_36984 = cljs.core.first.call(null,seq__36960_36978__$1);
if(cljs.core.truth_((function (){var and__28039__auto__ = dep_36984;
if(cljs.core.truth_(and__28039__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36984));
} else {
return and__28039__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36984,(depth + (1)),state);
} else {
}

var G__36985 = cljs.core.next.call(null,seq__36960_36978__$1);
var G__36986 = null;
var G__36987 = (0);
var G__36988 = (0);
seq__36960_36968 = G__36985;
chunk__36961_36969 = G__36986;
count__36962_36970 = G__36987;
i__36963_36971 = G__36988;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36964){
var vec__36965 = p__36964;
var seq__36966 = cljs.core.seq.call(null,vec__36965);
var first__36967 = cljs.core.first.call(null,seq__36966);
var seq__36966__$1 = cljs.core.next.call(null,seq__36966);
var x = first__36967;
var xs = seq__36966__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36965,seq__36966,first__36967,seq__36966__$1,x,xs,get_deps__$1){
return (function (p1__36951_SHARP_){
return clojure.set.difference.call(null,p1__36951_SHARP_,x);
});})(vec__36965,seq__36966,first__36967,seq__36966__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36989 = cljs.core.seq.call(null,provides);
var chunk__36990 = null;
var count__36991 = (0);
var i__36992 = (0);
while(true){
if((i__36992 < count__36991)){
var prov = cljs.core._nth.call(null,chunk__36990,i__36992);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36993_37001 = cljs.core.seq.call(null,requires);
var chunk__36994_37002 = null;
var count__36995_37003 = (0);
var i__36996_37004 = (0);
while(true){
if((i__36996_37004 < count__36995_37003)){
var req_37005 = cljs.core._nth.call(null,chunk__36994_37002,i__36996_37004);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37005,prov);

var G__37006 = seq__36993_37001;
var G__37007 = chunk__36994_37002;
var G__37008 = count__36995_37003;
var G__37009 = (i__36996_37004 + (1));
seq__36993_37001 = G__37006;
chunk__36994_37002 = G__37007;
count__36995_37003 = G__37008;
i__36996_37004 = G__37009;
continue;
} else {
var temp__4657__auto___37010 = cljs.core.seq.call(null,seq__36993_37001);
if(temp__4657__auto___37010){
var seq__36993_37011__$1 = temp__4657__auto___37010;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36993_37011__$1)){
var c__28890__auto___37012 = cljs.core.chunk_first.call(null,seq__36993_37011__$1);
var G__37013 = cljs.core.chunk_rest.call(null,seq__36993_37011__$1);
var G__37014 = c__28890__auto___37012;
var G__37015 = cljs.core.count.call(null,c__28890__auto___37012);
var G__37016 = (0);
seq__36993_37001 = G__37013;
chunk__36994_37002 = G__37014;
count__36995_37003 = G__37015;
i__36996_37004 = G__37016;
continue;
} else {
var req_37017 = cljs.core.first.call(null,seq__36993_37011__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37017,prov);

var G__37018 = cljs.core.next.call(null,seq__36993_37011__$1);
var G__37019 = null;
var G__37020 = (0);
var G__37021 = (0);
seq__36993_37001 = G__37018;
chunk__36994_37002 = G__37019;
count__36995_37003 = G__37020;
i__36996_37004 = G__37021;
continue;
}
} else {
}
}
break;
}

var G__37022 = seq__36989;
var G__37023 = chunk__36990;
var G__37024 = count__36991;
var G__37025 = (i__36992 + (1));
seq__36989 = G__37022;
chunk__36990 = G__37023;
count__36991 = G__37024;
i__36992 = G__37025;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36989);
if(temp__4657__auto__){
var seq__36989__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36989__$1)){
var c__28890__auto__ = cljs.core.chunk_first.call(null,seq__36989__$1);
var G__37026 = cljs.core.chunk_rest.call(null,seq__36989__$1);
var G__37027 = c__28890__auto__;
var G__37028 = cljs.core.count.call(null,c__28890__auto__);
var G__37029 = (0);
seq__36989 = G__37026;
chunk__36990 = G__37027;
count__36991 = G__37028;
i__36992 = G__37029;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36989__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36997_37030 = cljs.core.seq.call(null,requires);
var chunk__36998_37031 = null;
var count__36999_37032 = (0);
var i__37000_37033 = (0);
while(true){
if((i__37000_37033 < count__36999_37032)){
var req_37034 = cljs.core._nth.call(null,chunk__36998_37031,i__37000_37033);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37034,prov);

var G__37035 = seq__36997_37030;
var G__37036 = chunk__36998_37031;
var G__37037 = count__36999_37032;
var G__37038 = (i__37000_37033 + (1));
seq__36997_37030 = G__37035;
chunk__36998_37031 = G__37036;
count__36999_37032 = G__37037;
i__37000_37033 = G__37038;
continue;
} else {
var temp__4657__auto___37039__$1 = cljs.core.seq.call(null,seq__36997_37030);
if(temp__4657__auto___37039__$1){
var seq__36997_37040__$1 = temp__4657__auto___37039__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36997_37040__$1)){
var c__28890__auto___37041 = cljs.core.chunk_first.call(null,seq__36997_37040__$1);
var G__37042 = cljs.core.chunk_rest.call(null,seq__36997_37040__$1);
var G__37043 = c__28890__auto___37041;
var G__37044 = cljs.core.count.call(null,c__28890__auto___37041);
var G__37045 = (0);
seq__36997_37030 = G__37042;
chunk__36998_37031 = G__37043;
count__36999_37032 = G__37044;
i__37000_37033 = G__37045;
continue;
} else {
var req_37046 = cljs.core.first.call(null,seq__36997_37040__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37046,prov);

var G__37047 = cljs.core.next.call(null,seq__36997_37040__$1);
var G__37048 = null;
var G__37049 = (0);
var G__37050 = (0);
seq__36997_37030 = G__37047;
chunk__36998_37031 = G__37048;
count__36999_37032 = G__37049;
i__37000_37033 = G__37050;
continue;
}
} else {
}
}
break;
}

var G__37051 = cljs.core.next.call(null,seq__36989__$1);
var G__37052 = null;
var G__37053 = (0);
var G__37054 = (0);
seq__36989 = G__37051;
chunk__36990 = G__37052;
count__36991 = G__37053;
i__36992 = G__37054;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37055_37059 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37056_37060 = null;
var count__37057_37061 = (0);
var i__37058_37062 = (0);
while(true){
if((i__37058_37062 < count__37057_37061)){
var ns_37063 = cljs.core._nth.call(null,chunk__37056_37060,i__37058_37062);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37063);

var G__37064 = seq__37055_37059;
var G__37065 = chunk__37056_37060;
var G__37066 = count__37057_37061;
var G__37067 = (i__37058_37062 + (1));
seq__37055_37059 = G__37064;
chunk__37056_37060 = G__37065;
count__37057_37061 = G__37066;
i__37058_37062 = G__37067;
continue;
} else {
var temp__4657__auto___37068 = cljs.core.seq.call(null,seq__37055_37059);
if(temp__4657__auto___37068){
var seq__37055_37069__$1 = temp__4657__auto___37068;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37055_37069__$1)){
var c__28890__auto___37070 = cljs.core.chunk_first.call(null,seq__37055_37069__$1);
var G__37071 = cljs.core.chunk_rest.call(null,seq__37055_37069__$1);
var G__37072 = c__28890__auto___37070;
var G__37073 = cljs.core.count.call(null,c__28890__auto___37070);
var G__37074 = (0);
seq__37055_37059 = G__37071;
chunk__37056_37060 = G__37072;
count__37057_37061 = G__37073;
i__37058_37062 = G__37074;
continue;
} else {
var ns_37075 = cljs.core.first.call(null,seq__37055_37069__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37075);

var G__37076 = cljs.core.next.call(null,seq__37055_37069__$1);
var G__37077 = null;
var G__37078 = (0);
var G__37079 = (0);
seq__37055_37059 = G__37076;
chunk__37056_37060 = G__37077;
count__37057_37061 = G__37078;
i__37058_37062 = G__37079;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28051__auto__ = goog.require__;
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37080__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37081__i = 0, G__37081__a = new Array(arguments.length -  0);
while (G__37081__i < G__37081__a.length) {G__37081__a[G__37081__i] = arguments[G__37081__i + 0]; ++G__37081__i;}
  args = new cljs.core.IndexedSeq(G__37081__a,0,null);
} 
return G__37080__delegate.call(this,args);};
G__37080.cljs$lang$maxFixedArity = 0;
G__37080.cljs$lang$applyTo = (function (arglist__37082){
var args = cljs.core.seq(arglist__37082);
return G__37080__delegate(args);
});
G__37080.cljs$core$IFn$_invoke$arity$variadic = G__37080__delegate;
return G__37080;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37083_SHARP_,p2__37084_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37083_SHARP_)].join('')),p2__37084_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37085_SHARP_,p2__37086_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37085_SHARP_)].join(''),p2__37086_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37087 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37087.addCallback(((function (G__37087){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37087))
);

G__37087.addErrback(((function (G__37087){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37087))
);

return G__37087;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37088){if((e37088 instanceof Error)){
var e = e37088;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37088;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37089){if((e37089 instanceof Error)){
var e = e37089;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37089;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37090 = cljs.core._EQ_;
var expr__37091 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37090.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37091))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37090.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37091))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37090.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37091))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37090,expr__37091){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37090,expr__37091))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37093,callback){
var map__37094 = p__37093;
var map__37094__$1 = ((((!((map__37094 == null)))?((((map__37094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37094.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37094):map__37094);
var file_msg = map__37094__$1;
var request_url = cljs.core.get.call(null,map__37094__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__28051__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37094,map__37094__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37094,map__37094__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto__){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto__){
return (function (state_37134){
var state_val_37135 = (state_37134[(1)]);
if((state_val_37135 === (7))){
var inst_37130 = (state_37134[(2)]);
var state_37134__$1 = state_37134;
var statearr_37136_37163 = state_37134__$1;
(statearr_37136_37163[(2)] = inst_37130);

(statearr_37136_37163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (1))){
var state_37134__$1 = state_37134;
var statearr_37137_37164 = state_37134__$1;
(statearr_37137_37164[(2)] = null);

(statearr_37137_37164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (4))){
var inst_37098 = (state_37134[(7)]);
var inst_37098__$1 = (state_37134[(2)]);
var state_37134__$1 = (function (){var statearr_37138 = state_37134;
(statearr_37138[(7)] = inst_37098__$1);

return statearr_37138;
})();
if(cljs.core.truth_(inst_37098__$1)){
var statearr_37139_37165 = state_37134__$1;
(statearr_37139_37165[(1)] = (5));

} else {
var statearr_37140_37166 = state_37134__$1;
(statearr_37140_37166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (15))){
var inst_37112 = (state_37134[(8)]);
var inst_37115 = (state_37134[(9)]);
var inst_37117 = inst_37115.call(null,inst_37112);
var state_37134__$1 = state_37134;
var statearr_37141_37167 = state_37134__$1;
(statearr_37141_37167[(2)] = inst_37117);

(statearr_37141_37167[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (13))){
var inst_37124 = (state_37134[(2)]);
var state_37134__$1 = state_37134;
var statearr_37142_37168 = state_37134__$1;
(statearr_37142_37168[(2)] = inst_37124);

(statearr_37142_37168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (6))){
var state_37134__$1 = state_37134;
var statearr_37143_37169 = state_37134__$1;
(statearr_37143_37169[(2)] = null);

(statearr_37143_37169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (17))){
var inst_37121 = (state_37134[(2)]);
var state_37134__$1 = state_37134;
var statearr_37144_37170 = state_37134__$1;
(statearr_37144_37170[(2)] = inst_37121);

(statearr_37144_37170[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (3))){
var inst_37132 = (state_37134[(2)]);
var state_37134__$1 = state_37134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37134__$1,inst_37132);
} else {
if((state_val_37135 === (12))){
var state_37134__$1 = state_37134;
var statearr_37145_37171 = state_37134__$1;
(statearr_37145_37171[(2)] = null);

(statearr_37145_37171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (2))){
var state_37134__$1 = state_37134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37134__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37135 === (11))){
var inst_37103 = (state_37134[(10)]);
var inst_37110 = figwheel.client.file_reloading.blocking_load.call(null,inst_37103);
var state_37134__$1 = state_37134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37134__$1,(14),inst_37110);
} else {
if((state_val_37135 === (9))){
var inst_37103 = (state_37134[(10)]);
var state_37134__$1 = state_37134;
if(cljs.core.truth_(inst_37103)){
var statearr_37146_37172 = state_37134__$1;
(statearr_37146_37172[(1)] = (11));

} else {
var statearr_37147_37173 = state_37134__$1;
(statearr_37147_37173[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (5))){
var inst_37104 = (state_37134[(11)]);
var inst_37098 = (state_37134[(7)]);
var inst_37103 = cljs.core.nth.call(null,inst_37098,(0),null);
var inst_37104__$1 = cljs.core.nth.call(null,inst_37098,(1),null);
var state_37134__$1 = (function (){var statearr_37148 = state_37134;
(statearr_37148[(11)] = inst_37104__$1);

(statearr_37148[(10)] = inst_37103);

return statearr_37148;
})();
if(cljs.core.truth_(inst_37104__$1)){
var statearr_37149_37174 = state_37134__$1;
(statearr_37149_37174[(1)] = (8));

} else {
var statearr_37150_37175 = state_37134__$1;
(statearr_37150_37175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (14))){
var inst_37115 = (state_37134[(9)]);
var inst_37103 = (state_37134[(10)]);
var inst_37112 = (state_37134[(2)]);
var inst_37113 = console.log("Loading!",inst_37103);
var inst_37114 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37115__$1 = cljs.core.get.call(null,inst_37114,inst_37103);
var state_37134__$1 = (function (){var statearr_37151 = state_37134;
(statearr_37151[(12)] = inst_37113);

(statearr_37151[(8)] = inst_37112);

(statearr_37151[(9)] = inst_37115__$1);

return statearr_37151;
})();
if(cljs.core.truth_(inst_37115__$1)){
var statearr_37152_37176 = state_37134__$1;
(statearr_37152_37176[(1)] = (15));

} else {
var statearr_37153_37177 = state_37134__$1;
(statearr_37153_37177[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (16))){
var inst_37112 = (state_37134[(8)]);
var inst_37119 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37112);
var state_37134__$1 = state_37134;
var statearr_37154_37178 = state_37134__$1;
(statearr_37154_37178[(2)] = inst_37119);

(statearr_37154_37178[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (10))){
var inst_37126 = (state_37134[(2)]);
var state_37134__$1 = (function (){var statearr_37155 = state_37134;
(statearr_37155[(13)] = inst_37126);

return statearr_37155;
})();
var statearr_37156_37179 = state_37134__$1;
(statearr_37156_37179[(2)] = null);

(statearr_37156_37179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (8))){
var inst_37104 = (state_37134[(11)]);
var inst_37106 = console.log("Evaling!",inst_37104);
var inst_37107 = eval(inst_37104);
var state_37134__$1 = (function (){var statearr_37157 = state_37134;
(statearr_37157[(14)] = inst_37106);

return statearr_37157;
})();
var statearr_37158_37180 = state_37134__$1;
(statearr_37158_37180[(2)] = inst_37107);

(statearr_37158_37180[(1)] = (10));


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
});})(c__34424__auto__))
;
return ((function (switch__34336__auto__,c__34424__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34337__auto__ = null;
var figwheel$client$file_reloading$state_machine__34337__auto____0 = (function (){
var statearr_37159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37159[(0)] = figwheel$client$file_reloading$state_machine__34337__auto__);

(statearr_37159[(1)] = (1));

return statearr_37159;
});
var figwheel$client$file_reloading$state_machine__34337__auto____1 = (function (state_37134){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_37134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e37160){if((e37160 instanceof Object)){
var ex__34340__auto__ = e37160;
var statearr_37161_37181 = state_37134;
(statearr_37161_37181[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37182 = state_37134;
state_37134 = G__37182;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34337__auto__ = function(state_37134){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34337__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34337__auto____1.call(this,state_37134);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34337__auto____0;
figwheel$client$file_reloading$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34337__auto____1;
return figwheel$client$file_reloading$state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto__))
})();
var state__34426__auto__ = (function (){var statearr_37162 = f__34425__auto__.call(null);
(statearr_37162[(6)] = c__34424__auto__);

return statearr_37162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto__))
);

return c__34424__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37184 = arguments.length;
switch (G__37184) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37186,callback){
var map__37187 = p__37186;
var map__37187__$1 = ((((!((map__37187 == null)))?((((map__37187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37187):map__37187);
var file_msg = map__37187__$1;
var namespace = cljs.core.get.call(null,map__37187__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37187,map__37187__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37187,map__37187__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37189){
var map__37190 = p__37189;
var map__37190__$1 = ((((!((map__37190 == null)))?((((map__37190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37190):map__37190);
var file_msg = map__37190__$1;
var namespace = cljs.core.get.call(null,map__37190__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37192){
var map__37193 = p__37192;
var map__37193__$1 = ((((!((map__37193 == null)))?((((map__37193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37193):map__37193);
var file_msg = map__37193__$1;
var namespace = cljs.core.get.call(null,map__37193__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28039__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28039__auto__){
var or__28051__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
var or__28051__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28051__auto____$1)){
return or__28051__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28039__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37195,callback){
var map__37196 = p__37195;
var map__37196__$1 = ((((!((map__37196 == null)))?((((map__37196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37196):map__37196);
var file_msg = map__37196__$1;
var request_url = cljs.core.get.call(null,map__37196__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37196__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34424__auto___37246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___37246,out){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___37246,out){
return (function (state_37231){
var state_val_37232 = (state_37231[(1)]);
if((state_val_37232 === (1))){
var inst_37205 = cljs.core.seq.call(null,files);
var inst_37206 = cljs.core.first.call(null,inst_37205);
var inst_37207 = cljs.core.next.call(null,inst_37205);
var inst_37208 = files;
var state_37231__$1 = (function (){var statearr_37233 = state_37231;
(statearr_37233[(7)] = inst_37206);

(statearr_37233[(8)] = inst_37207);

(statearr_37233[(9)] = inst_37208);

return statearr_37233;
})();
var statearr_37234_37247 = state_37231__$1;
(statearr_37234_37247[(2)] = null);

(statearr_37234_37247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37232 === (2))){
var inst_37214 = (state_37231[(10)]);
var inst_37208 = (state_37231[(9)]);
var inst_37213 = cljs.core.seq.call(null,inst_37208);
var inst_37214__$1 = cljs.core.first.call(null,inst_37213);
var inst_37215 = cljs.core.next.call(null,inst_37213);
var inst_37216 = (inst_37214__$1 == null);
var inst_37217 = cljs.core.not.call(null,inst_37216);
var state_37231__$1 = (function (){var statearr_37235 = state_37231;
(statearr_37235[(10)] = inst_37214__$1);

(statearr_37235[(11)] = inst_37215);

return statearr_37235;
})();
if(inst_37217){
var statearr_37236_37248 = state_37231__$1;
(statearr_37236_37248[(1)] = (4));

} else {
var statearr_37237_37249 = state_37231__$1;
(statearr_37237_37249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37232 === (3))){
var inst_37229 = (state_37231[(2)]);
var state_37231__$1 = state_37231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37231__$1,inst_37229);
} else {
if((state_val_37232 === (4))){
var inst_37214 = (state_37231[(10)]);
var inst_37219 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37214);
var state_37231__$1 = state_37231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37231__$1,(7),inst_37219);
} else {
if((state_val_37232 === (5))){
var inst_37225 = cljs.core.async.close_BANG_.call(null,out);
var state_37231__$1 = state_37231;
var statearr_37238_37250 = state_37231__$1;
(statearr_37238_37250[(2)] = inst_37225);

(statearr_37238_37250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37232 === (6))){
var inst_37227 = (state_37231[(2)]);
var state_37231__$1 = state_37231;
var statearr_37239_37251 = state_37231__$1;
(statearr_37239_37251[(2)] = inst_37227);

(statearr_37239_37251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37232 === (7))){
var inst_37215 = (state_37231[(11)]);
var inst_37221 = (state_37231[(2)]);
var inst_37222 = cljs.core.async.put_BANG_.call(null,out,inst_37221);
var inst_37208 = inst_37215;
var state_37231__$1 = (function (){var statearr_37240 = state_37231;
(statearr_37240[(12)] = inst_37222);

(statearr_37240[(9)] = inst_37208);

return statearr_37240;
})();
var statearr_37241_37252 = state_37231__$1;
(statearr_37241_37252[(2)] = null);

(statearr_37241_37252[(1)] = (2));


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
});})(c__34424__auto___37246,out))
;
return ((function (switch__34336__auto__,c__34424__auto___37246,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34337__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34337__auto____0 = (function (){
var statearr_37242 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37242[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34337__auto__);

(statearr_37242[(1)] = (1));

return statearr_37242;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34337__auto____1 = (function (state_37231){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_37231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e37243){if((e37243 instanceof Object)){
var ex__34340__auto__ = e37243;
var statearr_37244_37253 = state_37231;
(statearr_37244_37253[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37254 = state_37231;
state_37231 = G__37254;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34337__auto__ = function(state_37231){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34337__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34337__auto____1.call(this,state_37231);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34337__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34337__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___37246,out))
})();
var state__34426__auto__ = (function (){var statearr_37245 = f__34425__auto__.call(null);
(statearr_37245[(6)] = c__34424__auto___37246);

return statearr_37245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___37246,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37255,opts){
var map__37256 = p__37255;
var map__37256__$1 = ((((!((map__37256 == null)))?((((map__37256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37256):map__37256);
var eval_body = cljs.core.get.call(null,map__37256__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37256__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28039__auto__ = eval_body;
if(cljs.core.truth_(and__28039__auto__)){
return typeof eval_body === 'string';
} else {
return and__28039__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37258){var e = e37258;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37259_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37259_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37260){
var vec__37261 = p__37260;
var k = cljs.core.nth.call(null,vec__37261,(0),null);
var v = cljs.core.nth.call(null,vec__37261,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37264){
var vec__37265 = p__37264;
var k = cljs.core.nth.call(null,vec__37265,(0),null);
var v = cljs.core.nth.call(null,vec__37265,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37271,p__37272){
var map__37273 = p__37271;
var map__37273__$1 = ((((!((map__37273 == null)))?((((map__37273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37273):map__37273);
var opts = map__37273__$1;
var before_jsload = cljs.core.get.call(null,map__37273__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37273__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37273__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37274 = p__37272;
var map__37274__$1 = ((((!((map__37274 == null)))?((((map__37274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37274):map__37274);
var msg = map__37274__$1;
var files = cljs.core.get.call(null,map__37274__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37274__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37274__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37428){
var state_val_37429 = (state_37428[(1)]);
if((state_val_37429 === (7))){
var inst_37290 = (state_37428[(7)]);
var inst_37289 = (state_37428[(8)]);
var inst_37288 = (state_37428[(9)]);
var inst_37291 = (state_37428[(10)]);
var inst_37296 = cljs.core._nth.call(null,inst_37289,inst_37291);
var inst_37297 = figwheel.client.file_reloading.eval_body.call(null,inst_37296,opts);
var inst_37298 = (inst_37291 + (1));
var tmp37430 = inst_37290;
var tmp37431 = inst_37289;
var tmp37432 = inst_37288;
var inst_37288__$1 = tmp37432;
var inst_37289__$1 = tmp37431;
var inst_37290__$1 = tmp37430;
var inst_37291__$1 = inst_37298;
var state_37428__$1 = (function (){var statearr_37433 = state_37428;
(statearr_37433[(7)] = inst_37290__$1);

(statearr_37433[(8)] = inst_37289__$1);

(statearr_37433[(9)] = inst_37288__$1);

(statearr_37433[(10)] = inst_37291__$1);

(statearr_37433[(11)] = inst_37297);

return statearr_37433;
})();
var statearr_37434_37517 = state_37428__$1;
(statearr_37434_37517[(2)] = null);

(statearr_37434_37517[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (20))){
var inst_37331 = (state_37428[(12)]);
var inst_37339 = figwheel.client.file_reloading.sort_files.call(null,inst_37331);
var state_37428__$1 = state_37428;
var statearr_37435_37518 = state_37428__$1;
(statearr_37435_37518[(2)] = inst_37339);

(statearr_37435_37518[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (27))){
var state_37428__$1 = state_37428;
var statearr_37436_37519 = state_37428__$1;
(statearr_37436_37519[(2)] = null);

(statearr_37436_37519[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (1))){
var inst_37280 = (state_37428[(13)]);
var inst_37277 = before_jsload.call(null,files);
var inst_37278 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37279 = (function (){return ((function (inst_37280,inst_37277,inst_37278,state_val_37429,c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37268_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37268_SHARP_);
});
;})(inst_37280,inst_37277,inst_37278,state_val_37429,c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37280__$1 = cljs.core.filter.call(null,inst_37279,files);
var inst_37281 = cljs.core.not_empty.call(null,inst_37280__$1);
var state_37428__$1 = (function (){var statearr_37437 = state_37428;
(statearr_37437[(14)] = inst_37278);

(statearr_37437[(13)] = inst_37280__$1);

(statearr_37437[(15)] = inst_37277);

return statearr_37437;
})();
if(cljs.core.truth_(inst_37281)){
var statearr_37438_37520 = state_37428__$1;
(statearr_37438_37520[(1)] = (2));

} else {
var statearr_37439_37521 = state_37428__$1;
(statearr_37439_37521[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (24))){
var state_37428__$1 = state_37428;
var statearr_37440_37522 = state_37428__$1;
(statearr_37440_37522[(2)] = null);

(statearr_37440_37522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (39))){
var inst_37381 = (state_37428[(16)]);
var state_37428__$1 = state_37428;
var statearr_37441_37523 = state_37428__$1;
(statearr_37441_37523[(2)] = inst_37381);

(statearr_37441_37523[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (46))){
var inst_37423 = (state_37428[(2)]);
var state_37428__$1 = state_37428;
var statearr_37442_37524 = state_37428__$1;
(statearr_37442_37524[(2)] = inst_37423);

(statearr_37442_37524[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (4))){
var inst_37325 = (state_37428[(2)]);
var inst_37326 = cljs.core.List.EMPTY;
var inst_37327 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37326);
var inst_37328 = (function (){return ((function (inst_37325,inst_37326,inst_37327,state_val_37429,c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37269_SHARP_){
var and__28039__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37269_SHARP_);
if(cljs.core.truth_(and__28039__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37269_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37269_SHARP_)));
} else {
return and__28039__auto__;
}
});
;})(inst_37325,inst_37326,inst_37327,state_val_37429,c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37329 = cljs.core.filter.call(null,inst_37328,files);
var inst_37330 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37331 = cljs.core.concat.call(null,inst_37329,inst_37330);
var state_37428__$1 = (function (){var statearr_37443 = state_37428;
(statearr_37443[(17)] = inst_37327);

(statearr_37443[(18)] = inst_37325);

(statearr_37443[(12)] = inst_37331);

return statearr_37443;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37444_37525 = state_37428__$1;
(statearr_37444_37525[(1)] = (16));

} else {
var statearr_37445_37526 = state_37428__$1;
(statearr_37445_37526[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (15))){
var inst_37315 = (state_37428[(2)]);
var state_37428__$1 = state_37428;
var statearr_37446_37527 = state_37428__$1;
(statearr_37446_37527[(2)] = inst_37315);

(statearr_37446_37527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (21))){
var inst_37341 = (state_37428[(19)]);
var inst_37341__$1 = (state_37428[(2)]);
var inst_37342 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37341__$1);
var state_37428__$1 = (function (){var statearr_37447 = state_37428;
(statearr_37447[(19)] = inst_37341__$1);

return statearr_37447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37428__$1,(22),inst_37342);
} else {
if((state_val_37429 === (31))){
var inst_37426 = (state_37428[(2)]);
var state_37428__$1 = state_37428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37428__$1,inst_37426);
} else {
if((state_val_37429 === (32))){
var inst_37381 = (state_37428[(16)]);
var inst_37386 = inst_37381.cljs$lang$protocol_mask$partition0$;
var inst_37387 = (inst_37386 & (64));
var inst_37388 = inst_37381.cljs$core$ISeq$;
var inst_37389 = (cljs.core.PROTOCOL_SENTINEL === inst_37388);
var inst_37390 = (inst_37387) || (inst_37389);
var state_37428__$1 = state_37428;
if(cljs.core.truth_(inst_37390)){
var statearr_37448_37528 = state_37428__$1;
(statearr_37448_37528[(1)] = (35));

} else {
var statearr_37449_37529 = state_37428__$1;
(statearr_37449_37529[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (40))){
var inst_37403 = (state_37428[(20)]);
var inst_37402 = (state_37428[(2)]);
var inst_37403__$1 = cljs.core.get.call(null,inst_37402,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37404 = cljs.core.get.call(null,inst_37402,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37405 = cljs.core.not_empty.call(null,inst_37403__$1);
var state_37428__$1 = (function (){var statearr_37450 = state_37428;
(statearr_37450[(21)] = inst_37404);

(statearr_37450[(20)] = inst_37403__$1);

return statearr_37450;
})();
if(cljs.core.truth_(inst_37405)){
var statearr_37451_37530 = state_37428__$1;
(statearr_37451_37530[(1)] = (41));

} else {
var statearr_37452_37531 = state_37428__$1;
(statearr_37452_37531[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (33))){
var state_37428__$1 = state_37428;
var statearr_37453_37532 = state_37428__$1;
(statearr_37453_37532[(2)] = false);

(statearr_37453_37532[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (13))){
var inst_37301 = (state_37428[(22)]);
var inst_37305 = cljs.core.chunk_first.call(null,inst_37301);
var inst_37306 = cljs.core.chunk_rest.call(null,inst_37301);
var inst_37307 = cljs.core.count.call(null,inst_37305);
var inst_37288 = inst_37306;
var inst_37289 = inst_37305;
var inst_37290 = inst_37307;
var inst_37291 = (0);
var state_37428__$1 = (function (){var statearr_37454 = state_37428;
(statearr_37454[(7)] = inst_37290);

(statearr_37454[(8)] = inst_37289);

(statearr_37454[(9)] = inst_37288);

(statearr_37454[(10)] = inst_37291);

return statearr_37454;
})();
var statearr_37455_37533 = state_37428__$1;
(statearr_37455_37533[(2)] = null);

(statearr_37455_37533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (22))){
var inst_37349 = (state_37428[(23)]);
var inst_37345 = (state_37428[(24)]);
var inst_37341 = (state_37428[(19)]);
var inst_37344 = (state_37428[(25)]);
var inst_37344__$1 = (state_37428[(2)]);
var inst_37345__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37344__$1);
var inst_37346 = (function (){var all_files = inst_37341;
var res_SINGLEQUOTE_ = inst_37344__$1;
var res = inst_37345__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37349,inst_37345,inst_37341,inst_37344,inst_37344__$1,inst_37345__$1,state_val_37429,c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37270_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37270_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37349,inst_37345,inst_37341,inst_37344,inst_37344__$1,inst_37345__$1,state_val_37429,c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37347 = cljs.core.filter.call(null,inst_37346,inst_37344__$1);
var inst_37348 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37349__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37348);
var inst_37350 = cljs.core.not_empty.call(null,inst_37349__$1);
var state_37428__$1 = (function (){var statearr_37456 = state_37428;
(statearr_37456[(23)] = inst_37349__$1);

(statearr_37456[(24)] = inst_37345__$1);

(statearr_37456[(25)] = inst_37344__$1);

(statearr_37456[(26)] = inst_37347);

return statearr_37456;
})();
if(cljs.core.truth_(inst_37350)){
var statearr_37457_37534 = state_37428__$1;
(statearr_37457_37534[(1)] = (23));

} else {
var statearr_37458_37535 = state_37428__$1;
(statearr_37458_37535[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (36))){
var state_37428__$1 = state_37428;
var statearr_37459_37536 = state_37428__$1;
(statearr_37459_37536[(2)] = false);

(statearr_37459_37536[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (41))){
var inst_37403 = (state_37428[(20)]);
var inst_37407 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37408 = cljs.core.map.call(null,inst_37407,inst_37403);
var inst_37409 = cljs.core.pr_str.call(null,inst_37408);
var inst_37410 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37409)].join('');
var inst_37411 = figwheel.client.utils.log.call(null,inst_37410);
var state_37428__$1 = state_37428;
var statearr_37460_37537 = state_37428__$1;
(statearr_37460_37537[(2)] = inst_37411);

(statearr_37460_37537[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (43))){
var inst_37404 = (state_37428[(21)]);
var inst_37414 = (state_37428[(2)]);
var inst_37415 = cljs.core.not_empty.call(null,inst_37404);
var state_37428__$1 = (function (){var statearr_37461 = state_37428;
(statearr_37461[(27)] = inst_37414);

return statearr_37461;
})();
if(cljs.core.truth_(inst_37415)){
var statearr_37462_37538 = state_37428__$1;
(statearr_37462_37538[(1)] = (44));

} else {
var statearr_37463_37539 = state_37428__$1;
(statearr_37463_37539[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (29))){
var inst_37381 = (state_37428[(16)]);
var inst_37349 = (state_37428[(23)]);
var inst_37345 = (state_37428[(24)]);
var inst_37341 = (state_37428[(19)]);
var inst_37344 = (state_37428[(25)]);
var inst_37347 = (state_37428[(26)]);
var inst_37377 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37380 = (function (){var all_files = inst_37341;
var res_SINGLEQUOTE_ = inst_37344;
var res = inst_37345;
var files_not_loaded = inst_37347;
var dependencies_that_loaded = inst_37349;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37381,inst_37349,inst_37345,inst_37341,inst_37344,inst_37347,inst_37377,state_val_37429,c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37379){
var map__37464 = p__37379;
var map__37464__$1 = ((((!((map__37464 == null)))?((((map__37464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37464):map__37464);
var namespace = cljs.core.get.call(null,map__37464__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37381,inst_37349,inst_37345,inst_37341,inst_37344,inst_37347,inst_37377,state_val_37429,c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37381__$1 = cljs.core.group_by.call(null,inst_37380,inst_37347);
var inst_37383 = (inst_37381__$1 == null);
var inst_37384 = cljs.core.not.call(null,inst_37383);
var state_37428__$1 = (function (){var statearr_37466 = state_37428;
(statearr_37466[(28)] = inst_37377);

(statearr_37466[(16)] = inst_37381__$1);

return statearr_37466;
})();
if(inst_37384){
var statearr_37467_37540 = state_37428__$1;
(statearr_37467_37540[(1)] = (32));

} else {
var statearr_37468_37541 = state_37428__$1;
(statearr_37468_37541[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (44))){
var inst_37404 = (state_37428[(21)]);
var inst_37417 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37404);
var inst_37418 = cljs.core.pr_str.call(null,inst_37417);
var inst_37419 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37418)].join('');
var inst_37420 = figwheel.client.utils.log.call(null,inst_37419);
var state_37428__$1 = state_37428;
var statearr_37469_37542 = state_37428__$1;
(statearr_37469_37542[(2)] = inst_37420);

(statearr_37469_37542[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (6))){
var inst_37322 = (state_37428[(2)]);
var state_37428__$1 = state_37428;
var statearr_37470_37543 = state_37428__$1;
(statearr_37470_37543[(2)] = inst_37322);

(statearr_37470_37543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (28))){
var inst_37347 = (state_37428[(26)]);
var inst_37374 = (state_37428[(2)]);
var inst_37375 = cljs.core.not_empty.call(null,inst_37347);
var state_37428__$1 = (function (){var statearr_37471 = state_37428;
(statearr_37471[(29)] = inst_37374);

return statearr_37471;
})();
if(cljs.core.truth_(inst_37375)){
var statearr_37472_37544 = state_37428__$1;
(statearr_37472_37544[(1)] = (29));

} else {
var statearr_37473_37545 = state_37428__$1;
(statearr_37473_37545[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (25))){
var inst_37345 = (state_37428[(24)]);
var inst_37361 = (state_37428[(2)]);
var inst_37362 = cljs.core.not_empty.call(null,inst_37345);
var state_37428__$1 = (function (){var statearr_37474 = state_37428;
(statearr_37474[(30)] = inst_37361);

return statearr_37474;
})();
if(cljs.core.truth_(inst_37362)){
var statearr_37475_37546 = state_37428__$1;
(statearr_37475_37546[(1)] = (26));

} else {
var statearr_37476_37547 = state_37428__$1;
(statearr_37476_37547[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (34))){
var inst_37397 = (state_37428[(2)]);
var state_37428__$1 = state_37428;
if(cljs.core.truth_(inst_37397)){
var statearr_37477_37548 = state_37428__$1;
(statearr_37477_37548[(1)] = (38));

} else {
var statearr_37478_37549 = state_37428__$1;
(statearr_37478_37549[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (17))){
var state_37428__$1 = state_37428;
var statearr_37479_37550 = state_37428__$1;
(statearr_37479_37550[(2)] = recompile_dependents);

(statearr_37479_37550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (3))){
var state_37428__$1 = state_37428;
var statearr_37480_37551 = state_37428__$1;
(statearr_37480_37551[(2)] = null);

(statearr_37480_37551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (12))){
var inst_37318 = (state_37428[(2)]);
var state_37428__$1 = state_37428;
var statearr_37481_37552 = state_37428__$1;
(statearr_37481_37552[(2)] = inst_37318);

(statearr_37481_37552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (2))){
var inst_37280 = (state_37428[(13)]);
var inst_37287 = cljs.core.seq.call(null,inst_37280);
var inst_37288 = inst_37287;
var inst_37289 = null;
var inst_37290 = (0);
var inst_37291 = (0);
var state_37428__$1 = (function (){var statearr_37482 = state_37428;
(statearr_37482[(7)] = inst_37290);

(statearr_37482[(8)] = inst_37289);

(statearr_37482[(9)] = inst_37288);

(statearr_37482[(10)] = inst_37291);

return statearr_37482;
})();
var statearr_37483_37553 = state_37428__$1;
(statearr_37483_37553[(2)] = null);

(statearr_37483_37553[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (23))){
var inst_37349 = (state_37428[(23)]);
var inst_37345 = (state_37428[(24)]);
var inst_37341 = (state_37428[(19)]);
var inst_37344 = (state_37428[(25)]);
var inst_37347 = (state_37428[(26)]);
var inst_37352 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37354 = (function (){var all_files = inst_37341;
var res_SINGLEQUOTE_ = inst_37344;
var res = inst_37345;
var files_not_loaded = inst_37347;
var dependencies_that_loaded = inst_37349;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37349,inst_37345,inst_37341,inst_37344,inst_37347,inst_37352,state_val_37429,c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37353){
var map__37484 = p__37353;
var map__37484__$1 = ((((!((map__37484 == null)))?((((map__37484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37484):map__37484);
var request_url = cljs.core.get.call(null,map__37484__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37349,inst_37345,inst_37341,inst_37344,inst_37347,inst_37352,state_val_37429,c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37355 = cljs.core.reverse.call(null,inst_37349);
var inst_37356 = cljs.core.map.call(null,inst_37354,inst_37355);
var inst_37357 = cljs.core.pr_str.call(null,inst_37356);
var inst_37358 = figwheel.client.utils.log.call(null,inst_37357);
var state_37428__$1 = (function (){var statearr_37486 = state_37428;
(statearr_37486[(31)] = inst_37352);

return statearr_37486;
})();
var statearr_37487_37554 = state_37428__$1;
(statearr_37487_37554[(2)] = inst_37358);

(statearr_37487_37554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (35))){
var state_37428__$1 = state_37428;
var statearr_37488_37555 = state_37428__$1;
(statearr_37488_37555[(2)] = true);

(statearr_37488_37555[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (19))){
var inst_37331 = (state_37428[(12)]);
var inst_37337 = figwheel.client.file_reloading.expand_files.call(null,inst_37331);
var state_37428__$1 = state_37428;
var statearr_37489_37556 = state_37428__$1;
(statearr_37489_37556[(2)] = inst_37337);

(statearr_37489_37556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (11))){
var state_37428__$1 = state_37428;
var statearr_37490_37557 = state_37428__$1;
(statearr_37490_37557[(2)] = null);

(statearr_37490_37557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (9))){
var inst_37320 = (state_37428[(2)]);
var state_37428__$1 = state_37428;
var statearr_37491_37558 = state_37428__$1;
(statearr_37491_37558[(2)] = inst_37320);

(statearr_37491_37558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (5))){
var inst_37290 = (state_37428[(7)]);
var inst_37291 = (state_37428[(10)]);
var inst_37293 = (inst_37291 < inst_37290);
var inst_37294 = inst_37293;
var state_37428__$1 = state_37428;
if(cljs.core.truth_(inst_37294)){
var statearr_37492_37559 = state_37428__$1;
(statearr_37492_37559[(1)] = (7));

} else {
var statearr_37493_37560 = state_37428__$1;
(statearr_37493_37560[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (14))){
var inst_37301 = (state_37428[(22)]);
var inst_37310 = cljs.core.first.call(null,inst_37301);
var inst_37311 = figwheel.client.file_reloading.eval_body.call(null,inst_37310,opts);
var inst_37312 = cljs.core.next.call(null,inst_37301);
var inst_37288 = inst_37312;
var inst_37289 = null;
var inst_37290 = (0);
var inst_37291 = (0);
var state_37428__$1 = (function (){var statearr_37494 = state_37428;
(statearr_37494[(7)] = inst_37290);

(statearr_37494[(8)] = inst_37289);

(statearr_37494[(9)] = inst_37288);

(statearr_37494[(10)] = inst_37291);

(statearr_37494[(32)] = inst_37311);

return statearr_37494;
})();
var statearr_37495_37561 = state_37428__$1;
(statearr_37495_37561[(2)] = null);

(statearr_37495_37561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (45))){
var state_37428__$1 = state_37428;
var statearr_37496_37562 = state_37428__$1;
(statearr_37496_37562[(2)] = null);

(statearr_37496_37562[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (26))){
var inst_37349 = (state_37428[(23)]);
var inst_37345 = (state_37428[(24)]);
var inst_37341 = (state_37428[(19)]);
var inst_37344 = (state_37428[(25)]);
var inst_37347 = (state_37428[(26)]);
var inst_37364 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37366 = (function (){var all_files = inst_37341;
var res_SINGLEQUOTE_ = inst_37344;
var res = inst_37345;
var files_not_loaded = inst_37347;
var dependencies_that_loaded = inst_37349;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37349,inst_37345,inst_37341,inst_37344,inst_37347,inst_37364,state_val_37429,c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37365){
var map__37497 = p__37365;
var map__37497__$1 = ((((!((map__37497 == null)))?((((map__37497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37497):map__37497);
var namespace = cljs.core.get.call(null,map__37497__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37497__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37349,inst_37345,inst_37341,inst_37344,inst_37347,inst_37364,state_val_37429,c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37367 = cljs.core.map.call(null,inst_37366,inst_37345);
var inst_37368 = cljs.core.pr_str.call(null,inst_37367);
var inst_37369 = figwheel.client.utils.log.call(null,inst_37368);
var inst_37370 = (function (){var all_files = inst_37341;
var res_SINGLEQUOTE_ = inst_37344;
var res = inst_37345;
var files_not_loaded = inst_37347;
var dependencies_that_loaded = inst_37349;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37349,inst_37345,inst_37341,inst_37344,inst_37347,inst_37364,inst_37366,inst_37367,inst_37368,inst_37369,state_val_37429,c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37349,inst_37345,inst_37341,inst_37344,inst_37347,inst_37364,inst_37366,inst_37367,inst_37368,inst_37369,state_val_37429,c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37371 = setTimeout(inst_37370,(10));
var state_37428__$1 = (function (){var statearr_37499 = state_37428;
(statearr_37499[(33)] = inst_37364);

(statearr_37499[(34)] = inst_37369);

return statearr_37499;
})();
var statearr_37500_37563 = state_37428__$1;
(statearr_37500_37563[(2)] = inst_37371);

(statearr_37500_37563[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (16))){
var state_37428__$1 = state_37428;
var statearr_37501_37564 = state_37428__$1;
(statearr_37501_37564[(2)] = reload_dependents);

(statearr_37501_37564[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (38))){
var inst_37381 = (state_37428[(16)]);
var inst_37399 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37381);
var state_37428__$1 = state_37428;
var statearr_37502_37565 = state_37428__$1;
(statearr_37502_37565[(2)] = inst_37399);

(statearr_37502_37565[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (30))){
var state_37428__$1 = state_37428;
var statearr_37503_37566 = state_37428__$1;
(statearr_37503_37566[(2)] = null);

(statearr_37503_37566[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (10))){
var inst_37301 = (state_37428[(22)]);
var inst_37303 = cljs.core.chunked_seq_QMARK_.call(null,inst_37301);
var state_37428__$1 = state_37428;
if(inst_37303){
var statearr_37504_37567 = state_37428__$1;
(statearr_37504_37567[(1)] = (13));

} else {
var statearr_37505_37568 = state_37428__$1;
(statearr_37505_37568[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (18))){
var inst_37335 = (state_37428[(2)]);
var state_37428__$1 = state_37428;
if(cljs.core.truth_(inst_37335)){
var statearr_37506_37569 = state_37428__$1;
(statearr_37506_37569[(1)] = (19));

} else {
var statearr_37507_37570 = state_37428__$1;
(statearr_37507_37570[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (42))){
var state_37428__$1 = state_37428;
var statearr_37508_37571 = state_37428__$1;
(statearr_37508_37571[(2)] = null);

(statearr_37508_37571[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (37))){
var inst_37394 = (state_37428[(2)]);
var state_37428__$1 = state_37428;
var statearr_37509_37572 = state_37428__$1;
(statearr_37509_37572[(2)] = inst_37394);

(statearr_37509_37572[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (8))){
var inst_37288 = (state_37428[(9)]);
var inst_37301 = (state_37428[(22)]);
var inst_37301__$1 = cljs.core.seq.call(null,inst_37288);
var state_37428__$1 = (function (){var statearr_37510 = state_37428;
(statearr_37510[(22)] = inst_37301__$1);

return statearr_37510;
})();
if(inst_37301__$1){
var statearr_37511_37573 = state_37428__$1;
(statearr_37511_37573[(1)] = (10));

} else {
var statearr_37512_37574 = state_37428__$1;
(statearr_37512_37574[(1)] = (11));

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
});})(c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34336__auto__,c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34337__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34337__auto____0 = (function (){
var statearr_37513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37513[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34337__auto__);

(statearr_37513[(1)] = (1));

return statearr_37513;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34337__auto____1 = (function (state_37428){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_37428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e37514){if((e37514 instanceof Object)){
var ex__34340__auto__ = e37514;
var statearr_37515_37575 = state_37428;
(statearr_37515_37575[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37576 = state_37428;
state_37428 = G__37576;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34337__auto__ = function(state_37428){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34337__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34337__auto____1.call(this,state_37428);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34337__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34337__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34426__auto__ = (function (){var statearr_37516 = f__34425__auto__.call(null);
(statearr_37516[(6)] = c__34424__auto__);

return statearr_37516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto__,map__37273,map__37273__$1,opts,before_jsload,on_jsload,reload_dependents,map__37274,map__37274__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34424__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37579,link){
var map__37580 = p__37579;
var map__37580__$1 = ((((!((map__37580 == null)))?((((map__37580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37580):map__37580);
var file = cljs.core.get.call(null,map__37580__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37580,map__37580__$1,file){
return (function (p1__37577_SHARP_,p2__37578_SHARP_){
if(cljs.core._EQ_.call(null,p1__37577_SHARP_,p2__37578_SHARP_)){
return p1__37577_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37580,map__37580__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37583){
var map__37584 = p__37583;
var map__37584__$1 = ((((!((map__37584 == null)))?((((map__37584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37584):map__37584);
var match_length = cljs.core.get.call(null,map__37584__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37584__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37582_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37582_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37586_SHARP_,p2__37587_SHARP_){
return cljs.core.assoc.call(null,p1__37586_SHARP_,cljs.core.get.call(null,p2__37587_SHARP_,key),p2__37587_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37588 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37588);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37588);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37589,p__37590){
var map__37591 = p__37589;
var map__37591__$1 = ((((!((map__37591 == null)))?((((map__37591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37591):map__37591);
var on_cssload = cljs.core.get.call(null,map__37591__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37592 = p__37590;
var map__37592__$1 = ((((!((map__37592 == null)))?((((map__37592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37592):map__37592);
var files_msg = map__37592__$1;
var files = cljs.core.get.call(null,map__37592__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1512059527982
