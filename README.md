#reduce-array-unique

这是运用 es6 + 函数式编程书写的数组去重方法

##Install

```sh
npm install -g reduce-array-unique

// local
npm install --save reduce-array-unique
```

##Usage

```js
const unique = require('reduce-array-unique')

console.log(unique([1, 2, 3], [3, 4, 5], [4, 5, 6]))

// [ 1, 2, 3, 4, 5, 6 ]

```
