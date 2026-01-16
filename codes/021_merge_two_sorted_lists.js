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
    let n1 = list1;
    let n2 = list2;

    while (n1 && n2) {
        if (n1.val > n2.val) {
            curr.next = n2;
            n2 = n2.next;
        } else {
            curr.next = n1;
            n1 = n1.next;
        }

        curr = curr.next;
    }

    curr.next = n1 || n2;

    return dummyHead.next;
};
