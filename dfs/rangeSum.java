/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    int rangeSum = 0;
    public int rangeSumBST(TreeNode root, int low, int high) {
        dfs(root, low, high);
        return rangeSum;
    }
    public void dfs(TreeNode root, int low, int high) {
        if(root != null) {
            if(low <= root.val && root.val <= high) {
                rangeSum += root.val;
            }
            if(low < root.val) {
                dfs(root.left,low, high);
            }
            if( root.val < high) {
                dfs(root.right,low, high);
            }
        }
    }
}