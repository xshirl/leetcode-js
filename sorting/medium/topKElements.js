/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = {}
  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1)
  }

  return Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .slice(0, k)
}
