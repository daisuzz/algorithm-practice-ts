/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
    let set = new Set(nums);
    let max = 0
    for(let num of set){
        // 連続した数字の最初の数字の場合
        if(!set.has(num - 1)){
            let length = 0;
            while(set.has(num + length)){
                length++
            }
            max = Math.max(max, length);
        }
    }
    return max
};

// @lc code=end

