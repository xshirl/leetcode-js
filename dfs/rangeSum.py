# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        self.rangeSum = 0
        def dfs(root):
            if root:
                if low <= root.val <= high:
                    self.rangeSum += root.val
                if low < root.val:
                    dfs(root.left)
                if root.val < high:
                    dfs(root.right)
                    
        
        dfs(root)
        return self.rangeSum