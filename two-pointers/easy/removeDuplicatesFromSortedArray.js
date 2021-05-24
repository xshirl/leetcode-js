const removeDuplicatesFromSortedArray = function (nums) {
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[i] != nums[j]) {
      i += 1;
      j += 1;
    } else if (nums[i] == nums[j]) {
      nums.splice(j, 1);
    }
  }
  return nums;
};

//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// logic: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// if nums[i] == nums[j], remove jth element from nums. i stays same, j is now next element.
// compare new j with old i. if same, splice. if not, i += 1, j+= 1 to move through nums array
// return nums

console.log(removeDuplicatesFromSortedArray([0, 0, 1, 1, 2, 2, 2, 3, 3, 4]));
