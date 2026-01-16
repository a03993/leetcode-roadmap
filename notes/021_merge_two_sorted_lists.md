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

| Algorithm    | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Two Pointers | O(n + m)        | O(1)             |

建立一個虛擬的 head node `dummyHead`，用指標 `curr` 遍歷合併後的 linked list，遍歷 `list1` 和 `list2`，每次比較當前 node 的值，把較小的 node 接到 `curr.next`，然後對應指標往後移；遍歷完其中一條 linked list 後，把另一條 linked list 剩下的 node 直接接到 `curr.next`；最後回傳 `dummyHead.next`。
