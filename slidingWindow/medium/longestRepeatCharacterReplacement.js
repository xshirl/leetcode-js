/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let left = 0; //left end of sliding window
    let right = 0; // right end of sliding window
    let maxRepeatCount = 0; // maximum repeating letter in any window
    let hashmap = {} //freq of char
    while (right < s.length) { // extend right end
        let char = s[right]
        hashmap[char] ? hashmap[char]++: hashmap[char] = 1; //create freq map
        maxRepeatCount = Math.max(maxRepeatCount, hashmap[char]) 
        if(right-left+1 - maxRepeatCount > k) { // if more than k remaining letters in window, shrink window because cannot replace more than k letterse
            let leftChar = s[left]
            hashmap[leftChar]--
            left++
        }
        right++
    }
    return right-left
};

//https://leetcode.com/problems/longest-repeating-character-replacement