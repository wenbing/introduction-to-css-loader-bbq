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
