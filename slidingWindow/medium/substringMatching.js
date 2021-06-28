function findSubstring(str, pattern) {
  let start = 0
  let matched = 0
  let subStart = 0
  let minLength = str.length + 1
  let freq = {}

  for (let char of pattern) {
    freq[char] ? freq[char]++ : (freq[char] = 1)
  }

  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i]
    if (rightChar in freq) {
      freq[rightChar]--
      if (freq[rightChar] >= 0) {
        matched++
      }
    }

    while (matched == pattern.length) {
      if (minLength > i - start + 1) {
        minLength = i - start + 1
        subStart = start
      }

      let leftChar = str[start]
      start++
      if (leftChar in freq) {
        if (freq[leftChar] == 0) {
          matched -= 1
        }
        freq[leftChar]++
      }
    }
  }
  if (minLength > str.length) {
    return ""
  }

  return str.substring(subStart, subStart + minLength)
}
