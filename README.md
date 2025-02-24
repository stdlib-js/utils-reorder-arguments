<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# reorderArguments

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a function that invokes a provided function with reordered arguments.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
reorderArguments = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-reorder-arguments@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var reorderArguments = require( 'path/to/vendor/umd/utils-reorder-arguments/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-reorder-arguments@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.reorderArguments;
})();
</script>
```

#### reorderArguments( fcn, indices\[, thisArg] )

Returns a `function` that invokes a provided function with reordered `arguments`.

```javascript
function foo( a, b ) {
    return [ a, b ];
}

var bar = reorderArguments( foo, [ 1, 0 ] );

var out = bar( 1, 2 );
// returns [ 2, 1 ]
```

To set the `this` context when invoking the provided function, provide a `thisArg`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
function Foo() {
    this.x = 1;
    this.y = 2;
}

Foo.prototype.scale = function scale( a, b ) {
    return [ this.x*a, this.y*b ];
};

var ctx = {
    'x': 10,
    'y': 20
};

var foo = new Foo();

var bar = reorderArguments( foo.scale, [ 1, 0 ], ctx );

var out = bar( 1, 2 );
// returns [ 20, 20 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-reorder-arguments@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function foo( a, b, c ) {
    return [ a, b, c ];
}

var bar = reorderArguments( foo, [ 2, 0, 1 ] );

var out = foo( 1, 2, 3 );
// returns [ 1, 2, 3 ]

out = bar( 1, 2, 3 );
// returns [ 3, 1, 2 ]

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-mask-arguments`][@stdlib/utils/mask-arguments]</span><span class="delimiter">: </span><span class="description">create a function that invokes a provided function according to an argument mask.</span>
-   <span class="package-name">[`@stdlib/utils-reverse-arguments`][@stdlib/utils/reverse-arguments]</span><span class="delimiter">: </span><span class="description">create a function that invokes a provided function with arguments in reverse order.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-reorder-arguments.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-reorder-arguments

[test-image]: https://github.com/stdlib-js/utils-reorder-arguments/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-reorder-arguments/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-reorder-arguments/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-reorder-arguments?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-reorder-arguments.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-reorder-arguments/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-reorder-arguments/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-reorder-arguments/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-reorder-arguments/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-reorder-arguments/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-reorder-arguments/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-reorder-arguments/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-reorder-arguments/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-reorder-arguments/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/mask-arguments]: https://github.com/stdlib-js/utils-mask-arguments/tree/umd

[@stdlib/utils/reverse-arguments]: https://github.com/stdlib-js/utils-reverse-arguments/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
