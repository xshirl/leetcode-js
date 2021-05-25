var maxArea = function (height) {
  let i = 0
  let j = height.length - 1
  let maxArea = 0
  while (i < j) {
    maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i))
    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }
  return maxArea
}

// https://leetcode.com/problems/container-with-most-water
