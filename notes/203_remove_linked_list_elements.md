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

| Technique    | Method    | Time Complexity | Space Complexity |
| ------------ | --------- | --------------- | ---------------- |
| Two Pointers | Traversal | O(n)            | O(1)             |

### Initialization

- `dummy`: a new node pointing to `head` to simplify deletion, especially if the head node needs to be removed.

### Two Pointers

- `prev`: pointing to the previous node, initially `dummy`.
- `curr`: pointing to the current node, initially `head`.

### Traversal Steps

- Condition: While `curr` is exist.
- Step:
    1. Store `curr.next` in a temporary variable `temp` to preserve the next node.
    2. If `curr.val == val`, remove `curr` by setting `prev.next = temp`; otherwise, move `prev` to `curr`.
    3. Move `curr` to `temp`.

## Notes

- The original head node may have `val`, so use a dummy node to ensure consistent deletion logic.
- Move `prev` only when `curr` is not removed, because `prev` should not advanced if a node is deleted.
