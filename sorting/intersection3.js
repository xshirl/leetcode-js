/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function (arr1, arr2, arr3) {
  let set = new Set(arr1)
  for (let num of set) {
    if (!arr2.includes(num)) {
      set.delete(num)
    }
    if (!arr3.includes(num)) {
      set.delete(num)
    }
  }
  let res = []
  for (let num of set) {
    res.push(num)
  }
  return res
}
