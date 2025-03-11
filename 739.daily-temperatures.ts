/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[] = [];
    const arr: number[] = new Array(temperatures.length).fill(0);
    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const index: number | undefined = stack.pop();
            if (index === undefined) continue;
            arr[index] = i - index;
        }
        stack.push(i);
    }   
    return arr
};
// @lc code=end

