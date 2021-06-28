/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b)
  let sum = 0
  let start = 0
  let maxLen = 0
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
    if (sum + k >= nums[i] * (i - start + 1)) {
      maxLen = Math.max(maxLen, i - start + 1)
    } else {
      sum = sum - nums[start]
      start++
    }
  }
  return maxLen
}

// https://leetcode.com/problems/frequency-of-the-most-frequent-element/