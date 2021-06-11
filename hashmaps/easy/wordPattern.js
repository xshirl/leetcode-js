/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  function encode(s) {
    let hashmap = {}
    let res = []
    for (let i = 0; i < s.length; i++) {
      if (!hashmap.hasOwnProperty(s[i])) {
        hashmap[s[i]] = i
      }
      res.push(hashmap[s[i]])
    }
    return res
  }

  let patternArr = pattern.split("")
  let sArr = s.split(" ")
  return encode(patternArr).join("") == encode(sArr).join("")
}

//https://leetcode.com/problems/word-pattern
