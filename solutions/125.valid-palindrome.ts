/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] != s[s.length - 1 - i]) {
            return false
        }
    }
    return true;
};
// @lc code=end

