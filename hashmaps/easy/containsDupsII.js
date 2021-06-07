/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let hashmap = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hashmap && Math.abs(i - hashmap[nums[i]] <= k)) {
      return true
    } else {
      hashmap[nums[i]] = i
    }
  }
  return false
}
