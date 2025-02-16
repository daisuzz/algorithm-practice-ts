/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map = arrayToMap(nums);
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        const diffIndex = map.get(diff);
        if (diffIndex !== undefined && diffIndex !== i) {
            return [i, diffIndex];
        }
    }
    throw new Error('No solution found');
};

function arrayToMap(nums: number[]): Map<number, number> {
    return nums.reduce((map, value, index) => {
        map.set(value, index);
        return map;
    }, new Map<number, number>());
}
// @lc code=end

