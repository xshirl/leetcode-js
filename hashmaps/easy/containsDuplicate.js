/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hashmap = {}
  for (let num of nums) {
    if (num in hashmap) {
      hashmap[num]++
    } else {
      hashmap[num] = 1
    }
  }
  for (let key in hashmap) {
    if (hashmap[key] > 1) {
      return true
    }
  }
  return false
}
