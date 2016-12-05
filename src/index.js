/**
 * 函数式编程下的数组去重
 */

function reduce (fn) {
  return function (...args) {
    return args.reduce(fn.bind(this))
  }
}

function unique (arr1, arr2) {
  if (!(Array.isArray(arr1) && Array.isArray(arr2))) {
    throw new Error('参数必须都是数组')
  }
  return Array.from(new Set(arr1.concat(arr2)))
}

// console.log(unique([1, 2, 3], [3, 4, 5], [4, 5, 6]))

module.exports = reduce(unique)
