/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length != t.length) {
    return false
  }

  function encode(str) {
    let hashmap = {}
    let res = []
    for (let i = 0; i < str.length; i++) {
      if (!hashmap.hasOwnProperty(str[i])) {
        hashmap[str[i]] = i
      }
      res.push(hashmap[str[i]])
    }
    return res
  }
  return encode(s).join("") == encode(t).join("")
}

//https://leetcode.com/problems/isomorphic-strings