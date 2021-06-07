/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashmap = {}
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if (diff in hashmap) {
      return [i, hashmap[diff]]
    }
    hashmap[nums[i]] = i
  }
}
