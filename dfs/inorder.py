# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        
        def dfs(root, res):
            if root is not None:
                if root.left is not None:
                    dfs(root.left, res)
                res.append(root.val)
                if root.right is not None:
                    dfs(root.right, res)
        res = []
        dfs(root, res)
        return res