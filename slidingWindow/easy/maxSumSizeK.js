function maxSumSizeK(arr, k) {
  let maxSum = 0
  let sum = 0
  let start = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, sum)
      sum -= arr[start]
      start += 1
    }
  }
  return maxSum
}

console.log(maxSumSizeK([2, 1, 5, 1, 3, 2], 3))
