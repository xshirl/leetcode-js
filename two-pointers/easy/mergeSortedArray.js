var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = nums1.length - 1;

  while (k >= 0) {
    if (nums2[j] >= nums1[i]) {
      nums1[k] = nums2[j];
      j -= 1;
    } else if (nums2[j] <= nums1[i]) {
      nums1[k] = nums1[i];
      i -= 1;
    } else if (typeof nums1[i] === "undefined") {
      nums1[k] = nums2[j];
      j -= 1;
    } else {
      nums1[k] = nums1[i];
      i -= 1;
    }
    k -= 1;
  }
  return nums1;
};

//https://leetcode.com/problems/merge-sorted-array
