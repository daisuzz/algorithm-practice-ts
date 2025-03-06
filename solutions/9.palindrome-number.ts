/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {

    const chars = x.toString()
    let start = 0;
    let end = chars.length - 1;
    while(start < end) {
        if(chars[start] !== chars[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
};
// @lc code=end

