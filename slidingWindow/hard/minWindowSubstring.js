var minWindow = function (s, t) {
  let hashmap = {}
  for (let char of t) {
    hashmap[char] ? hashmap[char]++ : (hashmap[char] = 1)
  }
  let start = 0
  let subStart = 0
  let minLen = s.length + 1
  let matched = 0
  for (let i = 0; i < s.length; i++) {
    let rightChar = s[i]
    if (rightChar in hashmap) {
      hashmap[rightChar]--
      if (hashmap[rightChar] >= 0) {
        matched++
      }
    }

    while (matched == t.length) {
      if (minLen > i - start + 1) {
        minLen = i - start + 1
        subStart = start
      }

      let leftChar = s[start]
      start++
      if (leftChar in hashmap) {
        if (hashmap[leftChar] == 0) {
          matched--
        }
        hashmap[leftChar]++
      }
    }
  }
  if (minLen > s.length) {
    return ""
  }
  return s.substring(subStart, subStart + minLen)
}

// https://leetcode.com/problems/minimum-window-substring
