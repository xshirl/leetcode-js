/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) return nums
  let pivot = nums.pop()
  let left = nums.filter((num) => num <= pivot)
  let right = nums.filter((num) => num > pivot)
  return [...sortArray(left), pivot, ...sortArray(right)]
}
