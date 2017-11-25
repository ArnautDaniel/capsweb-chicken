// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15451 = arguments.length;
switch (G__15451) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15452 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15452 = (function (f,blockable,meta15453){
this.f = f;
this.blockable = blockable;
this.meta15453 = meta15453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15454,meta15453__$1){
var self__ = this;
var _15454__$1 = this;
return (new cljs.core.async.t_cljs$core$async15452(self__.f,self__.blockable,meta15453__$1));
});

cljs.core.async.t_cljs$core$async15452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15454){
var self__ = this;
var _15454__$1 = this;
return self__.meta15453;
});

cljs.core.async.t_cljs$core$async15452.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15452.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15452.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15452.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15453], null);
});

cljs.core.async.t_cljs$core$async15452.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15452";

cljs.core.async.t_cljs$core$async15452.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async15452");
});

cljs.core.async.__GT_t_cljs$core$async15452 = (function cljs$core$async$__GT_t_cljs$core$async15452(f__$1,blockable__$1,meta15453){
return (new cljs.core.async.t_cljs$core$async15452(f__$1,blockable__$1,meta15453));
});

}

return (new cljs.core.async.t_cljs$core$async15452(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15458 = arguments.length;
switch (G__15458) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15461 = arguments.length;
switch (G__15461) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15464 = arguments.length;
switch (G__15464) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15466 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15466) : fn1.call(null,val_15466));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15466,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15466) : fn1.call(null,val_15466));
});})(val_15466,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15468 = arguments.length;
switch (G__15468) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8615__auto___15470 = n;
var x_15471 = (0);
while(true){
if((x_15471 < n__8615__auto___15470)){
(a[x_15471] = (0));

var G__15472 = (x_15471 + (1));
x_15471 = G__15472;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__15473 = (i + (1));
i = G__15473;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async15474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15474 = (function (flag,meta15475){
this.flag = flag;
this.meta15475 = meta15475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15476,meta15475__$1){
var self__ = this;
var _15476__$1 = this;
return (new cljs.core.async.t_cljs$core$async15474(self__.flag,meta15475__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15476){
var self__ = this;
var _15476__$1 = this;
return self__.meta15475;
});})(flag))
;

cljs.core.async.t_cljs$core$async15474.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15474.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15474.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15475], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15474";

cljs.core.async.t_cljs$core$async15474.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async15474");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15474 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15474(flag__$1,meta15475){
return (new cljs.core.async.t_cljs$core$async15474(flag__$1,meta15475));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15474(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15477 = (function (flag,cb,meta15478){
this.flag = flag;
this.cb = cb;
this.meta15478 = meta15478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15479,meta15478__$1){
var self__ = this;
var _15479__$1 = this;
return (new cljs.core.async.t_cljs$core$async15477(self__.flag,self__.cb,meta15478__$1));
});

cljs.core.async.t_cljs$core$async15477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15479){
var self__ = this;
var _15479__$1 = this;
return self__.meta15478;
});

cljs.core.async.t_cljs$core$async15477.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15477.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15478], null);
});

cljs.core.async.t_cljs$core$async15477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15477";

cljs.core.async.t_cljs$core$async15477.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async15477");
});

cljs.core.async.__GT_t_cljs$core$async15477 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15477(flag__$1,cb__$1,meta15478){
return (new cljs.core.async.t_cljs$core$async15477(flag__$1,cb__$1,meta15478));
});

}

