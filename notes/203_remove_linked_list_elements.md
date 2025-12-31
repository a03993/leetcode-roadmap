# 203 Remove Linked List Elements

![Easy](https://img.shields.io/badge/Easy-1cb8b8)

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

**Note:**

| Topic        | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Two Pointers | O(n)            | O(1)             |

用 dummy node + two pointers 遍歷，遇到目標值就刪掉，最後返回新的 head。
