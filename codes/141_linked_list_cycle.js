/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let curr = head;
    let passedNode = new Set();

    while (curr) {
        if (passedNode.has(curr)) {
            return true;
        }

        passedNode.add(curr);
        curr = curr.next;
    }

    return false;
};