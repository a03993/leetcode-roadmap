# 92 Reverse Linked List II

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return the _reversed list_.

**Example:**

```
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
```

```
Input: head = [5], left = 1, right = 1
Output: [5]
```

**Constraints:**

- The number of nodes in the list is `n`.
- `1 <= n <= 500`
- `-500 <= Node.val <= 500`
- `1 <= left <= right <= n`

**Follow up:** Could you do it in one pass?

## Approach

| Topics      | Category          | Key Idea                                                | Time Complexity | Space Complexity |
| ----------- | ----------------- | ------------------------------------------------------- | --------------- | ---------------- |
| Linked List | In-place Reversal | Using dummy node and prev/curr pointers reverse sublist | O(n)            | O(1)             |

- Initialization:
    - `dummy`: a new `ListNode(0, head)` to simplify building the resulting list.
    - `leftPrev`: points to the node **before the left node**.
    - `leftNode`: points to the node at position `left`.

- Pointers:
    - `prev`: Points to the previous node in the reversal, initially `null`.
    - `curr`: Points to the current node being reversed.
    - `temp`: Temporarily stores the next node to maintain the list connection.

- Loop Condition: from `left` to `right`.

- Steps:
    1. Store `curr.next` in `temp` to not lose track of the next node.
    2. Point `curr.next` to `prev` to reverse the link.
    3. Move `prev` to `curr` to advance the previous pointer.
    4. Move `curr` to `temp` to process the next node.

- After the loop:
    1. Connects `leftPrev.next` to the new head of the reversed segment.
    2. Connects `leftNode.next` to the node after the reversed segment.

## Notes

- `left` and `right` mean the node **position**, not value.
- If `left` same with `right`, no reversal is needed.
- Use a **dummy node** to handle cases when `left = 1`.
