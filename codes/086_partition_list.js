/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let lessDummy = new ListNode(0);
    let greaterDummy = new ListNode(0);

    let less = lessDummy;
    let greater = greaterDummy;

    let curr = head;

    while (curr) {
        if (curr.val < x) {
            less.next = curr;
            less = less.next;
        } else {
            greater.next = curr;
            greater = greater.next;
        }

        curr = curr.next;
    }

    // 避免形成循環
    greater.next = null;

    less.next = greaterDummy.next;

    return lessDummy.next;
};
