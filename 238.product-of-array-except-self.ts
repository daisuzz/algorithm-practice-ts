/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(1)
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1]
    }
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i] * right
        right = right * nums[i]
    }
    return result;
};
// @lc code=end

