/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    const map = new Map(numbers.map((num, index) => [num, index]));

    for(let i = 0; i < numbers.length; i++) {
        if(map.has(target - numbers[i])){
            return [i+1, (map.get(target - numbers[i])||0)+1];
        }
    }
    return [];
};
// @lc code=end

