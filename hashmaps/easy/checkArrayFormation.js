/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  let map = new Map()
  let res = []
  pieces.forEach((x) => map.set(x[0], x))
  arr.forEach((x) => map.has(x) && res.push(...map.get(x)))
  return arr.every((x, i) => x == res[i])
}

//https://leetcode.com/problems/check-array-formation-through-concatenation/