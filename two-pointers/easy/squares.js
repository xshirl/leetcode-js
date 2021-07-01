/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0
  let right = nums.length - 1
  let index = nums.length - 1
  let result = Array(nums.length).fill(0)
  while (left <= right) {
    let leftSquare = nums[left] * nums[left]
    let rightSquare = nums[right] * nums[right]
    if (leftSquare > rightSquare) {
      result[index] = leftSquare
      left++
    } else {
      result[index] = rightSquare
      right--
    }
    index--
  }
  return result
}
