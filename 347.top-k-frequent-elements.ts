/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    for(const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    const result = []
    for(let i = 0; i < k; i++) {
        let maxKey = 0;
        for(const [key, value] of map) {
            if(value > (map.get(maxKey) || 0)) {
                maxKey = key;
            }
        }
        map.delete(maxKey);
        result.push(maxKey)
    }
    return result
};
// @lc code=end

