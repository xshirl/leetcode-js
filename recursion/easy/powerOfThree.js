/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n == 1) {
    return true
  }
  return pow(n)
}

function pow(n) {
  if (n == 3) {
    return true
  } else if (n < 3) {
    return false
  }

  return n % 3 == 0 && pow(n / 3)
}