return (new cljs.core.async.t_cljs$core$async15477(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15480_SHARP_){
var G__15482 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15480_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15482) : fret.call(null,G__15482));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15481_SHARP_){
var G__15483 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15481_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15483) : fret.call(null,G__15483));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__7668__auto__ = wport;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15484 = (i + (1));
i = G__15484;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7668__auto__ = ret;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__7656__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__7656__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___15490 = arguments.length;
var i__8840__auto___15491 = (0);
while(true){
if((i__8840__auto___15491 < len__8839__auto___15490)){
args__8846__auto__.push((arguments[i__8840__auto___15491]));

var G__15492 = (i__8840__auto___15491 + (1));
i__8840__auto___15491 = G__15492;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15487){
var map__15488 = p__15487;
var map__15488__$1 = ((((!((map__15488 == null)))?((((map__15488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15488):map__15488);
var opts = map__15488__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15485){
var G__15486 = cljs.core.first(seq15485);
var seq15485__$1 = cljs.core.next(seq15485);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15486,seq15485__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15494 = arguments.length;
switch (G__15494) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15405__auto___15540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto___15540){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto___15540){
return (function (state_15518){
var state_val_15519 = (state_15518[(1)]);
if((state_val_15519 === (7))){
var inst_15514 = (state_15518[(2)]);
var state_15518__$1 = state_15518;
var statearr_15520_15541 = state_15518__$1;
(statearr_15520_15541[(2)] = inst_15514);

(statearr_15520_15541[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15519 === (1))){
var state_15518__$1 = state_15518;
var statearr_15521_15542 = state_15518__$1;
(statearr_15521_15542[(2)] = null);

(statearr_15521_15542[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15519 === (4))){
var inst_15497 = (state_15518[(7)]);
var inst_15497__$1 = (state_15518[(2)]);
var inst_15498 = (inst_15497__$1 == null);
var state_15518__$1 = (function (){var statearr_15522 = state_15518;
(statearr_15522[(7)] = inst_15497__$1);

return statearr_15522;
})();
if(cljs.core.truth_(inst_15498)){
var statearr_15523_15543 = state_15518__$1;
(statearr_15523_15543[(1)] = (5));

} else {
var statearr_15524_15544 = state_15518__$1;
(statearr_15524_15544[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15519 === (13))){
var state_15518__$1 = state_15518;
var statearr_15525_15545 = state_15518__$1;
(statearr_15525_15545[(2)] = null);

(statearr_15525_15545[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15519 === (6))){
var inst_15497 = (state_15518[(7)]);
var state_15518__$1 = state_15518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15518__$1,(11),to,inst_15497);
} else {
if((state_val_15519 === (3))){
var inst_15516 = (state_15518[(2)]);
var state_15518__$1 = state_15518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15518__$1,inst_15516);
} else {
if((state_val_15519 === (12))){
var state_15518__$1 = state_15518;
var statearr_15526_15546 = state_15518__$1;
(statearr_15526_15546[(2)] = null);

(statearr_15526_15546[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15519 === (2))){
var state_15518__$1 = state_15518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15518__$1,(4),from);
} else {
if((state_val_15519 === (11))){
var inst_15507 = (state_15518[(2)]);
var state_15518__$1 = state_15518;
if(cljs.core.truth_(inst_15507)){
var statearr_15527_15547 = state_15518__$1;
(statearr_15527_15547[(1)] = (12));

} else {
var statearr_15528_15548 = state_15518__$1;
(statearr_15528_15548[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15519 === (9))){
var state_15518__$1 = state_15518;
var statearr_15529_15549 = state_15518__$1;
(statearr_15529_15549[(2)] = null);

(statearr_15529_15549[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15519 === (5))){
var state_15518__$1 = state_15518;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15530_15550 = state_15518__$1;
(statearr_15530_15550[(1)] = (8));

} else {
var statearr_15531_15551 = state_15518__$1;
(statearr_15531_15551[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15519 === (14))){
var inst_15512 = (state_15518[(2)]);
var state_15518__$1 = state_15518;
var statearr_15532_15552 = state_15518__$1;
(statearr_15532_15552[(2)] = inst_15512);

(statearr_15532_15552[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15519 === (10))){
var inst_15504 = (state_15518[(2)]);
var state_15518__$1 = state_15518;
var statearr_15533_15553 = state_15518__$1;
(statearr_15533_15553[(2)] = inst_15504);

(statearr_15533_15553[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15519 === (8))){
var inst_15501 = cljs.core.async.close_BANG_(to);
var state_15518__$1 = state_15518;
var statearr_15534_15554 = state_15518__$1;
(statearr_15534_15554[(2)] = inst_15501);

(statearr_15534_15554[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15405__auto___15540))
;
return ((function (switch__15305__auto__,c__15405__auto___15540){
return (function() {
var cljs$core$async$state_machine__15306__auto__ = null;
var cljs$core$async$state_machine__15306__auto____0 = (function (){
var statearr_15535 = [null,null,null,null,null,null,null,null];
(statearr_15535[(0)] = cljs$core$async$state_machine__15306__auto__);

(statearr_15535[(1)] = (1));

return statearr_15535;
});
var cljs$core$async$state_machine__15306__auto____1 = (function (state_15518){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_15518);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e15536){if((e15536 instanceof Object)){
var ex__15309__auto__ = e15536;
var statearr_15537_15555 = state_15518;
(statearr_15537_15555[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15518);

return cljs.core.cst$kw$recur;
} else {
throw e15536;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__15556 = state_15518;
state_15518 = G__15556;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$state_machine__15306__auto__ = function(state_15518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15306__auto____1.call(this,state_15518);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15306__auto____0;
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15306__auto____1;
return cljs$core$async$state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto___15540))
})();
var state__15407__auto__ = (function (){var statearr_15538 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_15538[(6)] = c__15405__auto___15540);

return statearr_15538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto___15540))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__15557){
var vec__15558 = p__15557;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15558,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15558,(1),null);
var job = vec__15558;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15405__auto___15729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto___15729,res,vec__15558,v,p,job,jobs,results){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto___15729,res,vec__15558,v,p,job,jobs,results){
return (function (state_15565){
var state_val_15566 = (state_15565[(1)]);
if((state_val_15566 === (1))){
var state_15565__$1 = state_15565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15565__$1,(2),res,v);
} else {
if((state_val_15566 === (2))){
var inst_15562 = (state_15565[(2)]);
var inst_15563 = cljs.core.async.close_BANG_(res);
var state_15565__$1 = (function (){var statearr_15567 = state_15565;
(statearr_15567[(7)] = inst_15562);

return statearr_15567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15565__$1,inst_15563);
} else {
return null;
}
}
});})(c__15405__auto___15729,res,vec__15558,v,p,job,jobs,results))
;
return ((function (switch__15305__auto__,c__15405__auto___15729,res,vec__15558,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____0 = (function (){
var statearr_15568 = [null,null,null,null,null,null,null,null];
(statearr_15568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__);

(statearr_15568[(1)] = (1));

return statearr_15568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____1 = (function (state_15565){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_15565);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e15569){if((e15569 instanceof Object)){
var ex__15309__auto__ = e15569;
var statearr_15570_15730 = state_15565;
(statearr_15570_15730[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15565);

return cljs.core.cst$kw$recur;
} else {
throw e15569;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__15731 = state_15565;
state_15565 = G__15731;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__ = function(state_15565){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____1.call(this,state_15565);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto___15729,res,vec__15558,v,p,job,jobs,results))
})();
var state__15407__auto__ = (function (){var statearr_15571 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_15571[(6)] = c__15405__auto___15729);

return statearr_15571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto___15729,res,vec__15558,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15572){
var vec__15573 = p__15572;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15573,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15573,(1),null);
var job = vec__15573;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__8615__auto___15732 = n;
var __15733 = (0);
while(true){
if((__15733 < n__8615__auto___15732)){
var G__15576_15734 = type;
var G__15576_15735__$1 = (((G__15576_15734 instanceof cljs.core.Keyword))?G__15576_15734.fqn:null);
switch (G__15576_15735__$1) {
case "compute":
var c__15405__auto___15737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15733,c__15405__auto___15737,G__15576_15734,G__15576_15735__$1,n__8615__auto___15732,jobs,results,process,async){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (__15733,c__15405__auto___15737,G__15576_15734,G__15576_15735__$1,n__8615__auto___15732,jobs,results,process,async){
return (function (state_15589){
var state_val_15590 = (state_15589[(1)]);
if((state_val_15590 === (1))){
var state_15589__$1 = state_15589;
var statearr_15591_15738 = state_15589__$1;
(statearr_15591_15738[(2)] = null);

(statearr_15591_15738[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15590 === (2))){
var state_15589__$1 = state_15589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15589__$1,(4),jobs);
} else {
if((state_val_15590 === (3))){
var inst_15587 = (state_15589[(2)]);
var state_15589__$1 = state_15589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15589__$1,inst_15587);
} else {
if((state_val_15590 === (4))){
var inst_15579 = (state_15589[(2)]);
var inst_15580 = process(inst_15579);
var state_15589__$1 = state_15589;
if(cljs.core.truth_(inst_15580)){
var statearr_15592_15739 = state_15589__$1;
(statearr_15592_15739[(1)] = (5));

} else {
var statearr_15593_15740 = state_15589__$1;
(statearr_15593_15740[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15590 === (5))){
var state_15589__$1 = state_15589;
var statearr_15594_15741 = state_15589__$1;
(statearr_15594_15741[(2)] = null);

(statearr_15594_15741[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15590 === (6))){
var state_15589__$1 = state_15589;
var statearr_15595_15742 = state_15589__$1;
(statearr_15595_15742[(2)] = null);

(statearr_15595_15742[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15590 === (7))){
var inst_15585 = (state_15589[(2)]);
var state_15589__$1 = state_15589;
var statearr_15596_15743 = state_15589__$1;
(statearr_15596_15743[(2)] = inst_15585);

(statearr_15596_15743[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15733,c__15405__auto___15737,G__15576_15734,G__15576_15735__$1,n__8615__auto___15732,jobs,results,process,async))
;
return ((function (__15733,switch__15305__auto__,c__15405__auto___15737,G__15576_15734,G__15576_15735__$1,n__8615__auto___15732,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____0 = (function (){
var statearr_15597 = [null,null,null,null,null,null,null];
(statearr_15597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__);

(statearr_15597[(1)] = (1));

return statearr_15597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____1 = (function (state_15589){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_15589);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e15598){if((e15598 instanceof Object)){
var ex__15309__auto__ = e15598;
var statearr_15599_15744 = state_15589;
(statearr_15599_15744[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15589);

return cljs.core.cst$kw$recur;
} else {
throw e15598;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__15745 = state_15589;
state_15589 = G__15745;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__ = function(state_15589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____1.call(this,state_15589);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__;
})()
;})(__15733,switch__15305__auto__,c__15405__auto___15737,G__15576_15734,G__15576_15735__$1,n__8615__auto___15732,jobs,results,process,async))
})();
var state__15407__auto__ = (function (){var statearr_15600 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_15600[(6)] = c__15405__auto___15737);

return statearr_15600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(__15733,c__15405__auto___15737,G__15576_15734,G__15576_15735__$1,n__8615__auto___15732,jobs,results,process,async))
);


break;
case "async":
var c__15405__auto___15746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15733,c__15405__auto___15746,G__15576_15734,G__15576_15735__$1,n__8615__auto___15732,jobs,results,process,async){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (__15733,c__15405__auto___15746,G__15576_15734,G__15576_15735__$1,n__8615__auto___15732,jobs,results,process,async){
return (function (state_15613){
var state_val_15614 = (state_15613[(1)]);
if((state_val_15614 === (1))){
var state_15613__$1 = state_15613;
var statearr_15615_15747 = state_15613__$1;
(statearr_15615_15747[(2)] = null);

(statearr_15615_15747[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15614 === (2))){
var state_15613__$1 = state_15613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15613__$1,(4),jobs);
} else {
if((state_val_15614 === (3))){
var inst_15611 = (state_15613[(2)]);
var state_15613__$1 = state_15613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15613__$1,inst_15611);
} else {
if((state_val_15614 === (4))){
var inst_15603 = (state_15613[(2)]);
var inst_15604 = async(inst_15603);
var state_15613__$1 = state_15613;
if(cljs.core.truth_(inst_15604)){
var statearr_15616_15748 = state_15613__$1;
(statearr_15616_15748[(1)] = (5));

} else {
var statearr_15617_15749 = state_15613__$1;
(statearr_15617_15749[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15614 === (5))){
var state_15613__$1 = state_15613;
var statearr_15618_15750 = state_15613__$1;
(statearr_15618_15750[(2)] = null);

(statearr_15618_15750[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15614 === (6))){
var state_15613__$1 = state_15613;
var statearr_15619_15751 = state_15613__$1;
(statearr_15619_15751[(2)] = null);

(statearr_15619_15751[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15614 === (7))){
var inst_15609 = (state_15613[(2)]);
var state_15613__$1 = state_15613;
var statearr_15620_15752 = state_15613__$1;
(statearr_15620_15752[(2)] = inst_15609);

(statearr_15620_15752[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15733,c__15405__auto___15746,G__15576_15734,G__15576_15735__$1,n__8615__auto___15732,jobs,results,process,async))
;
return ((function (__15733,switch__15305__auto__,c__15405__auto___15746,G__15576_15734,G__15576_15735__$1,n__8615__auto___15732,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____0 = (function (){
var statearr_15621 = [null,null,null,null,null,null,null];
(statearr_15621[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__);

(statearr_15621[(1)] = (1));

return statearr_15621;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____1 = (function (state_15613){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_15613);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e15622){if((e15622 instanceof Object)){
var ex__15309__auto__ = e15622;
var statearr_15623_15753 = state_15613;
(statearr_15623_15753[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15613);

return cljs.core.cst$kw$recur;
} else {
throw e15622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__15754 = state_15613;
state_15613 = G__15754;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__ = function(state_15613){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____1.call(this,state_15613);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__;
})()
;})(__15733,switch__15305__auto__,c__15405__auto___15746,G__15576_15734,G__15576_15735__$1,n__8615__auto___15732,jobs,results,process,async))
})();
var state__15407__auto__ = (function (){var statearr_15624 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_15624[(6)] = c__15405__auto___15746);

return statearr_15624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(__15733,c__15405__auto___15746,G__15576_15734,G__15576_15735__$1,n__8615__auto___15732,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15576_15735__$1)].join('')));

}

var G__15755 = (__15733 + (1));
__15733 = G__15755;
continue;
} else {
}
break;
}

var c__15405__auto___15756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto___15756,jobs,results,process,async){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto___15756,jobs,results,process,async){
return (function (state_15646){
var state_val_15647 = (state_15646[(1)]);
if((state_val_15647 === (1))){
var state_15646__$1 = state_15646;
var statearr_15648_15757 = state_15646__$1;
(statearr_15648_15757[(2)] = null);

(statearr_15648_15757[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15647 === (2))){
var state_15646__$1 = state_15646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15646__$1,(4),from);
} else {
if((state_val_15647 === (3))){
var inst_15644 = (state_15646[(2)]);
var state_15646__$1 = state_15646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15646__$1,inst_15644);
} else {
if((state_val_15647 === (4))){
var inst_15627 = (state_15646[(7)]);
var inst_15627__$1 = (state_15646[(2)]);
var inst_15628 = (inst_15627__$1 == null);
var state_15646__$1 = (function (){var statearr_15649 = state_15646;
(statearr_15649[(7)] = inst_15627__$1);

return statearr_15649;
})();
if(cljs.core.truth_(inst_15628)){
var statearr_15650_15758 = state_15646__$1;
(statearr_15650_15758[(1)] = (5));

} else {
var statearr_15651_15759 = state_15646__$1;
(statearr_15651_15759[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15647 === (5))){
var inst_15630 = cljs.core.async.close_BANG_(jobs);
var state_15646__$1 = state_15646;
var statearr_15652_15760 = state_15646__$1;
(statearr_15652_15760[(2)] = inst_15630);

(statearr_15652_15760[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15647 === (6))){
var inst_15632 = (state_15646[(8)]);
var inst_15627 = (state_15646[(7)]);
var inst_15632__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15633 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15634 = [inst_15627,inst_15632__$1];
var inst_15635 = (new cljs.core.PersistentVector(null,2,(5),inst_15633,inst_15634,null));
var state_15646__$1 = (function (){var statearr_15653 = state_15646;
(statearr_15653[(8)] = inst_15632__$1);

return statearr_15653;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15646__$1,(8),jobs,inst_15635);
} else {
if((state_val_15647 === (7))){
var inst_15642 = (state_15646[(2)]);
var state_15646__$1 = state_15646;
var statearr_15654_15761 = state_15646__$1;
(statearr_15654_15761[(2)] = inst_15642);

(statearr_15654_15761[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15647 === (8))){
var inst_15632 = (state_15646[(8)]);
var inst_15637 = (state_15646[(2)]);
var state_15646__$1 = (function (){var statearr_15655 = state_15646;
(statearr_15655[(9)] = inst_15637);

return statearr_15655;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15646__$1,(9),results,inst_15632);
} else {
if((state_val_15647 === (9))){
var inst_15639 = (state_15646[(2)]);
var state_15646__$1 = (function (){var statearr_15656 = state_15646;
(statearr_15656[(10)] = inst_15639);

return statearr_15656;
})();
var statearr_15657_15762 = state_15646__$1;
(statearr_15657_15762[(2)] = null);

(statearr_15657_15762[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15405__auto___15756,jobs,results,process,async))
;
return ((function (switch__15305__auto__,c__15405__auto___15756,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____0 = (function (){
var statearr_15658 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__);

(statearr_15658[(1)] = (1));

return statearr_15658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____1 = (function (state_15646){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_15646);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e15659){if((e15659 instanceof Object)){
var ex__15309__auto__ = e15659;
var statearr_15660_15763 = state_15646;
(statearr_15660_15763[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15646);

return cljs.core.cst$kw$recur;
} else {
throw e15659;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__15764 = state_15646;
state_15646 = G__15764;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__ = function(state_15646){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____1.call(this,state_15646);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto___15756,jobs,results,process,async))
})();
var state__15407__auto__ = (function (){var statearr_15661 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_15661[(6)] = c__15405__auto___15756);

return statearr_15661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto___15756,jobs,results,process,async))
);


var c__15405__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto__,jobs,results,process,async){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto__,jobs,results,process,async){
return (function (state_15699){
var state_val_15700 = (state_15699[(1)]);
if((state_val_15700 === (7))){
var inst_15695 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
var statearr_15701_15765 = state_15699__$1;
(statearr_15701_15765[(2)] = inst_15695);

(statearr_15701_15765[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (20))){
var state_15699__$1 = state_15699;
var statearr_15702_15766 = state_15699__$1;
(statearr_15702_15766[(2)] = null);

(statearr_15702_15766[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (1))){
var state_15699__$1 = state_15699;
var statearr_15703_15767 = state_15699__$1;
(statearr_15703_15767[(2)] = null);

(statearr_15703_15767[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (4))){
var inst_15664 = (state_15699[(7)]);
var inst_15664__$1 = (state_15699[(2)]);
var inst_15665 = (inst_15664__$1 == null);
var state_15699__$1 = (function (){var statearr_15704 = state_15699;
(statearr_15704[(7)] = inst_15664__$1);

return statearr_15704;
})();
if(cljs.core.truth_(inst_15665)){
var statearr_15705_15768 = state_15699__$1;
(statearr_15705_15768[(1)] = (5));

} else {
var statearr_15706_15769 = state_15699__$1;
(statearr_15706_15769[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (15))){
var inst_15677 = (state_15699[(8)]);
var state_15699__$1 = state_15699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15699__$1,(18),to,inst_15677);
} else {
if((state_val_15700 === (21))){
var inst_15690 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
var statearr_15707_15770 = state_15699__$1;
(statearr_15707_15770[(2)] = inst_15690);

(statearr_15707_15770[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (13))){
var inst_15692 = (state_15699[(2)]);
var state_15699__$1 = (function (){var statearr_15708 = state_15699;
(statearr_15708[(9)] = inst_15692);

return statearr_15708;
})();
var statearr_15709_15771 = state_15699__$1;
(statearr_15709_15771[(2)] = null);

(statearr_15709_15771[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (6))){
var inst_15664 = (state_15699[(7)]);
var state_15699__$1 = state_15699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15699__$1,(11),inst_15664);
} else {
if((state_val_15700 === (17))){
var inst_15685 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
if(cljs.core.truth_(inst_15685)){
var statearr_15710_15772 = state_15699__$1;
(statearr_15710_15772[(1)] = (19));

} else {
var statearr_15711_15773 = state_15699__$1;
(statearr_15711_15773[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (3))){
var inst_15697 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15699__$1,inst_15697);
} else {
if((state_val_15700 === (12))){
var inst_15674 = (state_15699[(10)]);
var state_15699__$1 = state_15699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15699__$1,(14),inst_15674);
} else {
if((state_val_15700 === (2))){
var state_15699__$1 = state_15699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15699__$1,(4),results);
} else {
if((state_val_15700 === (19))){
var state_15699__$1 = state_15699;
var statearr_15712_15774 = state_15699__$1;
(statearr_15712_15774[(2)] = null);

(statearr_15712_15774[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (11))){
var inst_15674 = (state_15699[(2)]);
var state_15699__$1 = (function (){var statearr_15713 = state_15699;
(statearr_15713[(10)] = inst_15674);

return statearr_15713;
})();
var statearr_15714_15775 = state_15699__$1;
(statearr_15714_15775[(2)] = null);

(statearr_15714_15775[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (9))){
var state_15699__$1 = state_15699;
var statearr_15715_15776 = state_15699__$1;
(statearr_15715_15776[(2)] = null);

(statearr_15715_15776[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (5))){
var state_15699__$1 = state_15699;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15716_15777 = state_15699__$1;
(statearr_15716_15777[(1)] = (8));

} else {
var statearr_15717_15778 = state_15699__$1;
(statearr_15717_15778[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (14))){
var inst_15679 = (state_15699[(11)]);
var inst_15677 = (state_15699[(8)]);
var inst_15677__$1 = (state_15699[(2)]);
var inst_15678 = (inst_15677__$1 == null);
var inst_15679__$1 = cljs.core.not(inst_15678);
var state_15699__$1 = (function (){var statearr_15718 = state_15699;
(statearr_15718[(11)] = inst_15679__$1);

(statearr_15718[(8)] = inst_15677__$1);

return statearr_15718;
})();
if(inst_15679__$1){
var statearr_15719_15779 = state_15699__$1;
(statearr_15719_15779[(1)] = (15));

} else {
var statearr_15720_15780 = state_15699__$1;
(statearr_15720_15780[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (16))){
var inst_15679 = (state_15699[(11)]);
var state_15699__$1 = state_15699;
var statearr_15721_15781 = state_15699__$1;
(statearr_15721_15781[(2)] = inst_15679);

(statearr_15721_15781[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (10))){
var inst_15671 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
var statearr_15722_15782 = state_15699__$1;
(statearr_15722_15782[(2)] = inst_15671);

(statearr_15722_15782[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (18))){
var inst_15682 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
var statearr_15723_15783 = state_15699__$1;
(statearr_15723_15783[(2)] = inst_15682);

(statearr_15723_15783[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (8))){
var inst_15668 = cljs.core.async.close_BANG_(to);
var state_15699__$1 = state_15699;
var statearr_15724_15784 = state_15699__$1;
(statearr_15724_15784[(2)] = inst_15668);

(statearr_15724_15784[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15405__auto__,jobs,results,process,async))
;
return ((function (switch__15305__auto__,c__15405__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____0 = (function (){
var statearr_15725 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15725[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__);

(statearr_15725[(1)] = (1));

return statearr_15725;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____1 = (function (state_15699){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_15699);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e15726){if((e15726 instanceof Object)){
var ex__15309__auto__ = e15726;
var statearr_15727_15785 = state_15699;
(statearr_15727_15785[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15699);

return cljs.core.cst$kw$recur;
} else {
throw e15726;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__15786 = state_15699;
state_15699 = G__15786;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__ = function(state_15699){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____1.call(this,state_15699);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto__,jobs,results,process,async))
})();
var state__15407__auto__ = (function (){var statearr_15728 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_15728[(6)] = c__15405__auto__);

return statearr_15728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto__,jobs,results,process,async))
);

return c__15405__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15788 = arguments.length;
switch (G__15788) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15791 = arguments.length;
switch (G__15791) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15794 = arguments.length;
switch (G__15794) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15405__auto___15843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto___15843,tc,fc){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto___15843,tc,fc){
return (function (state_15820){
var state_val_15821 = (state_15820[(1)]);
if((state_val_15821 === (7))){
var inst_15816 = (state_15820[(2)]);
var state_15820__$1 = state_15820;
var statearr_15822_15844 = state_15820__$1;
(statearr_15822_15844[(2)] = inst_15816);

(statearr_15822_15844[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15821 === (1))){
var state_15820__$1 = state_15820;
var statearr_15823_15845 = state_15820__$1;
(statearr_15823_15845[(2)] = null);

(statearr_15823_15845[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15821 === (4))){
var inst_15797 = (state_15820[(7)]);
var inst_15797__$1 = (state_15820[(2)]);
var inst_15798 = (inst_15797__$1 == null);
var state_15820__$1 = (function (){var statearr_15824 = state_15820;
(statearr_15824[(7)] = inst_15797__$1);

return statearr_15824;
})();
if(cljs.core.truth_(inst_15798)){
var statearr_15825_15846 = state_15820__$1;
(statearr_15825_15846[(1)] = (5));

} else {
var statearr_15826_15847 = state_15820__$1;
(statearr_15826_15847[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15821 === (13))){
var state_15820__$1 = state_15820;
var statearr_15827_15848 = state_15820__$1;
(statearr_15827_15848[(2)] = null);

(statearr_15827_15848[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15821 === (6))){
var inst_15797 = (state_15820[(7)]);
var inst_15803 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15797) : p.call(null,inst_15797));
var state_15820__$1 = state_15820;
if(cljs.core.truth_(inst_15803)){
var statearr_15828_15849 = state_15820__$1;
(statearr_15828_15849[(1)] = (9));

} else {
var statearr_15829_15850 = state_15820__$1;
(statearr_15829_15850[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15821 === (3))){
var inst_15818 = (state_15820[(2)]);
var state_15820__$1 = state_15820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15820__$1,inst_15818);
} else {
if((state_val_15821 === (12))){
var state_15820__$1 = state_15820;
var statearr_15830_15851 = state_15820__$1;
(statearr_15830_15851[(2)] = null);

(statearr_15830_15851[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15821 === (2))){
var state_15820__$1 = state_15820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15820__$1,(4),ch);
} else {
if((state_val_15821 === (11))){
var inst_15797 = (state_15820[(7)]);
var inst_15807 = (state_15820[(2)]);
var state_15820__$1 = state_15820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15820__$1,(8),inst_15807,inst_15797);
} else {
if((state_val_15821 === (9))){
var state_15820__$1 = state_15820;
var statearr_15831_15852 = state_15820__$1;
(statearr_15831_15852[(2)] = tc);

(statearr_15831_15852[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15821 === (5))){
var inst_15800 = cljs.core.async.close_BANG_(tc);
var inst_15801 = cljs.core.async.close_BANG_(fc);
var state_15820__$1 = (function (){var statearr_15832 = state_15820;
(statearr_15832[(8)] = inst_15800);

return statearr_15832;
})();
var statearr_15833_15853 = state_15820__$1;
(statearr_15833_15853[(2)] = inst_15801);

(statearr_15833_15853[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15821 === (14))){
var inst_15814 = (state_15820[(2)]);
var state_15820__$1 = state_15820;
var statearr_15834_15854 = state_15820__$1;
(statearr_15834_15854[(2)] = inst_15814);

(statearr_15834_15854[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15821 === (10))){
var state_15820__$1 = state_15820;
var statearr_15835_15855 = state_15820__$1;
(statearr_15835_15855[(2)] = fc);

(statearr_15835_15855[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15821 === (8))){
var inst_15809 = (state_15820[(2)]);
var state_15820__$1 = state_15820;
if(cljs.core.truth_(inst_15809)){
var statearr_15836_15856 = state_15820__$1;
(statearr_15836_15856[(1)] = (12));

} else {
var statearr_15837_15857 = state_15820__$1;
(statearr_15837_15857[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__15405__auto___15843,tc,fc))
;
return ((function (switch__15305__auto__,c__15405__auto___15843,tc,fc){
return (function() {
var cljs$core$async$state_machine__15306__auto__ = null;
var cljs$core$async$state_machine__15306__auto____0 = (function (){
var statearr_15838 = [null,null,null,null,null,null,null,null,null];
(statearr_15838[(0)] = cljs$core$async$state_machine__15306__auto__);

(statearr_15838[(1)] = (1));

return statearr_15838;
});
var cljs$core$async$state_machine__15306__auto____1 = (function (state_15820){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_15820);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e15839){if((e15839 instanceof Object)){
var ex__15309__auto__ = e15839;
var statearr_15840_15858 = state_15820;
(statearr_15840_15858[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15820);

return cljs.core.cst$kw$recur;
} else {
throw e15839;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__15859 = state_15820;
state_15820 = G__15859;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$state_machine__15306__auto__ = function(state_15820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15306__auto____1.call(this,state_15820);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15306__auto____0;
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15306__auto____1;
return cljs$core$async$state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto___15843,tc,fc))
})();
var state__15407__auto__ = (function (){var statearr_15841 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_15841[(6)] = c__15405__auto___15843);

return statearr_15841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto___15843,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15405__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto__){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto__){
return (function (state_15880){
var state_val_15881 = (state_15880[(1)]);
if((state_val_15881 === (7))){
var inst_15876 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15882_15900 = state_15880__$1;
(statearr_15882_15900[(2)] = inst_15876);

(statearr_15882_15900[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (1))){
var inst_15860 = init;
var state_15880__$1 = (function (){var statearr_15883 = state_15880;
(statearr_15883[(7)] = inst_15860);

return statearr_15883;
})();
var statearr_15884_15901 = state_15880__$1;
(statearr_15884_15901[(2)] = null);

(statearr_15884_15901[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (4))){
var inst_15863 = (state_15880[(8)]);
var inst_15863__$1 = (state_15880[(2)]);
var inst_15864 = (inst_15863__$1 == null);
var state_15880__$1 = (function (){var statearr_15885 = state_15880;
(statearr_15885[(8)] = inst_15863__$1);

return statearr_15885;
})();
if(cljs.core.truth_(inst_15864)){
var statearr_15886_15902 = state_15880__$1;
(statearr_15886_15902[(1)] = (5));

} else {
var statearr_15887_15903 = state_15880__$1;
(statearr_15887_15903[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (6))){
var inst_15863 = (state_15880[(8)]);
var inst_15860 = (state_15880[(7)]);
var inst_15867 = (state_15880[(9)]);
var inst_15867__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15860,inst_15863) : f.call(null,inst_15860,inst_15863));
var inst_15868 = cljs.core.reduced_QMARK_(inst_15867__$1);
var state_15880__$1 = (function (){var statearr_15888 = state_15880;
(statearr_15888[(9)] = inst_15867__$1);

return statearr_15888;
})();
if(inst_15868){
var statearr_15889_15904 = state_15880__$1;
(statearr_15889_15904[(1)] = (8));

} else {
var statearr_15890_15905 = state_15880__$1;
(statearr_15890_15905[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (3))){
var inst_15878 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15880__$1,inst_15878);
} else {
if((state_val_15881 === (2))){
var state_15880__$1 = state_15880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15880__$1,(4),ch);
} else {
if((state_val_15881 === (9))){
var inst_15867 = (state_15880[(9)]);
var inst_15860 = inst_15867;
var state_15880__$1 = (function (){var statearr_15891 = state_15880;
(statearr_15891[(7)] = inst_15860);

return statearr_15891;
})();
var statearr_15892_15906 = state_15880__$1;
(statearr_15892_15906[(2)] = null);

(statearr_15892_15906[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (5))){
var inst_15860 = (state_15880[(7)]);
var state_15880__$1 = state_15880;
var statearr_15893_15907 = state_15880__$1;
(statearr_15893_15907[(2)] = inst_15860);

(statearr_15893_15907[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (10))){
var inst_15874 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15894_15908 = state_15880__$1;
(statearr_15894_15908[(2)] = inst_15874);

(statearr_15894_15908[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (8))){
var inst_15867 = (state_15880[(9)]);
var inst_15870 = cljs.core.deref(inst_15867);
var state_15880__$1 = state_15880;
var statearr_15895_15909 = state_15880__$1;
(statearr_15895_15909[(2)] = inst_15870);

(statearr_15895_15909[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15405__auto__))
;
return ((function (switch__15305__auto__,c__15405__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15306__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15306__auto____0 = (function (){
var statearr_15896 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15896[(0)] = cljs$core$async$reduce_$_state_machine__15306__auto__);

(statearr_15896[(1)] = (1));

return statearr_15896;
});
var cljs$core$async$reduce_$_state_machine__15306__auto____1 = (function (state_15880){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_15880);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e15897){if((e15897 instanceof Object)){
var ex__15309__auto__ = e15897;
var statearr_15898_15910 = state_15880;
(statearr_15898_15910[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15880);

return cljs.core.cst$kw$recur;
} else {
throw e15897;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__15911 = state_15880;
state_15880 = G__15911;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15306__auto__ = function(state_15880){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15306__auto____1.call(this,state_15880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15306__auto____0;
cljs$core$async$reduce_$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15306__auto____1;
return cljs$core$async$reduce_$_state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto__))
})();
var state__15407__auto__ = (function (){var statearr_15899 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_15899[(6)] = c__15405__auto__);

return statearr_15899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto__))
);

return c__15405__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15405__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto__,f__$1){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto__,f__$1){
return (function (state_15917){
var state_val_15918 = (state_15917[(1)]);
if((state_val_15918 === (1))){
var inst_15912 = cljs.core.async.reduce(f__$1,init,ch);
var state_15917__$1 = state_15917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15917__$1,(2),inst_15912);
} else {
if((state_val_15918 === (2))){
var inst_15914 = (state_15917[(2)]);
var inst_15915 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15914) : f__$1.call(null,inst_15914));
var state_15917__$1 = state_15917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15917__$1,inst_15915);
} else {
return null;
}
}
});})(c__15405__auto__,f__$1))
;
return ((function (switch__15305__auto__,c__15405__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15306__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15306__auto____0 = (function (){
var statearr_15919 = [null,null,null,null,null,null,null];
(statearr_15919[(0)] = cljs$core$async$transduce_$_state_machine__15306__auto__);

(statearr_15919[(1)] = (1));

return statearr_15919;
});
var cljs$core$async$transduce_$_state_machine__15306__auto____1 = (function (state_15917){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_15917);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e15920){if((e15920 instanceof Object)){
var ex__15309__auto__ = e15920;
var statearr_15921_15923 = state_15917;
(statearr_15921_15923[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15917);

return cljs.core.cst$kw$recur;
} else {
throw e15920;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__15924 = state_15917;
state_15917 = G__15924;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15306__auto__ = function(state_15917){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15306__auto____1.call(this,state_15917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15306__auto____0;
cljs$core$async$transduce_$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15306__auto____1;
return cljs$core$async$transduce_$_state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto__,f__$1))
})();
var state__15407__auto__ = (function (){var statearr_15922 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_15922[(6)] = c__15405__auto__);

return statearr_15922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto__,f__$1))
);

return c__15405__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15926 = arguments.length;
switch (G__15926) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15405__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto__){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto__){
return (function (state_15951){
var state_val_15952 = (state_15951[(1)]);
if((state_val_15952 === (7))){
var inst_15933 = (state_15951[(2)]);
var state_15951__$1 = state_15951;
var statearr_15953_15974 = state_15951__$1;
(statearr_15953_15974[(2)] = inst_15933);

(statearr_15953_15974[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (1))){
var inst_15927 = cljs.core.seq(coll);
var inst_15928 = inst_15927;
var state_15951__$1 = (function (){var statearr_15954 = state_15951;
(statearr_15954[(7)] = inst_15928);

return statearr_15954;
})();
var statearr_15955_15975 = state_15951__$1;
(statearr_15955_15975[(2)] = null);

(statearr_15955_15975[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (4))){
var inst_15928 = (state_15951[(7)]);
var inst_15931 = cljs.core.first(inst_15928);
var state_15951__$1 = state_15951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15951__$1,(7),ch,inst_15931);
} else {
if((state_val_15952 === (13))){
var inst_15945 = (state_15951[(2)]);
var state_15951__$1 = state_15951;
var statearr_15956_15976 = state_15951__$1;
(statearr_15956_15976[(2)] = inst_15945);

(statearr_15956_15976[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (6))){
var inst_15936 = (state_15951[(2)]);
var state_15951__$1 = state_15951;
if(cljs.core.truth_(inst_15936)){
var statearr_15957_15977 = state_15951__$1;
(statearr_15957_15977[(1)] = (8));

} else {
var statearr_15958_15978 = state_15951__$1;
(statearr_15958_15978[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (3))){
var inst_15949 = (state_15951[(2)]);
var state_15951__$1 = state_15951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15951__$1,inst_15949);
} else {
if((state_val_15952 === (12))){
var state_15951__$1 = state_15951;
var statearr_15959_15979 = state_15951__$1;
(statearr_15959_15979[(2)] = null);

(statearr_15959_15979[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (2))){
var inst_15928 = (state_15951[(7)]);
var state_15951__$1 = state_15951;
if(cljs.core.truth_(inst_15928)){
var statearr_15960_15980 = state_15951__$1;
(statearr_15960_15980[(1)] = (4));

} else {
var statearr_15961_15981 = state_15951__$1;
(statearr_15961_15981[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (11))){
var inst_15942 = cljs.core.async.close_BANG_(ch);
var state_15951__$1 = state_15951;
var statearr_15962_15982 = state_15951__$1;
(statearr_15962_15982[(2)] = inst_15942);

(statearr_15962_15982[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (9))){
var state_15951__$1 = state_15951;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15963_15983 = state_15951__$1;
(statearr_15963_15983[(1)] = (11));

} else {
var statearr_15964_15984 = state_15951__$1;
(statearr_15964_15984[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (5))){
var inst_15928 = (state_15951[(7)]);
var state_15951__$1 = state_15951;
var statearr_15965_15985 = state_15951__$1;
(statearr_15965_15985[(2)] = inst_15928);

(statearr_15965_15985[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (10))){
var inst_15947 = (state_15951[(2)]);
var state_15951__$1 = state_15951;
var statearr_15966_15986 = state_15951__$1;
(statearr_15966_15986[(2)] = inst_15947);

(statearr_15966_15986[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (8))){
var inst_15928 = (state_15951[(7)]);
var inst_15938 = cljs.core.next(inst_15928);
var inst_15928__$1 = inst_15938;
var state_15951__$1 = (function (){var statearr_15967 = state_15951;
(statearr_15967[(7)] = inst_15928__$1);

return statearr_15967;
})();
var statearr_15968_15987 = state_15951__$1;
(statearr_15968_15987[(2)] = null);

(statearr_15968_15987[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15405__auto__))
;
return ((function (switch__15305__auto__,c__15405__auto__){
return (function() {
var cljs$core$async$state_machine__15306__auto__ = null;
var cljs$core$async$state_machine__15306__auto____0 = (function (){
var statearr_15969 = [null,null,null,null,null,null,null,null];
(statearr_15969[(0)] = cljs$core$async$state_machine__15306__auto__);

(statearr_15969[(1)] = (1));

return statearr_15969;
});
var cljs$core$async$state_machine__15306__auto____1 = (function (state_15951){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_15951);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e15970){if((e15970 instanceof Object)){
var ex__15309__auto__ = e15970;
var statearr_15971_15988 = state_15951;
(statearr_15971_15988[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15951);

return cljs.core.cst$kw$recur;
} else {
throw e15970;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__15989 = state_15951;
state_15951 = G__15989;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$state_machine__15306__auto__ = function(state_15951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15306__auto____1.call(this,state_15951);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15306__auto____0;
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15306__auto____1;
return cljs$core$async$state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto__))
})();
var state__15407__auto__ = (function (){var statearr_15972 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_15972[(6)] = c__15405__auto__);

return statearr_15972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto__))
);

return c__15405__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__8351__auto__ = (((_ == null))?null:_);
var m__8352__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8352__auto__.call(null,_));
} else {
var m__8352__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8352__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8352__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__8352__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8352__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto__.call(null,m,ch));
} else {
var m__8352__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8352__auto__.call(null,m));
} else {
var m__8352__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8352__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15990 = (function (ch,cs,meta15991){
this.ch = ch;
this.cs = cs;
this.meta15991 = meta15991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15992,meta15991__$1){
var self__ = this;
var _15992__$1 = this;
return (new cljs.core.async.t_cljs$core$async15990(self__.ch,self__.cs,meta15991__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15992){
var self__ = this;
var _15992__$1 = this;
return self__.meta15991;
});})(cs))
;

cljs.core.async.t_cljs$core$async15990.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15990.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15990.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15990.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15990.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15990.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15990.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15991], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15990";

cljs.core.async.t_cljs$core$async15990.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async15990");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15990 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15990(ch__$1,cs__$1,meta15991){
return (new cljs.core.async.t_cljs$core$async15990(ch__$1,cs__$1,meta15991));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15990(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15405__auto___16212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto___16212,cs,m,dchan,dctr,done){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto___16212,cs,m,dchan,dctr,done){
return (function (state_16127){
var state_val_16128 = (state_16127[(1)]);
if((state_val_16128 === (7))){
var inst_16123 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16129_16213 = state_16127__$1;
(statearr_16129_16213[(2)] = inst_16123);

(statearr_16129_16213[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (20))){
var inst_16026 = (state_16127[(7)]);
var inst_16038 = cljs.core.first(inst_16026);
var inst_16039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16038,(0),null);
var inst_16040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16038,(1),null);
var state_16127__$1 = (function (){var statearr_16130 = state_16127;
(statearr_16130[(8)] = inst_16039);

return statearr_16130;
})();
if(cljs.core.truth_(inst_16040)){
var statearr_16131_16214 = state_16127__$1;
(statearr_16131_16214[(1)] = (22));

} else {
var statearr_16132_16215 = state_16127__$1;
(statearr_16132_16215[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (27))){
var inst_16068 = (state_16127[(9)]);
var inst_16070 = (state_16127[(10)]);
var inst_15995 = (state_16127[(11)]);
var inst_16075 = (state_16127[(12)]);
var inst_16075__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16068,inst_16070);
var inst_16076 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16075__$1,inst_15995,done);
var state_16127__$1 = (function (){var statearr_16133 = state_16127;
(statearr_16133[(12)] = inst_16075__$1);

return statearr_16133;
})();
if(cljs.core.truth_(inst_16076)){
var statearr_16134_16216 = state_16127__$1;
(statearr_16134_16216[(1)] = (30));

} else {
var statearr_16135_16217 = state_16127__$1;
(statearr_16135_16217[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (1))){
var state_16127__$1 = state_16127;
var statearr_16136_16218 = state_16127__$1;
(statearr_16136_16218[(2)] = null);

(statearr_16136_16218[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (24))){
var inst_16026 = (state_16127[(7)]);
var inst_16045 = (state_16127[(2)]);
var inst_16046 = cljs.core.next(inst_16026);
var inst_16004 = inst_16046;
var inst_16005 = null;
var inst_16006 = (0);
var inst_16007 = (0);
var state_16127__$1 = (function (){var statearr_16137 = state_16127;
(statearr_16137[(13)] = inst_16005);

(statearr_16137[(14)] = inst_16004);

(statearr_16137[(15)] = inst_16006);

(statearr_16137[(16)] = inst_16045);

(statearr_16137[(17)] = inst_16007);

return statearr_16137;
})();
var statearr_16138_16219 = state_16127__$1;
(statearr_16138_16219[(2)] = null);

(statearr_16138_16219[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (39))){
var state_16127__$1 = state_16127;
var statearr_16142_16220 = state_16127__$1;
(statearr_16142_16220[(2)] = null);

(statearr_16142_16220[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (4))){
var inst_15995 = (state_16127[(11)]);
var inst_15995__$1 = (state_16127[(2)]);
var inst_15996 = (inst_15995__$1 == null);
var state_16127__$1 = (function (){var statearr_16143 = state_16127;
(statearr_16143[(11)] = inst_15995__$1);

return statearr_16143;
})();
if(cljs.core.truth_(inst_15996)){
var statearr_16144_16221 = state_16127__$1;
(statearr_16144_16221[(1)] = (5));

} else {
var statearr_16145_16222 = state_16127__$1;
(statearr_16145_16222[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (15))){
var inst_16005 = (state_16127[(13)]);
var inst_16004 = (state_16127[(14)]);
var inst_16006 = (state_16127[(15)]);
var inst_16007 = (state_16127[(17)]);
var inst_16022 = (state_16127[(2)]);
var inst_16023 = (inst_16007 + (1));
var tmp16139 = inst_16005;
var tmp16140 = inst_16004;
var tmp16141 = inst_16006;
var inst_16004__$1 = tmp16140;
var inst_16005__$1 = tmp16139;
var inst_16006__$1 = tmp16141;
var inst_16007__$1 = inst_16023;
var state_16127__$1 = (function (){var statearr_16146 = state_16127;
(statearr_16146[(18)] = inst_16022);

(statearr_16146[(13)] = inst_16005__$1);

(statearr_16146[(14)] = inst_16004__$1);

(statearr_16146[(15)] = inst_16006__$1);

(statearr_16146[(17)] = inst_16007__$1);

return statearr_16146;
})();
var statearr_16147_16223 = state_16127__$1;
(statearr_16147_16223[(2)] = null);

(statearr_16147_16223[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (21))){
var inst_16049 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16151_16224 = state_16127__$1;
(statearr_16151_16224[(2)] = inst_16049);

(statearr_16151_16224[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (31))){
var inst_16075 = (state_16127[(12)]);
var inst_16079 = done(null);
var inst_16080 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16075);
var state_16127__$1 = (function (){var statearr_16152 = state_16127;
(statearr_16152[(19)] = inst_16079);

return statearr_16152;
})();
var statearr_16153_16225 = state_16127__$1;
(statearr_16153_16225[(2)] = inst_16080);

(statearr_16153_16225[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (32))){
var inst_16068 = (state_16127[(9)]);
var inst_16070 = (state_16127[(10)]);
var inst_16067 = (state_16127[(20)]);
var inst_16069 = (state_16127[(21)]);
var inst_16082 = (state_16127[(2)]);
var inst_16083 = (inst_16070 + (1));
var tmp16148 = inst_16068;
var tmp16149 = inst_16067;
var tmp16150 = inst_16069;
var inst_16067__$1 = tmp16149;
var inst_16068__$1 = tmp16148;
var inst_16069__$1 = tmp16150;
var inst_16070__$1 = inst_16083;
var state_16127__$1 = (function (){var statearr_16154 = state_16127;
(statearr_16154[(9)] = inst_16068__$1);

(statearr_16154[(22)] = inst_16082);

(statearr_16154[(10)] = inst_16070__$1);

(statearr_16154[(20)] = inst_16067__$1);

(statearr_16154[(21)] = inst_16069__$1);

return statearr_16154;
})();
var statearr_16155_16226 = state_16127__$1;
(statearr_16155_16226[(2)] = null);

(statearr_16155_16226[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (40))){
var inst_16095 = (state_16127[(23)]);
var inst_16099 = done(null);
var inst_16100 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16095);
var state_16127__$1 = (function (){var statearr_16156 = state_16127;
(statearr_16156[(24)] = inst_16099);

return statearr_16156;
})();
var statearr_16157_16227 = state_16127__$1;
(statearr_16157_16227[(2)] = inst_16100);

(statearr_16157_16227[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (33))){
var inst_16086 = (state_16127[(25)]);
var inst_16088 = cljs.core.chunked_seq_QMARK_(inst_16086);
var state_16127__$1 = state_16127;
if(inst_16088){
var statearr_16158_16228 = state_16127__$1;
(statearr_16158_16228[(1)] = (36));

} else {
var statearr_16159_16229 = state_16127__$1;
(statearr_16159_16229[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (13))){
var inst_16016 = (state_16127[(26)]);
var inst_16019 = cljs.core.async.close_BANG_(inst_16016);
var state_16127__$1 = state_16127;
var statearr_16160_16230 = state_16127__$1;
(statearr_16160_16230[(2)] = inst_16019);

(statearr_16160_16230[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (22))){
var inst_16039 = (state_16127[(8)]);
var inst_16042 = cljs.core.async.close_BANG_(inst_16039);
var state_16127__$1 = state_16127;
var statearr_16161_16231 = state_16127__$1;
(statearr_16161_16231[(2)] = inst_16042);

(statearr_16161_16231[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (36))){
var inst_16086 = (state_16127[(25)]);
var inst_16090 = cljs.core.chunk_first(inst_16086);
var inst_16091 = cljs.core.chunk_rest(inst_16086);
var inst_16092 = cljs.core.count(inst_16090);
var inst_16067 = inst_16091;
var inst_16068 = inst_16090;
var inst_16069 = inst_16092;
var inst_16070 = (0);
var state_16127__$1 = (function (){var statearr_16162 = state_16127;
(statearr_16162[(9)] = inst_16068);

(statearr_16162[(10)] = inst_16070);

(statearr_16162[(20)] = inst_16067);

(statearr_16162[(21)] = inst_16069);

return statearr_16162;
})();
var statearr_16163_16232 = state_16127__$1;
(statearr_16163_16232[(2)] = null);

(statearr_16163_16232[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (41))){
var inst_16086 = (state_16127[(25)]);
var inst_16102 = (state_16127[(2)]);
var inst_16103 = cljs.core.next(inst_16086);
var inst_16067 = inst_16103;
var inst_16068 = null;
var inst_16069 = (0);
var inst_16070 = (0);
var state_16127__$1 = (function (){var statearr_16164 = state_16127;
(statearr_16164[(27)] = inst_16102);

(statearr_16164[(9)] = inst_16068);

(statearr_16164[(10)] = inst_16070);

(statearr_16164[(20)] = inst_16067);

(statearr_16164[(21)] = inst_16069);

return statearr_16164;
})();
var statearr_16165_16233 = state_16127__$1;
(statearr_16165_16233[(2)] = null);

(statearr_16165_16233[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (43))){
var state_16127__$1 = state_16127;
var statearr_16166_16234 = state_16127__$1;
(statearr_16166_16234[(2)] = null);

(statearr_16166_16234[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (29))){
var inst_16111 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16167_16235 = state_16127__$1;
(statearr_16167_16235[(2)] = inst_16111);

(statearr_16167_16235[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (44))){
var inst_16120 = (state_16127[(2)]);
var state_16127__$1 = (function (){var statearr_16168 = state_16127;
(statearr_16168[(28)] = inst_16120);

return statearr_16168;
})();
var statearr_16169_16236 = state_16127__$1;
(statearr_16169_16236[(2)] = null);

(statearr_16169_16236[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (6))){
var inst_16059 = (state_16127[(29)]);
var inst_16058 = cljs.core.deref(cs);
var inst_16059__$1 = cljs.core.keys(inst_16058);
var inst_16060 = cljs.core.count(inst_16059__$1);
var inst_16061 = cljs.core.reset_BANG_(dctr,inst_16060);
var inst_16066 = cljs.core.seq(inst_16059__$1);
var inst_16067 = inst_16066;
var inst_16068 = null;
var inst_16069 = (0);
var inst_16070 = (0);
var state_16127__$1 = (function (){var statearr_16170 = state_16127;
(statearr_16170[(29)] = inst_16059__$1);

(statearr_16170[(30)] = inst_16061);

(statearr_16170[(9)] = inst_16068);

(statearr_16170[(10)] = inst_16070);

(statearr_16170[(20)] = inst_16067);

(statearr_16170[(21)] = inst_16069);

return statearr_16170;
})();
var statearr_16171_16237 = state_16127__$1;
(statearr_16171_16237[(2)] = null);

(statearr_16171_16237[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (28))){
var inst_16086 = (state_16127[(25)]);
var inst_16067 = (state_16127[(20)]);
var inst_16086__$1 = cljs.core.seq(inst_16067);
var state_16127__$1 = (function (){var statearr_16172 = state_16127;
(statearr_16172[(25)] = inst_16086__$1);

return statearr_16172;
})();
if(inst_16086__$1){
var statearr_16173_16238 = state_16127__$1;
(statearr_16173_16238[(1)] = (33));

} else {
var statearr_16174_16239 = state_16127__$1;
(statearr_16174_16239[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (25))){
var inst_16070 = (state_16127[(10)]);
var inst_16069 = (state_16127[(21)]);
var inst_16072 = (inst_16070 < inst_16069);
var inst_16073 = inst_16072;
var state_16127__$1 = state_16127;
if(cljs.core.truth_(inst_16073)){
var statearr_16175_16240 = state_16127__$1;
(statearr_16175_16240[(1)] = (27));

} else {
var statearr_16176_16241 = state_16127__$1;
(statearr_16176_16241[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (34))){
var state_16127__$1 = state_16127;
var statearr_16177_16242 = state_16127__$1;
(statearr_16177_16242[(2)] = null);

(statearr_16177_16242[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (17))){
var state_16127__$1 = state_16127;
var statearr_16178_16243 = state_16127__$1;
(statearr_16178_16243[(2)] = null);

(statearr_16178_16243[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (3))){
var inst_16125 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16127__$1,inst_16125);
} else {
if((state_val_16128 === (12))){
var inst_16054 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16179_16244 = state_16127__$1;
(statearr_16179_16244[(2)] = inst_16054);

(statearr_16179_16244[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (2))){
var state_16127__$1 = state_16127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16127__$1,(4),ch);
} else {
if((state_val_16128 === (23))){
var state_16127__$1 = state_16127;
var statearr_16180_16245 = state_16127__$1;
(statearr_16180_16245[(2)] = null);

(statearr_16180_16245[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (35))){
var inst_16109 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16181_16246 = state_16127__$1;
(statearr_16181_16246[(2)] = inst_16109);

(statearr_16181_16246[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (19))){
var inst_16026 = (state_16127[(7)]);
var inst_16030 = cljs.core.chunk_first(inst_16026);
var inst_16031 = cljs.core.chunk_rest(inst_16026);
var inst_16032 = cljs.core.count(inst_16030);
var inst_16004 = inst_16031;
var inst_16005 = inst_16030;
var inst_16006 = inst_16032;
var inst_16007 = (0);
var state_16127__$1 = (function (){var statearr_16182 = state_16127;
(statearr_16182[(13)] = inst_16005);

(statearr_16182[(14)] = inst_16004);

(statearr_16182[(15)] = inst_16006);

(statearr_16182[(17)] = inst_16007);

return statearr_16182;
})();
var statearr_16183_16247 = state_16127__$1;
(statearr_16183_16247[(2)] = null);

(statearr_16183_16247[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (11))){
var inst_16004 = (state_16127[(14)]);
var inst_16026 = (state_16127[(7)]);
var inst_16026__$1 = cljs.core.seq(inst_16004);
var state_16127__$1 = (function (){var statearr_16184 = state_16127;
(statearr_16184[(7)] = inst_16026__$1);

return statearr_16184;
})();
if(inst_16026__$1){
var statearr_16185_16248 = state_16127__$1;
(statearr_16185_16248[(1)] = (16));

} else {
var statearr_16186_16249 = state_16127__$1;
(statearr_16186_16249[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (9))){
var inst_16056 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16187_16250 = state_16127__$1;
(statearr_16187_16250[(2)] = inst_16056);

(statearr_16187_16250[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (5))){
var inst_16002 = cljs.core.deref(cs);
var inst_16003 = cljs.core.seq(inst_16002);
var inst_16004 = inst_16003;
var inst_16005 = null;
var inst_16006 = (0);
var inst_16007 = (0);
var state_16127__$1 = (function (){var statearr_16188 = state_16127;
(statearr_16188[(13)] = inst_16005);

(statearr_16188[(14)] = inst_16004);

(statearr_16188[(15)] = inst_16006);

(statearr_16188[(17)] = inst_16007);

return statearr_16188;
})();
var statearr_16189_16251 = state_16127__$1;
(statearr_16189_16251[(2)] = null);

(statearr_16189_16251[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (14))){
var state_16127__$1 = state_16127;
var statearr_16190_16252 = state_16127__$1;
(statearr_16190_16252[(2)] = null);

(statearr_16190_16252[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (45))){
var inst_16117 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16191_16253 = state_16127__$1;
(statearr_16191_16253[(2)] = inst_16117);

(statearr_16191_16253[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (26))){
var inst_16059 = (state_16127[(29)]);
var inst_16113 = (state_16127[(2)]);
var inst_16114 = cljs.core.seq(inst_16059);
var state_16127__$1 = (function (){var statearr_16192 = state_16127;
(statearr_16192[(31)] = inst_16113);

return statearr_16192;
})();
if(inst_16114){
var statearr_16193_16254 = state_16127__$1;
(statearr_16193_16254[(1)] = (42));

} else {
var statearr_16194_16255 = state_16127__$1;
(statearr_16194_16255[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (16))){
var inst_16026 = (state_16127[(7)]);
var inst_16028 = cljs.core.chunked_seq_QMARK_(inst_16026);
var state_16127__$1 = state_16127;
if(inst_16028){
var statearr_16195_16256 = state_16127__$1;
(statearr_16195_16256[(1)] = (19));

} else {
var statearr_16196_16257 = state_16127__$1;
(statearr_16196_16257[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (38))){
var inst_16106 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16197_16258 = state_16127__$1;
(statearr_16197_16258[(2)] = inst_16106);

(statearr_16197_16258[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (30))){
var state_16127__$1 = state_16127;
var statearr_16198_16259 = state_16127__$1;
(statearr_16198_16259[(2)] = null);

(statearr_16198_16259[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (10))){
var inst_16005 = (state_16127[(13)]);
var inst_16007 = (state_16127[(17)]);
var inst_16015 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16005,inst_16007);
var inst_16016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16015,(0),null);
var inst_16017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16015,(1),null);
var state_16127__$1 = (function (){var statearr_16199 = state_16127;
(statearr_16199[(26)] = inst_16016);

return statearr_16199;
})();
if(cljs.core.truth_(inst_16017)){
var statearr_16200_16260 = state_16127__$1;
(statearr_16200_16260[(1)] = (13));

} else {
var statearr_16201_16261 = state_16127__$1;
(statearr_16201_16261[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (18))){
var inst_16052 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16202_16262 = state_16127__$1;
(statearr_16202_16262[(2)] = inst_16052);

(statearr_16202_16262[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (42))){
var state_16127__$1 = state_16127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16127__$1,(45),dchan);
} else {
if((state_val_16128 === (37))){
var inst_16086 = (state_16127[(25)]);
var inst_16095 = (state_16127[(23)]);
var inst_15995 = (state_16127[(11)]);
var inst_16095__$1 = cljs.core.first(inst_16086);
var inst_16096 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16095__$1,inst_15995,done);
var state_16127__$1 = (function (){var statearr_16203 = state_16127;
(statearr_16203[(23)] = inst_16095__$1);

return statearr_16203;
})();
if(cljs.core.truth_(inst_16096)){
var statearr_16204_16263 = state_16127__$1;
(statearr_16204_16263[(1)] = (39));

} else {
var statearr_16205_16264 = state_16127__$1;
(statearr_16205_16264[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16128 === (8))){
var inst_16006 = (state_16127[(15)]);
var inst_16007 = (state_16127[(17)]);
var inst_16009 = (inst_16007 < inst_16006);
var inst_16010 = inst_16009;
var state_16127__$1 = state_16127;
if(cljs.core.truth_(inst_16010)){
var statearr_16206_16265 = state_16127__$1;
(statearr_16206_16265[(1)] = (10));

} else {
var statearr_16207_16266 = state_16127__$1;
(statearr_16207_16266[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15405__auto___16212,cs,m,dchan,dctr,done))
;
return ((function (switch__15305__auto__,c__15405__auto___16212,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15306__auto__ = null;
var cljs$core$async$mult_$_state_machine__15306__auto____0 = (function (){
var statearr_16208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16208[(0)] = cljs$core$async$mult_$_state_machine__15306__auto__);

(statearr_16208[(1)] = (1));

return statearr_16208;
});
var cljs$core$async$mult_$_state_machine__15306__auto____1 = (function (state_16127){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_16127);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e16209){if((e16209 instanceof Object)){
var ex__15309__auto__ = e16209;
var statearr_16210_16267 = state_16127;
(statearr_16210_16267[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16127);

return cljs.core.cst$kw$recur;
} else {
throw e16209;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__16268 = state_16127;
state_16127 = G__16268;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15306__auto__ = function(state_16127){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15306__auto____1.call(this,state_16127);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15306__auto____0;
cljs$core$async$mult_$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15306__auto____1;
return cljs$core$async$mult_$_state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto___16212,cs,m,dchan,dctr,done))
})();
var state__15407__auto__ = (function (){var statearr_16211 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_16211[(6)] = c__15405__auto___16212);

return statearr_16211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto___16212,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16270 = arguments.length;
switch (G__16270) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto__.call(null,m,ch));
} else {
var m__8352__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto__.call(null,m,ch));
} else {
var m__8352__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8352__auto__.call(null,m));
} else {
var m__8352__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8352__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8352__auto__.call(null,m,state_map));
} else {
var m__8352__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8352__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8352__auto__.call(null,m,mode));
} else {
var m__8352__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8352__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___16282 = arguments.length;
var i__8840__auto___16283 = (0);
while(true){
if((i__8840__auto___16283 < len__8839__auto___16282)){
args__8846__auto__.push((arguments[i__8840__auto___16283]));

var G__16284 = (i__8840__auto___16283 + (1));
i__8840__auto___16283 = G__16284;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16276){
var map__16277 = p__16276;
var map__16277__$1 = ((((!((map__16277 == null)))?((((map__16277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16277):map__16277);
var opts = map__16277__$1;
var statearr_16279_16285 = state;
(statearr_16279_16285[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__16277,map__16277__$1,opts){
return (function (val){
var statearr_16280_16286 = state;
(statearr_16280_16286[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16277,map__16277__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_16281_16287 = state;
(statearr_16281_16287[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16272){
var G__16273 = cljs.core.first(seq16272);
var seq16272__$1 = cljs.core.next(seq16272);
var G__16274 = cljs.core.first(seq16272__$1);
var seq16272__$2 = cljs.core.next(seq16272__$1);
var G__16275 = cljs.core.first(seq16272__$2);
var seq16272__$3 = cljs.core.next(seq16272__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16273,G__16274,G__16275,seq16272__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16288 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16289){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16289 = meta16289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16290,meta16289__$1){
var self__ = this;
var _16290__$1 = this;
return (new cljs.core.async.t_cljs$core$async16288(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16289__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16290){
var self__ = this;
var _16290__$1 = this;
return self__.meta16289;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta16289], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16288";

cljs.core.async.t_cljs$core$async16288.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async16288");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16288 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16288(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16289){
return (new cljs.core.async.t_cljs$core$async16288(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16289));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16288(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15405__auto___16452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto___16452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto___16452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16392){
var state_val_16393 = (state_16392[(1)]);
if((state_val_16393 === (7))){
var inst_16307 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
var statearr_16394_16453 = state_16392__$1;
(statearr_16394_16453[(2)] = inst_16307);

(statearr_16394_16453[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (20))){
var inst_16319 = (state_16392[(7)]);
var state_16392__$1 = state_16392;
var statearr_16395_16454 = state_16392__$1;
(statearr_16395_16454[(2)] = inst_16319);

(statearr_16395_16454[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (27))){
var state_16392__$1 = state_16392;
var statearr_16396_16455 = state_16392__$1;
(statearr_16396_16455[(2)] = null);

(statearr_16396_16455[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (1))){
var inst_16294 = (state_16392[(8)]);
var inst_16294__$1 = calc_state();
var inst_16296 = (inst_16294__$1 == null);
var inst_16297 = cljs.core.not(inst_16296);
var state_16392__$1 = (function (){var statearr_16397 = state_16392;
(statearr_16397[(8)] = inst_16294__$1);

return statearr_16397;
})();
if(inst_16297){
var statearr_16398_16456 = state_16392__$1;
(statearr_16398_16456[(1)] = (2));

} else {
var statearr_16399_16457 = state_16392__$1;
(statearr_16399_16457[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (24))){
var inst_16343 = (state_16392[(9)]);
var inst_16366 = (state_16392[(10)]);
var inst_16352 = (state_16392[(11)]);
var inst_16366__$1 = (inst_16343.cljs$core$IFn$_invoke$arity$1 ? inst_16343.cljs$core$IFn$_invoke$arity$1(inst_16352) : inst_16343.call(null,inst_16352));
var state_16392__$1 = (function (){var statearr_16400 = state_16392;
(statearr_16400[(10)] = inst_16366__$1);

return statearr_16400;
})();
if(cljs.core.truth_(inst_16366__$1)){
var statearr_16401_16458 = state_16392__$1;
(statearr_16401_16458[(1)] = (29));

} else {
var statearr_16402_16459 = state_16392__$1;
(statearr_16402_16459[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (4))){
var inst_16310 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
if(cljs.core.truth_(inst_16310)){
var statearr_16403_16460 = state_16392__$1;
(statearr_16403_16460[(1)] = (8));

} else {
var statearr_16404_16461 = state_16392__$1;
(statearr_16404_16461[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (15))){
var inst_16337 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
if(cljs.core.truth_(inst_16337)){
var statearr_16405_16462 = state_16392__$1;
(statearr_16405_16462[(1)] = (19));

} else {
var statearr_16406_16463 = state_16392__$1;
(statearr_16406_16463[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (21))){
var inst_16342 = (state_16392[(12)]);
var inst_16342__$1 = (state_16392[(2)]);
var inst_16343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16342__$1,cljs.core.cst$kw$solos);
var inst_16344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16342__$1,cljs.core.cst$kw$mutes);
var inst_16345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16342__$1,cljs.core.cst$kw$reads);
var state_16392__$1 = (function (){var statearr_16407 = state_16392;
(statearr_16407[(9)] = inst_16343);

(statearr_16407[(12)] = inst_16342__$1);

(statearr_16407[(13)] = inst_16344);

return statearr_16407;
})();
return cljs.core.async.ioc_alts_BANG_(state_16392__$1,(22),inst_16345);
} else {
if((state_val_16393 === (31))){
var inst_16374 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
if(cljs.core.truth_(inst_16374)){
var statearr_16408_16464 = state_16392__$1;
(statearr_16408_16464[(1)] = (32));

} else {
var statearr_16409_16465 = state_16392__$1;
(statearr_16409_16465[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (32))){
var inst_16351 = (state_16392[(14)]);
var state_16392__$1 = state_16392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16392__$1,(35),out,inst_16351);
} else {
if((state_val_16393 === (33))){
var inst_16342 = (state_16392[(12)]);
var inst_16319 = inst_16342;
var state_16392__$1 = (function (){var statearr_16410 = state_16392;
(statearr_16410[(7)] = inst_16319);

return statearr_16410;
})();
var statearr_16411_16466 = state_16392__$1;
(statearr_16411_16466[(2)] = null);

(statearr_16411_16466[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (13))){
var inst_16319 = (state_16392[(7)]);
var inst_16326 = inst_16319.cljs$lang$protocol_mask$partition0$;
var inst_16327 = (inst_16326 & (64));
var inst_16328 = inst_16319.cljs$core$ISeq$;
var inst_16329 = (cljs.core.PROTOCOL_SENTINEL === inst_16328);
var inst_16330 = (inst_16327) || (inst_16329);
var state_16392__$1 = state_16392;
if(cljs.core.truth_(inst_16330)){
var statearr_16412_16467 = state_16392__$1;
(statearr_16412_16467[(1)] = (16));

} else {
var statearr_16413_16468 = state_16392__$1;
(statearr_16413_16468[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (22))){
var inst_16352 = (state_16392[(11)]);
var inst_16351 = (state_16392[(14)]);
var inst_16350 = (state_16392[(2)]);
var inst_16351__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16350,(0),null);
var inst_16352__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16350,(1),null);
var inst_16353 = (inst_16351__$1 == null);
var inst_16354 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16352__$1,change);
var inst_16355 = (inst_16353) || (inst_16354);
var state_16392__$1 = (function (){var statearr_16414 = state_16392;
(statearr_16414[(11)] = inst_16352__$1);

(statearr_16414[(14)] = inst_16351__$1);

return statearr_16414;
})();
if(cljs.core.truth_(inst_16355)){
var statearr_16415_16469 = state_16392__$1;
(statearr_16415_16469[(1)] = (23));

} else {
var statearr_16416_16470 = state_16392__$1;
(statearr_16416_16470[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (36))){
var inst_16342 = (state_16392[(12)]);
var inst_16319 = inst_16342;
var state_16392__$1 = (function (){var statearr_16417 = state_16392;
(statearr_16417[(7)] = inst_16319);

return statearr_16417;
})();
var statearr_16418_16471 = state_16392__$1;
(statearr_16418_16471[(2)] = null);

(statearr_16418_16471[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (29))){
var inst_16366 = (state_16392[(10)]);
var state_16392__$1 = state_16392;
var statearr_16419_16472 = state_16392__$1;
(statearr_16419_16472[(2)] = inst_16366);

(statearr_16419_16472[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (6))){
var state_16392__$1 = state_16392;
var statearr_16420_16473 = state_16392__$1;
(statearr_16420_16473[(2)] = false);

(statearr_16420_16473[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (28))){
var inst_16362 = (state_16392[(2)]);
var inst_16363 = calc_state();
var inst_16319 = inst_16363;
var state_16392__$1 = (function (){var statearr_16421 = state_16392;
(statearr_16421[(15)] = inst_16362);

(statearr_16421[(7)] = inst_16319);

return statearr_16421;
})();
var statearr_16422_16474 = state_16392__$1;
(statearr_16422_16474[(2)] = null);

(statearr_16422_16474[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (25))){
var inst_16388 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
var statearr_16423_16475 = state_16392__$1;
(statearr_16423_16475[(2)] = inst_16388);

(statearr_16423_16475[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (34))){
var inst_16386 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
var statearr_16424_16476 = state_16392__$1;
(statearr_16424_16476[(2)] = inst_16386);

(statearr_16424_16476[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (17))){
var state_16392__$1 = state_16392;
var statearr_16425_16477 = state_16392__$1;
(statearr_16425_16477[(2)] = false);

(statearr_16425_16477[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (3))){
var state_16392__$1 = state_16392;
var statearr_16426_16478 = state_16392__$1;
(statearr_16426_16478[(2)] = false);

(statearr_16426_16478[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (12))){
var inst_16390 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16392__$1,inst_16390);
} else {
if((state_val_16393 === (2))){
var inst_16294 = (state_16392[(8)]);
var inst_16299 = inst_16294.cljs$lang$protocol_mask$partition0$;
var inst_16300 = (inst_16299 & (64));
var inst_16301 = inst_16294.cljs$core$ISeq$;
var inst_16302 = (cljs.core.PROTOCOL_SENTINEL === inst_16301);
var inst_16303 = (inst_16300) || (inst_16302);
var state_16392__$1 = state_16392;
if(cljs.core.truth_(inst_16303)){
var statearr_16427_16479 = state_16392__$1;
(statearr_16427_16479[(1)] = (5));

} else {
var statearr_16428_16480 = state_16392__$1;
(statearr_16428_16480[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (23))){
var inst_16351 = (state_16392[(14)]);
var inst_16357 = (inst_16351 == null);
var state_16392__$1 = state_16392;
if(cljs.core.truth_(inst_16357)){
var statearr_16429_16481 = state_16392__$1;
(statearr_16429_16481[(1)] = (26));

} else {
var statearr_16430_16482 = state_16392__$1;
(statearr_16430_16482[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (35))){
var inst_16377 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
if(cljs.core.truth_(inst_16377)){
var statearr_16431_16483 = state_16392__$1;
(statearr_16431_16483[(1)] = (36));

} else {
var statearr_16432_16484 = state_16392__$1;
(statearr_16432_16484[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (19))){
var inst_16319 = (state_16392[(7)]);
var inst_16339 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16319);
var state_16392__$1 = state_16392;
var statearr_16433_16485 = state_16392__$1;
(statearr_16433_16485[(2)] = inst_16339);

(statearr_16433_16485[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (11))){
var inst_16319 = (state_16392[(7)]);
var inst_16323 = (inst_16319 == null);
var inst_16324 = cljs.core.not(inst_16323);
var state_16392__$1 = state_16392;
if(inst_16324){
var statearr_16434_16486 = state_16392__$1;
(statearr_16434_16486[(1)] = (13));

} else {
var statearr_16435_16487 = state_16392__$1;
(statearr_16435_16487[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (9))){
var inst_16294 = (state_16392[(8)]);
var state_16392__$1 = state_16392;
var statearr_16436_16488 = state_16392__$1;
(statearr_16436_16488[(2)] = inst_16294);

(statearr_16436_16488[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (5))){
var state_16392__$1 = state_16392;
var statearr_16437_16489 = state_16392__$1;
(statearr_16437_16489[(2)] = true);

(statearr_16437_16489[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (14))){
var state_16392__$1 = state_16392;
var statearr_16438_16490 = state_16392__$1;
(statearr_16438_16490[(2)] = false);

(statearr_16438_16490[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (26))){
var inst_16352 = (state_16392[(11)]);
var inst_16359 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16352);
var state_16392__$1 = state_16392;
var statearr_16439_16491 = state_16392__$1;
(statearr_16439_16491[(2)] = inst_16359);

(statearr_16439_16491[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (16))){
var state_16392__$1 = state_16392;
var statearr_16440_16492 = state_16392__$1;
(statearr_16440_16492[(2)] = true);

(statearr_16440_16492[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (38))){
var inst_16382 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
var statearr_16441_16493 = state_16392__$1;
(statearr_16441_16493[(2)] = inst_16382);

(statearr_16441_16493[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (30))){
var inst_16343 = (state_16392[(9)]);
var inst_16344 = (state_16392[(13)]);
var inst_16352 = (state_16392[(11)]);
var inst_16369 = cljs.core.empty_QMARK_(inst_16343);
var inst_16370 = (inst_16344.cljs$core$IFn$_invoke$arity$1 ? inst_16344.cljs$core$IFn$_invoke$arity$1(inst_16352) : inst_16344.call(null,inst_16352));
var inst_16371 = cljs.core.not(inst_16370);
var inst_16372 = (inst_16369) && (inst_16371);
var state_16392__$1 = state_16392;
var statearr_16442_16494 = state_16392__$1;
(statearr_16442_16494[(2)] = inst_16372);

(statearr_16442_16494[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (10))){
var inst_16294 = (state_16392[(8)]);
var inst_16315 = (state_16392[(2)]);
var inst_16316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16315,cljs.core.cst$kw$solos);
var inst_16317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16315,cljs.core.cst$kw$mutes);
var inst_16318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16315,cljs.core.cst$kw$reads);
var inst_16319 = inst_16294;
var state_16392__$1 = (function (){var statearr_16443 = state_16392;
(statearr_16443[(16)] = inst_16317);

(statearr_16443[(17)] = inst_16316);

(statearr_16443[(18)] = inst_16318);

(statearr_16443[(7)] = inst_16319);

return statearr_16443;
})();
var statearr_16444_16495 = state_16392__$1;
(statearr_16444_16495[(2)] = null);

(statearr_16444_16495[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (18))){
var inst_16334 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
var statearr_16445_16496 = state_16392__$1;
(statearr_16445_16496[(2)] = inst_16334);

(statearr_16445_16496[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (37))){
var state_16392__$1 = state_16392;
var statearr_16446_16497 = state_16392__$1;
(statearr_16446_16497[(2)] = null);

(statearr_16446_16497[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16393 === (8))){
var inst_16294 = (state_16392[(8)]);
var inst_16312 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16294);
var state_16392__$1 = state_16392;
var statearr_16447_16498 = state_16392__$1;
(statearr_16447_16498[(2)] = inst_16312);

(statearr_16447_16498[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15405__auto___16452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15305__auto__,c__15405__auto___16452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15306__auto__ = null;
var cljs$core$async$mix_$_state_machine__15306__auto____0 = (function (){
var statearr_16448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16448[(0)] = cljs$core$async$mix_$_state_machine__15306__auto__);

(statearr_16448[(1)] = (1));

return statearr_16448;
});
var cljs$core$async$mix_$_state_machine__15306__auto____1 = (function (state_16392){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_16392);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e16449){if((e16449 instanceof Object)){
var ex__15309__auto__ = e16449;
var statearr_16450_16499 = state_16392;
(statearr_16450_16499[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16392);

return cljs.core.cst$kw$recur;
} else {
throw e16449;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__16500 = state_16392;
state_16392 = G__16500;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15306__auto__ = function(state_16392){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15306__auto____1.call(this,state_16392);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15306__auto____0;
cljs$core$async$mix_$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15306__auto____1;
return cljs$core$async$mix_$_state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto___16452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15407__auto__ = (function (){var statearr_16451 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_16451[(6)] = c__15405__auto___16452);

return statearr_16451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto___16452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8352__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__8352__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8352__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8352__auto__.call(null,p,v,ch));
} else {
var m__8352__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8352__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16502 = arguments.length;
switch (G__16502) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__8352__auto__.call(null,p));
} else {
var m__8352__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__8352__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__8352__auto__.call(null,p,v));
} else {
var m__8352__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__8352__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16506 = arguments.length;
switch (G__16506) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7668__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7668__auto__,mults){
return (function (p1__16504_SHARP_){
if(cljs.core.truth_((p1__16504_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16504_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16504_SHARP_.call(null,topic)))){
return p1__16504_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16504_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16507 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16507 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16508){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16508 = meta16508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16509,meta16508__$1){
var self__ = this;
var _16509__$1 = this;
return (new cljs.core.async.t_cljs$core$async16507(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16508__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16509){
var self__ = this;
var _16509__$1 = this;
return self__.meta16508;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16507.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16508], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16507.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16507";

cljs.core.async.t_cljs$core$async16507.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async16507");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16507 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16507(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16508){
return (new cljs.core.async.t_cljs$core$async16507(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16508));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16507(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15405__auto___16627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto___16627,mults,ensure_mult,p){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto___16627,mults,ensure_mult,p){
return (function (state_16581){
var state_val_16582 = (state_16581[(1)]);
if((state_val_16582 === (7))){
var inst_16577 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
var statearr_16583_16628 = state_16581__$1;
(statearr_16583_16628[(2)] = inst_16577);

(statearr_16583_16628[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (20))){
var state_16581__$1 = state_16581;
var statearr_16584_16629 = state_16581__$1;
(statearr_16584_16629[(2)] = null);

(statearr_16584_16629[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (1))){
var state_16581__$1 = state_16581;
var statearr_16585_16630 = state_16581__$1;
(statearr_16585_16630[(2)] = null);

(statearr_16585_16630[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (24))){
var inst_16560 = (state_16581[(7)]);
var inst_16569 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16560);
var state_16581__$1 = state_16581;
var statearr_16586_16631 = state_16581__$1;
(statearr_16586_16631[(2)] = inst_16569);

(statearr_16586_16631[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (4))){
var inst_16512 = (state_16581[(8)]);
var inst_16512__$1 = (state_16581[(2)]);
var inst_16513 = (inst_16512__$1 == null);
var state_16581__$1 = (function (){var statearr_16587 = state_16581;
(statearr_16587[(8)] = inst_16512__$1);

return statearr_16587;
})();
if(cljs.core.truth_(inst_16513)){
var statearr_16588_16632 = state_16581__$1;
(statearr_16588_16632[(1)] = (5));

} else {
var statearr_16589_16633 = state_16581__$1;
(statearr_16589_16633[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (15))){
var inst_16554 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
var statearr_16590_16634 = state_16581__$1;
(statearr_16590_16634[(2)] = inst_16554);

(statearr_16590_16634[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (21))){
var inst_16574 = (state_16581[(2)]);
var state_16581__$1 = (function (){var statearr_16591 = state_16581;
(statearr_16591[(9)] = inst_16574);

return statearr_16591;
})();
var statearr_16592_16635 = state_16581__$1;
(statearr_16592_16635[(2)] = null);

(statearr_16592_16635[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (13))){
var inst_16536 = (state_16581[(10)]);
var inst_16538 = cljs.core.chunked_seq_QMARK_(inst_16536);
var state_16581__$1 = state_16581;
if(inst_16538){
var statearr_16593_16636 = state_16581__$1;
(statearr_16593_16636[(1)] = (16));

} else {
var statearr_16594_16637 = state_16581__$1;
(statearr_16594_16637[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (22))){
var inst_16566 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
if(cljs.core.truth_(inst_16566)){
var statearr_16595_16638 = state_16581__$1;
(statearr_16595_16638[(1)] = (23));

} else {
var statearr_16596_16639 = state_16581__$1;
(statearr_16596_16639[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (6))){
var inst_16512 = (state_16581[(8)]);
var inst_16562 = (state_16581[(11)]);
var inst_16560 = (state_16581[(7)]);
var inst_16560__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16512) : topic_fn.call(null,inst_16512));
var inst_16561 = cljs.core.deref(mults);
var inst_16562__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16561,inst_16560__$1);
var state_16581__$1 = (function (){var statearr_16597 = state_16581;
(statearr_16597[(11)] = inst_16562__$1);

(statearr_16597[(7)] = inst_16560__$1);

return statearr_16597;
})();
if(cljs.core.truth_(inst_16562__$1)){
var statearr_16598_16640 = state_16581__$1;
(statearr_16598_16640[(1)] = (19));

} else {
var statearr_16599_16641 = state_16581__$1;
(statearr_16599_16641[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (25))){
var inst_16571 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
var statearr_16600_16642 = state_16581__$1;
(statearr_16600_16642[(2)] = inst_16571);

(statearr_16600_16642[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (17))){
var inst_16536 = (state_16581[(10)]);
var inst_16545 = cljs.core.first(inst_16536);
var inst_16546 = cljs.core.async.muxch_STAR_(inst_16545);
var inst_16547 = cljs.core.async.close_BANG_(inst_16546);
var inst_16548 = cljs.core.next(inst_16536);
var inst_16522 = inst_16548;
var inst_16523 = null;
var inst_16524 = (0);
var inst_16525 = (0);
var state_16581__$1 = (function (){var statearr_16601 = state_16581;
(statearr_16601[(12)] = inst_16547);

(statearr_16601[(13)] = inst_16524);

(statearr_16601[(14)] = inst_16523);

(statearr_16601[(15)] = inst_16525);

(statearr_16601[(16)] = inst_16522);

return statearr_16601;
})();
var statearr_16602_16643 = state_16581__$1;
(statearr_16602_16643[(2)] = null);

(statearr_16602_16643[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (3))){
var inst_16579 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16581__$1,inst_16579);
} else {
if((state_val_16582 === (12))){
var inst_16556 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
var statearr_16603_16644 = state_16581__$1;
(statearr_16603_16644[(2)] = inst_16556);

(statearr_16603_16644[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (2))){
var state_16581__$1 = state_16581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16581__$1,(4),ch);
} else {
if((state_val_16582 === (23))){
var state_16581__$1 = state_16581;
var statearr_16604_16645 = state_16581__$1;
(statearr_16604_16645[(2)] = null);

(statearr_16604_16645[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (19))){
var inst_16512 = (state_16581[(8)]);
var inst_16562 = (state_16581[(11)]);
var inst_16564 = cljs.core.async.muxch_STAR_(inst_16562);
var state_16581__$1 = state_16581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16581__$1,(22),inst_16564,inst_16512);
} else {
if((state_val_16582 === (11))){
var inst_16536 = (state_16581[(10)]);
var inst_16522 = (state_16581[(16)]);
var inst_16536__$1 = cljs.core.seq(inst_16522);
var state_16581__$1 = (function (){var statearr_16605 = state_16581;
(statearr_16605[(10)] = inst_16536__$1);

return statearr_16605;
})();
if(inst_16536__$1){
var statearr_16606_16646 = state_16581__$1;
(statearr_16606_16646[(1)] = (13));

} else {
var statearr_16607_16647 = state_16581__$1;
(statearr_16607_16647[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (9))){
var inst_16558 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
var statearr_16608_16648 = state_16581__$1;
(statearr_16608_16648[(2)] = inst_16558);

(statearr_16608_16648[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (5))){
var inst_16519 = cljs.core.deref(mults);
var inst_16520 = cljs.core.vals(inst_16519);
var inst_16521 = cljs.core.seq(inst_16520);
var inst_16522 = inst_16521;
var inst_16523 = null;
var inst_16524 = (0);
var inst_16525 = (0);
var state_16581__$1 = (function (){var statearr_16609 = state_16581;
(statearr_16609[(13)] = inst_16524);

(statearr_16609[(14)] = inst_16523);

(statearr_16609[(15)] = inst_16525);

(statearr_16609[(16)] = inst_16522);

return statearr_16609;
})();
var statearr_16610_16649 = state_16581__$1;
(statearr_16610_16649[(2)] = null);

(statearr_16610_16649[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (14))){
var state_16581__$1 = state_16581;
var statearr_16614_16650 = state_16581__$1;
(statearr_16614_16650[(2)] = null);

(statearr_16614_16650[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (16))){
var inst_16536 = (state_16581[(10)]);
var inst_16540 = cljs.core.chunk_first(inst_16536);
var inst_16541 = cljs.core.chunk_rest(inst_16536);
var inst_16542 = cljs.core.count(inst_16540);
var inst_16522 = inst_16541;
var inst_16523 = inst_16540;
var inst_16524 = inst_16542;
var inst_16525 = (0);
var state_16581__$1 = (function (){var statearr_16615 = state_16581;
(statearr_16615[(13)] = inst_16524);

(statearr_16615[(14)] = inst_16523);

(statearr_16615[(15)] = inst_16525);

(statearr_16615[(16)] = inst_16522);

return statearr_16615;
})();
var statearr_16616_16651 = state_16581__$1;
(statearr_16616_16651[(2)] = null);

(statearr_16616_16651[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (10))){
var inst_16524 = (state_16581[(13)]);
var inst_16523 = (state_16581[(14)]);
var inst_16525 = (state_16581[(15)]);
var inst_16522 = (state_16581[(16)]);
var inst_16530 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16523,inst_16525);
var inst_16531 = cljs.core.async.muxch_STAR_(inst_16530);
var inst_16532 = cljs.core.async.close_BANG_(inst_16531);
var inst_16533 = (inst_16525 + (1));
var tmp16611 = inst_16524;
var tmp16612 = inst_16523;
var tmp16613 = inst_16522;
var inst_16522__$1 = tmp16613;
var inst_16523__$1 = tmp16612;
var inst_16524__$1 = tmp16611;
var inst_16525__$1 = inst_16533;
var state_16581__$1 = (function (){var statearr_16617 = state_16581;
(statearr_16617[(17)] = inst_16532);

(statearr_16617[(13)] = inst_16524__$1);

(statearr_16617[(14)] = inst_16523__$1);

(statearr_16617[(15)] = inst_16525__$1);

(statearr_16617[(16)] = inst_16522__$1);

return statearr_16617;
})();
var statearr_16618_16652 = state_16581__$1;
(statearr_16618_16652[(2)] = null);

(statearr_16618_16652[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (18))){
var inst_16551 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
var statearr_16619_16653 = state_16581__$1;
(statearr_16619_16653[(2)] = inst_16551);

(statearr_16619_16653[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (8))){
var inst_16524 = (state_16581[(13)]);
var inst_16525 = (state_16581[(15)]);
var inst_16527 = (inst_16525 < inst_16524);
var inst_16528 = inst_16527;
var state_16581__$1 = state_16581;
if(cljs.core.truth_(inst_16528)){
var statearr_16620_16654 = state_16581__$1;
(statearr_16620_16654[(1)] = (10));

} else {
var statearr_16621_16655 = state_16581__$1;
(statearr_16621_16655[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15405__auto___16627,mults,ensure_mult,p))
;
return ((function (switch__15305__auto__,c__15405__auto___16627,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15306__auto__ = null;
var cljs$core$async$state_machine__15306__auto____0 = (function (){
var statearr_16622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16622[(0)] = cljs$core$async$state_machine__15306__auto__);

(statearr_16622[(1)] = (1));

return statearr_16622;
});
var cljs$core$async$state_machine__15306__auto____1 = (function (state_16581){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_16581);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e16623){if((e16623 instanceof Object)){
var ex__15309__auto__ = e16623;
var statearr_16624_16656 = state_16581;
(statearr_16624_16656[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16581);

return cljs.core.cst$kw$recur;
} else {
throw e16623;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__16657 = state_16581;
state_16581 = G__16657;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$state_machine__15306__auto__ = function(state_16581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15306__auto____1.call(this,state_16581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15306__auto____0;
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15306__auto____1;
return cljs$core$async$state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto___16627,mults,ensure_mult,p))
})();
var state__15407__auto__ = (function (){var statearr_16625 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_16625[(6)] = c__15405__auto___16627);

return statearr_16625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto___16627,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16659 = arguments.length;
switch (G__16659) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16662 = arguments.length;
switch (G__16662) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16665 = arguments.length;
switch (G__16665) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__15405__auto___16732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto___16732,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto___16732,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16704){
var state_val_16705 = (state_16704[(1)]);
if((state_val_16705 === (7))){
var state_16704__$1 = state_16704;
var statearr_16706_16733 = state_16704__$1;
(statearr_16706_16733[(2)] = null);

(statearr_16706_16733[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16705 === (1))){
var state_16704__$1 = state_16704;
var statearr_16707_16734 = state_16704__$1;
(statearr_16707_16734[(2)] = null);

(statearr_16707_16734[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16705 === (4))){
var inst_16668 = (state_16704[(7)]);
var inst_16670 = (inst_16668 < cnt);
var state_16704__$1 = state_16704;
if(cljs.core.truth_(inst_16670)){
var statearr_16708_16735 = state_16704__$1;
(statearr_16708_16735[(1)] = (6));

} else {
var statearr_16709_16736 = state_16704__$1;
(statearr_16709_16736[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16705 === (15))){
var inst_16700 = (state_16704[(2)]);
var state_16704__$1 = state_16704;
var statearr_16710_16737 = state_16704__$1;
(statearr_16710_16737[(2)] = inst_16700);

(statearr_16710_16737[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16705 === (13))){
var inst_16693 = cljs.core.async.close_BANG_(out);
var state_16704__$1 = state_16704;
var statearr_16711_16738 = state_16704__$1;
(statearr_16711_16738[(2)] = inst_16693);

(statearr_16711_16738[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16705 === (6))){
var state_16704__$1 = state_16704;
var statearr_16712_16739 = state_16704__$1;
(statearr_16712_16739[(2)] = null);

(statearr_16712_16739[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16705 === (3))){
var inst_16702 = (state_16704[(2)]);
var state_16704__$1 = state_16704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16704__$1,inst_16702);
} else {
if((state_val_16705 === (12))){
var inst_16690 = (state_16704[(8)]);
var inst_16690__$1 = (state_16704[(2)]);
var inst_16691 = cljs.core.some(cljs.core.nil_QMARK_,inst_16690__$1);
var state_16704__$1 = (function (){var statearr_16713 = state_16704;
(statearr_16713[(8)] = inst_16690__$1);

return statearr_16713;
})();
if(cljs.core.truth_(inst_16691)){
var statearr_16714_16740 = state_16704__$1;
(statearr_16714_16740[(1)] = (13));

} else {
var statearr_16715_16741 = state_16704__$1;
(statearr_16715_16741[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16705 === (2))){
var inst_16667 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16668 = (0);
var state_16704__$1 = (function (){var statearr_16716 = state_16704;
(statearr_16716[(9)] = inst_16667);

(statearr_16716[(7)] = inst_16668);

return statearr_16716;
})();
var statearr_16717_16742 = state_16704__$1;
(statearr_16717_16742[(2)] = null);

(statearr_16717_16742[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16705 === (11))){
var inst_16668 = (state_16704[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16704,(10),Object,null,(9));
var inst_16677 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16668) : chs__$1.call(null,inst_16668));
var inst_16678 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16668) : done.call(null,inst_16668));
var inst_16679 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16677,inst_16678);
var state_16704__$1 = state_16704;
var statearr_16718_16743 = state_16704__$1;
(statearr_16718_16743[(2)] = inst_16679);


cljs.core.async.impl.ioc_helpers.process_exception(state_16704__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16705 === (9))){
var inst_16668 = (state_16704[(7)]);
var inst_16681 = (state_16704[(2)]);
var inst_16682 = (inst_16668 + (1));
var inst_16668__$1 = inst_16682;
var state_16704__$1 = (function (){var statearr_16719 = state_16704;
(statearr_16719[(10)] = inst_16681);

(statearr_16719[(7)] = inst_16668__$1);

return statearr_16719;
})();
var statearr_16720_16744 = state_16704__$1;
(statearr_16720_16744[(2)] = null);

(statearr_16720_16744[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16705 === (5))){
var inst_16688 = (state_16704[(2)]);
var state_16704__$1 = (function (){var statearr_16721 = state_16704;
(statearr_16721[(11)] = inst_16688);

return statearr_16721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16704__$1,(12),dchan);
} else {
if((state_val_16705 === (14))){
var inst_16690 = (state_16704[(8)]);
var inst_16695 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16690);
var state_16704__$1 = state_16704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16704__$1,(16),out,inst_16695);
} else {
if((state_val_16705 === (16))){
var inst_16697 = (state_16704[(2)]);
var state_16704__$1 = (function (){var statearr_16722 = state_16704;
(statearr_16722[(12)] = inst_16697);

return statearr_16722;
})();
var statearr_16723_16745 = state_16704__$1;
(statearr_16723_16745[(2)] = null);

(statearr_16723_16745[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16705 === (10))){
var inst_16672 = (state_16704[(2)]);
var inst_16673 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16704__$1 = (function (){var statearr_16724 = state_16704;
(statearr_16724[(13)] = inst_16672);

return statearr_16724;
})();
var statearr_16725_16746 = state_16704__$1;
(statearr_16725_16746[(2)] = inst_16673);


cljs.core.async.impl.ioc_helpers.process_exception(state_16704__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16705 === (8))){
var inst_16686 = (state_16704[(2)]);
var state_16704__$1 = state_16704;
var statearr_16726_16747 = state_16704__$1;
(statearr_16726_16747[(2)] = inst_16686);

(statearr_16726_16747[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__15405__auto___16732,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15305__auto__,c__15405__auto___16732,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15306__auto__ = null;
var cljs$core$async$state_machine__15306__auto____0 = (function (){
var statearr_16727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16727[(0)] = cljs$core$async$state_machine__15306__auto__);

(statearr_16727[(1)] = (1));

return statearr_16727;
});
var cljs$core$async$state_machine__15306__auto____1 = (function (state_16704){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_16704);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e16728){if((e16728 instanceof Object)){
var ex__15309__auto__ = e16728;
var statearr_16729_16748 = state_16704;
(statearr_16729_16748[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16704);

return cljs.core.cst$kw$recur;
} else {
throw e16728;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__16749 = state_16704;
state_16704 = G__16749;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$state_machine__15306__auto__ = function(state_16704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15306__auto____1.call(this,state_16704);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15306__auto____0;
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15306__auto____1;
return cljs$core$async$state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto___16732,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15407__auto__ = (function (){var statearr_16730 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_16730[(6)] = c__15405__auto___16732);

return statearr_16730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto___16732,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16752 = arguments.length;
switch (G__16752) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15405__auto___16806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto___16806,out){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto___16806,out){
return (function (state_16784){
var state_val_16785 = (state_16784[(1)]);
if((state_val_16785 === (7))){
var inst_16764 = (state_16784[(7)]);
var inst_16763 = (state_16784[(8)]);
var inst_16763__$1 = (state_16784[(2)]);
var inst_16764__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16763__$1,(0),null);
var inst_16765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16763__$1,(1),null);
var inst_16766 = (inst_16764__$1 == null);
var state_16784__$1 = (function (){var statearr_16786 = state_16784;
(statearr_16786[(9)] = inst_16765);

(statearr_16786[(7)] = inst_16764__$1);

(statearr_16786[(8)] = inst_16763__$1);

return statearr_16786;
})();
if(cljs.core.truth_(inst_16766)){
var statearr_16787_16807 = state_16784__$1;
(statearr_16787_16807[(1)] = (8));

} else {
var statearr_16788_16808 = state_16784__$1;
(statearr_16788_16808[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (1))){
var inst_16753 = cljs.core.vec(chs);
var inst_16754 = inst_16753;
var state_16784__$1 = (function (){var statearr_16789 = state_16784;
(statearr_16789[(10)] = inst_16754);

return statearr_16789;
})();
var statearr_16790_16809 = state_16784__$1;
(statearr_16790_16809[(2)] = null);

(statearr_16790_16809[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (4))){
var inst_16754 = (state_16784[(10)]);
var state_16784__$1 = state_16784;
return cljs.core.async.ioc_alts_BANG_(state_16784__$1,(7),inst_16754);
} else {
if((state_val_16785 === (6))){
var inst_16780 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16791_16810 = state_16784__$1;
(statearr_16791_16810[(2)] = inst_16780);

(statearr_16791_16810[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (3))){
var inst_16782 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16784__$1,inst_16782);
} else {
if((state_val_16785 === (2))){
var inst_16754 = (state_16784[(10)]);
var inst_16756 = cljs.core.count(inst_16754);
var inst_16757 = (inst_16756 > (0));
var state_16784__$1 = state_16784;
if(cljs.core.truth_(inst_16757)){
var statearr_16793_16811 = state_16784__$1;
(statearr_16793_16811[(1)] = (4));

} else {
var statearr_16794_16812 = state_16784__$1;
(statearr_16794_16812[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (11))){
var inst_16754 = (state_16784[(10)]);
var inst_16773 = (state_16784[(2)]);
var tmp16792 = inst_16754;
var inst_16754__$1 = tmp16792;
var state_16784__$1 = (function (){var statearr_16795 = state_16784;
(statearr_16795[(11)] = inst_16773);

(statearr_16795[(10)] = inst_16754__$1);

return statearr_16795;
})();
var statearr_16796_16813 = state_16784__$1;
(statearr_16796_16813[(2)] = null);

(statearr_16796_16813[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (9))){
var inst_16764 = (state_16784[(7)]);
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16784__$1,(11),out,inst_16764);
} else {
if((state_val_16785 === (5))){
var inst_16778 = cljs.core.async.close_BANG_(out);
var state_16784__$1 = state_16784;
var statearr_16797_16814 = state_16784__$1;
(statearr_16797_16814[(2)] = inst_16778);

(statearr_16797_16814[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (10))){
var inst_16776 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16798_16815 = state_16784__$1;
(statearr_16798_16815[(2)] = inst_16776);

(statearr_16798_16815[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (8))){
var inst_16765 = (state_16784[(9)]);
var inst_16754 = (state_16784[(10)]);
var inst_16764 = (state_16784[(7)]);
var inst_16763 = (state_16784[(8)]);
var inst_16768 = (function (){var cs = inst_16754;
var vec__16759 = inst_16763;
var v = inst_16764;
var c = inst_16765;
return ((function (cs,vec__16759,v,c,inst_16765,inst_16754,inst_16764,inst_16763,state_val_16785,c__15405__auto___16806,out){
return (function (p1__16750_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16750_SHARP_);
});
;})(cs,vec__16759,v,c,inst_16765,inst_16754,inst_16764,inst_16763,state_val_16785,c__15405__auto___16806,out))
})();
var inst_16769 = cljs.core.filterv(inst_16768,inst_16754);
var inst_16754__$1 = inst_16769;
var state_16784__$1 = (function (){var statearr_16799 = state_16784;
(statearr_16799[(10)] = inst_16754__$1);

return statearr_16799;
})();
var statearr_16800_16816 = state_16784__$1;
(statearr_16800_16816[(2)] = null);

(statearr_16800_16816[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15405__auto___16806,out))
;
return ((function (switch__15305__auto__,c__15405__auto___16806,out){
return (function() {
var cljs$core$async$state_machine__15306__auto__ = null;
var cljs$core$async$state_machine__15306__auto____0 = (function (){
var statearr_16801 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16801[(0)] = cljs$core$async$state_machine__15306__auto__);

(statearr_16801[(1)] = (1));

return statearr_16801;
});
var cljs$core$async$state_machine__15306__auto____1 = (function (state_16784){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_16784);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e16802){if((e16802 instanceof Object)){
var ex__15309__auto__ = e16802;
var statearr_16803_16817 = state_16784;
(statearr_16803_16817[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16784);

return cljs.core.cst$kw$recur;
} else {
throw e16802;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__16818 = state_16784;
state_16784 = G__16818;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$state_machine__15306__auto__ = function(state_16784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15306__auto____1.call(this,state_16784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15306__auto____0;
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15306__auto____1;
return cljs$core$async$state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto___16806,out))
})();
var state__15407__auto__ = (function (){var statearr_16804 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_16804[(6)] = c__15405__auto___16806);

return statearr_16804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto___16806,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16820 = arguments.length;
switch (G__16820) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15405__auto___16865 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto___16865,out){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto___16865,out){
return (function (state_16844){
var state_val_16845 = (state_16844[(1)]);
if((state_val_16845 === (7))){
var inst_16826 = (state_16844[(7)]);
var inst_16826__$1 = (state_16844[(2)]);
var inst_16827 = (inst_16826__$1 == null);
var inst_16828 = cljs.core.not(inst_16827);
var state_16844__$1 = (function (){var statearr_16846 = state_16844;
(statearr_16846[(7)] = inst_16826__$1);

return statearr_16846;
})();
if(inst_16828){
var statearr_16847_16866 = state_16844__$1;
(statearr_16847_16866[(1)] = (8));

} else {
var statearr_16848_16867 = state_16844__$1;
(statearr_16848_16867[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16845 === (1))){
var inst_16821 = (0);
var state_16844__$1 = (function (){var statearr_16849 = state_16844;
(statearr_16849[(8)] = inst_16821);

return statearr_16849;
})();
var statearr_16850_16868 = state_16844__$1;
(statearr_16850_16868[(2)] = null);

(statearr_16850_16868[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16845 === (4))){
var state_16844__$1 = state_16844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16844__$1,(7),ch);
} else {
if((state_val_16845 === (6))){
var inst_16839 = (state_16844[(2)]);
var state_16844__$1 = state_16844;
var statearr_16851_16869 = state_16844__$1;
(statearr_16851_16869[(2)] = inst_16839);

(statearr_16851_16869[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16845 === (3))){
var inst_16841 = (state_16844[(2)]);
var inst_16842 = cljs.core.async.close_BANG_(out);
var state_16844__$1 = (function (){var statearr_16852 = state_16844;
(statearr_16852[(9)] = inst_16841);

return statearr_16852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16844__$1,inst_16842);
} else {
if((state_val_16845 === (2))){
var inst_16821 = (state_16844[(8)]);
var inst_16823 = (inst_16821 < n);
var state_16844__$1 = state_16844;
if(cljs.core.truth_(inst_16823)){
var statearr_16853_16870 = state_16844__$1;
(statearr_16853_16870[(1)] = (4));

} else {
var statearr_16854_16871 = state_16844__$1;
(statearr_16854_16871[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16845 === (11))){
var inst_16821 = (state_16844[(8)]);
var inst_16831 = (state_16844[(2)]);
var inst_16832 = (inst_16821 + (1));
var inst_16821__$1 = inst_16832;
var state_16844__$1 = (function (){var statearr_16855 = state_16844;
(statearr_16855[(8)] = inst_16821__$1);

(statearr_16855[(10)] = inst_16831);

return statearr_16855;
})();
var statearr_16856_16872 = state_16844__$1;
(statearr_16856_16872[(2)] = null);

(statearr_16856_16872[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16845 === (9))){
var state_16844__$1 = state_16844;
var statearr_16857_16873 = state_16844__$1;
(statearr_16857_16873[(2)] = null);

(statearr_16857_16873[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16845 === (5))){
var state_16844__$1 = state_16844;
var statearr_16858_16874 = state_16844__$1;
(statearr_16858_16874[(2)] = null);

(statearr_16858_16874[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16845 === (10))){
var inst_16836 = (state_16844[(2)]);
var state_16844__$1 = state_16844;
var statearr_16859_16875 = state_16844__$1;
(statearr_16859_16875[(2)] = inst_16836);

(statearr_16859_16875[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16845 === (8))){
var inst_16826 = (state_16844[(7)]);
var state_16844__$1 = state_16844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16844__$1,(11),out,inst_16826);
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
});})(c__15405__auto___16865,out))
;
return ((function (switch__15305__auto__,c__15405__auto___16865,out){
return (function() {
var cljs$core$async$state_machine__15306__auto__ = null;
var cljs$core$async$state_machine__15306__auto____0 = (function (){
var statearr_16860 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16860[(0)] = cljs$core$async$state_machine__15306__auto__);

(statearr_16860[(1)] = (1));

return statearr_16860;
});
var cljs$core$async$state_machine__15306__auto____1 = (function (state_16844){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_16844);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e16861){if((e16861 instanceof Object)){
var ex__15309__auto__ = e16861;
var statearr_16862_16876 = state_16844;
(statearr_16862_16876[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16844);

return cljs.core.cst$kw$recur;
} else {
throw e16861;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__16877 = state_16844;
state_16844 = G__16877;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$state_machine__15306__auto__ = function(state_16844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15306__auto____1.call(this,state_16844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15306__auto____0;
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15306__auto____1;
return cljs$core$async$state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto___16865,out))
})();
var state__15407__auto__ = (function (){var statearr_16863 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_16863[(6)] = c__15405__auto___16865);

return statearr_16863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto___16865,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16879 = (function (f,ch,meta16880){
this.f = f;
this.ch = ch;
this.meta16880 = meta16880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16881,meta16880__$1){
var self__ = this;
var _16881__$1 = this;
return (new cljs.core.async.t_cljs$core$async16879(self__.f,self__.ch,meta16880__$1));
});

cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16881){
var self__ = this;
var _16881__$1 = this;
return self__.meta16880;
});

cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16882 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16882 = (function (f,ch,meta16880,_,fn1,meta16883){
this.f = f;
this.ch = ch;
this.meta16880 = meta16880;
this._ = _;
this.fn1 = fn1;
this.meta16883 = meta16883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16884,meta16883__$1){
var self__ = this;
var _16884__$1 = this;
return (new cljs.core.async.t_cljs$core$async16882(self__.f,self__.ch,self__.meta16880,self__._,self__.fn1,meta16883__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16882.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16884){
var self__ = this;
var _16884__$1 = this;
return self__.meta16883;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16882.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16882.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16882.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16882.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16878_SHARP_){
var G__16885 = (((p1__16878_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16878_SHARP_) : self__.f.call(null,p1__16878_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16885) : f1.call(null,G__16885));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16882.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16880,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16879], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16883], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16882.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16882";

cljs.core.async.t_cljs$core$async16882.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async16882");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16882 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16882(f__$1,ch__$1,meta16880__$1,___$2,fn1__$1,meta16883){
return (new cljs.core.async.t_cljs$core$async16882(f__$1,ch__$1,meta16880__$1,___$2,fn1__$1,meta16883));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16882(self__.f,self__.ch,self__.meta16880,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7656__auto__ = ret;
if(cljs.core.truth_(and__7656__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__7656__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16886 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16886) : self__.f.call(null,G__16886));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16880], null);
});

cljs.core.async.t_cljs$core$async16879.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16879";

cljs.core.async.t_cljs$core$async16879.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async16879");
});

cljs.core.async.__GT_t_cljs$core$async16879 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16879(f__$1,ch__$1,meta16880){
return (new cljs.core.async.t_cljs$core$async16879(f__$1,ch__$1,meta16880));
});

}

return (new cljs.core.async.t_cljs$core$async16879(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16887 = (function (f,ch,meta16888){
this.f = f;
this.ch = ch;
this.meta16888 = meta16888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16889,meta16888__$1){
var self__ = this;
var _16889__$1 = this;
return (new cljs.core.async.t_cljs$core$async16887(self__.f,self__.ch,meta16888__$1));
});

cljs.core.async.t_cljs$core$async16887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16889){
var self__ = this;
var _16889__$1 = this;
return self__.meta16888;
});

cljs.core.async.t_cljs$core$async16887.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16887.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16887.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16887.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16887.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16887.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16888], null);
});

cljs.core.async.t_cljs$core$async16887.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16887";

cljs.core.async.t_cljs$core$async16887.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async16887");
});

cljs.core.async.__GT_t_cljs$core$async16887 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16887(f__$1,ch__$1,meta16888){
return (new cljs.core.async.t_cljs$core$async16887(f__$1,ch__$1,meta16888));
});

}

return (new cljs.core.async.t_cljs$core$async16887(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16890 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16890 = (function (p,ch,meta16891){
this.p = p;
this.ch = ch;
this.meta16891 = meta16891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16892,meta16891__$1){
var self__ = this;
var _16892__$1 = this;
return (new cljs.core.async.t_cljs$core$async16890(self__.p,self__.ch,meta16891__$1));
});

cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16892){
var self__ = this;
var _16892__$1 = this;
return self__.meta16891;
});

cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16891], null);
});

cljs.core.async.t_cljs$core$async16890.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16890";

cljs.core.async.t_cljs$core$async16890.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async16890");
});

cljs.core.async.__GT_t_cljs$core$async16890 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16890(p__$1,ch__$1,meta16891){
return (new cljs.core.async.t_cljs$core$async16890(p__$1,ch__$1,meta16891));
});

}

return (new cljs.core.async.t_cljs$core$async16890(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16894 = arguments.length;
switch (G__16894) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15405__auto___16934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto___16934,out){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto___16934,out){
return (function (state_16915){
var state_val_16916 = (state_16915[(1)]);
if((state_val_16916 === (7))){
var inst_16911 = (state_16915[(2)]);
var state_16915__$1 = state_16915;
var statearr_16917_16935 = state_16915__$1;
(statearr_16917_16935[(2)] = inst_16911);

(statearr_16917_16935[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16916 === (1))){
var state_16915__$1 = state_16915;
var statearr_16918_16936 = state_16915__$1;
(statearr_16918_16936[(2)] = null);

(statearr_16918_16936[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16916 === (4))){
var inst_16897 = (state_16915[(7)]);
var inst_16897__$1 = (state_16915[(2)]);
var inst_16898 = (inst_16897__$1 == null);
var state_16915__$1 = (function (){var statearr_16919 = state_16915;
(statearr_16919[(7)] = inst_16897__$1);

return statearr_16919;
})();
if(cljs.core.truth_(inst_16898)){
var statearr_16920_16937 = state_16915__$1;
(statearr_16920_16937[(1)] = (5));

} else {
var statearr_16921_16938 = state_16915__$1;
(statearr_16921_16938[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16916 === (6))){
var inst_16897 = (state_16915[(7)]);
var inst_16902 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16897) : p.call(null,inst_16897));
var state_16915__$1 = state_16915;
if(cljs.core.truth_(inst_16902)){
var statearr_16922_16939 = state_16915__$1;
(statearr_16922_16939[(1)] = (8));

} else {
var statearr_16923_16940 = state_16915__$1;
(statearr_16923_16940[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16916 === (3))){
var inst_16913 = (state_16915[(2)]);
var state_16915__$1 = state_16915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16915__$1,inst_16913);
} else {
if((state_val_16916 === (2))){
var state_16915__$1 = state_16915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16915__$1,(4),ch);
} else {
if((state_val_16916 === (11))){
var inst_16905 = (state_16915[(2)]);
var state_16915__$1 = state_16915;
var statearr_16924_16941 = state_16915__$1;
(statearr_16924_16941[(2)] = inst_16905);

(statearr_16924_16941[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16916 === (9))){
var state_16915__$1 = state_16915;
var statearr_16925_16942 = state_16915__$1;
(statearr_16925_16942[(2)] = null);

(statearr_16925_16942[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16916 === (5))){
var inst_16900 = cljs.core.async.close_BANG_(out);
var state_16915__$1 = state_16915;
var statearr_16926_16943 = state_16915__$1;
(statearr_16926_16943[(2)] = inst_16900);

(statearr_16926_16943[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16916 === (10))){
var inst_16908 = (state_16915[(2)]);
var state_16915__$1 = (function (){var statearr_16927 = state_16915;
(statearr_16927[(8)] = inst_16908);

return statearr_16927;
})();
var statearr_16928_16944 = state_16915__$1;
(statearr_16928_16944[(2)] = null);

(statearr_16928_16944[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16916 === (8))){
var inst_16897 = (state_16915[(7)]);
var state_16915__$1 = state_16915;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16915__$1,(11),out,inst_16897);
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
});})(c__15405__auto___16934,out))
;
return ((function (switch__15305__auto__,c__15405__auto___16934,out){
return (function() {
var cljs$core$async$state_machine__15306__auto__ = null;
var cljs$core$async$state_machine__15306__auto____0 = (function (){
var statearr_16929 = [null,null,null,null,null,null,null,null,null];
(statearr_16929[(0)] = cljs$core$async$state_machine__15306__auto__);

(statearr_16929[(1)] = (1));

return statearr_16929;
});
var cljs$core$async$state_machine__15306__auto____1 = (function (state_16915){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_16915);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e16930){if((e16930 instanceof Object)){
var ex__15309__auto__ = e16930;
var statearr_16931_16945 = state_16915;
(statearr_16931_16945[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16915);

return cljs.core.cst$kw$recur;
} else {
throw e16930;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__16946 = state_16915;
state_16915 = G__16946;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$state_machine__15306__auto__ = function(state_16915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15306__auto____1.call(this,state_16915);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15306__auto____0;
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15306__auto____1;
return cljs$core$async$state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto___16934,out))
})();
var state__15407__auto__ = (function (){var statearr_16932 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_16932[(6)] = c__15405__auto___16934);

return statearr_16932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto___16934,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16948 = arguments.length;
switch (G__16948) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15405__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto__){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto__){
return (function (state_17011){
var state_val_17012 = (state_17011[(1)]);
if((state_val_17012 === (7))){
var inst_17007 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
var statearr_17013_17051 = state_17011__$1;
(statearr_17013_17051[(2)] = inst_17007);

(statearr_17013_17051[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (20))){
var inst_16977 = (state_17011[(7)]);
var inst_16988 = (state_17011[(2)]);
var inst_16989 = cljs.core.next(inst_16977);
var inst_16963 = inst_16989;
var inst_16964 = null;
var inst_16965 = (0);
var inst_16966 = (0);
var state_17011__$1 = (function (){var statearr_17014 = state_17011;
(statearr_17014[(8)] = inst_16965);

(statearr_17014[(9)] = inst_16963);

(statearr_17014[(10)] = inst_16966);

(statearr_17014[(11)] = inst_16964);

(statearr_17014[(12)] = inst_16988);

return statearr_17014;
})();
var statearr_17015_17052 = state_17011__$1;
(statearr_17015_17052[(2)] = null);

(statearr_17015_17052[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (1))){
var state_17011__$1 = state_17011;
var statearr_17016_17053 = state_17011__$1;
(statearr_17016_17053[(2)] = null);

(statearr_17016_17053[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (4))){
var inst_16952 = (state_17011[(13)]);
var inst_16952__$1 = (state_17011[(2)]);
var inst_16953 = (inst_16952__$1 == null);
var state_17011__$1 = (function (){var statearr_17017 = state_17011;
(statearr_17017[(13)] = inst_16952__$1);

return statearr_17017;
})();
if(cljs.core.truth_(inst_16953)){
var statearr_17018_17054 = state_17011__$1;
(statearr_17018_17054[(1)] = (5));

} else {
var statearr_17019_17055 = state_17011__$1;
(statearr_17019_17055[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (15))){
var state_17011__$1 = state_17011;
var statearr_17023_17056 = state_17011__$1;
(statearr_17023_17056[(2)] = null);

(statearr_17023_17056[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (21))){
var state_17011__$1 = state_17011;
var statearr_17024_17057 = state_17011__$1;
(statearr_17024_17057[(2)] = null);

(statearr_17024_17057[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (13))){
var inst_16965 = (state_17011[(8)]);
var inst_16963 = (state_17011[(9)]);
var inst_16966 = (state_17011[(10)]);
var inst_16964 = (state_17011[(11)]);
var inst_16973 = (state_17011[(2)]);
var inst_16974 = (inst_16966 + (1));
var tmp17020 = inst_16965;
var tmp17021 = inst_16963;
var tmp17022 = inst_16964;
var inst_16963__$1 = tmp17021;
var inst_16964__$1 = tmp17022;
var inst_16965__$1 = tmp17020;
var inst_16966__$1 = inst_16974;
var state_17011__$1 = (function (){var statearr_17025 = state_17011;
(statearr_17025[(14)] = inst_16973);

(statearr_17025[(8)] = inst_16965__$1);

(statearr_17025[(9)] = inst_16963__$1);

(statearr_17025[(10)] = inst_16966__$1);

(statearr_17025[(11)] = inst_16964__$1);

return statearr_17025;
})();
var statearr_17026_17058 = state_17011__$1;
(statearr_17026_17058[(2)] = null);

(statearr_17026_17058[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (22))){
var state_17011__$1 = state_17011;
var statearr_17027_17059 = state_17011__$1;
(statearr_17027_17059[(2)] = null);

(statearr_17027_17059[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (6))){
var inst_16952 = (state_17011[(13)]);
var inst_16961 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16952) : f.call(null,inst_16952));
var inst_16962 = cljs.core.seq(inst_16961);
var inst_16963 = inst_16962;
var inst_16964 = null;
var inst_16965 = (0);
var inst_16966 = (0);
var state_17011__$1 = (function (){var statearr_17028 = state_17011;
(statearr_17028[(8)] = inst_16965);

(statearr_17028[(9)] = inst_16963);

(statearr_17028[(10)] = inst_16966);

(statearr_17028[(11)] = inst_16964);

return statearr_17028;
})();
var statearr_17029_17060 = state_17011__$1;
(statearr_17029_17060[(2)] = null);

(statearr_17029_17060[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (17))){
var inst_16977 = (state_17011[(7)]);
var inst_16981 = cljs.core.chunk_first(inst_16977);
var inst_16982 = cljs.core.chunk_rest(inst_16977);
var inst_16983 = cljs.core.count(inst_16981);
var inst_16963 = inst_16982;
var inst_16964 = inst_16981;
var inst_16965 = inst_16983;
var inst_16966 = (0);
var state_17011__$1 = (function (){var statearr_17030 = state_17011;
(statearr_17030[(8)] = inst_16965);

(statearr_17030[(9)] = inst_16963);

(statearr_17030[(10)] = inst_16966);

(statearr_17030[(11)] = inst_16964);

return statearr_17030;
})();
var statearr_17031_17061 = state_17011__$1;
(statearr_17031_17061[(2)] = null);

(statearr_17031_17061[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (3))){
var inst_17009 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17011__$1,inst_17009);
} else {
if((state_val_17012 === (12))){
var inst_16997 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
var statearr_17032_17062 = state_17011__$1;
(statearr_17032_17062[(2)] = inst_16997);

(statearr_17032_17062[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (2))){
var state_17011__$1 = state_17011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17011__$1,(4),in$);
} else {
if((state_val_17012 === (23))){
var inst_17005 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
var statearr_17033_17063 = state_17011__$1;
(statearr_17033_17063[(2)] = inst_17005);

(statearr_17033_17063[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (19))){
var inst_16992 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
var statearr_17034_17064 = state_17011__$1;
(statearr_17034_17064[(2)] = inst_16992);

(statearr_17034_17064[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (11))){
var inst_16977 = (state_17011[(7)]);
var inst_16963 = (state_17011[(9)]);
var inst_16977__$1 = cljs.core.seq(inst_16963);
var state_17011__$1 = (function (){var statearr_17035 = state_17011;
(statearr_17035[(7)] = inst_16977__$1);

return statearr_17035;
})();
if(inst_16977__$1){
var statearr_17036_17065 = state_17011__$1;
(statearr_17036_17065[(1)] = (14));

} else {
var statearr_17037_17066 = state_17011__$1;
(statearr_17037_17066[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (9))){
var inst_16999 = (state_17011[(2)]);
var inst_17000 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17011__$1 = (function (){var statearr_17038 = state_17011;
(statearr_17038[(15)] = inst_16999);

return statearr_17038;
})();
if(cljs.core.truth_(inst_17000)){
var statearr_17039_17067 = state_17011__$1;
(statearr_17039_17067[(1)] = (21));

} else {
var statearr_17040_17068 = state_17011__$1;
(statearr_17040_17068[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (5))){
var inst_16955 = cljs.core.async.close_BANG_(out);
var state_17011__$1 = state_17011;
var statearr_17041_17069 = state_17011__$1;
(statearr_17041_17069[(2)] = inst_16955);

(statearr_17041_17069[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (14))){
var inst_16977 = (state_17011[(7)]);
var inst_16979 = cljs.core.chunked_seq_QMARK_(inst_16977);
var state_17011__$1 = state_17011;
if(inst_16979){
var statearr_17042_17070 = state_17011__$1;
(statearr_17042_17070[(1)] = (17));

} else {
var statearr_17043_17071 = state_17011__$1;
(statearr_17043_17071[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (16))){
var inst_16995 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
var statearr_17044_17072 = state_17011__$1;
(statearr_17044_17072[(2)] = inst_16995);

(statearr_17044_17072[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17012 === (10))){
var inst_16966 = (state_17011[(10)]);
var inst_16964 = (state_17011[(11)]);
var inst_16971 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16964,inst_16966);
var state_17011__$1 = state_17011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17011__$1,(13),out,inst_16971);
} else {
if((state_val_17012 === (18))){
var inst_16977 = (state_17011[(7)]);
var inst_16986 = cljs.core.first(inst_16977);
var state_17011__$1 = state_17011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17011__$1,(20),out,inst_16986);
} else {
if((state_val_17012 === (8))){
var inst_16965 = (state_17011[(8)]);
var inst_16966 = (state_17011[(10)]);
var inst_16968 = (inst_16966 < inst_16965);
var inst_16969 = inst_16968;
var state_17011__$1 = state_17011;
if(cljs.core.truth_(inst_16969)){
var statearr_17045_17073 = state_17011__$1;
(statearr_17045_17073[(1)] = (10));

} else {
var statearr_17046_17074 = state_17011__$1;
(statearr_17046_17074[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15405__auto__))
;
return ((function (switch__15305__auto__,c__15405__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15306__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15306__auto____0 = (function (){
var statearr_17047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17047[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15306__auto__);

(statearr_17047[(1)] = (1));

return statearr_17047;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15306__auto____1 = (function (state_17011){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_17011);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e17048){if((e17048 instanceof Object)){
var ex__15309__auto__ = e17048;
var statearr_17049_17075 = state_17011;
(statearr_17049_17075[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17011);

return cljs.core.cst$kw$recur;
} else {
throw e17048;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__17076 = state_17011;
state_17011 = G__17076;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15306__auto__ = function(state_17011){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15306__auto____1.call(this,state_17011);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15306__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15306__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto__))
})();
var state__15407__auto__ = (function (){var statearr_17050 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_17050[(6)] = c__15405__auto__);

return statearr_17050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto__))
);

return c__15405__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17078 = arguments.length;
switch (G__17078) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17081 = arguments.length;
switch (G__17081) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17084 = arguments.length;
switch (G__17084) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15405__auto___17131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto___17131,out){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto___17131,out){
return (function (state_17108){
var state_val_17109 = (state_17108[(1)]);
if((state_val_17109 === (7))){
var inst_17103 = (state_17108[(2)]);
var state_17108__$1 = state_17108;
var statearr_17110_17132 = state_17108__$1;
(statearr_17110_17132[(2)] = inst_17103);

(statearr_17110_17132[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17109 === (1))){
var inst_17085 = null;
var state_17108__$1 = (function (){var statearr_17111 = state_17108;
(statearr_17111[(7)] = inst_17085);

return statearr_17111;
})();
var statearr_17112_17133 = state_17108__$1;
(statearr_17112_17133[(2)] = null);

(statearr_17112_17133[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17109 === (4))){
var inst_17088 = (state_17108[(8)]);
var inst_17088__$1 = (state_17108[(2)]);
var inst_17089 = (inst_17088__$1 == null);
var inst_17090 = cljs.core.not(inst_17089);
var state_17108__$1 = (function (){var statearr_17113 = state_17108;
(statearr_17113[(8)] = inst_17088__$1);

return statearr_17113;
})();
if(inst_17090){
var statearr_17114_17134 = state_17108__$1;
(statearr_17114_17134[(1)] = (5));

} else {
var statearr_17115_17135 = state_17108__$1;
(statearr_17115_17135[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17109 === (6))){
var state_17108__$1 = state_17108;
var statearr_17116_17136 = state_17108__$1;
(statearr_17116_17136[(2)] = null);

(statearr_17116_17136[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17109 === (3))){
var inst_17105 = (state_17108[(2)]);
var inst_17106 = cljs.core.async.close_BANG_(out);
var state_17108__$1 = (function (){var statearr_17117 = state_17108;
(statearr_17117[(9)] = inst_17105);

return statearr_17117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17108__$1,inst_17106);
} else {
if((state_val_17109 === (2))){
var state_17108__$1 = state_17108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17108__$1,(4),ch);
} else {
if((state_val_17109 === (11))){
var inst_17088 = (state_17108[(8)]);
var inst_17097 = (state_17108[(2)]);
var inst_17085 = inst_17088;
var state_17108__$1 = (function (){var statearr_17118 = state_17108;
(statearr_17118[(7)] = inst_17085);

(statearr_17118[(10)] = inst_17097);

return statearr_17118;
})();
var statearr_17119_17137 = state_17108__$1;
(statearr_17119_17137[(2)] = null);

(statearr_17119_17137[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17109 === (9))){
var inst_17088 = (state_17108[(8)]);
var state_17108__$1 = state_17108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17108__$1,(11),out,inst_17088);
} else {
if((state_val_17109 === (5))){
var inst_17088 = (state_17108[(8)]);
var inst_17085 = (state_17108[(7)]);
var inst_17092 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17088,inst_17085);
var state_17108__$1 = state_17108;
if(inst_17092){
var statearr_17121_17138 = state_17108__$1;
(statearr_17121_17138[(1)] = (8));

} else {
var statearr_17122_17139 = state_17108__$1;
(statearr_17122_17139[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17109 === (10))){
var inst_17100 = (state_17108[(2)]);
var state_17108__$1 = state_17108;
var statearr_17123_17140 = state_17108__$1;
(statearr_17123_17140[(2)] = inst_17100);

(statearr_17123_17140[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17109 === (8))){
var inst_17085 = (state_17108[(7)]);
var tmp17120 = inst_17085;
var inst_17085__$1 = tmp17120;
var state_17108__$1 = (function (){var statearr_17124 = state_17108;
(statearr_17124[(7)] = inst_17085__$1);

return statearr_17124;
})();
var statearr_17125_17141 = state_17108__$1;
(statearr_17125_17141[(2)] = null);

(statearr_17125_17141[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15405__auto___17131,out))
;
return ((function (switch__15305__auto__,c__15405__auto___17131,out){
return (function() {
var cljs$core$async$state_machine__15306__auto__ = null;
var cljs$core$async$state_machine__15306__auto____0 = (function (){
var statearr_17126 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17126[(0)] = cljs$core$async$state_machine__15306__auto__);

(statearr_17126[(1)] = (1));

return statearr_17126;
});
var cljs$core$async$state_machine__15306__auto____1 = (function (state_17108){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_17108);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e17127){if((e17127 instanceof Object)){
var ex__15309__auto__ = e17127;
var statearr_17128_17142 = state_17108;
(statearr_17128_17142[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17108);

return cljs.core.cst$kw$recur;
} else {
throw e17127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__17143 = state_17108;
state_17108 = G__17143;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$state_machine__15306__auto__ = function(state_17108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15306__auto____1.call(this,state_17108);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15306__auto____0;
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15306__auto____1;
return cljs$core$async$state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto___17131,out))
})();
var state__15407__auto__ = (function (){var statearr_17129 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_17129[(6)] = c__15405__auto___17131);

return statearr_17129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto___17131,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17145 = arguments.length;
switch (G__17145) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15405__auto___17211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto___17211,out){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto___17211,out){
return (function (state_17183){
var state_val_17184 = (state_17183[(1)]);
if((state_val_17184 === (7))){
var inst_17179 = (state_17183[(2)]);
var state_17183__$1 = state_17183;
var statearr_17185_17212 = state_17183__$1;
(statearr_17185_17212[(2)] = inst_17179);

(statearr_17185_17212[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17184 === (1))){
var inst_17146 = (new Array(n));
var inst_17147 = inst_17146;
var inst_17148 = (0);
var state_17183__$1 = (function (){var statearr_17186 = state_17183;
(statearr_17186[(7)] = inst_17147);

(statearr_17186[(8)] = inst_17148);

return statearr_17186;
})();
var statearr_17187_17213 = state_17183__$1;
(statearr_17187_17213[(2)] = null);

(statearr_17187_17213[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17184 === (4))){
var inst_17151 = (state_17183[(9)]);
var inst_17151__$1 = (state_17183[(2)]);
var inst_17152 = (inst_17151__$1 == null);
var inst_17153 = cljs.core.not(inst_17152);
var state_17183__$1 = (function (){var statearr_17188 = state_17183;
(statearr_17188[(9)] = inst_17151__$1);

return statearr_17188;
})();
if(inst_17153){
var statearr_17189_17214 = state_17183__$1;
(statearr_17189_17214[(1)] = (5));

} else {
var statearr_17190_17215 = state_17183__$1;
(statearr_17190_17215[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17184 === (15))){
var inst_17173 = (state_17183[(2)]);
var state_17183__$1 = state_17183;
var statearr_17191_17216 = state_17183__$1;
(statearr_17191_17216[(2)] = inst_17173);

(statearr_17191_17216[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17184 === (13))){
var state_17183__$1 = state_17183;
var statearr_17192_17217 = state_17183__$1;
(statearr_17192_17217[(2)] = null);

(statearr_17192_17217[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17184 === (6))){
var inst_17148 = (state_17183[(8)]);
var inst_17169 = (inst_17148 > (0));
var state_17183__$1 = state_17183;
if(cljs.core.truth_(inst_17169)){
var statearr_17193_17218 = state_17183__$1;
(statearr_17193_17218[(1)] = (12));

} else {
var statearr_17194_17219 = state_17183__$1;
(statearr_17194_17219[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17184 === (3))){
var inst_17181 = (state_17183[(2)]);
var state_17183__$1 = state_17183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17183__$1,inst_17181);
} else {
if((state_val_17184 === (12))){
var inst_17147 = (state_17183[(7)]);
var inst_17171 = cljs.core.vec(inst_17147);
var state_17183__$1 = state_17183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17183__$1,(15),out,inst_17171);
} else {
if((state_val_17184 === (2))){
var state_17183__$1 = state_17183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17183__$1,(4),ch);
} else {
if((state_val_17184 === (11))){
var inst_17163 = (state_17183[(2)]);
var inst_17164 = (new Array(n));
var inst_17147 = inst_17164;
var inst_17148 = (0);
var state_17183__$1 = (function (){var statearr_17195 = state_17183;
(statearr_17195[(7)] = inst_17147);

(statearr_17195[(10)] = inst_17163);

(statearr_17195[(8)] = inst_17148);

return statearr_17195;
})();
var statearr_17196_17220 = state_17183__$1;
(statearr_17196_17220[(2)] = null);

(statearr_17196_17220[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17184 === (9))){
var inst_17147 = (state_17183[(7)]);
var inst_17161 = cljs.core.vec(inst_17147);
var state_17183__$1 = state_17183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17183__$1,(11),out,inst_17161);
} else {
if((state_val_17184 === (5))){
var inst_17147 = (state_17183[(7)]);
var inst_17151 = (state_17183[(9)]);
var inst_17156 = (state_17183[(11)]);
var inst_17148 = (state_17183[(8)]);
var inst_17155 = (inst_17147[inst_17148] = inst_17151);
var inst_17156__$1 = (inst_17148 + (1));
var inst_17157 = (inst_17156__$1 < n);
var state_17183__$1 = (function (){var statearr_17197 = state_17183;
(statearr_17197[(11)] = inst_17156__$1);

(statearr_17197[(12)] = inst_17155);

return statearr_17197;
})();
if(cljs.core.truth_(inst_17157)){
var statearr_17198_17221 = state_17183__$1;
(statearr_17198_17221[(1)] = (8));

} else {
var statearr_17199_17222 = state_17183__$1;
(statearr_17199_17222[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17184 === (14))){
var inst_17176 = (state_17183[(2)]);
var inst_17177 = cljs.core.async.close_BANG_(out);
var state_17183__$1 = (function (){var statearr_17201 = state_17183;
(statearr_17201[(13)] = inst_17176);

return statearr_17201;
})();
var statearr_17202_17223 = state_17183__$1;
(statearr_17202_17223[(2)] = inst_17177);

(statearr_17202_17223[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17184 === (10))){
var inst_17167 = (state_17183[(2)]);
var state_17183__$1 = state_17183;
var statearr_17203_17224 = state_17183__$1;
(statearr_17203_17224[(2)] = inst_17167);

(statearr_17203_17224[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17184 === (8))){
var inst_17147 = (state_17183[(7)]);
var inst_17156 = (state_17183[(11)]);
var tmp17200 = inst_17147;
var inst_17147__$1 = tmp17200;
var inst_17148 = inst_17156;
var state_17183__$1 = (function (){var statearr_17204 = state_17183;
(statearr_17204[(7)] = inst_17147__$1);

(statearr_17204[(8)] = inst_17148);

return statearr_17204;
})();
var statearr_17205_17225 = state_17183__$1;
(statearr_17205_17225[(2)] = null);

(statearr_17205_17225[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15405__auto___17211,out))
;
return ((function (switch__15305__auto__,c__15405__auto___17211,out){
return (function() {
var cljs$core$async$state_machine__15306__auto__ = null;
var cljs$core$async$state_machine__15306__auto____0 = (function (){
var statearr_17206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17206[(0)] = cljs$core$async$state_machine__15306__auto__);

(statearr_17206[(1)] = (1));

return statearr_17206;
});
var cljs$core$async$state_machine__15306__auto____1 = (function (state_17183){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_17183);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e17207){if((e17207 instanceof Object)){
var ex__15309__auto__ = e17207;
var statearr_17208_17226 = state_17183;
(statearr_17208_17226[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17183);

return cljs.core.cst$kw$recur;
} else {
throw e17207;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__17227 = state_17183;
state_17183 = G__17227;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$state_machine__15306__auto__ = function(state_17183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15306__auto____1.call(this,state_17183);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15306__auto____0;
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15306__auto____1;
return cljs$core$async$state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto___17211,out))
})();
var state__15407__auto__ = (function (){var statearr_17209 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_17209[(6)] = c__15405__auto___17211);

return statearr_17209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto___17211,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17229 = arguments.length;
switch (G__17229) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15405__auto___17299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15405__auto___17299,out){
return (function (){
var f__15406__auto__ = (function (){var switch__15305__auto__ = ((function (c__15405__auto___17299,out){
return (function (state_17271){
var state_val_17272 = (state_17271[(1)]);
if((state_val_17272 === (7))){
var inst_17267 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
var statearr_17273_17300 = state_17271__$1;
(statearr_17273_17300[(2)] = inst_17267);

(statearr_17273_17300[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17272 === (1))){
var inst_17230 = [];
var inst_17231 = inst_17230;
var inst_17232 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17271__$1 = (function (){var statearr_17274 = state_17271;
(statearr_17274[(7)] = inst_17231);

(statearr_17274[(8)] = inst_17232);

return statearr_17274;
})();
var statearr_17275_17301 = state_17271__$1;
(statearr_17275_17301[(2)] = null);

(statearr_17275_17301[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17272 === (4))){
var inst_17235 = (state_17271[(9)]);
var inst_17235__$1 = (state_17271[(2)]);
var inst_17236 = (inst_17235__$1 == null);
var inst_17237 = cljs.core.not(inst_17236);
var state_17271__$1 = (function (){var statearr_17276 = state_17271;
(statearr_17276[(9)] = inst_17235__$1);

return statearr_17276;
})();
if(inst_17237){
var statearr_17277_17302 = state_17271__$1;
(statearr_17277_17302[(1)] = (5));

} else {
var statearr_17278_17303 = state_17271__$1;
(statearr_17278_17303[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17272 === (15))){
var inst_17261 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
var statearr_17279_17304 = state_17271__$1;
(statearr_17279_17304[(2)] = inst_17261);

(statearr_17279_17304[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17272 === (13))){
var state_17271__$1 = state_17271;
var statearr_17280_17305 = state_17271__$1;
(statearr_17280_17305[(2)] = null);

(statearr_17280_17305[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17272 === (6))){
var inst_17231 = (state_17271[(7)]);
var inst_17256 = inst_17231.length;
var inst_17257 = (inst_17256 > (0));
var state_17271__$1 = state_17271;
if(cljs.core.truth_(inst_17257)){
var statearr_17281_17306 = state_17271__$1;
(statearr_17281_17306[(1)] = (12));

} else {
var statearr_17282_17307 = state_17271__$1;
(statearr_17282_17307[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17272 === (3))){
var inst_17269 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17271__$1,inst_17269);
} else {
if((state_val_17272 === (12))){
var inst_17231 = (state_17271[(7)]);
var inst_17259 = cljs.core.vec(inst_17231);
var state_17271__$1 = state_17271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17271__$1,(15),out,inst_17259);
} else {
if((state_val_17272 === (2))){
var state_17271__$1 = state_17271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17271__$1,(4),ch);
} else {
if((state_val_17272 === (11))){
var inst_17235 = (state_17271[(9)]);
var inst_17239 = (state_17271[(10)]);
var inst_17249 = (state_17271[(2)]);
var inst_17250 = [];
var inst_17251 = inst_17250.push(inst_17235);
var inst_17231 = inst_17250;
var inst_17232 = inst_17239;
var state_17271__$1 = (function (){var statearr_17283 = state_17271;
(statearr_17283[(7)] = inst_17231);

(statearr_17283[(11)] = inst_17251);

(statearr_17283[(8)] = inst_17232);

(statearr_17283[(12)] = inst_17249);

return statearr_17283;
})();
var statearr_17284_17308 = state_17271__$1;
(statearr_17284_17308[(2)] = null);

(statearr_17284_17308[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17272 === (9))){
var inst_17231 = (state_17271[(7)]);
var inst_17247 = cljs.core.vec(inst_17231);
var state_17271__$1 = state_17271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17271__$1,(11),out,inst_17247);
} else {
if((state_val_17272 === (5))){
var inst_17235 = (state_17271[(9)]);
var inst_17232 = (state_17271[(8)]);
var inst_17239 = (state_17271[(10)]);
var inst_17239__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17235) : f.call(null,inst_17235));
var inst_17240 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17239__$1,inst_17232);
var inst_17241 = cljs.core.keyword_identical_QMARK_(inst_17232,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17242 = (inst_17240) || (inst_17241);
var state_17271__$1 = (function (){var statearr_17285 = state_17271;
(statearr_17285[(10)] = inst_17239__$1);

return statearr_17285;
})();
if(cljs.core.truth_(inst_17242)){
var statearr_17286_17309 = state_17271__$1;
(statearr_17286_17309[(1)] = (8));

} else {
var statearr_17287_17310 = state_17271__$1;
(statearr_17287_17310[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17272 === (14))){
var inst_17264 = (state_17271[(2)]);
var inst_17265 = cljs.core.async.close_BANG_(out);
var state_17271__$1 = (function (){var statearr_17289 = state_17271;
(statearr_17289[(13)] = inst_17264);

return statearr_17289;
})();
var statearr_17290_17311 = state_17271__$1;
(statearr_17290_17311[(2)] = inst_17265);

(statearr_17290_17311[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17272 === (10))){
var inst_17254 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
var statearr_17291_17312 = state_17271__$1;
(statearr_17291_17312[(2)] = inst_17254);

(statearr_17291_17312[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17272 === (8))){
var inst_17235 = (state_17271[(9)]);
var inst_17231 = (state_17271[(7)]);
var inst_17239 = (state_17271[(10)]);
var inst_17244 = inst_17231.push(inst_17235);
var tmp17288 = inst_17231;
var inst_17231__$1 = tmp17288;
var inst_17232 = inst_17239;
var state_17271__$1 = (function (){var statearr_17292 = state_17271;
(statearr_17292[(7)] = inst_17231__$1);

(statearr_17292[(8)] = inst_17232);

(statearr_17292[(14)] = inst_17244);

return statearr_17292;
})();
var statearr_17293_17313 = state_17271__$1;
(statearr_17293_17313[(2)] = null);

(statearr_17293_17313[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15405__auto___17299,out))
;
return ((function (switch__15305__auto__,c__15405__auto___17299,out){
return (function() {
var cljs$core$async$state_machine__15306__auto__ = null;
var cljs$core$async$state_machine__15306__auto____0 = (function (){
var statearr_17294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17294[(0)] = cljs$core$async$state_machine__15306__auto__);

(statearr_17294[(1)] = (1));

return statearr_17294;
});
var cljs$core$async$state_machine__15306__auto____1 = (function (state_17271){
while(true){
var ret_value__15307__auto__ = (function (){try{while(true){
var result__15308__auto__ = switch__15305__auto__(state_17271);
if(cljs.core.keyword_identical_QMARK_(result__15308__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15308__auto__;
}
break;
}
}catch (e17295){if((e17295 instanceof Object)){
var ex__15309__auto__ = e17295;
var statearr_17296_17314 = state_17271;
(statearr_17296_17314[(5)] = ex__15309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17271);

return cljs.core.cst$kw$recur;
} else {
throw e17295;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15307__auto__,cljs.core.cst$kw$recur)){
var G__17315 = state_17271;
state_17271 = G__17315;
continue;
} else {
return ret_value__15307__auto__;
}
break;
}
});
cljs$core$async$state_machine__15306__auto__ = function(state_17271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15306__auto____1.call(this,state_17271);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15306__auto____0;
cljs$core$async$state_machine__15306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15306__auto____1;
return cljs$core$async$state_machine__15306__auto__;
})()
;})(switch__15305__auto__,c__15405__auto___17299,out))
})();
var state__15407__auto__ = (function (){var statearr_17297 = (f__15406__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15406__auto__.cljs$core$IFn$_invoke$arity$0() : f__15406__auto__.call(null));
(statearr_17297[(6)] = c__15405__auto___17299);

return statearr_17297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15407__auto__);
});})(c__15405__auto___17299,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

