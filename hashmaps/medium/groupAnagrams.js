/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hashmap = {}
  for (let str of strs) {
    let arr = [...str]
    arr.sort()
    if (!hashmap.hasOwnProperty(arr)) {
      hashmap[arr] = [str]
    } else {
      hashmap[arr].push(str)
    }
  }

  return Object.values(hashmap)
}
