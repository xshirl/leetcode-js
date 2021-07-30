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
    List<Integer> res = new ArrayList<Integer>();
    public List<Integer> getLonelyNodes(TreeNode root) {
        dfs(root);
        return res;
    }
    public void dfs(TreeNode root) {
        if(root != null) {
            dfs(root.left);
            if(root.left != null && root.right == null) {
                res.add(root.left.val);
            }
            if(root.left == null && root.right != null) {
                res.add(root.right.val);
            }
            dfs(root.right);
        }
    }
}