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

| Topic        | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Two Pointers | O(n + m)        | O(1)             |

用 two pointers 各自走在兩條已排序的 linked list 上，每次把比較小的節點接到 `curr` 後面。用 `dummy head` 讓串接過程更乾淨、不用特別處理第一個節點。等其中一條走完，直接把剩下的那條接上即可。
