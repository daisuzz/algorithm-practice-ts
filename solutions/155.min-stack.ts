/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
    private stack: {val: number, min: number}[];
    private length: number;
    constructor() {
        this.stack = [];
        this.length = 0;
    }

    push(val: number): void {
        this.stack[this.length] = {val, min: this.length === 0 ? val : Math.min(this.stack[this.length - 1].min, val)};
        this.length++;
    }

    pop(): void {
        this.length--;
    }

    top(): number {
        return this.stack[this.length - 1].val
    }

    getMin(): number {
        return this.stack[this.length - 1].min
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

