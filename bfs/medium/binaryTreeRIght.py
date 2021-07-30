# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import deque
class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        result = []
        queue = deque()
        if root is None:
            return result
        queue.append([root, 0])
        prev_d = -1
        while queue:
            node, d = queue.popleft()
            if node.right:
                queue.append([node.right, d+1])
            if node.left:
                queue.append([node.left, d+1])
            if d > prev_d:
                result.append(node.val)
            prev_d = d
        return result