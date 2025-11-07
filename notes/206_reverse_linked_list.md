# 206 Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

**Example:**

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

**Constraints:**

- The number of nodes in the list is in the range `[0, 5000]`.
- `-5000 <= Node.val <= 5000`

## Approach

| Topics                 | Category          | Key Idea       | Time Complexity | Space Complexity |
| ---------------------- | ----------------- | -------------- | --------------- | ---------------- |
| Linked List, Recursion | In-place Reversal | Three Pointers | O(n)            | O(1)             |

- Pointers:
    - `prev`: Points to the previous node, initially `null`.
    - `curr`: Points to the current node being reversed.
    - `temp`: Temporarily stores the next node to maintain the list connection.

- Loop Condition: While `curr` is exist.

- Steps:
    1. Store `curr.next` in `temp` to not lose track of the next node.
    2. Point `curr.next` to `prev` to reverse the link.
    3. Move `prev` to `curr` to advance the previous pointer.
    4. Move `curr` to `temp` to process the next node.

## Notes

- At the end of the loop, `prev` will be the new head of the reversed list.
