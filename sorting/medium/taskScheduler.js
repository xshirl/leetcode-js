/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let len = tasks.length
  if (n == 0) {
    return len
  }
  map = {}
  for (let task of tasks) {
    map[task] ? map[task]++ : (map[task] = 1)
  }
  let cpu = 0
  let maxCount = Math.max.apply(null, Object.values(map))
  countsList = Object.values(map)

  let max_count_tasks = count(countsList, maxCount)
  if (max_count_tasks <= n) {
    cpu = (n + 1) * (maxCount - 1) + max_count_tasks
  }

  return Math.max(len, cpu)
}

function count(arr, val) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      count++
    }
  }
  return count
}
