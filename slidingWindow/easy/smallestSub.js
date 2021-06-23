function smallestSub(arr, sum) {
  let minLength = Infinity
  let start = 0
  let subSum = 0
  for (let end = 0; end < arr.length; end++) {
    subSum += arr[end]
    while (subSum >= sum) {
      minLength = Math.min(minLength, end - start + 1)
      subSum -= arr[start]
      start += 1
    }
  }
  if (minLength == Infinity) {
    return 0
  }
  return minLength
}

console.log(smallestSub([3, 4, 1, 1, 6], 8))
