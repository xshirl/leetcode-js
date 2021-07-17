/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length == 0) {
    return []
  }

  intervals.sort((a, b) => a[0] - b[0])

  let i = 0
  let j = 1
  while (j < intervals.length) {
    if (intervals[i][1] >= intervals[j][0]) {
      intervals[i][0] = Math.min(intervals[i][0], intervals[j][1])
      intervals[i][1] = Math.max(intervals[i][1], intervals[j][1])
      intervals.splice(j, 1)
    } else {
      i += 1
      j += 1
    }
  }
  return intervals
}
