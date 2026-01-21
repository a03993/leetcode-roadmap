# 86 Partition List

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given the `head` of a linked list and a value `x`, partition it such that all nodes less than `x` come before nodes greater than or equal to `x`.

You should preserve the original relative order of the nodes in each of the two partitions.

**Example:**

```java
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]
```

```java
Input: head = [2,1], x = 2
Output: [1,2]
```

**Constraints:**

- The number of nodes in the list is in the range `[0, 200]`.
- `-100 <= Node.val <= 100`
- `-200 <= x <= 200`

**Note:**

| Algorithm                 | Time Complexity | Space Complexity |
| ------------------------- | --------------- | ---------------- |
| Linked List, Two Pointers | O(n)            | O(1)             |

建立兩個 dummy node，`lessDummy` 用於存放 < x 的節點，`greaterDummy` 用於存放 >= x 的節點，設定兩個指標 `less` 和 `greater` 分別指向 dummy。

遍歷原 linked list `head`，以 `curr` 作為指標，若 `curr.val < x`，接到 `less.next` 並移動 `less`；否則接到 `greater.next` 並移動 `greater`；遍歷結束後，把 `greater.next` 設為 `null`，**避免形成循環**。

最後將兩條 linked list 連接後回傳 `lessDummy.next`。
