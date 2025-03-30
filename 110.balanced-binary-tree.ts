/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
    return dfs(root) !== -1  
};

// @returns 
function dfs(node: TreeNode | null): number {
    if(!node){
        return 0
    } 
    const leftDepth = dfs(node.left)
    const rightDepth = dfs(node.right)
    if(leftDepth === -1 || rightDepth === -1 || Math.abs(leftDepth - rightDepth) > 1){
        return -1
    }
    return Math.max(leftDepth, rightDepth) + 1
}
// @lc code=end

