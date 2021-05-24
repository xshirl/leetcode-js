var strStr = function (haystack, needle) {
  let needleLen = needle.length;
  if (needleLen == 0) {
    return 0;
  }
  let i = 0;
  while (i < haystack.length) {
    if (haystack.slice(i, i + needleLen) == needle) {
      return i;
    }
    i += 1;
  }
  return -1;
};

// https://leetcode.com/problems/implement-strstr/

