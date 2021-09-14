def totalWays(nums, n):
  dp = [0 for i in range(n+1)]
  dp[0] = 1
  m = len(nums)
  for i in range(1, n+1):
    for j in range(m):
      if i >= nums[j]:
        dp[i] += dp[i-nums[j]]
        print(i, j, dp[i])
  print(dp)
  return dp[n]

print(totalWays([1,3,5], 6))