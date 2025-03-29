/*
 * @lc app=leetcode id=226 lang=typescript
 *
 * [226] Invert Binary Tree
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

function invertTree(root: TreeNode | null): TreeNode | null {

    // 再帰を使った解法
    // return dfs(root)

    // 幅優先探索を使った解法
    return bfs(root)
};

function dfs(root: TreeNode | null): TreeNode | null {
    if(root === null) return null;

    // 左右の子ノードを再帰的に反転
    const left = dfs(root.left);
    const right = dfs(root.right);

    // 左右の子ノードを交換
    root.left = right
    root.right = left

    return root
}

function bfs(root: TreeNode | null): TreeNode | null {
    if(root === null) return null;

    const queue: TreeNode[] = [root];

    while(queue.length > 0) {
        const node = queue.shift() as TreeNode;

        // 左右の子ノードを交換
        [node.left, node.right] = [node.right, node.left]

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }

    return root
}
// @lc code=end

