// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/submissions/

var findSpecialInteger = function (arr) {
  let hashmap = {};
  let res = arr[0];
  for (let num of arr) {
    if (num in hashmap) {
      hashmap[num] += 1;
    } else {
      hashmap[num] = 1;
    }
  }
  let max = 0;
  let maxNum = 0;
  for (let key in hashmap) {
    if (hashmap[key] > max) {
      max = hashmap[key];
      maxNum = parseInt(key);
    }
  }

  return maxNum;
};

// use two pointer/sliding window too
