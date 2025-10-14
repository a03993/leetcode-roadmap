/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;
    
    while (curr) {
        const temp = curr.next;

        if (curr.val == val) {
            prev.next = temp;
        } else {
            prev = curr;
        }

        curr = temp;
    }
    
    return dummy.next;
};