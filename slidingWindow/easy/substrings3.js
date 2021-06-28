/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let start = 0
  let sum = 0
  let seen = {}
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (!(char in seen)) {
      seen[char] = 0
    }
    seen[char]++
    if (i < 2) {
      continue
    } else if (i == 2) {
      if (Object.keys(seen).length == 3) {
        sum++
      }
    } else {
      let leftChar = s[start]
      seen[leftChar]--
      if (seen[leftChar] == 0) {
        delete seen[leftChar]
      }
      if (Object.keys(seen).length == 3) {
        sum++
      }

      start++
    }
  }
  return sum
}

//https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters
