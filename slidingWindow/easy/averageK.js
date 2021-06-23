function averageK(k, arr) {
  let res = []
  let start = 0
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (i >= k - 1) {
      res.push(sum / k)
      sum -= arr[start]
      start += 1
    }
  }
  return res
}

console.log(averageK(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]))
