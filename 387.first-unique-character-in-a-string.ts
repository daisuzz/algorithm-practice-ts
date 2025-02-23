/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
function firstUniqChar(s: string): number {
    const map = new Map<string, number>()
    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i])! + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    for(let i = 0; i < s.length; i++) {
        if(map.get(s[i]) === 1) {
            return i
        }
    }
    return -1
};
// @lc code=end

