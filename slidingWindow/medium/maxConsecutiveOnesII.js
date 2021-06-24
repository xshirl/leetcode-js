/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxOnes = 0;
    let maxLen = 0;
    let start = 0;
    for(let i =0; i < nums.length; i++) {
        if(nums[i] == 1) {
            maxOnes++
        }
        if(i-start + 1 - maxOnes > 1) {
            if(nums[start] == 1){
                maxOnes-=1
            }
            start++
        }
        maxLen = Math.max(maxLen, i - start + 1)
    }
    return maxLen
};

