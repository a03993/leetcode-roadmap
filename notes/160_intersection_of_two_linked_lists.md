# 160 Intersection of Two Linked Lists

## Problem Description

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

Describe the algorithm, technique, and complexity.

**Algorithm:** Traversal
**Technique:** Two Pointers

- Initialize two pointers:
  1. `pA`: pointing to headA
  2. `pB`: pointing to headB

- Traverse the list:
  1. `pA = pA ? pA.next : headB`: move `pA` to `pA.next`, if `pA` is `null`, switch it to `headB`.
  2. `pB = pB ? pB.next : headA`: move `pB` to `pB.next`, if `pB` is `null`, switch it to `headA`.
  3. Return the node `pA` and `pB` meet or `null`.

**Time Complexity:** O(m+n)
**Space Complexity:** O(1)

## Implementation Notes

- Do **not** compare node values; compare the **node objects themselves**(`===`).
- Works for lists of different lengths without explicitly calculating their lengths.
- If lists do not intersect, the loop will terminate when both pointers reach `null`.
