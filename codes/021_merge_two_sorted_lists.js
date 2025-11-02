/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const dummyHead = new ListNode(0);
    let curr = dummyHead;
    let p1 = list1;
    let p2 = list2;

    while (p1 && p2) {
        if (p1.val >= p2.val) {
            curr.next = p2;
            p2 = p2.next;
        } else {
            curr.next = p1;
            p1 = p1.next;
        }
        curr = curr.next;
    }

    if (p1) {
        curr.next = p1;
    }

    if (p2) {
        curr.next = p2;
    }

    return dummyHead.next;
};