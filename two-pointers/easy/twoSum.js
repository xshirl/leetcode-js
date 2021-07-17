var twoSum = function (numbers, target) {
  let i = 0
  let j = numbers.length - 1
  let res = []
  while (i < j) {
    if (numbers[i] + numbers[j] == target) {
      res.push(i + 1)
      res.push(j + 1)
      break
    } else if (numbers[i] + numbers[j] < target) {
      i += 1
    } else if (numbers[i] + numbers[j] > target) {
      j -= 1
    }
  }
  return res
}

//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

function twoSum2(numbers, target) {
  let map = new Map()
  let res = []
  for (let i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i]
    if (map.has(diff)) {
      return [numbers[diff], i]
    }
    map[numbers[i]] = i
  }
  console.log(map)
}

console.log(twoSum([1, 2, 3, 4], 5))
console.log(twoSum2([1, 2, 3, 4], 5))
