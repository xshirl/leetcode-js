# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: TreeNode, targetSum: int) -> List[List[int]]:
        allPaths = []
        

        def pathSumDfs(currentNode, required_sum, currentPath, allPaths):
            if currentNode is None:
                return

                # add the current node to the path
            currentPath.append(currentNode.val)

            # if the current node is a leaf and its value is equal to required_sum, save the current path
            if currentNode.val == required_sum and currentNode.left is None and currentNode.right is None:
                allPaths.append(list(currentPath))
            else:
            # traverse the left sub-tree
                pathSumDfs(currentNode.left, required_sum -
                                 currentNode.val, currentPath, allPaths)
            # traverse the right sub-tree
                pathSumDfs(currentNode.right, required_sum -
                                 currentNode.val, currentPath, allPaths)

            # remove the current node from the path to backtrack,
            # we need to remove the current node while we are going up the recursive call stack.
            del currentPath[-1]
            
        pathSumDfs(root, targetSum, [], allPaths)
        return allPaths