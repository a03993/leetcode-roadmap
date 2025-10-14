# 203 Remove Linked List Elements

## Problem Description

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

Describe the algorithm, technique, and complexity.

**Algorithm:** Traversal
**Technique:** Two Pointers

- Initialize a **dummy node** pointing to the head of the list.

- Initialize two pointers:
  1. `prev`: pointing to dummy
  2. `curr`: pointing to head

- Traverse the list:
  1. Store `curr.next` in a temporary variable `temp`.
  2. If `curr.val == val`, set `prev.next = temp` to remove `curr`; otherwise, move `prev` to `curr`.
  3. Move `curr` to `temp`.

**Time Complexity:** O(n)
**Space Complexity:** O(1)

## Implementation Notes

- The original head node may have `val`, so use a dummy node to ensure consistent deletion logic.
- Move `prev` only when `curr` is not removed, because `prev` should not advanced if a node is deleted.
