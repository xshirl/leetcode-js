var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    if (isNotAlphaNum(s[i])) {
      i += 1;
      continue;
    } else if (isNotAlphaNum(s[j])) {
      j -= 1;
      continue;
    } else if (s[i].toLowerCase() != s[j].toLowerCase()) {
      return false;
    }
    i += 1;
    j -= 1;
  }
  return true;
};

function isNotAlphaNum(char) {
  var code = char.charCodeAt();
  if (
    (code > 47 && code < 58) ||
    (code > 64 && code < 91) ||
    (code > 96 && code < 123)
  ) {
    return false;
  } else {
    return true;
  }
}

//https://leetcode.com/problems/valid-palindrome/submissions/
