/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    // 数字と出現回数のオブジェクトを用意
    const freq: { [key: number]: number } = {}
    // 数字ごとの出現回数をセット
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1
    }
    return Object.entries(freq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([num, _]) => parseInt(num))
};
// @lc code=end

