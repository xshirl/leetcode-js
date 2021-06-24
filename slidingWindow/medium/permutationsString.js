/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
      let hashmap = {}
  for (let char of s1) {
    hashmap[char] ? hashmap[char]++ : hashmap[char] = 1;
  }

  let start = 0;
  let matched = 0;
  for (let i = 0; i < s2.length; i++) {
    let char = s2[i];
    if (char in hashmap) {
      hashmap[char]--;
      if (hashmap[char] == 0) {
        matched++
      }
    }
    if (matched == Object.keys(hashmap).length) {
      return true;
    }

    // shrink sliding window

    if (i >= s1.length - 1) {
      let leftChar = s2[start];
      start++;
      if (leftChar in hashmap) {
        if (hashmap[leftChar] == 0) {
          matched--
        }
        hashmap[leftChar]++
      }
    }
  }
  return false;
};