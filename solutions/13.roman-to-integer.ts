/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    const map: { [key: string]: number } = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
        'IV':4,
        'IX':9,
        'XL':40,
        'XC':90,
        'CD':400,
        'CM':900
    }
    
    let sum = 0;
    for (let i = 0; i< s.length;){
        const index = s[i] + (s[i+1] || '');
        const word = map[index] ? index: s[i];
        sum += map[word];
        i+=word.length;
    }
    return sum;
};
// @lc code=end

