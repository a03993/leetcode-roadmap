# 206 Reverse Linked List

## Problem Description

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

Describe the algorithm, technique, and complexity.

**Algorithm:** Traversal
**Technique:** Three Pointers

- Initialize three pointers:
  1. `prev = null`: previous node
  2. `curr = head`: current node
  3. `temp = null`: to temporarily store next node

- Traverse the list:
  1. `temp = curr.next`: store `curr.next` in `temp` to not lose track of the next node.
  2. `curr.next = prev`: point `curr.next` to `prev` to reverse the link.
  3. `prev = curr`: move `prev` to `curr` to advance the previous pointer.
  4. `curr = temp`: move `curr` to `temp` to process the next node.

**Time Complexity:** O(n)
**Space Complexity:** O(1)

## Implementation Notes

- Always store `curr.next` in `temp` before updating `curr.next`.
- Updating pointers in order: `curr.next = prev` → `prev = curr` → `curr = temp`.
- `prev` at the end is the reversed list.
