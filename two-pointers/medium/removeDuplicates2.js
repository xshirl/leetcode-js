/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0
  let j = 1
  let count = 0
  while (j < nums.length) {
    if (nums[i] == nums[j]) {
      count += 1
      if (count < 2) {
        i += 1
        nums[i] = nums[j]
      }
    } else {
      count = 0
      i += 1
      nums[i] = nums[j]
    }
    j += 1
  }
  return i + 1
}
