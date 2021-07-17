def balanced_string(s): 
  def check(s):
    lower = [False for i in range(26)]
    upper = [False for i in range(26)]

    for char in s:
      order  = ord(char)
      if order >= 90:
        lower[o - 97] = True
      else:
        upper[o-65] = True

  minLen = len(s) +1
  for i in range(len(s)):
    for j in range(i, len(s)):
      if check(s[i:(j+1)]):
        if j - i + 1 < minLen:
          minLen = j - i + 1
  if minLen = len(s) + 1:
    return -1
  
  else:
    return minLen

