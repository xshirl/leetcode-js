var moveZeroes = function (nums) {
  let i = 0
  let j = 1
  while (j < nums.length) {
    if (nums[i] != 0) {
      i += 1
    } else if (nums[i] == 0 && nums[j] != 0) {
      nums[i] = nums[j]
      nums[j] = 0
      i += 1
    }
    j += 1
  }
}
//https://leetcode.com/problems/move-zeroes
