'use strict';!function(require,directRequire){const a=function a(b){if(this instanceof a)return a(...arguments);let c,d;const e=()=>{requestIdleCallback((a)=>{return 16>=a.timeRemaining()?void e():void b.call(null,c,d)})};return e(),new Promise((a,b)=>{c=a,d=b})};['race','all','resolve','reject'].forEach((b)=>{a[b]=Promise[b].bind(Promise)}),module.exports=a}(require('lazyload'),require);