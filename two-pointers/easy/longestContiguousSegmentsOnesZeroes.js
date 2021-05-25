var checkZeroOnes = function (s) {
  let ones = 0
  let zeroes = 0
  let left = 0
  let right = 0

  while (right < s.length) {
    if (s[left] != s[right]) {
      if (s[left] == "0") {
        zeroes = Math.max(zeroes, right - left)
      } else {
        ones = Math.max(ones, right - left)
      }
      left = right
    }
    right += 1
  }
  if (s[left] == "0") {
    zeroes = Math.max(zeroes, right - left)
  } else {
    ones = Math.max(ones, right - left)
  }
  return ones > zeroes
}

//99.2% fast! https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros
