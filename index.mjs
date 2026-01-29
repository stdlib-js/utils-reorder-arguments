// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function s(s,n,o){if(!r(s))throw new TypeError(e("1XP3c",s));if(!t(n))throw new TypeError(e("1XPBo",n));return function(){var r,t,i;if(t=arguments.length,t!==n.length)throw new Error(e("1XPBp",n.length,t));for(r=[],i=0;i<t;i++)r.push(arguments[n[i]]);return s.apply(o,r)}}export{s as default};
//# sourceMappingURL=index.mjs.map
