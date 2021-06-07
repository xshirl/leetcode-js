function lookSay(s) {
  let res = ""
  let i = 0
  while (i < s.length) {
    let count = 1
    while (i + 1 < s.length && s[i] == s[i + 1]) {
      count++
      i++
    }
    res += count.toString() + s[i]
    i++
  }
  return res
}

function lookSay3(s) {
  let res = ""
  for (let i = 0; i < s.length; i++) {
    let count = 1
    while (i + 1 < s.length && s[i] == s[i + 1]) {
      count++
      i++
    }
    res += count.toString() + s[i]
  }

  return res
}

console.log(lookSay3("121"))
console.log(lookSay3("2222"))
