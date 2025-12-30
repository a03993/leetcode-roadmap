# 21 Merge Two Sorted Lists

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

You are given the heads of two sorted linked `lists` list1 and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return _the head of the merged linked list_.

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

| Topics                 | Category       | Key Idea                                                                 | Time Complexity | Space Complexity |
| ---------------------- | -------------- | ------------------------------------------------------------------------ | --------------- | ---------------- |
| Linked List, Recursion | In-place Merge | Use a dummy head and two pointers to merge lists, attach remaining nodes | O(n + m)        | O(1)             |

- Initialization:
    - `dummyHead`: A sentinel node (`ListNode(0)`) that serves as the anchor for the final resulting list.

- Traversal Nodes:
    - `curr`: Current node in the resulting list, initially set to `dummyHead`.
    - `p1`: Current node in the first list.
    - `p2`: Current node in the second list.

- Loop Condition: While both `p1` and `p2` exist.

- Steps:
    1. Compare `p1.val` and `p2.val` to decide which node will be assigned to `curr.next` and move that pointer forward.
    2. Move `curr` forward.
    3. After the loop, append any remaining nodes from `p1` or `p2` to `curr.next`.

## Notes

- Use a `dummyHead` as a sentinel to anchor the resulting list.
- The loop condition should be `while (p1 && p2)`, not `while (p1 || p2)`, to avoid null pointer errors. And make sure to append remaining nodes after loop (`curr.next = p1 || p2`).
