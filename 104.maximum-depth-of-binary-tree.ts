/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
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

function maxDepth(root: TreeNode | null): number {
    let depth = 0
    return dfs(root, depth)
};

function dfs(node: TreeNode | null, depth: number): number {
    if (!node) return depth;
    const leftDepth = dfs(node.left, depth + 1);
    const rightDepth = dfs(node.right, depth + 1);
    return Math.max(leftDepth, rightDepth);
}
// @lc code=end

