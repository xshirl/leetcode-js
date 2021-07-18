/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  let arr = s.split("")
  arr.sort()
  let i = 0
  let j = arr.length - 1

  while (i <= j) {
    if (arr[i] != arr[j]) {
      ;[arr[i + 1], arr[j]] = [arr[j], arr[i + 1]]
      i += 1
    } else {
      j -= 1
    }
  }
  return arr.join("")
}
