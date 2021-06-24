/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
     let hashmap = {}
  for (let char of p) {
    hashmap[char] ? hashmap[char]++ : hashmap[char] = 1;
  }
    let res = []
  let start = 0;
  let matched = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char in hashmap) {
      hashmap[char]--;
      if (hashmap[char] == 0) {
        matched++
      }
    }
    if (matched == Object.keys(hashmap).length) {
      res.push(start)
    }

    // shrink sliding window

    if (i >= p.length - 1) {
      let leftChar = s[start];
      start++;
      if (leftChar in hashmap) {
        if (hashmap[leftChar] == 0) {
          matched--
        }
        hashmap[leftChar]++
      }
    }
  }
return res
};