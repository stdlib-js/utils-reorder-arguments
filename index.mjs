// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function s(s,n,o){if(!r(s))throw new TypeError(e("1XP3c,J9",s));if(!t(n))throw new TypeError(e("1XPBo,OO",n));return function(){var r,t,i;if((t=arguments.length)!==n.length)throw new Error(e("1XPBp,OP",n.length,t));for(r=[],i=0;i<t;i++)r.push(arguments[n[i]]);return s.apply(o,r)}}export{s as default};
//# sourceMappingURL=index.mjs.map
