# 160 Intersection of Two Linked Lists

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

**Example:**

```
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
```

```
Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'
```

**Constraints:**

- The number of nodes of `listA` is in the `m`.
- The number of nodes of `listB` is in the `n`.
- `1 <= m, n <= 3 * 10⁴`
- `1 <= Node.val <= 10⁵`
- `0 <= skipA <= m`
- `0 <= skipB <= n`
- `intersectVal` is 0 if `listA` and `listB` do not intersect.
- `intersectVal == listA[skipA] == listB[skipB]` if `listA` and `listB` intersect.

## Approach

| Topics                                | Category           | Key Idea     | Time Complexity | Space Complexity |
| ------------------------------------- | ------------------ | ------------ | --------------- | ---------------- |
| Hash Table, Linked List, Two Pointers | In-place Traversal | Two Pointers | O(m+n)          | O(1)             |

- Pointers:
    - `pA`: Traverses list A and then switches to list B.
    - `pB`: Traverses list B and then switches to list A.

- Loop Condition: While `pA` is not same with `pB`.
- Steps:
    1. Move `pA` to the next node, or switch to `headB` if `null`.
    2. Move `pB` to the next node, or switch to `headA` if `null`.
    3. Return `pA` or `pB` – the intersection node, or `null` if no intersection exists.

## Notes

- Do **not** compare node values; compare the **node objects themselves**(`pA == pB`).
- Works for lists of different lengths without explicitly calculating their lengths.
- If lists do not intersect, the loop will terminate when both pointers reach `null`.
