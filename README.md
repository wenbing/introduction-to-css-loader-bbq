Introduction to css-loader-bbq
=====

### Getting Start

```sh
npm install
```


### Build

```sh
./node_modules/.bin/webpack
```

### Test

```sh
npm test
```

### Manual

```sh
cat public/theming.bundle.js | ./node_modules/.bin/browser-run -b chrome
```


### step-1

```txt
➜  introduction-to-css-loader-bbq git:(step-1) ✗ npm test

> introduction-to-css-loader-bbq@1.0.0 test /Users/wenbingzheng/workspace/wenbing/introduction-to-css-loader-bbq
> > node test/*.js & browserify -t brfs test/*.js | tape-run
>
> TAP version 13
> # (anonymous)
> # public
> ok 1 public contents is ok
> ok 2 lib cssText is ok
>
> 1..2
> # tests 2
> # pass  2
>
> # ok
>
> TAP version 13
> # (anonymous)
> # public
> ok 1 public contents is ok
> ok 2 lib cssText is ok
>
> 1..2
> # tests 2
> # pass  2
>
> # ok
```

### step-2

```txt
ERROR in ./src/client.css
    Module build failed: Error: composition is only allowed when selector is single :local class name not in ".baz", ".baz" is weird
```

### variables

use postcss-modules-values plugin

```txt
$ node lib/variables.js
/Users/zwb/workspace/wenbing/introduction-to-css-loader-bbq/lib/demo.png.js:1
(function (exports, require, module, __filename, __dirname) { module.exports = __webpack_public_path__ + "src/demo.png";
                                                                               ^

ReferenceError: __webpack_public_path__ is not defined
    at Object.<anonymous> (/Users/zwb/workspace/wenbing/introduction-to-css-loader-bbq/lib/demo.png.js:1:80)
    at Module._compile (module.js:409:26)
    at Object.Module._extensions..js (module.js:416:10)
    at Module.load (module.js:343:32)
    at Function.Module._load (module.js:300:12)
    at Module.require (module.js:353:17)
    at require (internal/module.js:12:17)
    at Object.<anonymous> (/Users/zwb/workspace/wenbing/introduction-to-css-loader-bbq/lib/demo.css.js:7:209)
    at Module._compile (module.js:409:26)
    at Object.Module._extensions..js (module.js:416:10)
```

__webpack_public_path__ -> webpack/lib/APIPlugin

How to?



