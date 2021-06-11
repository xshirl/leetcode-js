/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  // let maxNum = Math.max(...arr);
  // let res = [];
  // for(let i = 1; i < (maxNum + k+1); i++) {
  //     if(!arr.includes(i)) {
  //         res.push(i)
  //     }
  // }
  // console.log(res)
  // return res[k-1]

  let hashmap = {}
  let i = 1
  for (let num of arr) {
    hashmap[num] = 1
  }
  let missing = {}
  while (k) {
    if (!(i in hashmap)) {
      missing[k] = i
      k -= 1
    }

    i += 1
  }
  return missing[1]
}

// https://leetcode.com/problems/kth-missing-positive-number
