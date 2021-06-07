/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let res = []
  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        res.push(j - i)
        break
      }
      if (j == temperatures.length - 1) {
        res.push(0)
      }
    }
  }
  if (res.length < temperatures.length) {
    res.push(0)
  }
  return res
}
