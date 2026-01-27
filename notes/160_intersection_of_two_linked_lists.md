# 160 Intersection of Two Linked Lists

![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

**Example:**

```java
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
```

```java
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

**Note:**

| Algorithm    | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Two Pointers | O(m+n)          | O(1)             |

Two pointers 交替遍歷兩個 linked list，當 pointers 相遇即為交點，若無交點則同時到尾為 null。
