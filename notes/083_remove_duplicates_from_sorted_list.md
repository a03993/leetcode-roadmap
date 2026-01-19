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

從 Node `head` 開始用一個指標 `curr` 遍歷 linked list，若 `curr.val` 和 `curr.next.val` 相同，代表出現重複節點，直接把 `curr.next` 指向 `curr.next.next`，跳過重複節點；若不同，就把 `curr` 往後移一格。一直處理到鏈表尾端，最後回傳 head。這個方法在原地修改鏈表，不使用額外空間，是移除排序鏈表重複值的標準解法。

![Demo](https://img.shields.io/badge/Demo-head_=_[1,_1,_2,_3,_3]-white?style=flat-square)

| step | curr.val | curr.next.val | head            |
| ---- | -------- | ------------- | --------------- |
| init | [1]      | [1]           | [1, 1, 2, 3, 3] |
| 1    | [1]      | [1]           | [1, 2, 3, 3]    |
| 2    | [1]      | [2]           | [1, 2, 3, 3]    |
| 3    | [2]      | [3]           | [1, 2, 3, 3]    |
| 4    | [3]      | [3]           | [1, 2, 3]       |
| 5    | [3]      | null → return | [1, 2, 3]       |
