function longestSubKDistinctChars(s, k) {
  let start = 0
  let maxLength = 0
  let freq = {}
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (freq.hasOwnProperty(char)) {
      freq[char]++
    } else {
      freq[char] = 1
    }
    console.log(freq)
    while (Object.keys(freq).length > k) {
      let char2 = s[start]
      freq[char2] -= 1
      if (freq[char2] == 0) {
        delete freq[char2]
      }
      start += 1
    }
    maxLength = Math.max(maxLength, i - start + 1)
  }
  return maxLength
}

console.log(longestSubKDistinctChars("araaci", 2))
