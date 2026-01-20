/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) {
        return head;
    }

    let len = 1;
    let dummy = head;

    while (dummy.next) {
        len++;
        dummy = dummy.next;
    }

    k = k % len;

    if (k === 0) {
        return head;
    }

    let curr = head;

    for (let i = 0; i < len - k - 1; i++) {
        curr = curr.next;
    }

    const newHead = curr.next;
    curr.next = null;
    dummy.next = head;

    return newHead;
};
