function insertionSort2(arr, n = arr.length) {
  if (n <= 1) {
    return
  }
  insertionSort2(arr, n - 1)
  let j = n - 1
  while (j >= 1 && arr[j - 1] > arr[j]) {
    ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
    j--
  }

  return arr
}
console.log(insertionSort2([2, 4, 1, 6, 2, 3]))

function insertionSort(arr, n = arr.length) {
  if (n <= 1) {
    return
  }
  insertionSort(arr, n - 1)
  let last = arr[n - 1] // last element of arr
  let j = n - 2 // second to last position
  while (j >= 0 && arr[j] > last) {
    // if element in array is greater than last element, move element to right. iterate right to left
    arr[j + 1] = arr[j]
    j--
  }
  arr[j + 1] = last // arr[j] < last, so arr[j+1] = last
  return arr
}

console.log(insertionSort([2, 4, 1, 6, 2, 3]))


// iterative, bottom up insertion sort 
function insertionSort3(arr) {
  let n = arr.length
  if (n <= 1) {
    return
  }
  for (let i = 1; i < n; i++) {// iterate starting from 2nd element to right
    let first = arr[i]
    let j = i-1 // previous element to ith element
    while (j >= 0 && arr[j] > first) {
      // if left element is greater than right element, set right element equal to left 
      arr[j + 1] = arr[j]
      j-- 
    }
    arr[j + 1] = first // arr[j] < first, so arr[j+1] = first
  }
  return arr
}

console.log(insertionSort3([2, 4, 1, 6, 2, 3]))
