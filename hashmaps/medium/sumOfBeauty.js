/**
 * @param {string} s
 * @return {number}
 */

var beautySum = function (s) {
  let totalBeauty = 0

  for (let i = 0; i < s.length; i++) {
    let map = new Map()
    for (let j = i; j < s.length; j++) {
      //count frequency of letters 
      map[s[j]] ? map[s[j]]++ : (map[s[j]] = 1)
      let max = -Infinity
      let min = Infinity
      for (let key in map) {
        max = Math.max(max, map[key])
        min = Math.min(min, map[key])
      }
      if (max - min > 0) {
        totalBeauty += max - min
      }
    }
  }
  return totalBeauty
}

// https://leetcode.com/problems/sum-of-beauty-of-all-substrings
