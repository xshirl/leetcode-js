/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n == 1) {
    return true
  } else if (n < 1) {
    return false
  }
  return pow(n)
}

function pow(n) {
  if (n == 4) {
    return true
  } else if (n < 4) {
    return false
  }
  return n % 4 == 0 && pow(n / 4)
}
