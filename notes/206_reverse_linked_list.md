# 206 Reverse Linked List

![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given the head of a singly linked list, reverse the list, and return the reversed list.

**Example:**

```java
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

**Constraints:**

- The number of nodes in the list is in the range `[0, 5000]`.
- `-5000 <= Node.val <= 5000`

**Note:**

| Topic        | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Two Pointers | O(n)            | O(1)             |

用 two pointers 逐步反轉 linked list 的指向，最後 prev 就是反轉後的頭節點。
