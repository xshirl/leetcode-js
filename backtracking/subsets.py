# class Solution:
    # def subsets(self, nums: List[int]) -> List[List[int]]:
    #     def backtrack(first = 0, curr = []):
    #         if len(curr) == k:
    #             output.append(curr[:])
    #             return
    #         for i in range(first, n):
    #             curr.append(nums[i])
    #             backtrack(i+1, curr)
    #             curr.pop()
    #     output = []
    #     n = len(nums)
    #     for k in range(n+1):
    #         backtrack()
    #     return output


  
# Complete the function below.

def generate_all_subsets2(s):
    arr = list(s)
    def backtrack(first = 0, curr = []):
        if len(curr) == k:
            string = "".join(curr)
            output.append(string)
            return
        for i in range(first, n):
            curr.append(arr[i])
            backtrack(i+1, curr)
            curr.pop()
    output = []
    n = len(arr)
    for k in range(n+1):
        backtrack()
    return output

print(generate_all_subsets2("abc"))