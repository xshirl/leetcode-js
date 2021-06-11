/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bulls = 0;
  let cows = 0;
  let hashmap = new Map();
  let n = guess.length;

  for (let i = 0; i < n; i++) {
    hashmap[secret[i]] = 0;
  }
  for (let i = 0;i < n; i++) {
    if (guess[i] == secret[i]) {
      bulls += 1;
    } else {
      hashmap.set(secret[i], hashmap[secret[i]] + 1);
    }
  }

  for (let i = 0; i < n; i++) {
    let guessChar = guess[i];
    if (guess[i] == secret[i]) {
      continue;
    } if (hashmap.has(guessChar)) {
      cows += 1;
      let currCount = hashmap.get(guessChar);
      if (currCount == 1) {
        hashmap.delete(guessChar);
      } else {
        hashmap.set(guessChar, currCount - 1)
      }
    }
  }
  return bulls + "A" + cows + "B";
}
