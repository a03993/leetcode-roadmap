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

| Technique      | Method    | Time Complexity | Space Complexity |
| -------------- | --------- | --------------- | ---------------- |
| Three Pointers | Traversal | O(n)            | O(1)             |

### Three Pointers

- `prev`: points to the previous node, initially `null`.
- `curr`: points to the current node, initially `head`.
- `temp`: temporarily variable to store the next node(`curr.next`).

### Traversal

- Condition: While `curr` is exist.
- Step:
  1. Store `curr.next` in `temp` to not lose track of the next node.
  2. Point `curr.next` to `prev` to reverse the link.
  3. Move `prev` to `curr` to advance the previous pointer.
  4. Move `curr` to `temp` to process the next node.

## Notes

- Always store `curr.next` in `temp` before updating `curr.next`.
- Update pointers carefully to reverse the current node.
