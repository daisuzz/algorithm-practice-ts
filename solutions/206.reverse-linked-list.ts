/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    if(!head) return null;
    let stack = [];
    let current = head;
    while (current) {
        stack.push(current);
        current = current.next;
    }
    let newHead = stack.pop() || null;
    current = newHead;
    while (stack.length) {
        current.next = stack.pop();
        current = current.next;
    }
    current.next = null;
    return newHead;
};
// @lc code=end

