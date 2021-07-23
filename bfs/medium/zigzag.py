# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque
class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        result = []
        if root is None:
            return result
        queue = deque()
        queue.append(root)
        leftToRight = True
        while queue:
            size = len(queue)
            currentLevel = deque()
            for _ in range(size):
                node = queue.popleft()
                if leftToRight:
                    currentLevel.append(node.val)
                else:
                    currentLevel.appendleft(node.val)

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(currentLevel)
            leftToRight = not leftToRight


        return result