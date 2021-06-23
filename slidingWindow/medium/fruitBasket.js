/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function (tree) {
  let start = 0
  let maxLength = 0
  let freq = {}
  for (let i = 0; i < tree.length; i++) {
    if (tree[i] in freq) {
      freq[tree[i]]++
    } else {
      freq[tree[i]] = 1
    }
    while (Object.keys(freq).length > 2) {
      let char2 = tree[start]
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

// https://leetcode.com/problems/fruit-into-baskets/submissions/