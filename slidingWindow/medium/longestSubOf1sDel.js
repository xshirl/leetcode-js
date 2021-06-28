/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let zeroIndex = -1
  let start = 0
  let maxLen = 0
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (num == 0) {
      start = zeroIndex + 1
      zeroIndex = i
    }
    maxLen = Math.max(maxLen, i - start)
  }
  return maxLen
}

// faster than 100%
// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element
