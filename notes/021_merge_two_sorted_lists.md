# 21 Merge Two Sorted Lists(Top Interview 150)

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

**Example:**

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

```
Input: list1 = [], list2 = []
Output: []
```

```
Input: list1 = [], list2 = [0]
Output: [0]
```

**Constraints:**

- The number of the nodes in the list is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in **non-decreasing** order.

## Approach

| Technique      | Method    | Time Complexity | Space Complexity |
| -------------- | --------- | --------------- | ---------------- |
| Three Pointers | Traversal | O(n)            | O(1)             |

### Initialization

- `dummyHead`: a new `ListNode(0)` to simplify building the resulting list.

### Three Pointers

- `curr`: pointing to current node, initially `dummyHead`.
- `p1`: pointing to current node in list 1, initially `list1`.
- `p2`: pointing to current node in list 2, initially `list2`.

### Traversal

- Condition: While both `p1` and `p2` exist.
- Step:
  1. Compare `p1.val` and `p2.val` to decide which node will be assigned to `curr.next` and move that pointer forward.
  2. Move `curr` forward.
  3. After the loop, append any remaining nodes from `p1` or `p2` to `curr.next`.

## Notes

- Use a `dummyHead` to simplify handling of the head node.
- The loop condition should be `while (p1 && p2)`, not `while (p1 || p2)`, to avoid null pointer errors. And make sure to append remaining nodes after loop.(`if (p1) curr.next = p1...`)
- Always use `curr.next = p1` or `curr.next = p2` to attach nodes to the merged list. Writing `curr = p1` or `curr = p2` alone does not attach the node; it **only moves `curr` to point to that node**.
