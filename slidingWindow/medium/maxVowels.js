/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = ["a", "e", "i", "o", "u"]
    let maxVowels = 0;
    let count = 0;
    let start = 0;
    for(let i = 0; i < s.length; i++) {
        let letter = s[i];
        if(vowels.includes(letter)) {
            count++
        } 
        let len = i - start + 1;
        while(len > k) {
            let leftChar = s[start];
            if(vowels.includes(leftChar)) {
                count--;
            }
            start++;
            len = i - start + 1
        }
        
        maxVowels = Math.max(maxVowels, count)
    }
    return maxVowels
};



// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length