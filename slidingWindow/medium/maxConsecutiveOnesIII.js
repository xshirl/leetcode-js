/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let maxOnes = 0; // keep track of max ones in a window 
  let maxLen = 0; // result
  let start =0; // start of window
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] == 1) {
      maxOnes += 1
    }
    if(i - start + 1 - maxOnes > k) {
      if(nums[start] == 1) {
        maxOnes -= 1
        
      }
      start += 1
    }
    maxLen = Math.max(maxLen, i - start + 1)
  }

return maxLen
};