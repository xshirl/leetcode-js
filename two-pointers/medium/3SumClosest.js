var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let minSum = Math.exp(10, 4)
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (Math.abs(target - sum) < Math.abs(minSum)) {
        minSum = target - sum
      }
      if (sum < target) {
        j += 1
      } else {
        k -= 1
      }
    }
    if (minSum == 0) {
      break
    }
  }
  return target - minSum
}

//https://leetcode.com/problems/3sum-closest
