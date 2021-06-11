/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let low = 0
  let high = nums.length - 1
  let count = 0
  nums.sort((a, b) => a - b)
  while (low < high) {
    let sum = nums[low] + nums[high]
    if (sum == k) {
      low++
      high--
      count++
    } else if (sum < k) {
      low++
    } else {
      high--
    }
  }
  return count
}

//https://leetcode.com/problems/max-number-of-k-sum-pairs