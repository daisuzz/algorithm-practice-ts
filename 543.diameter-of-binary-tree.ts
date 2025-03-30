/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0
    // 木の深さを計算しながら、直径を更新する
    function dfs(node: TreeNode | null): number {
        if(!node) return 0;
        // 左の深さと右の深さを計算
        const leftDepth = dfs(node.left);
        const rightDepth = dfs(node.right);
        // 直径を更新
        diameter = Math.max(diameter, leftDepth + rightDepth);
        // 現在のノードの深さを返す
        return Math.max(leftDepth, rightDepth) + 1;
    }
    dfs(root);
    return diameter;
};

// @lc code=end

