# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import deque
class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        result = deque()
        queue = deque()
        queue.append(root)
        if root is None:
            return result
        
        while queue:
            size = len(queue)
            currentLevel = []
            for _ in range(size):
                node = queue.popleft()
                currentLevel.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            
            result.appendleft(currentLevel)
        return result