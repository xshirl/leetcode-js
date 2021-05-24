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
