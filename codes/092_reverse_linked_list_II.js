/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (left === right) {
        return head;
    }

    const dummy = new ListNode(0, head);
    let leftPrev = dummy;

    for (let i = 0; i < left - 1; i++) {
        leftPrev = leftPrev.next;
    }

    let curr = leftPrev.next;
    let prev = null;

    for (let i = 0; i < right - left + 1; i++) {
        const temp = curr.next;

        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    leftPrev.next.next = curr;
    leftPrev.next = prev;

    return dummy.next;
};
