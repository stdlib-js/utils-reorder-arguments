// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function s(s,n,i){if(!r(s))throw new TypeError(e("0lY3p",s));if(!t(n))throw new TypeError(e("0lYCe",n));return function(){var r,t,o;if((t=arguments.length)!==n.length)throw new Error(e("0lYCf",n.length,t));for(r=[],o=0;o<t;o++)r.push(arguments[n[o]]);return s.apply(i,r)}}export{s as default};
//# sourceMappingURL=index.mjs.map
