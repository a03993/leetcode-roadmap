# 83 Remove Duplicates from Sorted List

![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given the `head` of a sorted linked list, _delete all duplicates such that each element appears only once. Return the linked list **sorted** as well_.

**Example:**

```java
Input: head = [1,1,2]
Output: [1,2]
```

```java
Input: head = [1,1,2,3,3]
Output: [1,2,3]
```

**Constraints:**

- The number of nodes in the list is in the range `[0, 300]`.
- `-100 <= Node.val <= 100`
- The list is guaranteed to be **sorted** in ascending order.

**Note:**

| Algorithm   | Time Complexity | Space Complexity |
| ----------- | --------------- | ---------------- |
| Linked List | O(n)            | O(1)             |

從 `head` 開始，`curr` 作為其指標，若 `curr.val` 和 `curr.next.val` 相同，代表出現重複節點，直接把 `curr.next` 指向 `curr.next.next`，跳過重複節點；若不同，就把 `curr` 往後移一格。一直處理到 linked list 尾端，最後回傳 head。

![Demo](https://img.shields.io/badge/Demo-head_=_[1,_1,_2,_3,_3]-white?style=flat-square)

| step | curr.val | curr.next.val | head            |
| ---- | -------- | ------------- | --------------- |
| init | [1]      | [1]           | [1, 1, 2, 3, 3] |
| 1    | [1]      | [1]           | [1, 2, 3, 3]    |
| 2    | [1]      | [2]           | [1, 2, 3, 3]    |
| 3    | [2]      | [3]           | [1, 2, 3, 3]    |
| 4    | [3]      | [3]           | [1, 2, 3]       |
| 5    | [3]      | null → return | [1, 2, 3]       |
