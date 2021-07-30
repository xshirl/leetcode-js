# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getLonelyNodes(self, root: TreeNode) -> List[int]:
        res = []
        
        def dfs(root):
            if root:
                dfs(root.left)
                if root.left is not None and root.right is None:
                    res.append(root.left.val)
                if root.left is None and root.right is not None:
                    res.append(root.right.val)
                dfs(root.right)
        dfs(root)
        return res