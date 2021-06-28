function longestNiceString(s) {
  let freq = {}
  for (let char of s) {
    freq[char] ? freq[char]++ : (freq[char] = 1)
  }
  let start = 0;
  let maxLen = 0;
  let subStart = 0;

  for (let i = 0; i < s.length; i++) {
    let rightChar = s[i];
    if (rightChar in freq) {
      freq[rightChar]--;
      if (freq[rightChar.toLowerCase()] >= 0 && freq[rightChar.toUpperCase()] >= 0) {
        subStart = start;
      }
    }
  }
}

console.log(longestNiceString("aAaBb"))
