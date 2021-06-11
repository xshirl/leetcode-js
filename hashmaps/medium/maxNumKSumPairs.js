/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let map = new Map()
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    let freq = map.get(k - nums[i])
    if (freq) {
      if (freq == 1) {
        map.delete(k - nums[i])
      } else {
        map.set(k - nums[i], freq - 1)
      }
      count++
    } else {
      map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
  }
  return count
}

//99% https://leetcode.com/problems/max-number-of-k-sum-pairs/submissions/