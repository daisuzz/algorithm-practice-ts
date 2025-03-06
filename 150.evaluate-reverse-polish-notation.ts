/*
 * @lc app=leetcode id=150 lang=typescript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
    const stack: number[] = []
    for(let token of tokens) {
        if(token === '+'){
            const a = stack.pop() || 0
            const b = stack.pop() || 0
            stack.push(a + b)
        } else if(token === '-'){
            const a = stack.pop() || 0
            const b = stack.pop() || 0
            stack.push(b - a)
        } else if(token === '*'){
            const a = stack.pop() || 0
            const b = stack.pop() || 0
            stack.push(a * b)
        } else if(token === '/'){
            const a = stack.pop() || 0
            const b = stack.pop() || 0
            stack.push(Math.trunc(b / a))
        } else {
            stack.push(parseInt(token))
        }
    }
    return stack[0]
};
// @lc code=end

