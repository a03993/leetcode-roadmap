# 203 Remove Linked List Elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

**Example:**

```
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
```

```
Input: head = [], val = 1
Output: []
```

```
Input: head = [7,7,7,7], val = 7
Output: []
```

**Constraints:**

- The number of nodes in the list is in the range `[0, 10⁴]`.
- `1 <= Node.val <= 50`
- `0 <= val <= 50`

## Approach

| Topics                 | Category         | Key Idea                   | Time Complexity | Space Complexity |
| ---------------------- | ---------------- | -------------------------- | --------------- | ---------------- |
| Linked List, Recursion | In-place Removal | Two Pointers (Prev & Curr) | O(n)            | O(1)             |

- Initialization:
    - `dummy`: A new node pointing to `head` to simplify deletion.

- Pointers:
    - `prev`: Points to the node before the current node, used to update `next` pointers for deletion.
    - `curr`: Points to the current node being checked for deletion.

- Loop Condition: While `curr` is exist.

- Steps:
    1. Store `curr.next` in a temporary variable `temp` to preserve the next node.
    2. If `curr.val == val`, remove `curr` by setting `prev.next = temp`; otherwise, move `prev` to `curr`.
    3. Move `curr` to `temp`.

## Notes

- The original head node may have `val`, so use a dummy node to ensure consistent deletion logic.
- Move `prev` only when `curr` is not removed, because `prev` should not advanced if a node is deleted.
