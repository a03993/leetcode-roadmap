# 21 Merge Two Sorted Lists

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return _the head of the merged linked list_.

**Example:**

```java
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

```java
Input: list1 = [], list2 = []
Output: []
```

```java
Input: list1 = [], list2 = [0]
Output: [0]
```

**Constraints:**

- The number of the nodes in the list is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in **non-decreasing** order.

**Note:**

| Algorithm                 | Time Complexity | Space Complexity |
| ------------------------- | --------------- | ---------------- |
| Linked List, Two Pointers | O(n + m)        | O(1)             |

用一個 dummyHead 作為新 linked list 的起點，`curr` 作為其指標，用 `n1`、`n2` 兩個指標分別指向 `list1`、`list2`，在兩個 list 都還沒走完時，比較 `n1.val` 與 `n2.val`，較小的 node 接到 `curr.next` 且該指標和 `curr` 往後移，當其中一條 list 走完後，若有剩下的 linked list 就把那一條接上，最後回傳 `dummyHead.next`。
