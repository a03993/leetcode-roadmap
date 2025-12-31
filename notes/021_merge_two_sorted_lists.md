# 21 Merge Two Sorted Lists

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

You are given the heads of two sorted linked `lists` list1 and `list2`.

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

使用 two pointers 迭代兩個 linked list，每次取比較小的節點接到 dummyHead，最後再接上剩餘節點，得到合併後的排序鏈表。
