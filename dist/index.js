"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=c(function(x,s){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),v=require('@stdlib/ndarray-base-stride/dist'),i=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),g=require('@stdlib/blas-ext-base-gcusum/dist').ndarray;function m(e){var r=e[0],t=e[1],a=e[2],q=u(a)[i(a)];return g(d(r,0),q,u(r),v(r,0),i(r),u(t),v(t,0),i(t)),t}s.exports=m
});var o=n();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
