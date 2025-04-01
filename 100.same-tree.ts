/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const pStack: (number | null)[] = [];
    const qStack: (number | null)[] = [];

    function dfs(t: TreeNode | null, stack: (number | null)[]): (number | null)[] {
        if (!t) {
            stack.push(null);
            return stack;
        }
        stack.push(t.val);
        dfs(t.left, stack);
        dfs(t.right, stack);
        return stack;
    }
    dfs(p, pStack);
    dfs(q, qStack);
    if (pStack.length !== qStack.length) return false;
    for (let i = 0; i < pStack.length; i++) {
        if (pStack[i] !== qStack[i]) return false;
    }
    return true;
};

// @lc code=end

