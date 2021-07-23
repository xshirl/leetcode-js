# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        result = []
        queue = deque()
        queue.append(root)
        if root is None:
            return root
        while queue:
            size = len(queue)
            for _ in range(size):
                node = queue.popleft()
                node.left, node.right = node.right, node.left
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
                    
        return root