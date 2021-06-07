/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
  let n = arr.length

  if (n == 0) {
    return 0
  }
  let dp = new Array(n).fill(1)
  let map = new Map()

  let res = 1
  map.set(arr[0], 0)
  for (let i = 1; i < n; i++) {
    if (map.has(arr[i] - difference)) {
      dp[i] = dp[map.get(arr[i] - difference)] + 1
    }
    res = Math.max(res, dp[i])
    map.set(arr[i], i)
  }

  return res
}

// console.log(longestSubsequence([1, 2, 3, 4], 1))
// console.log(longestSubsequence([1, 3, 5, 7], 1))
console.log(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2))
