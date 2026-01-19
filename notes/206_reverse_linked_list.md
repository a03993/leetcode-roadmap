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

用 two pointers `prev` 和 `curr` 作為指標，每一次都用 `temp` 暫存 `curr.next` 避免丟失 node，`curr.next` 指向 `prev` 將 node 反轉；移動 `prev` 和 `curr` 指標，最後 `prev` 就是反轉後的 `head`。

![Demo](https://img.shields.io/badge/Demo-head_=_[1,_2,_3,_4,_5]-white?style=flat-square)

| step | prev            | curr          |
| ---- | --------------- | ------------- |
| init | null            | [1]           |
| 1    | [1]             | [2]           |
| 2    | [2, 1]          | [3]           |
| 3    | [3, 2, 1]       | [4]           |
| 4    | [4, 3, 2, 1]    | [5]           |
| 5    | [5, 4, 3, 2, 1] | null → return |
