// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = (function (){var fexpr__17318 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__17318.cljs$core$IFn$_invoke$arity$1 ? fexpr__17318.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__17318.call(null,channel));
})();
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__17319){
var vec__17320 = p__17319;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17320,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17320,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__17323 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__17323)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__17323)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__17323)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__17323)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__17323)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17323)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17323)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__17324){
var map__17325 = p__17324;
var map__17325__$1 = ((((!((map__17325 == null)))?((((map__17325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17325):map__17325);
var request = map__17325__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17325__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17325__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17325__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__7668__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__17327 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__17327,default_headers);

cljs_http.core.apply_response_type_BANG_(G__17327,response_type);

G__17327.setTimeoutInterval(timeout);

G__17327.setWithCredentials(send_credentials);

return G__17327;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__17328){
var map__17329 = p__17328;
var map__17329__$1 = ((((!((map__17329 == null)))?((((map__17329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17329):map__17329);
var request = map__17329__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17329__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17329__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17329__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17329__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17329__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17329__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__7668__auto__ = request_method;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__17329,map__17329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__17331 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__17331) : cljs_http.core.error_kw.call(null,G__17331));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__17329,map__17329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_17354 = ((function (channel,request_url,method,headers__$1,xhr,map__17329,map__17329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__17329,map__17329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__17332_17355 = xhr;
G__17332_17355.setProgressEventsEnabled(true);

G__17332_17355.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_17354,cljs.core.cst$kw$upload));

G__17332_17355.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_17354,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__15405__auto___17356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto___17356,channel,request_url,method,headers__$1,xhr,map__17329,map__17329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto___17356,channel,request_url,method,headers__$1,xhr,map__17329,map__17329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_17343){
var state_val_17344 = (state_17343[(1)]);
if((state_val_17344 === (1))){
var state_17343__$1 = state_17343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17343__$1,(2),cancel);
} else {
if((state_val_17344 === (2))){
var inst_17334 = (state_17343[(2)]);
var inst_17335 = xhr.isComplete();
var inst_17336 = cljs.core.not(inst_17335);
var state_17343__$1 = (function (){var statearr_17345 = state_17343;
(statearr_17345[(7)] = inst_17334);

return statearr_17345;
})();
if(inst_17336){
var statearr_17346_17357 = state_17343__$1;
(statearr_17346_17357[(1)] = (3));

} else {
var statearr_17347_17358 = state_17343__$1;
(statearr_17347_17358[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17344 === (3))){
var inst_17338 = xhr.abort();
var state_17343__$1 = state_17343;
var statearr_17348_17359 = state_17343__$1;
(statearr_17348_17359[(2)] = inst_17338);

(statearr_17348_17359[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17344 === (4))){
var state_17343__$1 = state_17343;
var statearr_17349_17360 = state_17343__$1;
(statearr_17349_17360[(2)] = null);

(statearr_17349_17360[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17344 === (5))){
var inst_17341 = (state_17343[(2)]);
var state_17343__$1 = state_17343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17343__$1,inst_17341);
} else {
return null;
}
}
}
}
}
});})(c__15405__auto___17356,channel,request_url,method,headers__$1,xhr,map__17329,map__17329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__15305__auto__,c__15405__auto___17356,channel,request_url,method,headers__$1,xhr,map__17329,map__17329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__15306__auto__ = null;
var cljs_http$core$xhr_$_state_machine__15306__auto____0 = (function (){
var statearr_17350 = [null,null,null,null,null,null,null,null];
(statearr_17350[(0)] = cljs_http$core$xhr_$_state_machine__15306__auto__);

(statearr_17350[(1)] = (1));

return statearr_17350;
});
var cljs_http$core$xhr_$_state_machine__15306__auto____1 = (function (state_17343){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_17343);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e17351){if((e17351 instanceof Object)){
var ex__15309__auto__ = e17351;
var statearr_17352_17361 = state_17343;
(statearr_17352_17361[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17343);

return cljs.core.cst$kw$recur;
} else {
throw e17351;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__17362 = state_17343;
state_17343 = G__17362;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__15306__auto__ = function(state_17343){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__15306__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__15306__auto____1.call(this,state_17343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__15306__auto____0;
cljs_http$core$xhr_$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__15306__auto____1;
return cljs_http$core$xhr_$_state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto___17356,channel,request_url,method,headers__$1,xhr,map__17329,map__17329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__15407__auto__ = (function (){var statearr_17353 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_17353[(6)] = c__15405__auto___17356);

return statearr_17353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto___17356,channel,request_url,method,headers__$1,xhr,map__17329,map__17329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__17363){
var map__17364 = p__17363;
var map__17364__$1 = ((((!((map__17364 == null)))?((((map__17364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17364):map__17364);
var request = map__17364__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17364__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17364__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17364__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17364__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_17377 = jsonp.send(null,((function (channel,jsonp,map__17364,map__17364__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__17364,map__17364__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__17364,map__17364__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__17364,map__17364__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_17377], null));

if(cljs.core.truth_(cancel)){
var c__15405__auto___17378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto___17378,req_17377,channel,jsonp,map__17364,map__17364__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto___17378,req_17377,channel,jsonp,map__17364,map__17364__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_17370){
var state_val_17371 = (state_17370[(1)]);
if((state_val_17371 === (1))){
var state_17370__$1 = state_17370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17370__$1,(2),cancel);
} else {
if((state_val_17371 === (2))){
var inst_17367 = (state_17370[(2)]);
var inst_17368 = jsonp.cancel(req_17377);
var state_17370__$1 = (function (){var statearr_17372 = state_17370;
(statearr_17372[(7)] = inst_17367);

return statearr_17372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17370__$1,inst_17368);
} else {
return null;
}
}
});})(c__15405__auto___17378,req_17377,channel,jsonp,map__17364,map__17364__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__15305__auto__,c__15405__auto___17378,req_17377,channel,jsonp,map__17364,map__17364__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__15306__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__15306__auto____0 = (function (){
var statearr_17373 = [null,null,null,null,null,null,null,null];
(statearr_17373[(0)] = cljs_http$core$jsonp_$_state_machine__15306__auto__);

(statearr_17373[(1)] = (1));

return statearr_17373;
});
var cljs_http$core$jsonp_$_state_machine__15306__auto____1 = (function (state_17370){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_17370);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e17374){if((e17374 instanceof Object)){
var ex__15309__auto__ = e17374;
var statearr_17375_17379 = state_17370;
(statearr_17375_17379[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17370);

return cljs.core.cst$kw$recur;
} else {
throw e17374;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__17380 = state_17370;
state_17370 = G__17380;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__15306__auto__ = function(state_17370){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__15306__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__15306__auto____1.call(this,state_17370);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__15306__auto____0;
cljs_http$core$jsonp_$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__15306__auto____1;
return cljs_http$core$jsonp_$_state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto___17378,req_17377,channel,jsonp,map__17364,map__17364__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__15407__auto__ = (function (){var statearr_17376 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_17376[(6)] = c__15405__auto___17378);

return statearr_17376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto___17378,req_17377,channel,jsonp,map__17364,map__17364__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__17381){
var map__17382 = p__17381;
var map__17382__$1 = ((((!((map__17382 == null)))?((((map__17382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17382.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17382):map__17382);
var request = map__17382__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17382__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
