# This repo demonstrates an issue with Rollup's manualChunks feature. It will be deleted after the issue is resolved.

## Setup
```
npm i
```

## Repro
```
npm run build
```

Will produce the following error and trace:
```
[!] TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received type undefined
TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received type undefined
    at assertPath (path.js:39:11)
    at Object.relative (path.js:1173:5)
    at Chunk.finaliseDynamicImports (/Users/taylorm/src/tests/rollup/rollup-manualchunks-dynamic-import-issue/node_modules/rollup/dist/rollup.js:14208:54)
    at Chunk.render (/Users/taylorm/src/tests/rollup/rollup-manualchunks-dynamic-import-issue/node_modules/rollup/dist/rollup.js:14777:14)
    at /Users/taylorm/src/tests/rollup/rollup-manualchunks-dynamic-import-issue/node_modules/rollup/dist/rollup.js:22233:38
    at Array.map (<anonymous>)
    at /Users/taylorm/src/tests/rollup/rollup-manualchunks-dynamic-import-issue/node_modules/rollup/dist/rollup.js:22231:47
    at process._tickCallback (internal/process/next_tick.js:68:7)
    at Function.Module.runMain (internal/modules/cjs/loader.js:745:11)
    at startup (internal/bootstrap/node.js:236:19)
```

# Why?

Look at rollup.config.js:

```
manualChunks: {
  dynamic_imports: [
    'src/dynamic_used_by_a.js',
    'src/dynamic_used_by_both.js',
  ],
},
```


It seems that **if a manualChunk only contains dynamically imported modules**, it will fail with this error.

However, if you add a file that is a normal import, it works as expected:

```
manualChunks: {
  dynamic_imports: [
    'src/used_by_a.js',
    'src/dynamic_used_by_a.js',
    'src/dynamic_used_by_both.js',
  ],
},
```
