// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__28039__auto__ = v;
if(cljs.core.truth_(and__28039__auto__)){
return (v > (0));
} else {
return and__28039__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__36400_SHARP_,p2__36399_SHARP_){
var vec__36401 = clojure.string.split.call(null,p2__36399_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__36401,(0),null);
var v = cljs.core.nth.call(null,vec__36401,(1),null);
return cljs.core.assoc.call(null,p1__36400_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__36404_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__36404_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__36405){
var vec__36406 = p__36405;
var k = cljs.core.nth.call(null,vec__36406,(0),null);
var v = cljs.core.nth.call(null,vec__36406,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__36409_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36409_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__28039__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__28039__auto__){
var and__28039__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__28039__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__28039__auto____$1;
}
} else {
return and__28039__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__36410_SHARP_){
return cljs_http.client.decode_body.call(null,p1__36410_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__29229__auto__ = [];
var len__29222__auto___36417 = arguments.length;
var i__29223__auto___36418 = (0);
while(true){
if((i__29223__auto___36418 < len__29222__auto___36417)){
args__29229__auto__.push((arguments[i__29223__auto___36418]));

var G__36419 = (i__29223__auto___36418 + (1));
i__29223__auto___36418 = G__36419;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__36413){
var vec__36414 = p__36413;
var default_headers = cljs.core.nth.call(null,vec__36414,(0),null);
return ((function (vec__36414,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__28051__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__36414,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq36411){
var G__36412 = cljs.core.first.call(null,seq36411);
var seq36411__$1 = cljs.core.next.call(null,seq36411);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__36412,seq36411__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__29229__auto__ = [];
var len__29222__auto___36426 = arguments.length;
var i__29223__auto___36427 = (0);
while(true){
if((i__29223__auto___36427 < len__29222__auto___36426)){
args__29229__auto__.push((arguments[i__29223__auto___36427]));

var G__36428 = (i__29223__auto___36427 + (1));
i__29223__auto___36427 = G__36428;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__36422){
var vec__36423 = p__36422;
var accept = cljs.core.nth.call(null,vec__36423,(0),null);
return ((function (vec__36423,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__28051__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__36423,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq36420){
var G__36421 = cljs.core.first.call(null,seq36420);
var seq36420__$1 = cljs.core.next.call(null,seq36420);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__36421,seq36420__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__29229__auto__ = [];
var len__29222__auto___36435 = arguments.length;
var i__29223__auto___36436 = (0);
while(true){
if((i__29223__auto___36436 < len__29222__auto___36435)){
args__29229__auto__.push((arguments[i__29223__auto___36436]));

var G__36437 = (i__29223__auto___36436 + (1));
i__29223__auto___36436 = G__36437;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__36431){
var vec__36432 = p__36431;
var content_type = cljs.core.nth.call(null,vec__36432,(0),null);
return ((function (vec__36432,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__28051__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__36432,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq36429){
var G__36430 = cljs.core.first.call(null,seq36429);
var seq36429__$1 = cljs.core.next.call(null,seq36429);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__36430,seq36429__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__36438 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__36438__$1 = ((((!((map__36438 == null)))?((((map__36438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36438):map__36438);
var encoding = cljs.core.get.call(null,map__36438__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__36438__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__36442 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__36442__$1 = ((((!((map__36442 == null)))?((((map__36442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36442):map__36442);
var decoding = cljs.core.get.call(null,map__36442__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__36442__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__36442,map__36442__$1,decoding,decoding_opts){
return (function (p1__36440_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__36440_SHARP_,decoding,decoding_opts);
});})(map__36442,map__36442__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__36442,map__36442__$1,decoding,decoding_opts,transit_decode){
return (function (p1__36441_SHARP_){
return cljs_http.client.decode_body.call(null,p1__36441_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__36442,map__36442__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__36444_SHARP_){
return cljs_http.client.decode_body.call(null,p1__36444_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__36445){
var map__36446 = p__36445;
var map__36446__$1 = ((((!((map__36446 == null)))?((((map__36446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36446):map__36446);
var req = map__36446__$1;
var query_params = cljs.core.get.call(null,map__36446__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__36448){
var map__36449 = p__36448;
var map__36449__$1 = ((((!((map__36449 == null)))?((((map__36449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36449):map__36449);
var request = map__36449__$1;
var form_params = cljs.core.get.call(null,map__36449__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__36449__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__36449__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__28039__auto__ = form_params;
if(cljs.core.truth_(and__28039__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__28039__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__36451_36461 = cljs.core.seq.call(null,params);
var chunk__36452_36462 = null;
var count__36453_36463 = (0);
var i__36454_36464 = (0);
while(true){
if((i__36454_36464 < count__36453_36463)){
var vec__36455_36465 = cljs.core._nth.call(null,chunk__36452_36462,i__36454_36464);
var k_36466 = cljs.core.nth.call(null,vec__36455_36465,(0),null);
var v_36467 = cljs.core.nth.call(null,vec__36455_36465,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_36467)){
form_data.append(cljs.core.name.call(null,k_36466),cljs.core.first.call(null,v_36467),cljs.core.second.call(null,v_36467));
} else {
form_data.append(cljs.core.name.call(null,k_36466),v_36467);
}

var G__36468 = seq__36451_36461;
var G__36469 = chunk__36452_36462;
var G__36470 = count__36453_36463;
var G__36471 = (i__36454_36464 + (1));
seq__36451_36461 = G__36468;
chunk__36452_36462 = G__36469;
count__36453_36463 = G__36470;
i__36454_36464 = G__36471;
continue;
} else {
var temp__4657__auto___36472 = cljs.core.seq.call(null,seq__36451_36461);
if(temp__4657__auto___36472){
var seq__36451_36473__$1 = temp__4657__auto___36472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36451_36473__$1)){
var c__28890__auto___36474 = cljs.core.chunk_first.call(null,seq__36451_36473__$1);
var G__36475 = cljs.core.chunk_rest.call(null,seq__36451_36473__$1);
var G__36476 = c__28890__auto___36474;
var G__36477 = cljs.core.count.call(null,c__28890__auto___36474);
var G__36478 = (0);
seq__36451_36461 = G__36475;
chunk__36452_36462 = G__36476;
count__36453_36463 = G__36477;
i__36454_36464 = G__36478;
continue;
} else {
var vec__36458_36479 = cljs.core.first.call(null,seq__36451_36473__$1);
var k_36480 = cljs.core.nth.call(null,vec__36458_36479,(0),null);
var v_36481 = cljs.core.nth.call(null,vec__36458_36479,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_36481)){
form_data.append(cljs.core.name.call(null,k_36480),cljs.core.first.call(null,v_36481),cljs.core.second.call(null,v_36481));
} else {
form_data.append(cljs.core.name.call(null,k_36480),v_36481);
}

var G__36482 = cljs.core.next.call(null,seq__36451_36473__$1);
var G__36483 = null;
var G__36484 = (0);
var G__36485 = (0);
seq__36451_36461 = G__36482;
chunk__36452_36462 = G__36483;
count__36453_36463 = G__36484;
i__36454_36464 = G__36485;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__36486){
var map__36487 = p__36486;
var map__36487__$1 = ((((!((map__36487 == null)))?((((map__36487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36487):map__36487);
var request = map__36487__$1;
var multipart_params = cljs.core.get.call(null,map__36487__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__36487__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__28039__auto__ = multipart_params;
if(cljs.core.truth_(and__28039__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__28039__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__36489_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__36489_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__36491){
var map__36492 = p__36491;
var map__36492__$1 = ((((!((map__36492 == null)))?((((map__36492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36492):map__36492);
var req = map__36492__$1;
var query_params = cljs.core.get.call(null,map__36492__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__36492,map__36492__$1,req,query_params){
return (function (p1__36490_SHARP_){
return cljs.core.merge.call(null,p1__36490_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__36492,map__36492__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__29229__auto__ = [];
var len__29222__auto___36500 = arguments.length;
var i__29223__auto___36501 = (0);
while(true){
if((i__29223__auto___36501 < len__29222__auto___36500)){
args__29229__auto__.push((arguments[i__29223__auto___36501]));

var G__36502 = (i__29223__auto___36501 + (1));
i__29223__auto___36501 = G__36502;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__36496){
var vec__36497 = p__36496;
var credentials = cljs.core.nth.call(null,vec__36497,(0),null);
return ((function (vec__36497,credentials){
return (function (req){
var credentials__$1 = (function (){var or__28051__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__36497,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq36494){
var G__36495 = cljs.core.first.call(null,seq36494);
var seq36494__$1 = cljs.core.next.call(null,seq36494);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__36495,seq36494__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__29229__auto__ = [];
var len__29222__auto___36509 = arguments.length;
var i__29223__auto___36510 = (0);
while(true){
if((i__29223__auto___36510 < len__29222__auto___36509)){
args__29229__auto__.push((arguments[i__29223__auto___36510]));

var G__36511 = (i__29223__auto___36510 + (1));
i__29223__auto___36510 = G__36511;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__36505){
var vec__36506 = p__36505;
var req = cljs.core.nth.call(null,vec__36506,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq36503){
var G__36504 = cljs.core.first.call(null,seq36503);
var seq36503__$1 = cljs.core.next.call(null,seq36503);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__36504,seq36503__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__29229__auto__ = [];
var len__29222__auto___36518 = arguments.length;
var i__29223__auto___36519 = (0);
while(true){
if((i__29223__auto___36519 < len__29222__auto___36518)){
args__29229__auto__.push((arguments[i__29223__auto___36519]));

var G__36520 = (i__29223__auto___36519 + (1));
i__29223__auto___36519 = G__36520;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__36514){
var vec__36515 = p__36514;
var req = cljs.core.nth.call(null,vec__36515,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq36512){
var G__36513 = cljs.core.first.call(null,seq36512);
var seq36512__$1 = cljs.core.next.call(null,seq36512);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__36513,seq36512__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__29229__auto__ = [];
var len__29222__auto___36527 = arguments.length;
var i__29223__auto___36528 = (0);
while(true){
if((i__29223__auto___36528 < len__29222__auto___36527)){
args__29229__auto__.push((arguments[i__29223__auto___36528]));

var G__36529 = (i__29223__auto___36528 + (1));
i__29223__auto___36528 = G__36529;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__36523){
var vec__36524 = p__36523;
var req = cljs.core.nth.call(null,vec__36524,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq36521){
var G__36522 = cljs.core.first.call(null,seq36521);
var seq36521__$1 = cljs.core.next.call(null,seq36521);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__36522,seq36521__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__29229__auto__ = [];
var len__29222__auto___36536 = arguments.length;
var i__29223__auto___36537 = (0);
while(true){
if((i__29223__auto___36537 < len__29222__auto___36536)){
args__29229__auto__.push((arguments[i__29223__auto___36537]));

var G__36538 = (i__29223__auto___36537 + (1));
i__29223__auto___36537 = G__36538;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__36532){
var vec__36533 = p__36532;
var req = cljs.core.nth.call(null,vec__36533,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq36530){
var G__36531 = cljs.core.first.call(null,seq36530);
var seq36530__$1 = cljs.core.next.call(null,seq36530);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__36531,seq36530__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__29229__auto__ = [];
var len__29222__auto___36545 = arguments.length;
var i__29223__auto___36546 = (0);
while(true){
if((i__29223__auto___36546 < len__29222__auto___36545)){
args__29229__auto__.push((arguments[i__29223__auto___36546]));

var G__36547 = (i__29223__auto___36546 + (1));
i__29223__auto___36546 = G__36547;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__36541){
var vec__36542 = p__36541;
var req = cljs.core.nth.call(null,vec__36542,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq36539){
var G__36540 = cljs.core.first.call(null,seq36539);
var seq36539__$1 = cljs.core.next.call(null,seq36539);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__36540,seq36539__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__29229__auto__ = [];
var len__29222__auto___36554 = arguments.length;
var i__29223__auto___36555 = (0);
while(true){
if((i__29223__auto___36555 < len__29222__auto___36554)){
args__29229__auto__.push((arguments[i__29223__auto___36555]));

var G__36556 = (i__29223__auto___36555 + (1));
i__29223__auto___36555 = G__36556;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__36550){
var vec__36551 = p__36550;
var req = cljs.core.nth.call(null,vec__36551,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq36548){
var G__36549 = cljs.core.first.call(null,seq36548);
var seq36548__$1 = cljs.core.next.call(null,seq36548);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__36549,seq36548__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__29229__auto__ = [];
var len__29222__auto___36563 = arguments.length;
var i__29223__auto___36564 = (0);
while(true){
if((i__29223__auto___36564 < len__29222__auto___36563)){
args__29229__auto__.push((arguments[i__29223__auto___36564]));

var G__36565 = (i__29223__auto___36564 + (1));
i__29223__auto___36564 = G__36565;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__36559){
var vec__36560 = p__36559;
var req = cljs.core.nth.call(null,vec__36560,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq36557){
var G__36558 = cljs.core.first.call(null,seq36557);
var seq36557__$1 = cljs.core.next.call(null,seq36557);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__36558,seq36557__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__29229__auto__ = [];
var len__29222__auto___36572 = arguments.length;
var i__29223__auto___36573 = (0);
while(true){
if((i__29223__auto___36573 < len__29222__auto___36572)){
args__29229__auto__.push((arguments[i__29223__auto___36573]));

var G__36574 = (i__29223__auto___36573 + (1));
i__29223__auto___36573 = G__36574;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__36568){
var vec__36569 = p__36568;
var req = cljs.core.nth.call(null,vec__36569,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq36566){
var G__36567 = cljs.core.first.call(null,seq36566);
var seq36566__$1 = cljs.core.next.call(null,seq36566);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__36567,seq36566__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__29229__auto__ = [];
var len__29222__auto___36581 = arguments.length;
var i__29223__auto___36582 = (0);
while(true){
if((i__29223__auto___36582 < len__29222__auto___36581)){
args__29229__auto__.push((arguments[i__29223__auto___36582]));

var G__36583 = (i__29223__auto___36582 + (1));
i__29223__auto___36582 = G__36583;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__36577){
var vec__36578 = p__36577;
var req = cljs.core.nth.call(null,vec__36578,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq36575){
var G__36576 = cljs.core.first.call(null,seq36575);
var seq36575__$1 = cljs.core.next.call(null,seq36575);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__36576,seq36575__$1);
});


//# sourceMappingURL=client.js.map?rel=1512059526856
