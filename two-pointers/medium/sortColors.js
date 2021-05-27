/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let i = 0
  let j = 0
  let k = nums.length - 1
  while (i <= k) {
    if (nums[i] == 0) {
      let temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
      i += 1
      j += 1
    } else if (nums[i] == 1) {
      i += 1
    } else {
      let temp = nums[i]
      nums[i] = nums[k]
      nums[k] = temp
      k -= 1
    }
  }
}

//https://leetcode.com/problems/sort-colors
