/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let i = 0
  let j = 1
  nums.sort((a, b) => a - b)
  while (j < nums.length) {
    if (nums[i] == nums[j]) {
      return nums[i]
    }
    i += 1
    j += 1
  }
}
