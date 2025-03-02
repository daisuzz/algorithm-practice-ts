/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    let leastClosed = 0
    let stack = []
    for(const c of s){
        if(c === '(' || c === '[' || c === '{'){
            stack.push(c)
            leastClosed++
            continue
        }
        if(c === ')'){
            if(stack.pop() !== '(') return false
        }
        if(c === ']'){
            if(stack.pop() !== '[') return false
        }
        if(c === '}'){
            if(stack.pop() !== '{') return false
        }
        leastClosed--
    }
    return leastClosed === 0
};
// @lc code=end

