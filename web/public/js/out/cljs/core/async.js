// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34470 = arguments.length;
switch (G__34470) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34471 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34471 = (function (f,blockable,meta34472){
this.f = f;
this.blockable = blockable;
this.meta34472 = meta34472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34473,meta34472__$1){
var self__ = this;
var _34473__$1 = this;
return (new cljs.core.async.t_cljs$core$async34471(self__.f,self__.blockable,meta34472__$1));
});

cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34473){
var self__ = this;
var _34473__$1 = this;
return self__.meta34472;
});

cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34472","meta34472",-197956940,null)], null);
});

cljs.core.async.t_cljs$core$async34471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34471";

cljs.core.async.t_cljs$core$async34471.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async34471");
});

cljs.core.async.__GT_t_cljs$core$async34471 = (function cljs$core$async$__GT_t_cljs$core$async34471(f__$1,blockable__$1,meta34472){
return (new cljs.core.async.t_cljs$core$async34471(f__$1,blockable__$1,meta34472));
});

}

return (new cljs.core.async.t_cljs$core$async34471(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__34477 = arguments.length;
switch (G__34477) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__34480 = arguments.length;
switch (G__34480) {
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
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__34483 = arguments.length;
switch (G__34483) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34485 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34485);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34485,ret){
return (function (){
return fn1.call(null,val_34485);
});})(val_34485,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__34487 = arguments.length;
switch (G__34487) {
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
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28998__auto___34489 = n;
var x_34490 = (0);
while(true){
if((x_34490 < n__28998__auto___34489)){
(a[x_34490] = (0));

var G__34491 = (x_34490 + (1));
x_34490 = G__34491;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__34492 = (i + (1));
i = G__34492;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34493 = (function (flag,meta34494){
this.flag = flag;
this.meta34494 = meta34494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34495,meta34494__$1){
var self__ = this;
var _34495__$1 = this;
return (new cljs.core.async.t_cljs$core$async34493(self__.flag,meta34494__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34495){
var self__ = this;
var _34495__$1 = this;
return self__.meta34494;
});})(flag))
;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34493.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34494","meta34494",-883342596,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34493";

cljs.core.async.t_cljs$core$async34493.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async34493");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34493 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34493(flag__$1,meta34494){
return (new cljs.core.async.t_cljs$core$async34493(flag__$1,meta34494));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34493(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34496 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34496 = (function (flag,cb,meta34497){
this.flag = flag;
this.cb = cb;
this.meta34497 = meta34497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34498,meta34497__$1){
var self__ = this;
var _34498__$1 = this;
return (new cljs.core.async.t_cljs$core$async34496(self__.flag,self__.cb,meta34497__$1));
});

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34498){
var self__ = this;
var _34498__$1 = this;
return self__.meta34497;
});

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34497","meta34497",-398361949,null)], null);
});

cljs.core.async.t_cljs$core$async34496.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34496";

cljs.core.async.t_cljs$core$async34496.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async34496");
});

cljs.core.async.__GT_t_cljs$core$async34496 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34496(flag__$1,cb__$1,meta34497){
return (new cljs.core.async.t_cljs$core$async34496(flag__$1,cb__$1,meta34497));
});

}

