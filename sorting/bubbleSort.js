function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length-1; j > i; j--) {
      if (arr[j-1] > arr[j]) {
        [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
      }
    }
  }
  return arr
}
console.log(bubbleSort([2, 4, 1, 6, 2, 3]))
