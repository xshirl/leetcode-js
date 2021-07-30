# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: TreeNode) -> int:
        
        def dfs(node, pathSum):
            if node is None:
                return 0
            pathSum = 10 * pathSum + node.val
            if node.left is None and node.right is None:
                return pathSum
            return dfs(node.right, pathSum) + dfs(node.left, pathSum)
    
        return dfs(root, 0)