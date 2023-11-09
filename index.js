// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).reorderArguments=e()}(this,(function(){"use strict";var r=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(o):i(o)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),r.alternate&&(t=g.call(t,b,"$1."),t=g.call(t,y,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var S=String.fromCharCode,T=isNaN,x=Array.isArray;function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,a,c,l,s,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if(f(n=r[s]))c+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,T(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),c+=n.arg||"",l+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function F(r){var e,t,n;if(!V(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var N,C=Object.prototype,$=C.toString,B=C.__defineGetter__,R=C.__defineSetter__,G=C.__lookupGetter__,L=C.__lookupSetter__;N=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var X=N;function M(r,e,t){X(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(r){return"boolean"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return U&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"";var D=W()?function(r){var e,t,n,i,o;if(null==r)return Y.call(r);t=r[q],o=q,e=null!=(i=r)&&z.call(i,o);try{r[q]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[q]=t:delete r[q],n}:function(r){return Y.call(r)},H=Boolean,K=Boolean.prototype.toString;var Q=W();function rr(r){return"object"==typeof r&&(r instanceof H||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function er(r){return Z(r)||rr(r)}function tr(){return new Function("return this;")()}M(er,"isPrimitive",Z),M(er,"isObject",rr);var nr="object"==typeof self?self:null,ir="object"==typeof window?window:null,or="object"==typeof global?global:null,ar="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!Z(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return tr()}if(ar)return ar;if(nr)return nr;if(ir)return ir;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),ur=cr.document&&cr.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;M(lr,"REGEXP",sr);var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};function gr(r){return null!==r&&"object"==typeof r}function dr(r){var e,t,n,i;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=sr.exec(n.toString()))return e[1]}return gr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(gr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(gr));var hr="function"==typeof r||"object"==typeof fr||"function"==typeof ur?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?dr(r).toLowerCase():e};function br(r){return"number"==typeof r}var yr=Number,vr=yr.prototype.toString;var wr=W();function mr(r){return"object"==typeof r&&(r instanceof yr||(wr?function(r){try{return vr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function jr(r){return br(r)||mr(r)}M(jr,"isPrimitive",br),M(jr,"isObject",mr);var Er=Number.POSITIVE_INFINITY,_r=yr.NEGATIVE_INFINITY,Sr=Math.floor;function Tr(r){return Sr(r)===r}function xr(r){return r<Er&&r>_r&&Tr(r)}function Or(r){return br(r)&&xr(r)}function kr(r){return mr(r)&&xr(r.valueOf())}function Ir(r){return Or(r)||kr(r)}function Ar(r){return Or(r)&&r>=0}function Pr(r){return kr(r)&&r.valueOf()>=0}function Vr(r){return Ar(r)||Pr(r)}M(Ir,"isPrimitive",Or),M(Ir,"isObject",kr),M(Vr,"isPrimitive",Ar),M(Vr,"isObject",Pr);function Fr(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&Tr(r.length)&&r.length>=0&&r.length<=4294967295}(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}var Nr=Fr(Vr.isPrimitive),Cr=Fr(Vr.isObject),$r=Fr(Vr);function Br(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}return M($r,"primitives",Nr),M($r,"objects",Cr),function(r,e,t){if("function"!==hr(r))throw new TypeError(Br("1XP3c,J9",r));if(!$r(e))throw new TypeError(Br("1XPBo,OO",e));return function(){var n,i,o;if((i=arguments.length)!==e.length)throw new Error(Br("1XPBp,OP",e.length,i));for(n=[],o=0;o<i;o++)n.push(arguments[e[o]]);return r.apply(t,n)}}}));
//# sourceMappingURL=index.js.map
