/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function (nums, target) {
  nums.sort((a, b) => a - b)
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += search_pair(nums, target-arr[i], i)
  }

  return count;

}

function search_pair(arr, target_sum, first) {
  let count = 0;
  let left = first + 1;
  let right = arr.length - 1
  while (left < right) {
    if (arr[left] + arr[right] < target_sum) {
      count += right - left;
      left++
    } else {
      right--
    }
  }
  return count
}