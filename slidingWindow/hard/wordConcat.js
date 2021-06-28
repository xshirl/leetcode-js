/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (words.length == 0 || words[0].length == 0) {
    return []
  }

  let wordFreq = {}
  words.forEach((word) => {
    wordFreq[word] ? wordFreq[word]++ : (wordFreq[word] = 1)
  })

  let result = []
  let wordCount = words.length
  let wordLength = words[0].length
  for (let i = 0; i < s.length - wordCount * wordLength + 1; i++) {
    let wordsSeen = {}
    for (let j = 0; j < wordCount; j++) {
      let nextWordIndex = i + j * wordLength
      let word = s.substring(nextWordIndex, nextWordIndex + wordLength)
      if (!word in wordFreq) {
        break
      }
      wordsSeen[word] ? wordsSeen[word]++ : (wordsSeen[word] = 1)

      if (wordsSeen[word] > (wordFreq[word] || 0)) {
        break
      }
      if (j + 1 == wordCount) {
        result.push(i)
      }
    }
  }
  return result
}

//https://leetcode.com/problems/substring-with-concatenation-of-all-words