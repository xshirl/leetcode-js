var twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  let res = [];
  while (i < j) {
    if (numbers[i] + numbers[j] == target) {
      res.push(i + 1);
      res.push(j + 1);
      break;
    } else if (numbers[i] + numbers[j] < target) {
      i += 1;
    } else if (numbers[i] + numbers[j] > target) {
      j -= 1;
    }
  }
  return res;
};

//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
