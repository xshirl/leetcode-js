var lengthOfLongestSubstring = function (s) {
  let hashmap = {};
  let start = 0;
  let maxCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] in hashmap && start <= hashmap[s[i]]) {
      start = hashmap[s[i]] + 1;
    }
    maxCount = Math.max(maxCount, i - start + 1);
    hashmap[s[i]] = i;
  }
  return maxCount;
};

//https://leetcode.com/problems/longest-substring-without-repeating-characters/

function longest(s) {
  let hashmap = {}
  let maxLength = 0
  let start =0
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char in hashmap) {
      start = Math.max(start, hashmap[char] + 1)
    }
    hashmap[char] = i;
    maxLength = Math.max(maxLength, i - start+ 1)
  }
  return maxLength
}