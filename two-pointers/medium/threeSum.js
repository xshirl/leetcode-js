var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    let low = i + 1
    let high = nums.length - 1
    let target = nums[i] * -1

    while (low < high) {
      if (nums[low] + nums[high] == target) {
        let arr = [nums[i], nums[low], nums[high]]
        map.set(arr.join(","), arr)
        low += 1
        high -= 1
      } else if (nums[low] + nums[high] < target) {
        low += 1
      } else {
        high -= 1
      }
    }
  }
  return [...map.values()]
}

//https://leetcode.com/problems/3sum
