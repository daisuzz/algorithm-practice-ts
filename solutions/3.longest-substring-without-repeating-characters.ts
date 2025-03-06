/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    if(s.length === 0 || s.length === 1) {
        return s.length
    }
    let answer = 0;
    let mutableSet = new Set<string>();
    let left = 0;
    let right = 1;

    while(right < s.length) {
        mutableSet.add(s[left])
        if(mutableSet.has(s[right])) {
            answer = Math.max(answer, mutableSet.size)
            mutableSet.clear()
            left++
            right = left + 1
            continue
        }
        mutableSet.add(s[right])
        right++
    }
    answer = Math.max(answer, mutableSet.size)
    return answer
};
// @lc code=end

