<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# gcusum

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the cumulative sum of a one-dimensional ndarray.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import gcusum from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-gcusum@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/blas-ext-base-ndarray-gcusum/tags). For example,

```javascript
import gcusum from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-gcusum@v0.1.0-deno/mod.js';
```

#### gcusum( arrays )

Computes the cumulative sum of a one-dimensional ndarray.

```javascript
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-from-scalar@deno/mod.js';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@deno/mod.js';

var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var ybuf = [ 0.0, 0.0, 0.0, 0.0 ];
var y = new ndarray( 'generic', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

var initial = scalar2ndarray( 0.0, 'generic', 'row-major' );

var v = gcusum( [ x, y, initial ] );
// returns <ndarray>

var bool = ( v === y );
// returns true

var arr = ndarray2array( v );
// returns [ 1.0, 4.0, 8.0, 10.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray, a one-dimensional output ndarray, and a zero-dimensional ndarray containing the initial sum.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty one-dimensional input ndarray, the function returns the output ndarray unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@deno/mod.js';
import zerosLike from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros-like@deno/mod.js';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import gcusum from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-gcusum@deno/mod.js';

var xbuf = discreteUniform( 10, -50, 50, {
    'dtype': 'generic'
});
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var y = zerosLike( x );
console.log( ndarray2array( y ) );

var initial = scalar2ndarray( 100.0, {
    'dtype': 'generic'
});

var v = gcusum( [ x, y, initial ] );
console.log( ndarray2array( v ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-ndarray-gcusum.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-ndarray-gcusum

[test-image]: https://github.com/stdlib-js/blas-ext-base-ndarray-gcusum/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-gcusum/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-ndarray-gcusum/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-ndarray-gcusum?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-ndarray-gcusum.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-ndarray-gcusum/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-gcusum/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-gcusum/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-gcusum/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-gcusum/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-gcusum/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-gcusum/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-gcusum/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-ndarray-gcusum/main/LICENSE

</section>

<!-- /.links -->