return (new cljs.core.async.t_cljs$core$async34496(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34499_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34499_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34500_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34500_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28051__auto__ = wport;
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34501 = (i + (1));
i = G__34501;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28051__auto__ = ret;
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28039__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28039__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28039__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__29229__auto__ = [];
var len__29222__auto___34507 = arguments.length;
var i__29223__auto___34508 = (0);
while(true){
if((i__29223__auto___34508 < len__29222__auto___34507)){
args__29229__auto__.push((arguments[i__29223__auto___34508]));

var G__34509 = (i__29223__auto___34508 + (1));
i__29223__auto___34508 = G__34509;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34504){
var map__34505 = p__34504;
var map__34505__$1 = ((((!((map__34505 == null)))?((((map__34505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34505):map__34505);
var opts = map__34505__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34502){
var G__34503 = cljs.core.first.call(null,seq34502);
var seq34502__$1 = cljs.core.next.call(null,seq34502);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34503,seq34502__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__34511 = arguments.length;
switch (G__34511) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34424__auto___34557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___34557){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___34557){
return (function (state_34535){
var state_val_34536 = (state_34535[(1)]);
if((state_val_34536 === (7))){
var inst_34531 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34537_34558 = state_34535__$1;
(statearr_34537_34558[(2)] = inst_34531);

(statearr_34537_34558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (1))){
var state_34535__$1 = state_34535;
var statearr_34538_34559 = state_34535__$1;
(statearr_34538_34559[(2)] = null);

(statearr_34538_34559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (4))){
var inst_34514 = (state_34535[(7)]);
var inst_34514__$1 = (state_34535[(2)]);
var inst_34515 = (inst_34514__$1 == null);
var state_34535__$1 = (function (){var statearr_34539 = state_34535;
(statearr_34539[(7)] = inst_34514__$1);

return statearr_34539;
})();
if(cljs.core.truth_(inst_34515)){
var statearr_34540_34560 = state_34535__$1;
(statearr_34540_34560[(1)] = (5));

} else {
var statearr_34541_34561 = state_34535__$1;
(statearr_34541_34561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (13))){
var state_34535__$1 = state_34535;
var statearr_34542_34562 = state_34535__$1;
(statearr_34542_34562[(2)] = null);

(statearr_34542_34562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (6))){
var inst_34514 = (state_34535[(7)]);
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34535__$1,(11),to,inst_34514);
} else {
if((state_val_34536 === (3))){
var inst_34533 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34535__$1,inst_34533);
} else {
if((state_val_34536 === (12))){
var state_34535__$1 = state_34535;
var statearr_34543_34563 = state_34535__$1;
(statearr_34543_34563[(2)] = null);

(statearr_34543_34563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (2))){
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34535__$1,(4),from);
} else {
if((state_val_34536 === (11))){
var inst_34524 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
if(cljs.core.truth_(inst_34524)){
var statearr_34544_34564 = state_34535__$1;
(statearr_34544_34564[(1)] = (12));

} else {
var statearr_34545_34565 = state_34535__$1;
(statearr_34545_34565[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (9))){
var state_34535__$1 = state_34535;
var statearr_34546_34566 = state_34535__$1;
(statearr_34546_34566[(2)] = null);

(statearr_34546_34566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (5))){
var state_34535__$1 = state_34535;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34547_34567 = state_34535__$1;
(statearr_34547_34567[(1)] = (8));

} else {
var statearr_34548_34568 = state_34535__$1;
(statearr_34548_34568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (14))){
var inst_34529 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34549_34569 = state_34535__$1;
(statearr_34549_34569[(2)] = inst_34529);

(statearr_34549_34569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (10))){
var inst_34521 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34550_34570 = state_34535__$1;
(statearr_34550_34570[(2)] = inst_34521);

(statearr_34550_34570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (8))){
var inst_34518 = cljs.core.async.close_BANG_.call(null,to);
var state_34535__$1 = state_34535;
var statearr_34551_34571 = state_34535__$1;
(statearr_34551_34571[(2)] = inst_34518);

(statearr_34551_34571[(1)] = (10));


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
});})(c__34424__auto___34557))
;
return ((function (switch__34336__auto__,c__34424__auto___34557){
return (function() {
var cljs$core$async$state_machine__34337__auto__ = null;
var cljs$core$async$state_machine__34337__auto____0 = (function (){
var statearr_34552 = [null,null,null,null,null,null,null,null];
(statearr_34552[(0)] = cljs$core$async$state_machine__34337__auto__);

(statearr_34552[(1)] = (1));

return statearr_34552;
});
var cljs$core$async$state_machine__34337__auto____1 = (function (state_34535){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_34535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e34553){if((e34553 instanceof Object)){
var ex__34340__auto__ = e34553;
var statearr_34554_34572 = state_34535;
(statearr_34554_34572[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34573 = state_34535;
state_34535 = G__34573;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$state_machine__34337__auto__ = function(state_34535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34337__auto____1.call(this,state_34535);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34337__auto____0;
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34337__auto____1;
return cljs$core$async$state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___34557))
})();
var state__34426__auto__ = (function (){var statearr_34555 = f__34425__auto__.call(null);
(statearr_34555[(6)] = c__34424__auto___34557);

return statearr_34555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___34557))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34574){
var vec__34575 = p__34574;
var v = cljs.core.nth.call(null,vec__34575,(0),null);
var p = cljs.core.nth.call(null,vec__34575,(1),null);
var job = vec__34575;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34424__auto___34746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___34746,res,vec__34575,v,p,job,jobs,results){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___34746,res,vec__34575,v,p,job,jobs,results){
return (function (state_34582){
var state_val_34583 = (state_34582[(1)]);
if((state_val_34583 === (1))){
var state_34582__$1 = state_34582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34582__$1,(2),res,v);
} else {
if((state_val_34583 === (2))){
var inst_34579 = (state_34582[(2)]);
var inst_34580 = cljs.core.async.close_BANG_.call(null,res);
var state_34582__$1 = (function (){var statearr_34584 = state_34582;
(statearr_34584[(7)] = inst_34579);

return statearr_34584;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34582__$1,inst_34580);
} else {
return null;
}
}
});})(c__34424__auto___34746,res,vec__34575,v,p,job,jobs,results))
;
return ((function (switch__34336__auto__,c__34424__auto___34746,res,vec__34575,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____0 = (function (){
var statearr_34585 = [null,null,null,null,null,null,null,null];
(statearr_34585[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__);

(statearr_34585[(1)] = (1));

return statearr_34585;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____1 = (function (state_34582){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_34582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e34586){if((e34586 instanceof Object)){
var ex__34340__auto__ = e34586;
var statearr_34587_34747 = state_34582;
(statearr_34587_34747[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34748 = state_34582;
state_34582 = G__34748;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__ = function(state_34582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____1.call(this,state_34582);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___34746,res,vec__34575,v,p,job,jobs,results))
})();
var state__34426__auto__ = (function (){var statearr_34588 = f__34425__auto__.call(null);
(statearr_34588[(6)] = c__34424__auto___34746);

return statearr_34588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___34746,res,vec__34575,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34589){
var vec__34590 = p__34589;
var v = cljs.core.nth.call(null,vec__34590,(0),null);
var p = cljs.core.nth.call(null,vec__34590,(1),null);
var job = vec__34590;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28998__auto___34749 = n;
var __34750 = (0);
while(true){
if((__34750 < n__28998__auto___34749)){
var G__34593_34751 = type;
var G__34593_34752__$1 = (((G__34593_34751 instanceof cljs.core.Keyword))?G__34593_34751.fqn:null);
switch (G__34593_34752__$1) {
case "compute":
var c__34424__auto___34754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34750,c__34424__auto___34754,G__34593_34751,G__34593_34752__$1,n__28998__auto___34749,jobs,results,process,async){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (__34750,c__34424__auto___34754,G__34593_34751,G__34593_34752__$1,n__28998__auto___34749,jobs,results,process,async){
return (function (state_34606){
var state_val_34607 = (state_34606[(1)]);
if((state_val_34607 === (1))){
var state_34606__$1 = state_34606;
var statearr_34608_34755 = state_34606__$1;
(statearr_34608_34755[(2)] = null);

(statearr_34608_34755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (2))){
var state_34606__$1 = state_34606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34606__$1,(4),jobs);
} else {
if((state_val_34607 === (3))){
var inst_34604 = (state_34606[(2)]);
var state_34606__$1 = state_34606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34606__$1,inst_34604);
} else {
if((state_val_34607 === (4))){
var inst_34596 = (state_34606[(2)]);
var inst_34597 = process.call(null,inst_34596);
var state_34606__$1 = state_34606;
if(cljs.core.truth_(inst_34597)){
var statearr_34609_34756 = state_34606__$1;
(statearr_34609_34756[(1)] = (5));

} else {
var statearr_34610_34757 = state_34606__$1;
(statearr_34610_34757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (5))){
var state_34606__$1 = state_34606;
var statearr_34611_34758 = state_34606__$1;
(statearr_34611_34758[(2)] = null);

(statearr_34611_34758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (6))){
var state_34606__$1 = state_34606;
var statearr_34612_34759 = state_34606__$1;
(statearr_34612_34759[(2)] = null);

(statearr_34612_34759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (7))){
var inst_34602 = (state_34606[(2)]);
var state_34606__$1 = state_34606;
var statearr_34613_34760 = state_34606__$1;
(statearr_34613_34760[(2)] = inst_34602);

(statearr_34613_34760[(1)] = (3));


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
});})(__34750,c__34424__auto___34754,G__34593_34751,G__34593_34752__$1,n__28998__auto___34749,jobs,results,process,async))
;
return ((function (__34750,switch__34336__auto__,c__34424__auto___34754,G__34593_34751,G__34593_34752__$1,n__28998__auto___34749,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____0 = (function (){
var statearr_34614 = [null,null,null,null,null,null,null];
(statearr_34614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__);

(statearr_34614[(1)] = (1));

return statearr_34614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____1 = (function (state_34606){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_34606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e34615){if((e34615 instanceof Object)){
var ex__34340__auto__ = e34615;
var statearr_34616_34761 = state_34606;
(statearr_34616_34761[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34762 = state_34606;
state_34606 = G__34762;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__ = function(state_34606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____1.call(this,state_34606);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__;
})()
;})(__34750,switch__34336__auto__,c__34424__auto___34754,G__34593_34751,G__34593_34752__$1,n__28998__auto___34749,jobs,results,process,async))
})();
var state__34426__auto__ = (function (){var statearr_34617 = f__34425__auto__.call(null);
(statearr_34617[(6)] = c__34424__auto___34754);

return statearr_34617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(__34750,c__34424__auto___34754,G__34593_34751,G__34593_34752__$1,n__28998__auto___34749,jobs,results,process,async))
);


break;
case "async":
var c__34424__auto___34763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34750,c__34424__auto___34763,G__34593_34751,G__34593_34752__$1,n__28998__auto___34749,jobs,results,process,async){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (__34750,c__34424__auto___34763,G__34593_34751,G__34593_34752__$1,n__28998__auto___34749,jobs,results,process,async){
return (function (state_34630){
var state_val_34631 = (state_34630[(1)]);
if((state_val_34631 === (1))){
var state_34630__$1 = state_34630;
var statearr_34632_34764 = state_34630__$1;
(statearr_34632_34764[(2)] = null);

(statearr_34632_34764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (2))){
var state_34630__$1 = state_34630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34630__$1,(4),jobs);
} else {
if((state_val_34631 === (3))){
var inst_34628 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34630__$1,inst_34628);
} else {
if((state_val_34631 === (4))){
var inst_34620 = (state_34630[(2)]);
var inst_34621 = async.call(null,inst_34620);
var state_34630__$1 = state_34630;
if(cljs.core.truth_(inst_34621)){
var statearr_34633_34765 = state_34630__$1;
(statearr_34633_34765[(1)] = (5));

} else {
var statearr_34634_34766 = state_34630__$1;
(statearr_34634_34766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (5))){
var state_34630__$1 = state_34630;
var statearr_34635_34767 = state_34630__$1;
(statearr_34635_34767[(2)] = null);

(statearr_34635_34767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (6))){
var state_34630__$1 = state_34630;
var statearr_34636_34768 = state_34630__$1;
(statearr_34636_34768[(2)] = null);

(statearr_34636_34768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (7))){
var inst_34626 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
var statearr_34637_34769 = state_34630__$1;
(statearr_34637_34769[(2)] = inst_34626);

(statearr_34637_34769[(1)] = (3));


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
});})(__34750,c__34424__auto___34763,G__34593_34751,G__34593_34752__$1,n__28998__auto___34749,jobs,results,process,async))
;
return ((function (__34750,switch__34336__auto__,c__34424__auto___34763,G__34593_34751,G__34593_34752__$1,n__28998__auto___34749,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____0 = (function (){
var statearr_34638 = [null,null,null,null,null,null,null];
(statearr_34638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__);

(statearr_34638[(1)] = (1));

return statearr_34638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____1 = (function (state_34630){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_34630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e34639){if((e34639 instanceof Object)){
var ex__34340__auto__ = e34639;
var statearr_34640_34770 = state_34630;
(statearr_34640_34770[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34771 = state_34630;
state_34630 = G__34771;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__ = function(state_34630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____1.call(this,state_34630);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__;
})()
;})(__34750,switch__34336__auto__,c__34424__auto___34763,G__34593_34751,G__34593_34752__$1,n__28998__auto___34749,jobs,results,process,async))
})();
var state__34426__auto__ = (function (){var statearr_34641 = f__34425__auto__.call(null);
(statearr_34641[(6)] = c__34424__auto___34763);

return statearr_34641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(__34750,c__34424__auto___34763,G__34593_34751,G__34593_34752__$1,n__28998__auto___34749,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34593_34752__$1)].join('')));

}

var G__34772 = (__34750 + (1));
__34750 = G__34772;
continue;
} else {
}
break;
}

var c__34424__auto___34773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___34773,jobs,results,process,async){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___34773,jobs,results,process,async){
return (function (state_34663){
var state_val_34664 = (state_34663[(1)]);
if((state_val_34664 === (1))){
var state_34663__$1 = state_34663;
var statearr_34665_34774 = state_34663__$1;
(statearr_34665_34774[(2)] = null);

(statearr_34665_34774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (2))){
var state_34663__$1 = state_34663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34663__$1,(4),from);
} else {
if((state_val_34664 === (3))){
var inst_34661 = (state_34663[(2)]);
var state_34663__$1 = state_34663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34663__$1,inst_34661);
} else {
if((state_val_34664 === (4))){
var inst_34644 = (state_34663[(7)]);
var inst_34644__$1 = (state_34663[(2)]);
var inst_34645 = (inst_34644__$1 == null);
var state_34663__$1 = (function (){var statearr_34666 = state_34663;
(statearr_34666[(7)] = inst_34644__$1);

return statearr_34666;
})();
if(cljs.core.truth_(inst_34645)){
var statearr_34667_34775 = state_34663__$1;
(statearr_34667_34775[(1)] = (5));

} else {
var statearr_34668_34776 = state_34663__$1;
(statearr_34668_34776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (5))){
var inst_34647 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34663__$1 = state_34663;
var statearr_34669_34777 = state_34663__$1;
(statearr_34669_34777[(2)] = inst_34647);

(statearr_34669_34777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (6))){
var inst_34644 = (state_34663[(7)]);
var inst_34649 = (state_34663[(8)]);
var inst_34649__$1 = cljs.core.async.chan.call(null,(1));
var inst_34650 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34651 = [inst_34644,inst_34649__$1];
var inst_34652 = (new cljs.core.PersistentVector(null,2,(5),inst_34650,inst_34651,null));
var state_34663__$1 = (function (){var statearr_34670 = state_34663;
(statearr_34670[(8)] = inst_34649__$1);

return statearr_34670;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34663__$1,(8),jobs,inst_34652);
} else {
if((state_val_34664 === (7))){
var inst_34659 = (state_34663[(2)]);
var state_34663__$1 = state_34663;
var statearr_34671_34778 = state_34663__$1;
(statearr_34671_34778[(2)] = inst_34659);

(statearr_34671_34778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (8))){
var inst_34649 = (state_34663[(8)]);
var inst_34654 = (state_34663[(2)]);
var state_34663__$1 = (function (){var statearr_34672 = state_34663;
(statearr_34672[(9)] = inst_34654);

return statearr_34672;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34663__$1,(9),results,inst_34649);
} else {
if((state_val_34664 === (9))){
var inst_34656 = (state_34663[(2)]);
var state_34663__$1 = (function (){var statearr_34673 = state_34663;
(statearr_34673[(10)] = inst_34656);

return statearr_34673;
})();
var statearr_34674_34779 = state_34663__$1;
(statearr_34674_34779[(2)] = null);

(statearr_34674_34779[(1)] = (2));


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
});})(c__34424__auto___34773,jobs,results,process,async))
;
return ((function (switch__34336__auto__,c__34424__auto___34773,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____0 = (function (){
var statearr_34675 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34675[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__);

(statearr_34675[(1)] = (1));

return statearr_34675;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____1 = (function (state_34663){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_34663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e34676){if((e34676 instanceof Object)){
var ex__34340__auto__ = e34676;
var statearr_34677_34780 = state_34663;
(statearr_34677_34780[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34781 = state_34663;
state_34663 = G__34781;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__ = function(state_34663){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____1.call(this,state_34663);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___34773,jobs,results,process,async))
})();
var state__34426__auto__ = (function (){var statearr_34678 = f__34425__auto__.call(null);
(statearr_34678[(6)] = c__34424__auto___34773);

return statearr_34678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___34773,jobs,results,process,async))
);


var c__34424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto__,jobs,results,process,async){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto__,jobs,results,process,async){
return (function (state_34716){
var state_val_34717 = (state_34716[(1)]);
if((state_val_34717 === (7))){
var inst_34712 = (state_34716[(2)]);
var state_34716__$1 = state_34716;
var statearr_34718_34782 = state_34716__$1;
(statearr_34718_34782[(2)] = inst_34712);

(statearr_34718_34782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34717 === (20))){
var state_34716__$1 = state_34716;
var statearr_34719_34783 = state_34716__$1;
(statearr_34719_34783[(2)] = null);

(statearr_34719_34783[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34717 === (1))){
var state_34716__$1 = state_34716;
var statearr_34720_34784 = state_34716__$1;
(statearr_34720_34784[(2)] = null);

(statearr_34720_34784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34717 === (4))){
var inst_34681 = (state_34716[(7)]);
var inst_34681__$1 = (state_34716[(2)]);
var inst_34682 = (inst_34681__$1 == null);
var state_34716__$1 = (function (){var statearr_34721 = state_34716;
(statearr_34721[(7)] = inst_34681__$1);

return statearr_34721;
})();
if(cljs.core.truth_(inst_34682)){
var statearr_34722_34785 = state_34716__$1;
(statearr_34722_34785[(1)] = (5));

} else {
var statearr_34723_34786 = state_34716__$1;
(statearr_34723_34786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34717 === (15))){
var inst_34694 = (state_34716[(8)]);
var state_34716__$1 = state_34716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34716__$1,(18),to,inst_34694);
} else {
if((state_val_34717 === (21))){
var inst_34707 = (state_34716[(2)]);
var state_34716__$1 = state_34716;
var statearr_34724_34787 = state_34716__$1;
(statearr_34724_34787[(2)] = inst_34707);

(statearr_34724_34787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34717 === (13))){
var inst_34709 = (state_34716[(2)]);
var state_34716__$1 = (function (){var statearr_34725 = state_34716;
(statearr_34725[(9)] = inst_34709);

return statearr_34725;
})();
var statearr_34726_34788 = state_34716__$1;
(statearr_34726_34788[(2)] = null);

(statearr_34726_34788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34717 === (6))){
var inst_34681 = (state_34716[(7)]);
var state_34716__$1 = state_34716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34716__$1,(11),inst_34681);
} else {
if((state_val_34717 === (17))){
var inst_34702 = (state_34716[(2)]);
var state_34716__$1 = state_34716;
if(cljs.core.truth_(inst_34702)){
var statearr_34727_34789 = state_34716__$1;
(statearr_34727_34789[(1)] = (19));

} else {
var statearr_34728_34790 = state_34716__$1;
(statearr_34728_34790[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34717 === (3))){
var inst_34714 = (state_34716[(2)]);
var state_34716__$1 = state_34716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34716__$1,inst_34714);
} else {
if((state_val_34717 === (12))){
var inst_34691 = (state_34716[(10)]);
var state_34716__$1 = state_34716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34716__$1,(14),inst_34691);
} else {
if((state_val_34717 === (2))){
var state_34716__$1 = state_34716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34716__$1,(4),results);
} else {
if((state_val_34717 === (19))){
var state_34716__$1 = state_34716;
var statearr_34729_34791 = state_34716__$1;
(statearr_34729_34791[(2)] = null);

(statearr_34729_34791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34717 === (11))){
var inst_34691 = (state_34716[(2)]);
var state_34716__$1 = (function (){var statearr_34730 = state_34716;
(statearr_34730[(10)] = inst_34691);

return statearr_34730;
})();
var statearr_34731_34792 = state_34716__$1;
(statearr_34731_34792[(2)] = null);

(statearr_34731_34792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34717 === (9))){
var state_34716__$1 = state_34716;
var statearr_34732_34793 = state_34716__$1;
(statearr_34732_34793[(2)] = null);

(statearr_34732_34793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34717 === (5))){
var state_34716__$1 = state_34716;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34733_34794 = state_34716__$1;
(statearr_34733_34794[(1)] = (8));

} else {
var statearr_34734_34795 = state_34716__$1;
(statearr_34734_34795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34717 === (14))){
var inst_34696 = (state_34716[(11)]);
var inst_34694 = (state_34716[(8)]);
var inst_34694__$1 = (state_34716[(2)]);
var inst_34695 = (inst_34694__$1 == null);
var inst_34696__$1 = cljs.core.not.call(null,inst_34695);
var state_34716__$1 = (function (){var statearr_34735 = state_34716;
(statearr_34735[(11)] = inst_34696__$1);

(statearr_34735[(8)] = inst_34694__$1);

return statearr_34735;
})();
if(inst_34696__$1){
var statearr_34736_34796 = state_34716__$1;
(statearr_34736_34796[(1)] = (15));

} else {
var statearr_34737_34797 = state_34716__$1;
(statearr_34737_34797[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34717 === (16))){
var inst_34696 = (state_34716[(11)]);
var state_34716__$1 = state_34716;
var statearr_34738_34798 = state_34716__$1;
(statearr_34738_34798[(2)] = inst_34696);

(statearr_34738_34798[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34717 === (10))){
var inst_34688 = (state_34716[(2)]);
var state_34716__$1 = state_34716;
var statearr_34739_34799 = state_34716__$1;
(statearr_34739_34799[(2)] = inst_34688);

(statearr_34739_34799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34717 === (18))){
var inst_34699 = (state_34716[(2)]);
var state_34716__$1 = state_34716;
var statearr_34740_34800 = state_34716__$1;
(statearr_34740_34800[(2)] = inst_34699);

(statearr_34740_34800[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34717 === (8))){
var inst_34685 = cljs.core.async.close_BANG_.call(null,to);
var state_34716__$1 = state_34716;
var statearr_34741_34801 = state_34716__$1;
(statearr_34741_34801[(2)] = inst_34685);

(statearr_34741_34801[(1)] = (10));


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
});})(c__34424__auto__,jobs,results,process,async))
;
return ((function (switch__34336__auto__,c__34424__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____0 = (function (){
var statearr_34742 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34742[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__);

(statearr_34742[(1)] = (1));

return statearr_34742;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____1 = (function (state_34716){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_34716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e34743){if((e34743 instanceof Object)){
var ex__34340__auto__ = e34743;
var statearr_34744_34802 = state_34716;
(statearr_34744_34802[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34803 = state_34716;
state_34716 = G__34803;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__ = function(state_34716){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____1.call(this,state_34716);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34337__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto__,jobs,results,process,async))
})();
var state__34426__auto__ = (function (){var statearr_34745 = f__34425__auto__.call(null);
(statearr_34745[(6)] = c__34424__auto__);

return statearr_34745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto__,jobs,results,process,async))
);

return c__34424__auto__;
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
var G__34805 = arguments.length;
switch (G__34805) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__34808 = arguments.length;
switch (G__34808) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__34811 = arguments.length;
switch (G__34811) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34424__auto___34860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___34860,tc,fc){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___34860,tc,fc){
return (function (state_34837){
var state_val_34838 = (state_34837[(1)]);
if((state_val_34838 === (7))){
var inst_34833 = (state_34837[(2)]);
var state_34837__$1 = state_34837;
var statearr_34839_34861 = state_34837__$1;
(statearr_34839_34861[(2)] = inst_34833);

(statearr_34839_34861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (1))){
var state_34837__$1 = state_34837;
var statearr_34840_34862 = state_34837__$1;
(statearr_34840_34862[(2)] = null);

(statearr_34840_34862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (4))){
var inst_34814 = (state_34837[(7)]);
var inst_34814__$1 = (state_34837[(2)]);
var inst_34815 = (inst_34814__$1 == null);
var state_34837__$1 = (function (){var statearr_34841 = state_34837;
(statearr_34841[(7)] = inst_34814__$1);

return statearr_34841;
})();
if(cljs.core.truth_(inst_34815)){
var statearr_34842_34863 = state_34837__$1;
(statearr_34842_34863[(1)] = (5));

} else {
var statearr_34843_34864 = state_34837__$1;
(statearr_34843_34864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (13))){
var state_34837__$1 = state_34837;
var statearr_34844_34865 = state_34837__$1;
(statearr_34844_34865[(2)] = null);

(statearr_34844_34865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (6))){
var inst_34814 = (state_34837[(7)]);
var inst_34820 = p.call(null,inst_34814);
var state_34837__$1 = state_34837;
if(cljs.core.truth_(inst_34820)){
var statearr_34845_34866 = state_34837__$1;
(statearr_34845_34866[(1)] = (9));

} else {
var statearr_34846_34867 = state_34837__$1;
(statearr_34846_34867[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (3))){
var inst_34835 = (state_34837[(2)]);
var state_34837__$1 = state_34837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34837__$1,inst_34835);
} else {
if((state_val_34838 === (12))){
var state_34837__$1 = state_34837;
var statearr_34847_34868 = state_34837__$1;
(statearr_34847_34868[(2)] = null);

(statearr_34847_34868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (2))){
var state_34837__$1 = state_34837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34837__$1,(4),ch);
} else {
if((state_val_34838 === (11))){
var inst_34814 = (state_34837[(7)]);
var inst_34824 = (state_34837[(2)]);
var state_34837__$1 = state_34837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34837__$1,(8),inst_34824,inst_34814);
} else {
if((state_val_34838 === (9))){
var state_34837__$1 = state_34837;
var statearr_34848_34869 = state_34837__$1;
(statearr_34848_34869[(2)] = tc);

(statearr_34848_34869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (5))){
var inst_34817 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34818 = cljs.core.async.close_BANG_.call(null,fc);
var state_34837__$1 = (function (){var statearr_34849 = state_34837;
(statearr_34849[(8)] = inst_34817);

return statearr_34849;
})();
var statearr_34850_34870 = state_34837__$1;
(statearr_34850_34870[(2)] = inst_34818);

(statearr_34850_34870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (14))){
var inst_34831 = (state_34837[(2)]);
var state_34837__$1 = state_34837;
var statearr_34851_34871 = state_34837__$1;
(statearr_34851_34871[(2)] = inst_34831);

(statearr_34851_34871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (10))){
var state_34837__$1 = state_34837;
var statearr_34852_34872 = state_34837__$1;
(statearr_34852_34872[(2)] = fc);

(statearr_34852_34872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (8))){
var inst_34826 = (state_34837[(2)]);
var state_34837__$1 = state_34837;
if(cljs.core.truth_(inst_34826)){
var statearr_34853_34873 = state_34837__$1;
(statearr_34853_34873[(1)] = (12));

} else {
var statearr_34854_34874 = state_34837__$1;
(statearr_34854_34874[(1)] = (13));

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
});})(c__34424__auto___34860,tc,fc))
;
return ((function (switch__34336__auto__,c__34424__auto___34860,tc,fc){
return (function() {
var cljs$core$async$state_machine__34337__auto__ = null;
var cljs$core$async$state_machine__34337__auto____0 = (function (){
var statearr_34855 = [null,null,null,null,null,null,null,null,null];
(statearr_34855[(0)] = cljs$core$async$state_machine__34337__auto__);

(statearr_34855[(1)] = (1));

return statearr_34855;
});
var cljs$core$async$state_machine__34337__auto____1 = (function (state_34837){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_34837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e34856){if((e34856 instanceof Object)){
var ex__34340__auto__ = e34856;
var statearr_34857_34875 = state_34837;
(statearr_34857_34875[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34876 = state_34837;
state_34837 = G__34876;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$state_machine__34337__auto__ = function(state_34837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34337__auto____1.call(this,state_34837);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34337__auto____0;
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34337__auto____1;
return cljs$core$async$state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___34860,tc,fc))
})();
var state__34426__auto__ = (function (){var statearr_34858 = f__34425__auto__.call(null);
(statearr_34858[(6)] = c__34424__auto___34860);

return statearr_34858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___34860,tc,fc))
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
var c__34424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto__){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto__){
return (function (state_34897){
var state_val_34898 = (state_34897[(1)]);
if((state_val_34898 === (7))){
var inst_34893 = (state_34897[(2)]);
var state_34897__$1 = state_34897;
var statearr_34899_34917 = state_34897__$1;
(statearr_34899_34917[(2)] = inst_34893);

(statearr_34899_34917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (1))){
var inst_34877 = init;
var state_34897__$1 = (function (){var statearr_34900 = state_34897;
(statearr_34900[(7)] = inst_34877);

return statearr_34900;
})();
var statearr_34901_34918 = state_34897__$1;
(statearr_34901_34918[(2)] = null);

(statearr_34901_34918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (4))){
var inst_34880 = (state_34897[(8)]);
var inst_34880__$1 = (state_34897[(2)]);
var inst_34881 = (inst_34880__$1 == null);
var state_34897__$1 = (function (){var statearr_34902 = state_34897;
(statearr_34902[(8)] = inst_34880__$1);

return statearr_34902;
})();
if(cljs.core.truth_(inst_34881)){
var statearr_34903_34919 = state_34897__$1;
(statearr_34903_34919[(1)] = (5));

} else {
var statearr_34904_34920 = state_34897__$1;
(statearr_34904_34920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (6))){
var inst_34877 = (state_34897[(7)]);
var inst_34880 = (state_34897[(8)]);
var inst_34884 = (state_34897[(9)]);
var inst_34884__$1 = f.call(null,inst_34877,inst_34880);
var inst_34885 = cljs.core.reduced_QMARK_.call(null,inst_34884__$1);
var state_34897__$1 = (function (){var statearr_34905 = state_34897;
(statearr_34905[(9)] = inst_34884__$1);

return statearr_34905;
})();
if(inst_34885){
var statearr_34906_34921 = state_34897__$1;
(statearr_34906_34921[(1)] = (8));

} else {
var statearr_34907_34922 = state_34897__$1;
(statearr_34907_34922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (3))){
var inst_34895 = (state_34897[(2)]);
var state_34897__$1 = state_34897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34897__$1,inst_34895);
} else {
if((state_val_34898 === (2))){
var state_34897__$1 = state_34897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34897__$1,(4),ch);
} else {
if((state_val_34898 === (9))){
var inst_34884 = (state_34897[(9)]);
var inst_34877 = inst_34884;
var state_34897__$1 = (function (){var statearr_34908 = state_34897;
(statearr_34908[(7)] = inst_34877);

return statearr_34908;
})();
var statearr_34909_34923 = state_34897__$1;
(statearr_34909_34923[(2)] = null);

(statearr_34909_34923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (5))){
var inst_34877 = (state_34897[(7)]);
var state_34897__$1 = state_34897;
var statearr_34910_34924 = state_34897__$1;
(statearr_34910_34924[(2)] = inst_34877);

(statearr_34910_34924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (10))){
var inst_34891 = (state_34897[(2)]);
var state_34897__$1 = state_34897;
var statearr_34911_34925 = state_34897__$1;
(statearr_34911_34925[(2)] = inst_34891);

(statearr_34911_34925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (8))){
var inst_34884 = (state_34897[(9)]);
var inst_34887 = cljs.core.deref.call(null,inst_34884);
var state_34897__$1 = state_34897;
var statearr_34912_34926 = state_34897__$1;
(statearr_34912_34926[(2)] = inst_34887);

(statearr_34912_34926[(1)] = (10));


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
});})(c__34424__auto__))
;
return ((function (switch__34336__auto__,c__34424__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34337__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34337__auto____0 = (function (){
var statearr_34913 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34913[(0)] = cljs$core$async$reduce_$_state_machine__34337__auto__);

(statearr_34913[(1)] = (1));

return statearr_34913;
});
var cljs$core$async$reduce_$_state_machine__34337__auto____1 = (function (state_34897){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_34897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e34914){if((e34914 instanceof Object)){
var ex__34340__auto__ = e34914;
var statearr_34915_34927 = state_34897;
(statearr_34915_34927[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34928 = state_34897;
state_34897 = G__34928;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34337__auto__ = function(state_34897){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34337__auto____1.call(this,state_34897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34337__auto____0;
cljs$core$async$reduce_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34337__auto____1;
return cljs$core$async$reduce_$_state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto__))
})();
var state__34426__auto__ = (function (){var statearr_34916 = f__34425__auto__.call(null);
(statearr_34916[(6)] = c__34424__auto__);

return statearr_34916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto__))
);

return c__34424__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto__,f__$1){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto__,f__$1){
return (function (state_34934){
var state_val_34935 = (state_34934[(1)]);
if((state_val_34935 === (1))){
var inst_34929 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34934__$1 = state_34934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34934__$1,(2),inst_34929);
} else {
if((state_val_34935 === (2))){
var inst_34931 = (state_34934[(2)]);
var inst_34932 = f__$1.call(null,inst_34931);
var state_34934__$1 = state_34934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34934__$1,inst_34932);
} else {
return null;
}
}
});})(c__34424__auto__,f__$1))
;
return ((function (switch__34336__auto__,c__34424__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34337__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34337__auto____0 = (function (){
var statearr_34936 = [null,null,null,null,null,null,null];
(statearr_34936[(0)] = cljs$core$async$transduce_$_state_machine__34337__auto__);

(statearr_34936[(1)] = (1));

return statearr_34936;
});
var cljs$core$async$transduce_$_state_machine__34337__auto____1 = (function (state_34934){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_34934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e34937){if((e34937 instanceof Object)){
var ex__34340__auto__ = e34937;
var statearr_34938_34940 = state_34934;
(statearr_34938_34940[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34941 = state_34934;
state_34934 = G__34941;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34337__auto__ = function(state_34934){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34337__auto____1.call(this,state_34934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34337__auto____0;
cljs$core$async$transduce_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34337__auto____1;
return cljs$core$async$transduce_$_state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto__,f__$1))
})();
var state__34426__auto__ = (function (){var statearr_34939 = f__34425__auto__.call(null);
(statearr_34939[(6)] = c__34424__auto__);

return statearr_34939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto__,f__$1))
);

return c__34424__auto__;
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
var G__34943 = arguments.length;
switch (G__34943) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto__){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto__){
return (function (state_34968){
var state_val_34969 = (state_34968[(1)]);
if((state_val_34969 === (7))){
var inst_34950 = (state_34968[(2)]);
var state_34968__$1 = state_34968;
var statearr_34970_34991 = state_34968__$1;
(statearr_34970_34991[(2)] = inst_34950);

(statearr_34970_34991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34969 === (1))){
var inst_34944 = cljs.core.seq.call(null,coll);
var inst_34945 = inst_34944;
var state_34968__$1 = (function (){var statearr_34971 = state_34968;
(statearr_34971[(7)] = inst_34945);

return statearr_34971;
})();
var statearr_34972_34992 = state_34968__$1;
(statearr_34972_34992[(2)] = null);

(statearr_34972_34992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34969 === (4))){
var inst_34945 = (state_34968[(7)]);
var inst_34948 = cljs.core.first.call(null,inst_34945);
var state_34968__$1 = state_34968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34968__$1,(7),ch,inst_34948);
} else {
if((state_val_34969 === (13))){
var inst_34962 = (state_34968[(2)]);
var state_34968__$1 = state_34968;
var statearr_34973_34993 = state_34968__$1;
(statearr_34973_34993[(2)] = inst_34962);

(statearr_34973_34993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34969 === (6))){
var inst_34953 = (state_34968[(2)]);
var state_34968__$1 = state_34968;
if(cljs.core.truth_(inst_34953)){
var statearr_34974_34994 = state_34968__$1;
(statearr_34974_34994[(1)] = (8));

} else {
var statearr_34975_34995 = state_34968__$1;
(statearr_34975_34995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34969 === (3))){
var inst_34966 = (state_34968[(2)]);
var state_34968__$1 = state_34968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34968__$1,inst_34966);
} else {
if((state_val_34969 === (12))){
var state_34968__$1 = state_34968;
var statearr_34976_34996 = state_34968__$1;
(statearr_34976_34996[(2)] = null);

(statearr_34976_34996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34969 === (2))){
var inst_34945 = (state_34968[(7)]);
var state_34968__$1 = state_34968;
if(cljs.core.truth_(inst_34945)){
var statearr_34977_34997 = state_34968__$1;
(statearr_34977_34997[(1)] = (4));

} else {
var statearr_34978_34998 = state_34968__$1;
(statearr_34978_34998[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34969 === (11))){
var inst_34959 = cljs.core.async.close_BANG_.call(null,ch);
var state_34968__$1 = state_34968;
var statearr_34979_34999 = state_34968__$1;
(statearr_34979_34999[(2)] = inst_34959);

(statearr_34979_34999[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34969 === (9))){
var state_34968__$1 = state_34968;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34980_35000 = state_34968__$1;
(statearr_34980_35000[(1)] = (11));

} else {
var statearr_34981_35001 = state_34968__$1;
(statearr_34981_35001[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34969 === (5))){
var inst_34945 = (state_34968[(7)]);
var state_34968__$1 = state_34968;
var statearr_34982_35002 = state_34968__$1;
(statearr_34982_35002[(2)] = inst_34945);

(statearr_34982_35002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34969 === (10))){
var inst_34964 = (state_34968[(2)]);
var state_34968__$1 = state_34968;
var statearr_34983_35003 = state_34968__$1;
(statearr_34983_35003[(2)] = inst_34964);

(statearr_34983_35003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34969 === (8))){
var inst_34945 = (state_34968[(7)]);
var inst_34955 = cljs.core.next.call(null,inst_34945);
var inst_34945__$1 = inst_34955;
var state_34968__$1 = (function (){var statearr_34984 = state_34968;
(statearr_34984[(7)] = inst_34945__$1);

return statearr_34984;
})();
var statearr_34985_35004 = state_34968__$1;
(statearr_34985_35004[(2)] = null);

(statearr_34985_35004[(1)] = (2));


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
});})(c__34424__auto__))
;
return ((function (switch__34336__auto__,c__34424__auto__){
return (function() {
var cljs$core$async$state_machine__34337__auto__ = null;
var cljs$core$async$state_machine__34337__auto____0 = (function (){
var statearr_34986 = [null,null,null,null,null,null,null,null];
(statearr_34986[(0)] = cljs$core$async$state_machine__34337__auto__);

(statearr_34986[(1)] = (1));

return statearr_34986;
});
var cljs$core$async$state_machine__34337__auto____1 = (function (state_34968){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_34968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e34987){if((e34987 instanceof Object)){
var ex__34340__auto__ = e34987;
var statearr_34988_35005 = state_34968;
(statearr_34988_35005[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35006 = state_34968;
state_34968 = G__35006;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$state_machine__34337__auto__ = function(state_34968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34337__auto____1.call(this,state_34968);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34337__auto____0;
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34337__auto____1;
return cljs$core$async$state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto__))
})();
var state__34426__auto__ = (function (){var statearr_34989 = f__34425__auto__.call(null);
(statearr_34989[(6)] = c__34424__auto__);

return statearr_34989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto__))
);

return c__34424__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__28734__auto__ = (((_ == null))?null:_);
var m__28735__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,_);
} else {
var m__28735__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28735__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,ch);
} else {
var m__28735__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m);
} else {
var m__28735__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35007 = (function (ch,cs,meta35008){
this.ch = ch;
this.cs = cs;
this.meta35008 = meta35008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35009,meta35008__$1){
var self__ = this;
var _35009__$1 = this;
return (new cljs.core.async.t_cljs$core$async35007(self__.ch,self__.cs,meta35008__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35009){
var self__ = this;
var _35009__$1 = this;
return self__.meta35008;
});})(cs))
;

cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35007.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35008","meta35008",-1187816630,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35007";

cljs.core.async.t_cljs$core$async35007.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async35007");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35007 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35007(ch__$1,cs__$1,meta35008){
return (new cljs.core.async.t_cljs$core$async35007(ch__$1,cs__$1,meta35008));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35007(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34424__auto___35229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___35229,cs,m,dchan,dctr,done){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___35229,cs,m,dchan,dctr,done){
return (function (state_35144){
var state_val_35145 = (state_35144[(1)]);
if((state_val_35145 === (7))){
var inst_35140 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
var statearr_35146_35230 = state_35144__$1;
(statearr_35146_35230[(2)] = inst_35140);

(statearr_35146_35230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (20))){
var inst_35043 = (state_35144[(7)]);
var inst_35055 = cljs.core.first.call(null,inst_35043);
var inst_35056 = cljs.core.nth.call(null,inst_35055,(0),null);
var inst_35057 = cljs.core.nth.call(null,inst_35055,(1),null);
var state_35144__$1 = (function (){var statearr_35147 = state_35144;
(statearr_35147[(8)] = inst_35056);

return statearr_35147;
})();
if(cljs.core.truth_(inst_35057)){
var statearr_35148_35231 = state_35144__$1;
(statearr_35148_35231[(1)] = (22));

} else {
var statearr_35149_35232 = state_35144__$1;
(statearr_35149_35232[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (27))){
var inst_35012 = (state_35144[(9)]);
var inst_35085 = (state_35144[(10)]);
var inst_35092 = (state_35144[(11)]);
var inst_35087 = (state_35144[(12)]);
var inst_35092__$1 = cljs.core._nth.call(null,inst_35085,inst_35087);
var inst_35093 = cljs.core.async.put_BANG_.call(null,inst_35092__$1,inst_35012,done);
var state_35144__$1 = (function (){var statearr_35150 = state_35144;
(statearr_35150[(11)] = inst_35092__$1);

return statearr_35150;
})();
if(cljs.core.truth_(inst_35093)){
var statearr_35151_35233 = state_35144__$1;
(statearr_35151_35233[(1)] = (30));

} else {
var statearr_35152_35234 = state_35144__$1;
(statearr_35152_35234[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (1))){
var state_35144__$1 = state_35144;
var statearr_35153_35235 = state_35144__$1;
(statearr_35153_35235[(2)] = null);

(statearr_35153_35235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (24))){
var inst_35043 = (state_35144[(7)]);
var inst_35062 = (state_35144[(2)]);
var inst_35063 = cljs.core.next.call(null,inst_35043);
var inst_35021 = inst_35063;
var inst_35022 = null;
var inst_35023 = (0);
var inst_35024 = (0);
var state_35144__$1 = (function (){var statearr_35154 = state_35144;
(statearr_35154[(13)] = inst_35023);

(statearr_35154[(14)] = inst_35024);

(statearr_35154[(15)] = inst_35021);

(statearr_35154[(16)] = inst_35022);

(statearr_35154[(17)] = inst_35062);

return statearr_35154;
})();
var statearr_35155_35236 = state_35144__$1;
(statearr_35155_35236[(2)] = null);

(statearr_35155_35236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (39))){
var state_35144__$1 = state_35144;
var statearr_35159_35237 = state_35144__$1;
(statearr_35159_35237[(2)] = null);

(statearr_35159_35237[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (4))){
var inst_35012 = (state_35144[(9)]);
var inst_35012__$1 = (state_35144[(2)]);
var inst_35013 = (inst_35012__$1 == null);
var state_35144__$1 = (function (){var statearr_35160 = state_35144;
(statearr_35160[(9)] = inst_35012__$1);

return statearr_35160;
})();
if(cljs.core.truth_(inst_35013)){
var statearr_35161_35238 = state_35144__$1;
(statearr_35161_35238[(1)] = (5));

} else {
var statearr_35162_35239 = state_35144__$1;
(statearr_35162_35239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (15))){
var inst_35023 = (state_35144[(13)]);
var inst_35024 = (state_35144[(14)]);
var inst_35021 = (state_35144[(15)]);
var inst_35022 = (state_35144[(16)]);
var inst_35039 = (state_35144[(2)]);
var inst_35040 = (inst_35024 + (1));
var tmp35156 = inst_35023;
var tmp35157 = inst_35021;
var tmp35158 = inst_35022;
var inst_35021__$1 = tmp35157;
var inst_35022__$1 = tmp35158;
var inst_35023__$1 = tmp35156;
var inst_35024__$1 = inst_35040;
var state_35144__$1 = (function (){var statearr_35163 = state_35144;
(statearr_35163[(18)] = inst_35039);

(statearr_35163[(13)] = inst_35023__$1);

(statearr_35163[(14)] = inst_35024__$1);

(statearr_35163[(15)] = inst_35021__$1);

(statearr_35163[(16)] = inst_35022__$1);

return statearr_35163;
})();
var statearr_35164_35240 = state_35144__$1;
(statearr_35164_35240[(2)] = null);

(statearr_35164_35240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (21))){
var inst_35066 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
var statearr_35168_35241 = state_35144__$1;
(statearr_35168_35241[(2)] = inst_35066);

(statearr_35168_35241[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (31))){
var inst_35092 = (state_35144[(11)]);
var inst_35096 = done.call(null,null);
var inst_35097 = cljs.core.async.untap_STAR_.call(null,m,inst_35092);
var state_35144__$1 = (function (){var statearr_35169 = state_35144;
(statearr_35169[(19)] = inst_35096);

return statearr_35169;
})();
var statearr_35170_35242 = state_35144__$1;
(statearr_35170_35242[(2)] = inst_35097);

(statearr_35170_35242[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (32))){
var inst_35084 = (state_35144[(20)]);
var inst_35086 = (state_35144[(21)]);
var inst_35085 = (state_35144[(10)]);
var inst_35087 = (state_35144[(12)]);
var inst_35099 = (state_35144[(2)]);
var inst_35100 = (inst_35087 + (1));
var tmp35165 = inst_35084;
var tmp35166 = inst_35086;
var tmp35167 = inst_35085;
var inst_35084__$1 = tmp35165;
var inst_35085__$1 = tmp35167;
var inst_35086__$1 = tmp35166;
var inst_35087__$1 = inst_35100;
var state_35144__$1 = (function (){var statearr_35171 = state_35144;
(statearr_35171[(20)] = inst_35084__$1);

(statearr_35171[(21)] = inst_35086__$1);

(statearr_35171[(10)] = inst_35085__$1);

(statearr_35171[(22)] = inst_35099);

(statearr_35171[(12)] = inst_35087__$1);

return statearr_35171;
})();
var statearr_35172_35243 = state_35144__$1;
(statearr_35172_35243[(2)] = null);

(statearr_35172_35243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (40))){
var inst_35112 = (state_35144[(23)]);
var inst_35116 = done.call(null,null);
var inst_35117 = cljs.core.async.untap_STAR_.call(null,m,inst_35112);
var state_35144__$1 = (function (){var statearr_35173 = state_35144;
(statearr_35173[(24)] = inst_35116);

return statearr_35173;
})();
var statearr_35174_35244 = state_35144__$1;
(statearr_35174_35244[(2)] = inst_35117);

(statearr_35174_35244[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (33))){
var inst_35103 = (state_35144[(25)]);
var inst_35105 = cljs.core.chunked_seq_QMARK_.call(null,inst_35103);
var state_35144__$1 = state_35144;
if(inst_35105){
var statearr_35175_35245 = state_35144__$1;
(statearr_35175_35245[(1)] = (36));

} else {
var statearr_35176_35246 = state_35144__$1;
(statearr_35176_35246[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (13))){
var inst_35033 = (state_35144[(26)]);
var inst_35036 = cljs.core.async.close_BANG_.call(null,inst_35033);
var state_35144__$1 = state_35144;
var statearr_35177_35247 = state_35144__$1;
(statearr_35177_35247[(2)] = inst_35036);

(statearr_35177_35247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (22))){
var inst_35056 = (state_35144[(8)]);
var inst_35059 = cljs.core.async.close_BANG_.call(null,inst_35056);
var state_35144__$1 = state_35144;
var statearr_35178_35248 = state_35144__$1;
(statearr_35178_35248[(2)] = inst_35059);

(statearr_35178_35248[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (36))){
var inst_35103 = (state_35144[(25)]);
var inst_35107 = cljs.core.chunk_first.call(null,inst_35103);
var inst_35108 = cljs.core.chunk_rest.call(null,inst_35103);
var inst_35109 = cljs.core.count.call(null,inst_35107);
var inst_35084 = inst_35108;
var inst_35085 = inst_35107;
var inst_35086 = inst_35109;
var inst_35087 = (0);
var state_35144__$1 = (function (){var statearr_35179 = state_35144;
(statearr_35179[(20)] = inst_35084);

(statearr_35179[(21)] = inst_35086);

(statearr_35179[(10)] = inst_35085);

(statearr_35179[(12)] = inst_35087);

return statearr_35179;
})();
var statearr_35180_35249 = state_35144__$1;
(statearr_35180_35249[(2)] = null);

(statearr_35180_35249[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (41))){
var inst_35103 = (state_35144[(25)]);
var inst_35119 = (state_35144[(2)]);
var inst_35120 = cljs.core.next.call(null,inst_35103);
var inst_35084 = inst_35120;
var inst_35085 = null;
var inst_35086 = (0);
var inst_35087 = (0);
var state_35144__$1 = (function (){var statearr_35181 = state_35144;
(statearr_35181[(20)] = inst_35084);

(statearr_35181[(27)] = inst_35119);

(statearr_35181[(21)] = inst_35086);

(statearr_35181[(10)] = inst_35085);

(statearr_35181[(12)] = inst_35087);

return statearr_35181;
})();
var statearr_35182_35250 = state_35144__$1;
(statearr_35182_35250[(2)] = null);

(statearr_35182_35250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (43))){
var state_35144__$1 = state_35144;
var statearr_35183_35251 = state_35144__$1;
(statearr_35183_35251[(2)] = null);

(statearr_35183_35251[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (29))){
var inst_35128 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
var statearr_35184_35252 = state_35144__$1;
(statearr_35184_35252[(2)] = inst_35128);

(statearr_35184_35252[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (44))){
var inst_35137 = (state_35144[(2)]);
var state_35144__$1 = (function (){var statearr_35185 = state_35144;
(statearr_35185[(28)] = inst_35137);

return statearr_35185;
})();
var statearr_35186_35253 = state_35144__$1;
(statearr_35186_35253[(2)] = null);

(statearr_35186_35253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (6))){
var inst_35076 = (state_35144[(29)]);
var inst_35075 = cljs.core.deref.call(null,cs);
var inst_35076__$1 = cljs.core.keys.call(null,inst_35075);
var inst_35077 = cljs.core.count.call(null,inst_35076__$1);
var inst_35078 = cljs.core.reset_BANG_.call(null,dctr,inst_35077);
var inst_35083 = cljs.core.seq.call(null,inst_35076__$1);
var inst_35084 = inst_35083;
var inst_35085 = null;
var inst_35086 = (0);
var inst_35087 = (0);
var state_35144__$1 = (function (){var statearr_35187 = state_35144;
(statearr_35187[(29)] = inst_35076__$1);

(statearr_35187[(20)] = inst_35084);

(statearr_35187[(21)] = inst_35086);

(statearr_35187[(10)] = inst_35085);

(statearr_35187[(30)] = inst_35078);

(statearr_35187[(12)] = inst_35087);

return statearr_35187;
})();
var statearr_35188_35254 = state_35144__$1;
(statearr_35188_35254[(2)] = null);

(statearr_35188_35254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (28))){
var inst_35103 = (state_35144[(25)]);
var inst_35084 = (state_35144[(20)]);
var inst_35103__$1 = cljs.core.seq.call(null,inst_35084);
var state_35144__$1 = (function (){var statearr_35189 = state_35144;
(statearr_35189[(25)] = inst_35103__$1);

return statearr_35189;
})();
if(inst_35103__$1){
var statearr_35190_35255 = state_35144__$1;
(statearr_35190_35255[(1)] = (33));

} else {
var statearr_35191_35256 = state_35144__$1;
(statearr_35191_35256[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (25))){
var inst_35086 = (state_35144[(21)]);
var inst_35087 = (state_35144[(12)]);
var inst_35089 = (inst_35087 < inst_35086);
var inst_35090 = inst_35089;
var state_35144__$1 = state_35144;
if(cljs.core.truth_(inst_35090)){
var statearr_35192_35257 = state_35144__$1;
(statearr_35192_35257[(1)] = (27));

} else {
var statearr_35193_35258 = state_35144__$1;
(statearr_35193_35258[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (34))){
var state_35144__$1 = state_35144;
var statearr_35194_35259 = state_35144__$1;
(statearr_35194_35259[(2)] = null);

(statearr_35194_35259[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (17))){
var state_35144__$1 = state_35144;
var statearr_35195_35260 = state_35144__$1;
(statearr_35195_35260[(2)] = null);

(statearr_35195_35260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (3))){
var inst_35142 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35144__$1,inst_35142);
} else {
if((state_val_35145 === (12))){
var inst_35071 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
var statearr_35196_35261 = state_35144__$1;
(statearr_35196_35261[(2)] = inst_35071);

(statearr_35196_35261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (2))){
var state_35144__$1 = state_35144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35144__$1,(4),ch);
} else {
if((state_val_35145 === (23))){
var state_35144__$1 = state_35144;
var statearr_35197_35262 = state_35144__$1;
(statearr_35197_35262[(2)] = null);

(statearr_35197_35262[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (35))){
var inst_35126 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
var statearr_35198_35263 = state_35144__$1;
(statearr_35198_35263[(2)] = inst_35126);

(statearr_35198_35263[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (19))){
var inst_35043 = (state_35144[(7)]);
var inst_35047 = cljs.core.chunk_first.call(null,inst_35043);
var inst_35048 = cljs.core.chunk_rest.call(null,inst_35043);
var inst_35049 = cljs.core.count.call(null,inst_35047);
var inst_35021 = inst_35048;
var inst_35022 = inst_35047;
var inst_35023 = inst_35049;
var inst_35024 = (0);
var state_35144__$1 = (function (){var statearr_35199 = state_35144;
(statearr_35199[(13)] = inst_35023);

(statearr_35199[(14)] = inst_35024);

(statearr_35199[(15)] = inst_35021);

(statearr_35199[(16)] = inst_35022);

return statearr_35199;
})();
var statearr_35200_35264 = state_35144__$1;
(statearr_35200_35264[(2)] = null);

(statearr_35200_35264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (11))){
var inst_35021 = (state_35144[(15)]);
var inst_35043 = (state_35144[(7)]);
var inst_35043__$1 = cljs.core.seq.call(null,inst_35021);
var state_35144__$1 = (function (){var statearr_35201 = state_35144;
(statearr_35201[(7)] = inst_35043__$1);

return statearr_35201;
})();
if(inst_35043__$1){
var statearr_35202_35265 = state_35144__$1;
(statearr_35202_35265[(1)] = (16));

} else {
var statearr_35203_35266 = state_35144__$1;
(statearr_35203_35266[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (9))){
var inst_35073 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
var statearr_35204_35267 = state_35144__$1;
(statearr_35204_35267[(2)] = inst_35073);

(statearr_35204_35267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (5))){
var inst_35019 = cljs.core.deref.call(null,cs);
var inst_35020 = cljs.core.seq.call(null,inst_35019);
var inst_35021 = inst_35020;
var inst_35022 = null;
var inst_35023 = (0);
var inst_35024 = (0);
var state_35144__$1 = (function (){var statearr_35205 = state_35144;
(statearr_35205[(13)] = inst_35023);

(statearr_35205[(14)] = inst_35024);

(statearr_35205[(15)] = inst_35021);

(statearr_35205[(16)] = inst_35022);

return statearr_35205;
})();
var statearr_35206_35268 = state_35144__$1;
(statearr_35206_35268[(2)] = null);

(statearr_35206_35268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (14))){
var state_35144__$1 = state_35144;
var statearr_35207_35269 = state_35144__$1;
(statearr_35207_35269[(2)] = null);

(statearr_35207_35269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (45))){
var inst_35134 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
var statearr_35208_35270 = state_35144__$1;
(statearr_35208_35270[(2)] = inst_35134);

(statearr_35208_35270[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (26))){
var inst_35076 = (state_35144[(29)]);
var inst_35130 = (state_35144[(2)]);
var inst_35131 = cljs.core.seq.call(null,inst_35076);
var state_35144__$1 = (function (){var statearr_35209 = state_35144;
(statearr_35209[(31)] = inst_35130);

return statearr_35209;
})();
if(inst_35131){
var statearr_35210_35271 = state_35144__$1;
(statearr_35210_35271[(1)] = (42));

} else {
var statearr_35211_35272 = state_35144__$1;
(statearr_35211_35272[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (16))){
var inst_35043 = (state_35144[(7)]);
var inst_35045 = cljs.core.chunked_seq_QMARK_.call(null,inst_35043);
var state_35144__$1 = state_35144;
if(inst_35045){
var statearr_35212_35273 = state_35144__$1;
(statearr_35212_35273[(1)] = (19));

} else {
var statearr_35213_35274 = state_35144__$1;
(statearr_35213_35274[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (38))){
var inst_35123 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
var statearr_35214_35275 = state_35144__$1;
(statearr_35214_35275[(2)] = inst_35123);

(statearr_35214_35275[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (30))){
var state_35144__$1 = state_35144;
var statearr_35215_35276 = state_35144__$1;
(statearr_35215_35276[(2)] = null);

(statearr_35215_35276[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (10))){
var inst_35024 = (state_35144[(14)]);
var inst_35022 = (state_35144[(16)]);
var inst_35032 = cljs.core._nth.call(null,inst_35022,inst_35024);
var inst_35033 = cljs.core.nth.call(null,inst_35032,(0),null);
var inst_35034 = cljs.core.nth.call(null,inst_35032,(1),null);
var state_35144__$1 = (function (){var statearr_35216 = state_35144;
(statearr_35216[(26)] = inst_35033);

return statearr_35216;
})();
if(cljs.core.truth_(inst_35034)){
var statearr_35217_35277 = state_35144__$1;
(statearr_35217_35277[(1)] = (13));

} else {
var statearr_35218_35278 = state_35144__$1;
(statearr_35218_35278[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (18))){
var inst_35069 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
var statearr_35219_35279 = state_35144__$1;
(statearr_35219_35279[(2)] = inst_35069);

(statearr_35219_35279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (42))){
var state_35144__$1 = state_35144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35144__$1,(45),dchan);
} else {
if((state_val_35145 === (37))){
var inst_35103 = (state_35144[(25)]);
var inst_35012 = (state_35144[(9)]);
var inst_35112 = (state_35144[(23)]);
var inst_35112__$1 = cljs.core.first.call(null,inst_35103);
var inst_35113 = cljs.core.async.put_BANG_.call(null,inst_35112__$1,inst_35012,done);
var state_35144__$1 = (function (){var statearr_35220 = state_35144;
(statearr_35220[(23)] = inst_35112__$1);

return statearr_35220;
})();
if(cljs.core.truth_(inst_35113)){
var statearr_35221_35280 = state_35144__$1;
(statearr_35221_35280[(1)] = (39));

} else {
var statearr_35222_35281 = state_35144__$1;
(statearr_35222_35281[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (8))){
var inst_35023 = (state_35144[(13)]);
var inst_35024 = (state_35144[(14)]);
var inst_35026 = (inst_35024 < inst_35023);
var inst_35027 = inst_35026;
var state_35144__$1 = state_35144;
if(cljs.core.truth_(inst_35027)){
var statearr_35223_35282 = state_35144__$1;
(statearr_35223_35282[(1)] = (10));

} else {
var statearr_35224_35283 = state_35144__$1;
(statearr_35224_35283[(1)] = (11));

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
});})(c__34424__auto___35229,cs,m,dchan,dctr,done))
;
return ((function (switch__34336__auto__,c__34424__auto___35229,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34337__auto__ = null;
var cljs$core$async$mult_$_state_machine__34337__auto____0 = (function (){
var statearr_35225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35225[(0)] = cljs$core$async$mult_$_state_machine__34337__auto__);

(statearr_35225[(1)] = (1));

return statearr_35225;
});
var cljs$core$async$mult_$_state_machine__34337__auto____1 = (function (state_35144){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_35144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e35226){if((e35226 instanceof Object)){
var ex__34340__auto__ = e35226;
var statearr_35227_35284 = state_35144;
(statearr_35227_35284[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35285 = state_35144;
state_35144 = G__35285;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34337__auto__ = function(state_35144){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34337__auto____1.call(this,state_35144);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34337__auto____0;
cljs$core$async$mult_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34337__auto____1;
return cljs$core$async$mult_$_state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___35229,cs,m,dchan,dctr,done))
})();
var state__34426__auto__ = (function (){var statearr_35228 = f__34425__auto__.call(null);
(statearr_35228[(6)] = c__34424__auto___35229);

return statearr_35228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___35229,cs,m,dchan,dctr,done))
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
var G__35287 = arguments.length;
switch (G__35287) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,ch);
} else {
var m__28735__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,ch);
} else {
var m__28735__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m);
} else {
var m__28735__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,state_map);
} else {
var m__28735__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,mode);
} else {
var m__28735__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29229__auto__ = [];
var len__29222__auto___35299 = arguments.length;
var i__29223__auto___35300 = (0);
while(true){
if((i__29223__auto___35300 < len__29222__auto___35299)){
args__29229__auto__.push((arguments[i__29223__auto___35300]));

var G__35301 = (i__29223__auto___35300 + (1));
i__29223__auto___35300 = G__35301;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((3) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29230__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35293){
var map__35294 = p__35293;
var map__35294__$1 = ((((!((map__35294 == null)))?((((map__35294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35294):map__35294);
var opts = map__35294__$1;
var statearr_35296_35302 = state;
(statearr_35296_35302[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__35294,map__35294__$1,opts){
return (function (val){
var statearr_35297_35303 = state;
(statearr_35297_35303[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35294,map__35294__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_35298_35304 = state;
(statearr_35298_35304[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35289){
var G__35290 = cljs.core.first.call(null,seq35289);
var seq35289__$1 = cljs.core.next.call(null,seq35289);
var G__35291 = cljs.core.first.call(null,seq35289__$1);
var seq35289__$2 = cljs.core.next.call(null,seq35289__$1);
var G__35292 = cljs.core.first.call(null,seq35289__$2);
var seq35289__$3 = cljs.core.next.call(null,seq35289__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35290,G__35291,G__35292,seq35289__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35305 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35306){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35306 = meta35306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35307,meta35306__$1){
var self__ = this;
var _35307__$1 = this;
return (new cljs.core.async.t_cljs$core$async35305(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35306__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35307){
var self__ = this;
var _35307__$1 = this;
return self__.meta35306;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35305.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35306","meta35306",1262575883,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35305.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35305";

cljs.core.async.t_cljs$core$async35305.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async35305");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35305 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35305(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35306){
return (new cljs.core.async.t_cljs$core$async35305(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35306));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35305(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34424__auto___35469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___35469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___35469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35409){
var state_val_35410 = (state_35409[(1)]);
if((state_val_35410 === (7))){
var inst_35324 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
var statearr_35411_35470 = state_35409__$1;
(statearr_35411_35470[(2)] = inst_35324);

(statearr_35411_35470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (20))){
var inst_35336 = (state_35409[(7)]);
var state_35409__$1 = state_35409;
var statearr_35412_35471 = state_35409__$1;
(statearr_35412_35471[(2)] = inst_35336);

(statearr_35412_35471[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (27))){
var state_35409__$1 = state_35409;
var statearr_35413_35472 = state_35409__$1;
(statearr_35413_35472[(2)] = null);

(statearr_35413_35472[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (1))){
var inst_35311 = (state_35409[(8)]);
var inst_35311__$1 = calc_state.call(null);
var inst_35313 = (inst_35311__$1 == null);
var inst_35314 = cljs.core.not.call(null,inst_35313);
var state_35409__$1 = (function (){var statearr_35414 = state_35409;
(statearr_35414[(8)] = inst_35311__$1);

return statearr_35414;
})();
if(inst_35314){
var statearr_35415_35473 = state_35409__$1;
(statearr_35415_35473[(1)] = (2));

} else {
var statearr_35416_35474 = state_35409__$1;
(statearr_35416_35474[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (24))){
var inst_35369 = (state_35409[(9)]);
var inst_35383 = (state_35409[(10)]);
var inst_35360 = (state_35409[(11)]);
var inst_35383__$1 = inst_35360.call(null,inst_35369);
var state_35409__$1 = (function (){var statearr_35417 = state_35409;
(statearr_35417[(10)] = inst_35383__$1);

return statearr_35417;
})();
if(cljs.core.truth_(inst_35383__$1)){
var statearr_35418_35475 = state_35409__$1;
(statearr_35418_35475[(1)] = (29));

} else {
var statearr_35419_35476 = state_35409__$1;
(statearr_35419_35476[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (4))){
var inst_35327 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
if(cljs.core.truth_(inst_35327)){
var statearr_35420_35477 = state_35409__$1;
(statearr_35420_35477[(1)] = (8));

} else {
var statearr_35421_35478 = state_35409__$1;
(statearr_35421_35478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (15))){
var inst_35354 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
if(cljs.core.truth_(inst_35354)){
var statearr_35422_35479 = state_35409__$1;
(statearr_35422_35479[(1)] = (19));

} else {
var statearr_35423_35480 = state_35409__$1;
(statearr_35423_35480[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (21))){
var inst_35359 = (state_35409[(12)]);
var inst_35359__$1 = (state_35409[(2)]);
var inst_35360 = cljs.core.get.call(null,inst_35359__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35361 = cljs.core.get.call(null,inst_35359__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35362 = cljs.core.get.call(null,inst_35359__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35409__$1 = (function (){var statearr_35424 = state_35409;
(statearr_35424[(11)] = inst_35360);

(statearr_35424[(12)] = inst_35359__$1);

(statearr_35424[(13)] = inst_35361);

return statearr_35424;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35409__$1,(22),inst_35362);
} else {
if((state_val_35410 === (31))){
var inst_35391 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
if(cljs.core.truth_(inst_35391)){
var statearr_35425_35481 = state_35409__$1;
(statearr_35425_35481[(1)] = (32));

} else {
var statearr_35426_35482 = state_35409__$1;
(statearr_35426_35482[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (32))){
var inst_35368 = (state_35409[(14)]);
var state_35409__$1 = state_35409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35409__$1,(35),out,inst_35368);
} else {
if((state_val_35410 === (33))){
var inst_35359 = (state_35409[(12)]);
var inst_35336 = inst_35359;
var state_35409__$1 = (function (){var statearr_35427 = state_35409;
(statearr_35427[(7)] = inst_35336);

return statearr_35427;
})();
var statearr_35428_35483 = state_35409__$1;
(statearr_35428_35483[(2)] = null);

(statearr_35428_35483[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (13))){
var inst_35336 = (state_35409[(7)]);
var inst_35343 = inst_35336.cljs$lang$protocol_mask$partition0$;
var inst_35344 = (inst_35343 & (64));
var inst_35345 = inst_35336.cljs$core$ISeq$;
var inst_35346 = (cljs.core.PROTOCOL_SENTINEL === inst_35345);
var inst_35347 = (inst_35344) || (inst_35346);
var state_35409__$1 = state_35409;
if(cljs.core.truth_(inst_35347)){
var statearr_35429_35484 = state_35409__$1;
(statearr_35429_35484[(1)] = (16));

} else {
var statearr_35430_35485 = state_35409__$1;
(statearr_35430_35485[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (22))){
var inst_35369 = (state_35409[(9)]);
var inst_35368 = (state_35409[(14)]);
var inst_35367 = (state_35409[(2)]);
var inst_35368__$1 = cljs.core.nth.call(null,inst_35367,(0),null);
var inst_35369__$1 = cljs.core.nth.call(null,inst_35367,(1),null);
var inst_35370 = (inst_35368__$1 == null);
var inst_35371 = cljs.core._EQ_.call(null,inst_35369__$1,change);
var inst_35372 = (inst_35370) || (inst_35371);
var state_35409__$1 = (function (){var statearr_35431 = state_35409;
(statearr_35431[(9)] = inst_35369__$1);

(statearr_35431[(14)] = inst_35368__$1);

return statearr_35431;
})();
if(cljs.core.truth_(inst_35372)){
var statearr_35432_35486 = state_35409__$1;
(statearr_35432_35486[(1)] = (23));

} else {
var statearr_35433_35487 = state_35409__$1;
(statearr_35433_35487[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (36))){
var inst_35359 = (state_35409[(12)]);
var inst_35336 = inst_35359;
var state_35409__$1 = (function (){var statearr_35434 = state_35409;
(statearr_35434[(7)] = inst_35336);

return statearr_35434;
})();
var statearr_35435_35488 = state_35409__$1;
(statearr_35435_35488[(2)] = null);

(statearr_35435_35488[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (29))){
var inst_35383 = (state_35409[(10)]);
var state_35409__$1 = state_35409;
var statearr_35436_35489 = state_35409__$1;
(statearr_35436_35489[(2)] = inst_35383);

(statearr_35436_35489[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (6))){
var state_35409__$1 = state_35409;
var statearr_35437_35490 = state_35409__$1;
(statearr_35437_35490[(2)] = false);

(statearr_35437_35490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (28))){
var inst_35379 = (state_35409[(2)]);
var inst_35380 = calc_state.call(null);
var inst_35336 = inst_35380;
var state_35409__$1 = (function (){var statearr_35438 = state_35409;
(statearr_35438[(15)] = inst_35379);

(statearr_35438[(7)] = inst_35336);

return statearr_35438;
})();
var statearr_35439_35491 = state_35409__$1;
(statearr_35439_35491[(2)] = null);

(statearr_35439_35491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (25))){
var inst_35405 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
var statearr_35440_35492 = state_35409__$1;
(statearr_35440_35492[(2)] = inst_35405);

(statearr_35440_35492[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (34))){
var inst_35403 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
var statearr_35441_35493 = state_35409__$1;
(statearr_35441_35493[(2)] = inst_35403);

(statearr_35441_35493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (17))){
var state_35409__$1 = state_35409;
var statearr_35442_35494 = state_35409__$1;
(statearr_35442_35494[(2)] = false);

(statearr_35442_35494[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (3))){
var state_35409__$1 = state_35409;
var statearr_35443_35495 = state_35409__$1;
(statearr_35443_35495[(2)] = false);

(statearr_35443_35495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (12))){
var inst_35407 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35409__$1,inst_35407);
} else {
if((state_val_35410 === (2))){
var inst_35311 = (state_35409[(8)]);
var inst_35316 = inst_35311.cljs$lang$protocol_mask$partition0$;
var inst_35317 = (inst_35316 & (64));
var inst_35318 = inst_35311.cljs$core$ISeq$;
var inst_35319 = (cljs.core.PROTOCOL_SENTINEL === inst_35318);
var inst_35320 = (inst_35317) || (inst_35319);
var state_35409__$1 = state_35409;
if(cljs.core.truth_(inst_35320)){
var statearr_35444_35496 = state_35409__$1;
(statearr_35444_35496[(1)] = (5));

} else {
var statearr_35445_35497 = state_35409__$1;
(statearr_35445_35497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (23))){
var inst_35368 = (state_35409[(14)]);
var inst_35374 = (inst_35368 == null);
var state_35409__$1 = state_35409;
if(cljs.core.truth_(inst_35374)){
var statearr_35446_35498 = state_35409__$1;
(statearr_35446_35498[(1)] = (26));

} else {
var statearr_35447_35499 = state_35409__$1;
(statearr_35447_35499[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (35))){
var inst_35394 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
if(cljs.core.truth_(inst_35394)){
var statearr_35448_35500 = state_35409__$1;
(statearr_35448_35500[(1)] = (36));

} else {
var statearr_35449_35501 = state_35409__$1;
(statearr_35449_35501[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (19))){
var inst_35336 = (state_35409[(7)]);
var inst_35356 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35336);
var state_35409__$1 = state_35409;
var statearr_35450_35502 = state_35409__$1;
(statearr_35450_35502[(2)] = inst_35356);

(statearr_35450_35502[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (11))){
var inst_35336 = (state_35409[(7)]);
var inst_35340 = (inst_35336 == null);
var inst_35341 = cljs.core.not.call(null,inst_35340);
var state_35409__$1 = state_35409;
if(inst_35341){
var statearr_35451_35503 = state_35409__$1;
(statearr_35451_35503[(1)] = (13));

} else {
var statearr_35452_35504 = state_35409__$1;
(statearr_35452_35504[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (9))){
var inst_35311 = (state_35409[(8)]);
var state_35409__$1 = state_35409;
var statearr_35453_35505 = state_35409__$1;
(statearr_35453_35505[(2)] = inst_35311);

(statearr_35453_35505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (5))){
var state_35409__$1 = state_35409;
var statearr_35454_35506 = state_35409__$1;
(statearr_35454_35506[(2)] = true);

(statearr_35454_35506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (14))){
var state_35409__$1 = state_35409;
var statearr_35455_35507 = state_35409__$1;
(statearr_35455_35507[(2)] = false);

(statearr_35455_35507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (26))){
var inst_35369 = (state_35409[(9)]);
var inst_35376 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35369);
var state_35409__$1 = state_35409;
var statearr_35456_35508 = state_35409__$1;
(statearr_35456_35508[(2)] = inst_35376);

(statearr_35456_35508[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (16))){
var state_35409__$1 = state_35409;
var statearr_35457_35509 = state_35409__$1;
(statearr_35457_35509[(2)] = true);

(statearr_35457_35509[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (38))){
var inst_35399 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
var statearr_35458_35510 = state_35409__$1;
(statearr_35458_35510[(2)] = inst_35399);

(statearr_35458_35510[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (30))){
var inst_35369 = (state_35409[(9)]);
var inst_35360 = (state_35409[(11)]);
var inst_35361 = (state_35409[(13)]);
var inst_35386 = cljs.core.empty_QMARK_.call(null,inst_35360);
var inst_35387 = inst_35361.call(null,inst_35369);
var inst_35388 = cljs.core.not.call(null,inst_35387);
var inst_35389 = (inst_35386) && (inst_35388);
var state_35409__$1 = state_35409;
var statearr_35459_35511 = state_35409__$1;
(statearr_35459_35511[(2)] = inst_35389);

(statearr_35459_35511[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (10))){
var inst_35311 = (state_35409[(8)]);
var inst_35332 = (state_35409[(2)]);
var inst_35333 = cljs.core.get.call(null,inst_35332,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35334 = cljs.core.get.call(null,inst_35332,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35335 = cljs.core.get.call(null,inst_35332,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35336 = inst_35311;
var state_35409__$1 = (function (){var statearr_35460 = state_35409;
(statearr_35460[(16)] = inst_35335);

(statearr_35460[(17)] = inst_35333);

(statearr_35460[(18)] = inst_35334);

(statearr_35460[(7)] = inst_35336);

return statearr_35460;
})();
var statearr_35461_35512 = state_35409__$1;
(statearr_35461_35512[(2)] = null);

(statearr_35461_35512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (18))){
var inst_35351 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
var statearr_35462_35513 = state_35409__$1;
(statearr_35462_35513[(2)] = inst_35351);

(statearr_35462_35513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (37))){
var state_35409__$1 = state_35409;
var statearr_35463_35514 = state_35409__$1;
(statearr_35463_35514[(2)] = null);

(statearr_35463_35514[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (8))){
var inst_35311 = (state_35409[(8)]);
var inst_35329 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35311);
var state_35409__$1 = state_35409;
var statearr_35464_35515 = state_35409__$1;
(statearr_35464_35515[(2)] = inst_35329);

(statearr_35464_35515[(1)] = (10));


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
});})(c__34424__auto___35469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34336__auto__,c__34424__auto___35469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34337__auto__ = null;
var cljs$core$async$mix_$_state_machine__34337__auto____0 = (function (){
var statearr_35465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35465[(0)] = cljs$core$async$mix_$_state_machine__34337__auto__);

(statearr_35465[(1)] = (1));

return statearr_35465;
});
var cljs$core$async$mix_$_state_machine__34337__auto____1 = (function (state_35409){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_35409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e35466){if((e35466 instanceof Object)){
var ex__34340__auto__ = e35466;
var statearr_35467_35516 = state_35409;
(statearr_35467_35516[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35517 = state_35409;
state_35409 = G__35517;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34337__auto__ = function(state_35409){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34337__auto____1.call(this,state_35409);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34337__auto____0;
cljs$core$async$mix_$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34337__auto____1;
return cljs$core$async$mix_$_state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___35469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34426__auto__ = (function (){var statearr_35468 = f__34425__auto__.call(null);
(statearr_35468[(6)] = c__34424__auto___35469);

return statearr_35468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___35469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28734__auto__ = (((p == null))?null:p);
var m__28735__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28735__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28734__auto__ = (((p == null))?null:p);
var m__28735__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,p,v,ch);
} else {
var m__28735__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35519 = arguments.length;
switch (G__35519) {
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
var x__28734__auto__ = (((p == null))?null:p);
var m__28735__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,p);
} else {
var m__28735__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28734__auto__ = (((p == null))?null:p);
var m__28735__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,p,v);
} else {
var m__28735__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__35523 = arguments.length;
switch (G__35523) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28051__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28051__auto__,mults){
return (function (p1__35521_SHARP_){
if(cljs.core.truth_(p1__35521_SHARP_.call(null,topic))){
return p1__35521_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35521_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28051__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35524 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35524 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35525){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35525 = meta35525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35526,meta35525__$1){
var self__ = this;
var _35526__$1 = this;
return (new cljs.core.async.t_cljs$core$async35524(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35525__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35526){
var self__ = this;
var _35526__$1 = this;
return self__.meta35525;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35524.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35525","meta35525",-639712638,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35524.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35524";

cljs.core.async.t_cljs$core$async35524.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async35524");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35524 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35524(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35525){
return (new cljs.core.async.t_cljs$core$async35524(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35525));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35524(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34424__auto___35644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___35644,mults,ensure_mult,p){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___35644,mults,ensure_mult,p){
return (function (state_35598){
var state_val_35599 = (state_35598[(1)]);
if((state_val_35599 === (7))){
var inst_35594 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35600_35645 = state_35598__$1;
(statearr_35600_35645[(2)] = inst_35594);

(statearr_35600_35645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (20))){
var state_35598__$1 = state_35598;
var statearr_35601_35646 = state_35598__$1;
(statearr_35601_35646[(2)] = null);

(statearr_35601_35646[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (1))){
var state_35598__$1 = state_35598;
var statearr_35602_35647 = state_35598__$1;
(statearr_35602_35647[(2)] = null);

(statearr_35602_35647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (24))){
var inst_35577 = (state_35598[(7)]);
var inst_35586 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35577);
var state_35598__$1 = state_35598;
var statearr_35603_35648 = state_35598__$1;
(statearr_35603_35648[(2)] = inst_35586);

(statearr_35603_35648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (4))){
var inst_35529 = (state_35598[(8)]);
var inst_35529__$1 = (state_35598[(2)]);
var inst_35530 = (inst_35529__$1 == null);
var state_35598__$1 = (function (){var statearr_35604 = state_35598;
(statearr_35604[(8)] = inst_35529__$1);

return statearr_35604;
})();
if(cljs.core.truth_(inst_35530)){
var statearr_35605_35649 = state_35598__$1;
(statearr_35605_35649[(1)] = (5));

} else {
var statearr_35606_35650 = state_35598__$1;
(statearr_35606_35650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (15))){
var inst_35571 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35607_35651 = state_35598__$1;
(statearr_35607_35651[(2)] = inst_35571);

(statearr_35607_35651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (21))){
var inst_35591 = (state_35598[(2)]);
var state_35598__$1 = (function (){var statearr_35608 = state_35598;
(statearr_35608[(9)] = inst_35591);

return statearr_35608;
})();
var statearr_35609_35652 = state_35598__$1;
(statearr_35609_35652[(2)] = null);

(statearr_35609_35652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (13))){
var inst_35553 = (state_35598[(10)]);
var inst_35555 = cljs.core.chunked_seq_QMARK_.call(null,inst_35553);
var state_35598__$1 = state_35598;
if(inst_35555){
var statearr_35610_35653 = state_35598__$1;
(statearr_35610_35653[(1)] = (16));

} else {
var statearr_35611_35654 = state_35598__$1;
(statearr_35611_35654[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (22))){
var inst_35583 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35583)){
var statearr_35612_35655 = state_35598__$1;
(statearr_35612_35655[(1)] = (23));

} else {
var statearr_35613_35656 = state_35598__$1;
(statearr_35613_35656[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (6))){
var inst_35577 = (state_35598[(7)]);
var inst_35529 = (state_35598[(8)]);
var inst_35579 = (state_35598[(11)]);
var inst_35577__$1 = topic_fn.call(null,inst_35529);
var inst_35578 = cljs.core.deref.call(null,mults);
var inst_35579__$1 = cljs.core.get.call(null,inst_35578,inst_35577__$1);
var state_35598__$1 = (function (){var statearr_35614 = state_35598;
(statearr_35614[(7)] = inst_35577__$1);

(statearr_35614[(11)] = inst_35579__$1);

return statearr_35614;
})();
if(cljs.core.truth_(inst_35579__$1)){
var statearr_35615_35657 = state_35598__$1;
(statearr_35615_35657[(1)] = (19));

} else {
var statearr_35616_35658 = state_35598__$1;
(statearr_35616_35658[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (25))){
var inst_35588 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35617_35659 = state_35598__$1;
(statearr_35617_35659[(2)] = inst_35588);

(statearr_35617_35659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (17))){
var inst_35553 = (state_35598[(10)]);
var inst_35562 = cljs.core.first.call(null,inst_35553);
var inst_35563 = cljs.core.async.muxch_STAR_.call(null,inst_35562);
var inst_35564 = cljs.core.async.close_BANG_.call(null,inst_35563);
var inst_35565 = cljs.core.next.call(null,inst_35553);
var inst_35539 = inst_35565;
var inst_35540 = null;
var inst_35541 = (0);
var inst_35542 = (0);
var state_35598__$1 = (function (){var statearr_35618 = state_35598;
(statearr_35618[(12)] = inst_35542);

(statearr_35618[(13)] = inst_35564);

(statearr_35618[(14)] = inst_35539);

(statearr_35618[(15)] = inst_35540);

(statearr_35618[(16)] = inst_35541);

return statearr_35618;
})();
var statearr_35619_35660 = state_35598__$1;
(statearr_35619_35660[(2)] = null);

(statearr_35619_35660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (3))){
var inst_35596 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35598__$1,inst_35596);
} else {
if((state_val_35599 === (12))){
var inst_35573 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35620_35661 = state_35598__$1;
(statearr_35620_35661[(2)] = inst_35573);

(statearr_35620_35661[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (2))){
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35598__$1,(4),ch);
} else {
if((state_val_35599 === (23))){
var state_35598__$1 = state_35598;
var statearr_35621_35662 = state_35598__$1;
(statearr_35621_35662[(2)] = null);

(statearr_35621_35662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (19))){
var inst_35529 = (state_35598[(8)]);
var inst_35579 = (state_35598[(11)]);
var inst_35581 = cljs.core.async.muxch_STAR_.call(null,inst_35579);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35598__$1,(22),inst_35581,inst_35529);
} else {
if((state_val_35599 === (11))){
var inst_35539 = (state_35598[(14)]);
var inst_35553 = (state_35598[(10)]);
var inst_35553__$1 = cljs.core.seq.call(null,inst_35539);
var state_35598__$1 = (function (){var statearr_35622 = state_35598;
(statearr_35622[(10)] = inst_35553__$1);

return statearr_35622;
})();
if(inst_35553__$1){
var statearr_35623_35663 = state_35598__$1;
(statearr_35623_35663[(1)] = (13));

} else {
var statearr_35624_35664 = state_35598__$1;
(statearr_35624_35664[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (9))){
var inst_35575 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35625_35665 = state_35598__$1;
(statearr_35625_35665[(2)] = inst_35575);

(statearr_35625_35665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (5))){
var inst_35536 = cljs.core.deref.call(null,mults);
var inst_35537 = cljs.core.vals.call(null,inst_35536);
var inst_35538 = cljs.core.seq.call(null,inst_35537);
var inst_35539 = inst_35538;
var inst_35540 = null;
var inst_35541 = (0);
var inst_35542 = (0);
var state_35598__$1 = (function (){var statearr_35626 = state_35598;
(statearr_35626[(12)] = inst_35542);

(statearr_35626[(14)] = inst_35539);

(statearr_35626[(15)] = inst_35540);

(statearr_35626[(16)] = inst_35541);

return statearr_35626;
})();
var statearr_35627_35666 = state_35598__$1;
(statearr_35627_35666[(2)] = null);

(statearr_35627_35666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (14))){
var state_35598__$1 = state_35598;
var statearr_35631_35667 = state_35598__$1;
(statearr_35631_35667[(2)] = null);

(statearr_35631_35667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (16))){
var inst_35553 = (state_35598[(10)]);
var inst_35557 = cljs.core.chunk_first.call(null,inst_35553);
var inst_35558 = cljs.core.chunk_rest.call(null,inst_35553);
var inst_35559 = cljs.core.count.call(null,inst_35557);
var inst_35539 = inst_35558;
var inst_35540 = inst_35557;
var inst_35541 = inst_35559;
var inst_35542 = (0);
var state_35598__$1 = (function (){var statearr_35632 = state_35598;
(statearr_35632[(12)] = inst_35542);

(statearr_35632[(14)] = inst_35539);

(statearr_35632[(15)] = inst_35540);

(statearr_35632[(16)] = inst_35541);

return statearr_35632;
})();
var statearr_35633_35668 = state_35598__$1;
(statearr_35633_35668[(2)] = null);

(statearr_35633_35668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (10))){
var inst_35542 = (state_35598[(12)]);
var inst_35539 = (state_35598[(14)]);
var inst_35540 = (state_35598[(15)]);
var inst_35541 = (state_35598[(16)]);
var inst_35547 = cljs.core._nth.call(null,inst_35540,inst_35542);
var inst_35548 = cljs.core.async.muxch_STAR_.call(null,inst_35547);
var inst_35549 = cljs.core.async.close_BANG_.call(null,inst_35548);
var inst_35550 = (inst_35542 + (1));
var tmp35628 = inst_35539;
var tmp35629 = inst_35540;
var tmp35630 = inst_35541;
var inst_35539__$1 = tmp35628;
var inst_35540__$1 = tmp35629;
var inst_35541__$1 = tmp35630;
var inst_35542__$1 = inst_35550;
var state_35598__$1 = (function (){var statearr_35634 = state_35598;
(statearr_35634[(12)] = inst_35542__$1);

(statearr_35634[(17)] = inst_35549);

(statearr_35634[(14)] = inst_35539__$1);

(statearr_35634[(15)] = inst_35540__$1);

(statearr_35634[(16)] = inst_35541__$1);

return statearr_35634;
})();
var statearr_35635_35669 = state_35598__$1;
(statearr_35635_35669[(2)] = null);

(statearr_35635_35669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (18))){
var inst_35568 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35636_35670 = state_35598__$1;
(statearr_35636_35670[(2)] = inst_35568);

(statearr_35636_35670[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (8))){
var inst_35542 = (state_35598[(12)]);
var inst_35541 = (state_35598[(16)]);
var inst_35544 = (inst_35542 < inst_35541);
var inst_35545 = inst_35544;
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35545)){
var statearr_35637_35671 = state_35598__$1;
(statearr_35637_35671[(1)] = (10));

} else {
var statearr_35638_35672 = state_35598__$1;
(statearr_35638_35672[(1)] = (11));

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
});})(c__34424__auto___35644,mults,ensure_mult,p))
;
return ((function (switch__34336__auto__,c__34424__auto___35644,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34337__auto__ = null;
var cljs$core$async$state_machine__34337__auto____0 = (function (){
var statearr_35639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35639[(0)] = cljs$core$async$state_machine__34337__auto__);

(statearr_35639[(1)] = (1));

return statearr_35639;
});
var cljs$core$async$state_machine__34337__auto____1 = (function (state_35598){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_35598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e35640){if((e35640 instanceof Object)){
var ex__34340__auto__ = e35640;
var statearr_35641_35673 = state_35598;
(statearr_35641_35673[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35674 = state_35598;
state_35598 = G__35674;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$state_machine__34337__auto__ = function(state_35598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34337__auto____1.call(this,state_35598);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34337__auto____0;
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34337__auto____1;
return cljs$core$async$state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___35644,mults,ensure_mult,p))
})();
var state__34426__auto__ = (function (){var statearr_35642 = f__34425__auto__.call(null);
(statearr_35642[(6)] = c__34424__auto___35644);

return statearr_35642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___35644,mults,ensure_mult,p))
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
var G__35676 = arguments.length;
switch (G__35676) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35679 = arguments.length;
switch (G__35679) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__35682 = arguments.length;
switch (G__35682) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__34424__auto___35749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___35749,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___35749,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35721){
var state_val_35722 = (state_35721[(1)]);
if((state_val_35722 === (7))){
var state_35721__$1 = state_35721;
var statearr_35723_35750 = state_35721__$1;
(statearr_35723_35750[(2)] = null);

(statearr_35723_35750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (1))){
var state_35721__$1 = state_35721;
var statearr_35724_35751 = state_35721__$1;
(statearr_35724_35751[(2)] = null);

(statearr_35724_35751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (4))){
var inst_35685 = (state_35721[(7)]);
var inst_35687 = (inst_35685 < cnt);
var state_35721__$1 = state_35721;
if(cljs.core.truth_(inst_35687)){
var statearr_35725_35752 = state_35721__$1;
(statearr_35725_35752[(1)] = (6));

} else {
var statearr_35726_35753 = state_35721__$1;
(statearr_35726_35753[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (15))){
var inst_35717 = (state_35721[(2)]);
var state_35721__$1 = state_35721;
var statearr_35727_35754 = state_35721__$1;
(statearr_35727_35754[(2)] = inst_35717);

(statearr_35727_35754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (13))){
var inst_35710 = cljs.core.async.close_BANG_.call(null,out);
var state_35721__$1 = state_35721;
var statearr_35728_35755 = state_35721__$1;
(statearr_35728_35755[(2)] = inst_35710);

(statearr_35728_35755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (6))){
var state_35721__$1 = state_35721;
var statearr_35729_35756 = state_35721__$1;
(statearr_35729_35756[(2)] = null);

(statearr_35729_35756[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (3))){
var inst_35719 = (state_35721[(2)]);
var state_35721__$1 = state_35721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35721__$1,inst_35719);
} else {
if((state_val_35722 === (12))){
var inst_35707 = (state_35721[(8)]);
var inst_35707__$1 = (state_35721[(2)]);
var inst_35708 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35707__$1);
var state_35721__$1 = (function (){var statearr_35730 = state_35721;
(statearr_35730[(8)] = inst_35707__$1);

return statearr_35730;
})();
if(cljs.core.truth_(inst_35708)){
var statearr_35731_35757 = state_35721__$1;
(statearr_35731_35757[(1)] = (13));

} else {
var statearr_35732_35758 = state_35721__$1;
(statearr_35732_35758[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (2))){
var inst_35684 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35685 = (0);
var state_35721__$1 = (function (){var statearr_35733 = state_35721;
(statearr_35733[(7)] = inst_35685);

(statearr_35733[(9)] = inst_35684);

return statearr_35733;
})();
var statearr_35734_35759 = state_35721__$1;
(statearr_35734_35759[(2)] = null);

(statearr_35734_35759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (11))){
var inst_35685 = (state_35721[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35721,(10),Object,null,(9));
var inst_35694 = chs__$1.call(null,inst_35685);
var inst_35695 = done.call(null,inst_35685);
var inst_35696 = cljs.core.async.take_BANG_.call(null,inst_35694,inst_35695);
var state_35721__$1 = state_35721;
var statearr_35735_35760 = state_35721__$1;
(statearr_35735_35760[(2)] = inst_35696);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35721__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (9))){
var inst_35685 = (state_35721[(7)]);
var inst_35698 = (state_35721[(2)]);
var inst_35699 = (inst_35685 + (1));
var inst_35685__$1 = inst_35699;
var state_35721__$1 = (function (){var statearr_35736 = state_35721;
(statearr_35736[(7)] = inst_35685__$1);

(statearr_35736[(10)] = inst_35698);

return statearr_35736;
})();
var statearr_35737_35761 = state_35721__$1;
(statearr_35737_35761[(2)] = null);

(statearr_35737_35761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (5))){
var inst_35705 = (state_35721[(2)]);
var state_35721__$1 = (function (){var statearr_35738 = state_35721;
(statearr_35738[(11)] = inst_35705);

return statearr_35738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35721__$1,(12),dchan);
} else {
if((state_val_35722 === (14))){
var inst_35707 = (state_35721[(8)]);
var inst_35712 = cljs.core.apply.call(null,f,inst_35707);
var state_35721__$1 = state_35721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35721__$1,(16),out,inst_35712);
} else {
if((state_val_35722 === (16))){
var inst_35714 = (state_35721[(2)]);
var state_35721__$1 = (function (){var statearr_35739 = state_35721;
(statearr_35739[(12)] = inst_35714);

return statearr_35739;
})();
var statearr_35740_35762 = state_35721__$1;
(statearr_35740_35762[(2)] = null);

(statearr_35740_35762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (10))){
var inst_35689 = (state_35721[(2)]);
var inst_35690 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35721__$1 = (function (){var statearr_35741 = state_35721;
(statearr_35741[(13)] = inst_35689);

return statearr_35741;
})();
var statearr_35742_35763 = state_35721__$1;
(statearr_35742_35763[(2)] = inst_35690);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35721__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (8))){
var inst_35703 = (state_35721[(2)]);
var state_35721__$1 = state_35721;
var statearr_35743_35764 = state_35721__$1;
(statearr_35743_35764[(2)] = inst_35703);

(statearr_35743_35764[(1)] = (5));


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
});})(c__34424__auto___35749,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34336__auto__,c__34424__auto___35749,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34337__auto__ = null;
var cljs$core$async$state_machine__34337__auto____0 = (function (){
var statearr_35744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35744[(0)] = cljs$core$async$state_machine__34337__auto__);

(statearr_35744[(1)] = (1));

return statearr_35744;
});
var cljs$core$async$state_machine__34337__auto____1 = (function (state_35721){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_35721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e35745){if((e35745 instanceof Object)){
var ex__34340__auto__ = e35745;
var statearr_35746_35765 = state_35721;
(statearr_35746_35765[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35766 = state_35721;
state_35721 = G__35766;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$state_machine__34337__auto__ = function(state_35721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34337__auto____1.call(this,state_35721);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34337__auto____0;
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34337__auto____1;
return cljs$core$async$state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___35749,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34426__auto__ = (function (){var statearr_35747 = f__34425__auto__.call(null);
(statearr_35747[(6)] = c__34424__auto___35749);

return statearr_35747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___35749,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35769 = arguments.length;
switch (G__35769) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34424__auto___35823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___35823,out){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___35823,out){
return (function (state_35801){
var state_val_35802 = (state_35801[(1)]);
if((state_val_35802 === (7))){
var inst_35781 = (state_35801[(7)]);
var inst_35780 = (state_35801[(8)]);
var inst_35780__$1 = (state_35801[(2)]);
var inst_35781__$1 = cljs.core.nth.call(null,inst_35780__$1,(0),null);
var inst_35782 = cljs.core.nth.call(null,inst_35780__$1,(1),null);
var inst_35783 = (inst_35781__$1 == null);
var state_35801__$1 = (function (){var statearr_35803 = state_35801;
(statearr_35803[(7)] = inst_35781__$1);

(statearr_35803[(9)] = inst_35782);

(statearr_35803[(8)] = inst_35780__$1);

return statearr_35803;
})();
if(cljs.core.truth_(inst_35783)){
var statearr_35804_35824 = state_35801__$1;
(statearr_35804_35824[(1)] = (8));

} else {
var statearr_35805_35825 = state_35801__$1;
(statearr_35805_35825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (1))){
var inst_35770 = cljs.core.vec.call(null,chs);
var inst_35771 = inst_35770;
var state_35801__$1 = (function (){var statearr_35806 = state_35801;
(statearr_35806[(10)] = inst_35771);

return statearr_35806;
})();
var statearr_35807_35826 = state_35801__$1;
(statearr_35807_35826[(2)] = null);

(statearr_35807_35826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (4))){
var inst_35771 = (state_35801[(10)]);
var state_35801__$1 = state_35801;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35801__$1,(7),inst_35771);
} else {
if((state_val_35802 === (6))){
var inst_35797 = (state_35801[(2)]);
var state_35801__$1 = state_35801;
var statearr_35808_35827 = state_35801__$1;
(statearr_35808_35827[(2)] = inst_35797);

(statearr_35808_35827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (3))){
var inst_35799 = (state_35801[(2)]);
var state_35801__$1 = state_35801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35801__$1,inst_35799);
} else {
if((state_val_35802 === (2))){
var inst_35771 = (state_35801[(10)]);
var inst_35773 = cljs.core.count.call(null,inst_35771);
var inst_35774 = (inst_35773 > (0));
var state_35801__$1 = state_35801;
if(cljs.core.truth_(inst_35774)){
var statearr_35810_35828 = state_35801__$1;
(statearr_35810_35828[(1)] = (4));

} else {
var statearr_35811_35829 = state_35801__$1;
(statearr_35811_35829[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (11))){
var inst_35771 = (state_35801[(10)]);
var inst_35790 = (state_35801[(2)]);
var tmp35809 = inst_35771;
var inst_35771__$1 = tmp35809;
var state_35801__$1 = (function (){var statearr_35812 = state_35801;
(statearr_35812[(10)] = inst_35771__$1);

(statearr_35812[(11)] = inst_35790);

return statearr_35812;
})();
var statearr_35813_35830 = state_35801__$1;
(statearr_35813_35830[(2)] = null);

(statearr_35813_35830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (9))){
var inst_35781 = (state_35801[(7)]);
var state_35801__$1 = state_35801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35801__$1,(11),out,inst_35781);
} else {
if((state_val_35802 === (5))){
var inst_35795 = cljs.core.async.close_BANG_.call(null,out);
var state_35801__$1 = state_35801;
var statearr_35814_35831 = state_35801__$1;
(statearr_35814_35831[(2)] = inst_35795);

(statearr_35814_35831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (10))){
var inst_35793 = (state_35801[(2)]);
var state_35801__$1 = state_35801;
var statearr_35815_35832 = state_35801__$1;
(statearr_35815_35832[(2)] = inst_35793);

(statearr_35815_35832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (8))){
var inst_35771 = (state_35801[(10)]);
var inst_35781 = (state_35801[(7)]);
var inst_35782 = (state_35801[(9)]);
var inst_35780 = (state_35801[(8)]);
var inst_35785 = (function (){var cs = inst_35771;
var vec__35776 = inst_35780;
var v = inst_35781;
var c = inst_35782;
return ((function (cs,vec__35776,v,c,inst_35771,inst_35781,inst_35782,inst_35780,state_val_35802,c__34424__auto___35823,out){
return (function (p1__35767_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35767_SHARP_);
});
;})(cs,vec__35776,v,c,inst_35771,inst_35781,inst_35782,inst_35780,state_val_35802,c__34424__auto___35823,out))
})();
var inst_35786 = cljs.core.filterv.call(null,inst_35785,inst_35771);
var inst_35771__$1 = inst_35786;
var state_35801__$1 = (function (){var statearr_35816 = state_35801;
(statearr_35816[(10)] = inst_35771__$1);

return statearr_35816;
})();
var statearr_35817_35833 = state_35801__$1;
(statearr_35817_35833[(2)] = null);

(statearr_35817_35833[(1)] = (2));


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
});})(c__34424__auto___35823,out))
;
return ((function (switch__34336__auto__,c__34424__auto___35823,out){
return (function() {
var cljs$core$async$state_machine__34337__auto__ = null;
var cljs$core$async$state_machine__34337__auto____0 = (function (){
var statearr_35818 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35818[(0)] = cljs$core$async$state_machine__34337__auto__);

(statearr_35818[(1)] = (1));

return statearr_35818;
});
var cljs$core$async$state_machine__34337__auto____1 = (function (state_35801){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_35801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e35819){if((e35819 instanceof Object)){
var ex__34340__auto__ = e35819;
var statearr_35820_35834 = state_35801;
(statearr_35820_35834[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35835 = state_35801;
state_35801 = G__35835;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$state_machine__34337__auto__ = function(state_35801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34337__auto____1.call(this,state_35801);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34337__auto____0;
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34337__auto____1;
return cljs$core$async$state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___35823,out))
})();
var state__34426__auto__ = (function (){var statearr_35821 = f__34425__auto__.call(null);
(statearr_35821[(6)] = c__34424__auto___35823);

return statearr_35821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___35823,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35837 = arguments.length;
switch (G__35837) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34424__auto___35882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___35882,out){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___35882,out){
return (function (state_35861){
var state_val_35862 = (state_35861[(1)]);
if((state_val_35862 === (7))){
var inst_35843 = (state_35861[(7)]);
var inst_35843__$1 = (state_35861[(2)]);
var inst_35844 = (inst_35843__$1 == null);
var inst_35845 = cljs.core.not.call(null,inst_35844);
var state_35861__$1 = (function (){var statearr_35863 = state_35861;
(statearr_35863[(7)] = inst_35843__$1);

return statearr_35863;
})();
if(inst_35845){
var statearr_35864_35883 = state_35861__$1;
(statearr_35864_35883[(1)] = (8));

} else {
var statearr_35865_35884 = state_35861__$1;
(statearr_35865_35884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (1))){
var inst_35838 = (0);
var state_35861__$1 = (function (){var statearr_35866 = state_35861;
(statearr_35866[(8)] = inst_35838);

return statearr_35866;
})();
var statearr_35867_35885 = state_35861__$1;
(statearr_35867_35885[(2)] = null);

(statearr_35867_35885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (4))){
var state_35861__$1 = state_35861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35861__$1,(7),ch);
} else {
if((state_val_35862 === (6))){
var inst_35856 = (state_35861[(2)]);
var state_35861__$1 = state_35861;
var statearr_35868_35886 = state_35861__$1;
(statearr_35868_35886[(2)] = inst_35856);

(statearr_35868_35886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (3))){
var inst_35858 = (state_35861[(2)]);
var inst_35859 = cljs.core.async.close_BANG_.call(null,out);
var state_35861__$1 = (function (){var statearr_35869 = state_35861;
(statearr_35869[(9)] = inst_35858);

return statearr_35869;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35861__$1,inst_35859);
} else {
if((state_val_35862 === (2))){
var inst_35838 = (state_35861[(8)]);
var inst_35840 = (inst_35838 < n);
var state_35861__$1 = state_35861;
if(cljs.core.truth_(inst_35840)){
var statearr_35870_35887 = state_35861__$1;
(statearr_35870_35887[(1)] = (4));

} else {
var statearr_35871_35888 = state_35861__$1;
(statearr_35871_35888[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (11))){
var inst_35838 = (state_35861[(8)]);
var inst_35848 = (state_35861[(2)]);
var inst_35849 = (inst_35838 + (1));
var inst_35838__$1 = inst_35849;
var state_35861__$1 = (function (){var statearr_35872 = state_35861;
(statearr_35872[(8)] = inst_35838__$1);

(statearr_35872[(10)] = inst_35848);

return statearr_35872;
})();
var statearr_35873_35889 = state_35861__$1;
(statearr_35873_35889[(2)] = null);

(statearr_35873_35889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (9))){
var state_35861__$1 = state_35861;
var statearr_35874_35890 = state_35861__$1;
(statearr_35874_35890[(2)] = null);

(statearr_35874_35890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (5))){
var state_35861__$1 = state_35861;
var statearr_35875_35891 = state_35861__$1;
(statearr_35875_35891[(2)] = null);

(statearr_35875_35891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (10))){
var inst_35853 = (state_35861[(2)]);
var state_35861__$1 = state_35861;
var statearr_35876_35892 = state_35861__$1;
(statearr_35876_35892[(2)] = inst_35853);

(statearr_35876_35892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (8))){
var inst_35843 = (state_35861[(7)]);
var state_35861__$1 = state_35861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35861__$1,(11),out,inst_35843);
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
});})(c__34424__auto___35882,out))
;
return ((function (switch__34336__auto__,c__34424__auto___35882,out){
return (function() {
var cljs$core$async$state_machine__34337__auto__ = null;
var cljs$core$async$state_machine__34337__auto____0 = (function (){
var statearr_35877 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35877[(0)] = cljs$core$async$state_machine__34337__auto__);

(statearr_35877[(1)] = (1));

return statearr_35877;
});
var cljs$core$async$state_machine__34337__auto____1 = (function (state_35861){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_35861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e35878){if((e35878 instanceof Object)){
var ex__34340__auto__ = e35878;
var statearr_35879_35893 = state_35861;
(statearr_35879_35893[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35894 = state_35861;
state_35861 = G__35894;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$state_machine__34337__auto__ = function(state_35861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34337__auto____1.call(this,state_35861);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34337__auto____0;
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34337__auto____1;
return cljs$core$async$state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___35882,out))
})();
var state__34426__auto__ = (function (){var statearr_35880 = f__34425__auto__.call(null);
(statearr_35880[(6)] = c__34424__auto___35882);

return statearr_35880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___35882,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35896 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35896 = (function (f,ch,meta35897){
this.f = f;
this.ch = ch;
this.meta35897 = meta35897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35898,meta35897__$1){
var self__ = this;
var _35898__$1 = this;
return (new cljs.core.async.t_cljs$core$async35896(self__.f,self__.ch,meta35897__$1));
});

cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35898){
var self__ = this;
var _35898__$1 = this;
return self__.meta35897;
});

cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35899 = (function (f,ch,meta35897,_,fn1,meta35900){
this.f = f;
this.ch = ch;
this.meta35897 = meta35897;
this._ = _;
this.fn1 = fn1;
this.meta35900 = meta35900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35901,meta35900__$1){
var self__ = this;
var _35901__$1 = this;
return (new cljs.core.async.t_cljs$core$async35899(self__.f,self__.ch,self__.meta35897,self__._,self__.fn1,meta35900__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35901){
var self__ = this;
var _35901__$1 = this;
return self__.meta35900;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35895_SHARP_){
return f1.call(null,(((p1__35895_SHARP_ == null))?null:self__.f.call(null,p1__35895_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35899.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35897","meta35897",594436028,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35896","cljs.core.async/t_cljs$core$async35896",-986151656,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35900","meta35900",-5554569,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35899.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35899";

cljs.core.async.t_cljs$core$async35899.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async35899");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35899 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35899(f__$1,ch__$1,meta35897__$1,___$2,fn1__$1,meta35900){
return (new cljs.core.async.t_cljs$core$async35899(f__$1,ch__$1,meta35897__$1,___$2,fn1__$1,meta35900));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35899(self__.f,self__.ch,self__.meta35897,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28039__auto__ = ret;
if(cljs.core.truth_(and__28039__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28039__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35897","meta35897",594436028,null)], null);
});

cljs.core.async.t_cljs$core$async35896.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35896.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35896";

cljs.core.async.t_cljs$core$async35896.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async35896");
});

cljs.core.async.__GT_t_cljs$core$async35896 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35896(f__$1,ch__$1,meta35897){
return (new cljs.core.async.t_cljs$core$async35896(f__$1,ch__$1,meta35897));
});

}

return (new cljs.core.async.t_cljs$core$async35896(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35902 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35902 = (function (f,ch,meta35903){
this.f = f;
this.ch = ch;
this.meta35903 = meta35903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35904,meta35903__$1){
var self__ = this;
var _35904__$1 = this;
return (new cljs.core.async.t_cljs$core$async35902(self__.f,self__.ch,meta35903__$1));
});

cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35904){
var self__ = this;
var _35904__$1 = this;
return self__.meta35903;
});

cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35903","meta35903",-1841924387,null)], null);
});

cljs.core.async.t_cljs$core$async35902.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35902";

cljs.core.async.t_cljs$core$async35902.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async35902");
});

cljs.core.async.__GT_t_cljs$core$async35902 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35902(f__$1,ch__$1,meta35903){
return (new cljs.core.async.t_cljs$core$async35902(f__$1,ch__$1,meta35903));
});

}

return (new cljs.core.async.t_cljs$core$async35902(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35905 = (function (p,ch,meta35906){
this.p = p;
this.ch = ch;
this.meta35906 = meta35906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35907,meta35906__$1){
var self__ = this;
var _35907__$1 = this;
return (new cljs.core.async.t_cljs$core$async35905(self__.p,self__.ch,meta35906__$1));
});

cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35907){
var self__ = this;
var _35907__$1 = this;
return self__.meta35906;
});

cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35906","meta35906",-868682808,null)], null);
});

cljs.core.async.t_cljs$core$async35905.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35905";

cljs.core.async.t_cljs$core$async35905.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async35905");
});

cljs.core.async.__GT_t_cljs$core$async35905 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35905(p__$1,ch__$1,meta35906){
return (new cljs.core.async.t_cljs$core$async35905(p__$1,ch__$1,meta35906));
});

}

return (new cljs.core.async.t_cljs$core$async35905(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35909 = arguments.length;
switch (G__35909) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34424__auto___35949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___35949,out){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___35949,out){
return (function (state_35930){
var state_val_35931 = (state_35930[(1)]);
if((state_val_35931 === (7))){
var inst_35926 = (state_35930[(2)]);
var state_35930__$1 = state_35930;
var statearr_35932_35950 = state_35930__$1;
(statearr_35932_35950[(2)] = inst_35926);

(statearr_35932_35950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35931 === (1))){
var state_35930__$1 = state_35930;
var statearr_35933_35951 = state_35930__$1;
(statearr_35933_35951[(2)] = null);

(statearr_35933_35951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35931 === (4))){
var inst_35912 = (state_35930[(7)]);
var inst_35912__$1 = (state_35930[(2)]);
var inst_35913 = (inst_35912__$1 == null);
var state_35930__$1 = (function (){var statearr_35934 = state_35930;
(statearr_35934[(7)] = inst_35912__$1);

return statearr_35934;
})();
if(cljs.core.truth_(inst_35913)){
var statearr_35935_35952 = state_35930__$1;
(statearr_35935_35952[(1)] = (5));

} else {
var statearr_35936_35953 = state_35930__$1;
(statearr_35936_35953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35931 === (6))){
var inst_35912 = (state_35930[(7)]);
var inst_35917 = p.call(null,inst_35912);
var state_35930__$1 = state_35930;
if(cljs.core.truth_(inst_35917)){
var statearr_35937_35954 = state_35930__$1;
(statearr_35937_35954[(1)] = (8));

} else {
var statearr_35938_35955 = state_35930__$1;
(statearr_35938_35955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35931 === (3))){
var inst_35928 = (state_35930[(2)]);
var state_35930__$1 = state_35930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35930__$1,inst_35928);
} else {
if((state_val_35931 === (2))){
var state_35930__$1 = state_35930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35930__$1,(4),ch);
} else {
if((state_val_35931 === (11))){
var inst_35920 = (state_35930[(2)]);
var state_35930__$1 = state_35930;
var statearr_35939_35956 = state_35930__$1;
(statearr_35939_35956[(2)] = inst_35920);

(statearr_35939_35956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35931 === (9))){
var state_35930__$1 = state_35930;
var statearr_35940_35957 = state_35930__$1;
(statearr_35940_35957[(2)] = null);

(statearr_35940_35957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35931 === (5))){
var inst_35915 = cljs.core.async.close_BANG_.call(null,out);
var state_35930__$1 = state_35930;
var statearr_35941_35958 = state_35930__$1;
(statearr_35941_35958[(2)] = inst_35915);

(statearr_35941_35958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35931 === (10))){
var inst_35923 = (state_35930[(2)]);
var state_35930__$1 = (function (){var statearr_35942 = state_35930;
(statearr_35942[(8)] = inst_35923);

return statearr_35942;
})();
var statearr_35943_35959 = state_35930__$1;
(statearr_35943_35959[(2)] = null);

(statearr_35943_35959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35931 === (8))){
var inst_35912 = (state_35930[(7)]);
var state_35930__$1 = state_35930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35930__$1,(11),out,inst_35912);
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
});})(c__34424__auto___35949,out))
;
return ((function (switch__34336__auto__,c__34424__auto___35949,out){
return (function() {
var cljs$core$async$state_machine__34337__auto__ = null;
var cljs$core$async$state_machine__34337__auto____0 = (function (){
var statearr_35944 = [null,null,null,null,null,null,null,null,null];
(statearr_35944[(0)] = cljs$core$async$state_machine__34337__auto__);

(statearr_35944[(1)] = (1));

return statearr_35944;
});
var cljs$core$async$state_machine__34337__auto____1 = (function (state_35930){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_35930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e35945){if((e35945 instanceof Object)){
var ex__34340__auto__ = e35945;
var statearr_35946_35960 = state_35930;
(statearr_35946_35960[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35961 = state_35930;
state_35930 = G__35961;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$state_machine__34337__auto__ = function(state_35930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34337__auto____1.call(this,state_35930);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34337__auto____0;
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34337__auto____1;
return cljs$core$async$state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___35949,out))
})();
var state__34426__auto__ = (function (){var statearr_35947 = f__34425__auto__.call(null);
(statearr_35947[(6)] = c__34424__auto___35949);

return statearr_35947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___35949,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35963 = arguments.length;
switch (G__35963) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto__){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto__){
return (function (state_36026){
var state_val_36027 = (state_36026[(1)]);
if((state_val_36027 === (7))){
var inst_36022 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36028_36066 = state_36026__$1;
(statearr_36028_36066[(2)] = inst_36022);

(statearr_36028_36066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (20))){
var inst_35992 = (state_36026[(7)]);
var inst_36003 = (state_36026[(2)]);
var inst_36004 = cljs.core.next.call(null,inst_35992);
var inst_35978 = inst_36004;
var inst_35979 = null;
var inst_35980 = (0);
var inst_35981 = (0);
var state_36026__$1 = (function (){var statearr_36029 = state_36026;
(statearr_36029[(8)] = inst_35978);

(statearr_36029[(9)] = inst_35979);

(statearr_36029[(10)] = inst_36003);

(statearr_36029[(11)] = inst_35980);

(statearr_36029[(12)] = inst_35981);

return statearr_36029;
})();
var statearr_36030_36067 = state_36026__$1;
(statearr_36030_36067[(2)] = null);

(statearr_36030_36067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (1))){
var state_36026__$1 = state_36026;
var statearr_36031_36068 = state_36026__$1;
(statearr_36031_36068[(2)] = null);

(statearr_36031_36068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (4))){
var inst_35967 = (state_36026[(13)]);
var inst_35967__$1 = (state_36026[(2)]);
var inst_35968 = (inst_35967__$1 == null);
var state_36026__$1 = (function (){var statearr_36032 = state_36026;
(statearr_36032[(13)] = inst_35967__$1);

return statearr_36032;
})();
if(cljs.core.truth_(inst_35968)){
var statearr_36033_36069 = state_36026__$1;
(statearr_36033_36069[(1)] = (5));

} else {
var statearr_36034_36070 = state_36026__$1;
(statearr_36034_36070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (15))){
var state_36026__$1 = state_36026;
var statearr_36038_36071 = state_36026__$1;
(statearr_36038_36071[(2)] = null);

(statearr_36038_36071[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (21))){
var state_36026__$1 = state_36026;
var statearr_36039_36072 = state_36026__$1;
(statearr_36039_36072[(2)] = null);

(statearr_36039_36072[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (13))){
var inst_35978 = (state_36026[(8)]);
var inst_35979 = (state_36026[(9)]);
var inst_35980 = (state_36026[(11)]);
var inst_35981 = (state_36026[(12)]);
var inst_35988 = (state_36026[(2)]);
var inst_35989 = (inst_35981 + (1));
var tmp36035 = inst_35978;
var tmp36036 = inst_35979;
var tmp36037 = inst_35980;
var inst_35978__$1 = tmp36035;
var inst_35979__$1 = tmp36036;
var inst_35980__$1 = tmp36037;
var inst_35981__$1 = inst_35989;
var state_36026__$1 = (function (){var statearr_36040 = state_36026;
(statearr_36040[(8)] = inst_35978__$1);

(statearr_36040[(9)] = inst_35979__$1);

(statearr_36040[(11)] = inst_35980__$1);

(statearr_36040[(14)] = inst_35988);

(statearr_36040[(12)] = inst_35981__$1);

return statearr_36040;
})();
var statearr_36041_36073 = state_36026__$1;
(statearr_36041_36073[(2)] = null);

(statearr_36041_36073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (22))){
var state_36026__$1 = state_36026;
var statearr_36042_36074 = state_36026__$1;
(statearr_36042_36074[(2)] = null);

(statearr_36042_36074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (6))){
var inst_35967 = (state_36026[(13)]);
var inst_35976 = f.call(null,inst_35967);
var inst_35977 = cljs.core.seq.call(null,inst_35976);
var inst_35978 = inst_35977;
var inst_35979 = null;
var inst_35980 = (0);
var inst_35981 = (0);
var state_36026__$1 = (function (){var statearr_36043 = state_36026;
(statearr_36043[(8)] = inst_35978);

(statearr_36043[(9)] = inst_35979);

(statearr_36043[(11)] = inst_35980);

(statearr_36043[(12)] = inst_35981);

return statearr_36043;
})();
var statearr_36044_36075 = state_36026__$1;
(statearr_36044_36075[(2)] = null);

(statearr_36044_36075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (17))){
var inst_35992 = (state_36026[(7)]);
var inst_35996 = cljs.core.chunk_first.call(null,inst_35992);
var inst_35997 = cljs.core.chunk_rest.call(null,inst_35992);
var inst_35998 = cljs.core.count.call(null,inst_35996);
var inst_35978 = inst_35997;
var inst_35979 = inst_35996;
var inst_35980 = inst_35998;
var inst_35981 = (0);
var state_36026__$1 = (function (){var statearr_36045 = state_36026;
(statearr_36045[(8)] = inst_35978);

(statearr_36045[(9)] = inst_35979);

(statearr_36045[(11)] = inst_35980);

(statearr_36045[(12)] = inst_35981);

return statearr_36045;
})();
var statearr_36046_36076 = state_36026__$1;
(statearr_36046_36076[(2)] = null);

(statearr_36046_36076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (3))){
var inst_36024 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36026__$1,inst_36024);
} else {
if((state_val_36027 === (12))){
var inst_36012 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36047_36077 = state_36026__$1;
(statearr_36047_36077[(2)] = inst_36012);

(statearr_36047_36077[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (2))){
var state_36026__$1 = state_36026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36026__$1,(4),in$);
} else {
if((state_val_36027 === (23))){
var inst_36020 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36048_36078 = state_36026__$1;
(statearr_36048_36078[(2)] = inst_36020);

(statearr_36048_36078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (19))){
var inst_36007 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36049_36079 = state_36026__$1;
(statearr_36049_36079[(2)] = inst_36007);

(statearr_36049_36079[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (11))){
var inst_35992 = (state_36026[(7)]);
var inst_35978 = (state_36026[(8)]);
var inst_35992__$1 = cljs.core.seq.call(null,inst_35978);
var state_36026__$1 = (function (){var statearr_36050 = state_36026;
(statearr_36050[(7)] = inst_35992__$1);

return statearr_36050;
})();
if(inst_35992__$1){
var statearr_36051_36080 = state_36026__$1;
(statearr_36051_36080[(1)] = (14));

} else {
var statearr_36052_36081 = state_36026__$1;
(statearr_36052_36081[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (9))){
var inst_36014 = (state_36026[(2)]);
var inst_36015 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36026__$1 = (function (){var statearr_36053 = state_36026;
(statearr_36053[(15)] = inst_36014);

return statearr_36053;
})();
if(cljs.core.truth_(inst_36015)){
var statearr_36054_36082 = state_36026__$1;
(statearr_36054_36082[(1)] = (21));

} else {
var statearr_36055_36083 = state_36026__$1;
(statearr_36055_36083[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (5))){
var inst_35970 = cljs.core.async.close_BANG_.call(null,out);
var state_36026__$1 = state_36026;
var statearr_36056_36084 = state_36026__$1;
(statearr_36056_36084[(2)] = inst_35970);

(statearr_36056_36084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (14))){
var inst_35992 = (state_36026[(7)]);
var inst_35994 = cljs.core.chunked_seq_QMARK_.call(null,inst_35992);
var state_36026__$1 = state_36026;
if(inst_35994){
var statearr_36057_36085 = state_36026__$1;
(statearr_36057_36085[(1)] = (17));

} else {
var statearr_36058_36086 = state_36026__$1;
(statearr_36058_36086[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (16))){
var inst_36010 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36059_36087 = state_36026__$1;
(statearr_36059_36087[(2)] = inst_36010);

(statearr_36059_36087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (10))){
var inst_35979 = (state_36026[(9)]);
var inst_35981 = (state_36026[(12)]);
var inst_35986 = cljs.core._nth.call(null,inst_35979,inst_35981);
var state_36026__$1 = state_36026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36026__$1,(13),out,inst_35986);
} else {
if((state_val_36027 === (18))){
var inst_35992 = (state_36026[(7)]);
var inst_36001 = cljs.core.first.call(null,inst_35992);
var state_36026__$1 = state_36026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36026__$1,(20),out,inst_36001);
} else {
if((state_val_36027 === (8))){
var inst_35980 = (state_36026[(11)]);
var inst_35981 = (state_36026[(12)]);
var inst_35983 = (inst_35981 < inst_35980);
var inst_35984 = inst_35983;
var state_36026__$1 = state_36026;
if(cljs.core.truth_(inst_35984)){
var statearr_36060_36088 = state_36026__$1;
(statearr_36060_36088[(1)] = (10));

} else {
var statearr_36061_36089 = state_36026__$1;
(statearr_36061_36089[(1)] = (11));

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
});})(c__34424__auto__))
;
return ((function (switch__34336__auto__,c__34424__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34337__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34337__auto____0 = (function (){
var statearr_36062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36062[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34337__auto__);

(statearr_36062[(1)] = (1));

return statearr_36062;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34337__auto____1 = (function (state_36026){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_36026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e36063){if((e36063 instanceof Object)){
var ex__34340__auto__ = e36063;
var statearr_36064_36090 = state_36026;
(statearr_36064_36090[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36091 = state_36026;
state_36026 = G__36091;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34337__auto__ = function(state_36026){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34337__auto____1.call(this,state_36026);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34337__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34337__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto__))
})();
var state__34426__auto__ = (function (){var statearr_36065 = f__34425__auto__.call(null);
(statearr_36065[(6)] = c__34424__auto__);

return statearr_36065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto__))
);

return c__34424__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36093 = arguments.length;
switch (G__36093) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36096 = arguments.length;
switch (G__36096) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36099 = arguments.length;
switch (G__36099) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34424__auto___36146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___36146,out){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___36146,out){
return (function (state_36123){
var state_val_36124 = (state_36123[(1)]);
if((state_val_36124 === (7))){
var inst_36118 = (state_36123[(2)]);
var state_36123__$1 = state_36123;
var statearr_36125_36147 = state_36123__$1;
(statearr_36125_36147[(2)] = inst_36118);

(statearr_36125_36147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (1))){
var inst_36100 = null;
var state_36123__$1 = (function (){var statearr_36126 = state_36123;
(statearr_36126[(7)] = inst_36100);

return statearr_36126;
})();
var statearr_36127_36148 = state_36123__$1;
(statearr_36127_36148[(2)] = null);

(statearr_36127_36148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (4))){
var inst_36103 = (state_36123[(8)]);
var inst_36103__$1 = (state_36123[(2)]);
var inst_36104 = (inst_36103__$1 == null);
var inst_36105 = cljs.core.not.call(null,inst_36104);
var state_36123__$1 = (function (){var statearr_36128 = state_36123;
(statearr_36128[(8)] = inst_36103__$1);

return statearr_36128;
})();
if(inst_36105){
var statearr_36129_36149 = state_36123__$1;
(statearr_36129_36149[(1)] = (5));

} else {
var statearr_36130_36150 = state_36123__$1;
(statearr_36130_36150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (6))){
var state_36123__$1 = state_36123;
var statearr_36131_36151 = state_36123__$1;
(statearr_36131_36151[(2)] = null);

(statearr_36131_36151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (3))){
var inst_36120 = (state_36123[(2)]);
var inst_36121 = cljs.core.async.close_BANG_.call(null,out);
var state_36123__$1 = (function (){var statearr_36132 = state_36123;
(statearr_36132[(9)] = inst_36120);

return statearr_36132;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36123__$1,inst_36121);
} else {
if((state_val_36124 === (2))){
var state_36123__$1 = state_36123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36123__$1,(4),ch);
} else {
if((state_val_36124 === (11))){
var inst_36103 = (state_36123[(8)]);
var inst_36112 = (state_36123[(2)]);
var inst_36100 = inst_36103;
var state_36123__$1 = (function (){var statearr_36133 = state_36123;
(statearr_36133[(10)] = inst_36112);

(statearr_36133[(7)] = inst_36100);

return statearr_36133;
})();
var statearr_36134_36152 = state_36123__$1;
(statearr_36134_36152[(2)] = null);

(statearr_36134_36152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (9))){
var inst_36103 = (state_36123[(8)]);
var state_36123__$1 = state_36123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36123__$1,(11),out,inst_36103);
} else {
if((state_val_36124 === (5))){
var inst_36103 = (state_36123[(8)]);
var inst_36100 = (state_36123[(7)]);
var inst_36107 = cljs.core._EQ_.call(null,inst_36103,inst_36100);
var state_36123__$1 = state_36123;
if(inst_36107){
var statearr_36136_36153 = state_36123__$1;
(statearr_36136_36153[(1)] = (8));

} else {
var statearr_36137_36154 = state_36123__$1;
(statearr_36137_36154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (10))){
var inst_36115 = (state_36123[(2)]);
var state_36123__$1 = state_36123;
var statearr_36138_36155 = state_36123__$1;
(statearr_36138_36155[(2)] = inst_36115);

(statearr_36138_36155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (8))){
var inst_36100 = (state_36123[(7)]);
var tmp36135 = inst_36100;
var inst_36100__$1 = tmp36135;
var state_36123__$1 = (function (){var statearr_36139 = state_36123;
(statearr_36139[(7)] = inst_36100__$1);

return statearr_36139;
})();
var statearr_36140_36156 = state_36123__$1;
(statearr_36140_36156[(2)] = null);

(statearr_36140_36156[(1)] = (2));


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
});})(c__34424__auto___36146,out))
;
return ((function (switch__34336__auto__,c__34424__auto___36146,out){
return (function() {
var cljs$core$async$state_machine__34337__auto__ = null;
var cljs$core$async$state_machine__34337__auto____0 = (function (){
var statearr_36141 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36141[(0)] = cljs$core$async$state_machine__34337__auto__);

(statearr_36141[(1)] = (1));

return statearr_36141;
});
var cljs$core$async$state_machine__34337__auto____1 = (function (state_36123){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_36123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e36142){if((e36142 instanceof Object)){
var ex__34340__auto__ = e36142;
var statearr_36143_36157 = state_36123;
(statearr_36143_36157[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36158 = state_36123;
state_36123 = G__36158;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$state_machine__34337__auto__ = function(state_36123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34337__auto____1.call(this,state_36123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34337__auto____0;
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34337__auto____1;
return cljs$core$async$state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___36146,out))
})();
var state__34426__auto__ = (function (){var statearr_36144 = f__34425__auto__.call(null);
(statearr_36144[(6)] = c__34424__auto___36146);

return statearr_36144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___36146,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36160 = arguments.length;
switch (G__36160) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34424__auto___36226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___36226,out){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___36226,out){
return (function (state_36198){
var state_val_36199 = (state_36198[(1)]);
if((state_val_36199 === (7))){
var inst_36194 = (state_36198[(2)]);
var state_36198__$1 = state_36198;
var statearr_36200_36227 = state_36198__$1;
(statearr_36200_36227[(2)] = inst_36194);

(statearr_36200_36227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (1))){
var inst_36161 = (new Array(n));
var inst_36162 = inst_36161;
var inst_36163 = (0);
var state_36198__$1 = (function (){var statearr_36201 = state_36198;
(statearr_36201[(7)] = inst_36162);

(statearr_36201[(8)] = inst_36163);

return statearr_36201;
})();
var statearr_36202_36228 = state_36198__$1;
(statearr_36202_36228[(2)] = null);

(statearr_36202_36228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (4))){
var inst_36166 = (state_36198[(9)]);
var inst_36166__$1 = (state_36198[(2)]);
var inst_36167 = (inst_36166__$1 == null);
var inst_36168 = cljs.core.not.call(null,inst_36167);
var state_36198__$1 = (function (){var statearr_36203 = state_36198;
(statearr_36203[(9)] = inst_36166__$1);

return statearr_36203;
})();
if(inst_36168){
var statearr_36204_36229 = state_36198__$1;
(statearr_36204_36229[(1)] = (5));

} else {
var statearr_36205_36230 = state_36198__$1;
(statearr_36205_36230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (15))){
var inst_36188 = (state_36198[(2)]);
var state_36198__$1 = state_36198;
var statearr_36206_36231 = state_36198__$1;
(statearr_36206_36231[(2)] = inst_36188);

(statearr_36206_36231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (13))){
var state_36198__$1 = state_36198;
var statearr_36207_36232 = state_36198__$1;
(statearr_36207_36232[(2)] = null);

(statearr_36207_36232[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (6))){
var inst_36163 = (state_36198[(8)]);
var inst_36184 = (inst_36163 > (0));
var state_36198__$1 = state_36198;
if(cljs.core.truth_(inst_36184)){
var statearr_36208_36233 = state_36198__$1;
(statearr_36208_36233[(1)] = (12));

} else {
var statearr_36209_36234 = state_36198__$1;
(statearr_36209_36234[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (3))){
var inst_36196 = (state_36198[(2)]);
var state_36198__$1 = state_36198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36198__$1,inst_36196);
} else {
if((state_val_36199 === (12))){
var inst_36162 = (state_36198[(7)]);
var inst_36186 = cljs.core.vec.call(null,inst_36162);
var state_36198__$1 = state_36198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36198__$1,(15),out,inst_36186);
} else {
if((state_val_36199 === (2))){
var state_36198__$1 = state_36198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36198__$1,(4),ch);
} else {
if((state_val_36199 === (11))){
var inst_36178 = (state_36198[(2)]);
var inst_36179 = (new Array(n));
var inst_36162 = inst_36179;
var inst_36163 = (0);
var state_36198__$1 = (function (){var statearr_36210 = state_36198;
(statearr_36210[(7)] = inst_36162);

(statearr_36210[(8)] = inst_36163);

(statearr_36210[(10)] = inst_36178);

return statearr_36210;
})();
var statearr_36211_36235 = state_36198__$1;
(statearr_36211_36235[(2)] = null);

(statearr_36211_36235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (9))){
var inst_36162 = (state_36198[(7)]);
var inst_36176 = cljs.core.vec.call(null,inst_36162);
var state_36198__$1 = state_36198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36198__$1,(11),out,inst_36176);
} else {
if((state_val_36199 === (5))){
var inst_36166 = (state_36198[(9)]);
var inst_36162 = (state_36198[(7)]);
var inst_36171 = (state_36198[(11)]);
var inst_36163 = (state_36198[(8)]);
var inst_36170 = (inst_36162[inst_36163] = inst_36166);
var inst_36171__$1 = (inst_36163 + (1));
var inst_36172 = (inst_36171__$1 < n);
var state_36198__$1 = (function (){var statearr_36212 = state_36198;
(statearr_36212[(11)] = inst_36171__$1);

(statearr_36212[(12)] = inst_36170);

return statearr_36212;
})();
if(cljs.core.truth_(inst_36172)){
var statearr_36213_36236 = state_36198__$1;
(statearr_36213_36236[(1)] = (8));

} else {
var statearr_36214_36237 = state_36198__$1;
(statearr_36214_36237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (14))){
var inst_36191 = (state_36198[(2)]);
var inst_36192 = cljs.core.async.close_BANG_.call(null,out);
var state_36198__$1 = (function (){var statearr_36216 = state_36198;
(statearr_36216[(13)] = inst_36191);

return statearr_36216;
})();
var statearr_36217_36238 = state_36198__$1;
(statearr_36217_36238[(2)] = inst_36192);

(statearr_36217_36238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (10))){
var inst_36182 = (state_36198[(2)]);
var state_36198__$1 = state_36198;
var statearr_36218_36239 = state_36198__$1;
(statearr_36218_36239[(2)] = inst_36182);

(statearr_36218_36239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (8))){
var inst_36162 = (state_36198[(7)]);
var inst_36171 = (state_36198[(11)]);
var tmp36215 = inst_36162;
var inst_36162__$1 = tmp36215;
var inst_36163 = inst_36171;
var state_36198__$1 = (function (){var statearr_36219 = state_36198;
(statearr_36219[(7)] = inst_36162__$1);

(statearr_36219[(8)] = inst_36163);

return statearr_36219;
})();
var statearr_36220_36240 = state_36198__$1;
(statearr_36220_36240[(2)] = null);

(statearr_36220_36240[(1)] = (2));


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
});})(c__34424__auto___36226,out))
;
return ((function (switch__34336__auto__,c__34424__auto___36226,out){
return (function() {
var cljs$core$async$state_machine__34337__auto__ = null;
var cljs$core$async$state_machine__34337__auto____0 = (function (){
var statearr_36221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36221[(0)] = cljs$core$async$state_machine__34337__auto__);

(statearr_36221[(1)] = (1));

return statearr_36221;
});
var cljs$core$async$state_machine__34337__auto____1 = (function (state_36198){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_36198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e36222){if((e36222 instanceof Object)){
var ex__34340__auto__ = e36222;
var statearr_36223_36241 = state_36198;
(statearr_36223_36241[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36242 = state_36198;
state_36198 = G__36242;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$state_machine__34337__auto__ = function(state_36198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34337__auto____1.call(this,state_36198);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34337__auto____0;
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34337__auto____1;
return cljs$core$async$state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___36226,out))
})();
var state__34426__auto__ = (function (){var statearr_36224 = f__34425__auto__.call(null);
(statearr_36224[(6)] = c__34424__auto___36226);

return statearr_36224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___36226,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36244 = arguments.length;
switch (G__36244) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34424__auto___36314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34424__auto___36314,out){
return (function (){
var f__34425__auto__ = (function (){var switch__34336__auto__ = ((function (c__34424__auto___36314,out){
return (function (state_36286){
var state_val_36287 = (state_36286[(1)]);
if((state_val_36287 === (7))){
var inst_36282 = (state_36286[(2)]);
var state_36286__$1 = state_36286;
var statearr_36288_36315 = state_36286__$1;
(statearr_36288_36315[(2)] = inst_36282);

(statearr_36288_36315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (1))){
var inst_36245 = [];
var inst_36246 = inst_36245;
var inst_36247 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36286__$1 = (function (){var statearr_36289 = state_36286;
(statearr_36289[(7)] = inst_36247);

(statearr_36289[(8)] = inst_36246);

return statearr_36289;
})();
var statearr_36290_36316 = state_36286__$1;
(statearr_36290_36316[(2)] = null);

(statearr_36290_36316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (4))){
var inst_36250 = (state_36286[(9)]);
var inst_36250__$1 = (state_36286[(2)]);
var inst_36251 = (inst_36250__$1 == null);
var inst_36252 = cljs.core.not.call(null,inst_36251);
var state_36286__$1 = (function (){var statearr_36291 = state_36286;
(statearr_36291[(9)] = inst_36250__$1);

return statearr_36291;
})();
if(inst_36252){
var statearr_36292_36317 = state_36286__$1;
(statearr_36292_36317[(1)] = (5));

} else {
var statearr_36293_36318 = state_36286__$1;
(statearr_36293_36318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (15))){
var inst_36276 = (state_36286[(2)]);
var state_36286__$1 = state_36286;
var statearr_36294_36319 = state_36286__$1;
(statearr_36294_36319[(2)] = inst_36276);

(statearr_36294_36319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (13))){
var state_36286__$1 = state_36286;
var statearr_36295_36320 = state_36286__$1;
(statearr_36295_36320[(2)] = null);

(statearr_36295_36320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (6))){
var inst_36246 = (state_36286[(8)]);
var inst_36271 = inst_36246.length;
var inst_36272 = (inst_36271 > (0));
var state_36286__$1 = state_36286;
if(cljs.core.truth_(inst_36272)){
var statearr_36296_36321 = state_36286__$1;
(statearr_36296_36321[(1)] = (12));

} else {
var statearr_36297_36322 = state_36286__$1;
(statearr_36297_36322[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (3))){
var inst_36284 = (state_36286[(2)]);
var state_36286__$1 = state_36286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36286__$1,inst_36284);
} else {
if((state_val_36287 === (12))){
var inst_36246 = (state_36286[(8)]);
var inst_36274 = cljs.core.vec.call(null,inst_36246);
var state_36286__$1 = state_36286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36286__$1,(15),out,inst_36274);
} else {
if((state_val_36287 === (2))){
var state_36286__$1 = state_36286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36286__$1,(4),ch);
} else {
if((state_val_36287 === (11))){
var inst_36254 = (state_36286[(10)]);
var inst_36250 = (state_36286[(9)]);
var inst_36264 = (state_36286[(2)]);
var inst_36265 = [];
var inst_36266 = inst_36265.push(inst_36250);
var inst_36246 = inst_36265;
var inst_36247 = inst_36254;
var state_36286__$1 = (function (){var statearr_36298 = state_36286;
(statearr_36298[(7)] = inst_36247);

(statearr_36298[(11)] = inst_36266);

(statearr_36298[(12)] = inst_36264);

(statearr_36298[(8)] = inst_36246);

return statearr_36298;
})();
var statearr_36299_36323 = state_36286__$1;
(statearr_36299_36323[(2)] = null);

(statearr_36299_36323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (9))){
var inst_36246 = (state_36286[(8)]);
var inst_36262 = cljs.core.vec.call(null,inst_36246);
var state_36286__$1 = state_36286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36286__$1,(11),out,inst_36262);
} else {
if((state_val_36287 === (5))){
var inst_36254 = (state_36286[(10)]);
var inst_36247 = (state_36286[(7)]);
var inst_36250 = (state_36286[(9)]);
var inst_36254__$1 = f.call(null,inst_36250);
var inst_36255 = cljs.core._EQ_.call(null,inst_36254__$1,inst_36247);
var inst_36256 = cljs.core.keyword_identical_QMARK_.call(null,inst_36247,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36257 = (inst_36255) || (inst_36256);
var state_36286__$1 = (function (){var statearr_36300 = state_36286;
(statearr_36300[(10)] = inst_36254__$1);

return statearr_36300;
})();
if(cljs.core.truth_(inst_36257)){
var statearr_36301_36324 = state_36286__$1;
(statearr_36301_36324[(1)] = (8));

} else {
var statearr_36302_36325 = state_36286__$1;
(statearr_36302_36325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (14))){
var inst_36279 = (state_36286[(2)]);
var inst_36280 = cljs.core.async.close_BANG_.call(null,out);
var state_36286__$1 = (function (){var statearr_36304 = state_36286;
(statearr_36304[(13)] = inst_36279);

return statearr_36304;
})();
var statearr_36305_36326 = state_36286__$1;
(statearr_36305_36326[(2)] = inst_36280);

(statearr_36305_36326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (10))){
var inst_36269 = (state_36286[(2)]);
var state_36286__$1 = state_36286;
var statearr_36306_36327 = state_36286__$1;
(statearr_36306_36327[(2)] = inst_36269);

(statearr_36306_36327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (8))){
var inst_36254 = (state_36286[(10)]);
var inst_36246 = (state_36286[(8)]);
var inst_36250 = (state_36286[(9)]);
var inst_36259 = inst_36246.push(inst_36250);
var tmp36303 = inst_36246;
var inst_36246__$1 = tmp36303;
var inst_36247 = inst_36254;
var state_36286__$1 = (function (){var statearr_36307 = state_36286;
(statearr_36307[(7)] = inst_36247);

(statearr_36307[(8)] = inst_36246__$1);

(statearr_36307[(14)] = inst_36259);

return statearr_36307;
})();
var statearr_36308_36328 = state_36286__$1;
(statearr_36308_36328[(2)] = null);

(statearr_36308_36328[(1)] = (2));


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
});})(c__34424__auto___36314,out))
;
return ((function (switch__34336__auto__,c__34424__auto___36314,out){
return (function() {
var cljs$core$async$state_machine__34337__auto__ = null;
var cljs$core$async$state_machine__34337__auto____0 = (function (){
var statearr_36309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36309[(0)] = cljs$core$async$state_machine__34337__auto__);

(statearr_36309[(1)] = (1));

return statearr_36309;
});
var cljs$core$async$state_machine__34337__auto____1 = (function (state_36286){
while(true){
var ret_value__34338__auto__ = (function (){try{while(true){
var result__34339__auto__ = switch__34336__auto__.call(null,state_36286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34339__auto__;
}
break;
}
}catch (e36310){if((e36310 instanceof Object)){
var ex__34340__auto__ = e36310;
var statearr_36311_36329 = state_36286;
(statearr_36311_36329[(5)] = ex__34340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36330 = state_36286;
state_36286 = G__36330;
continue;
} else {
return ret_value__34338__auto__;
}
break;
}
});
cljs$core$async$state_machine__34337__auto__ = function(state_36286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34337__auto____1.call(this,state_36286);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34337__auto____0;
cljs$core$async$state_machine__34337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34337__auto____1;
return cljs$core$async$state_machine__34337__auto__;
})()
;})(switch__34336__auto__,c__34424__auto___36314,out))
})();
var state__34426__auto__ = (function (){var statearr_36312 = f__34425__auto__.call(null);
(statearr_36312[(6)] = c__34424__auto___36314);

return statearr_36312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34426__auto__);
});})(c__34424__auto___36314,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1512059526431
