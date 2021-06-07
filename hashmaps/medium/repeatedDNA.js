/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let res = []
  let hashmap = {}
  for (let i = 0; i < s.length; i++) {
    let str = s.slice(i, i + 10)
    if (str in hashmap) {
      hashmap[str]++
    } else {
      hashmap[str] = 1
    }
  }
  for (let key in hashmap) {
    if (hashmap[key] > 1) {
      res.push(key)
    }
  }
  return res
}

//https://leetcode.com/problems/repeated-dna-sequences/