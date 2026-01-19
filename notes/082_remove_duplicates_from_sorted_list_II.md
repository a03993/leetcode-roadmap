# 82 Remove Duplicates from Sorted List II

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given the `head` of a sorted linked list, _delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list **sorted** as well_.

**Example:**

```java
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
```

```java
Input: head = [1,1,1,2,3]
Output: [2,3]
```

**Constraints:**

- The number of nodes in the list is in the range `[0, 300]`.
- `-100 <= Node.val <= 100`
- The list is guaranteed to be **sorted** in ascending order.

**Note:**

| Algorithm   | Time Complexity | Space Complexity |
| ----------- | --------------- | ---------------- |
| Linked List | O(n)            | O(1)             |

用一個 dummy node 指向 `head`，`prev`、`curr` 作為指標，內層迴圈把 `curr` 往後移動直到遇到值不同的 node，跳過所有重複的 node；如果 `prev.next === curr` 代表沒有重複，`prev` 往後移；如果有重複就將 `prev.next` 指向 `curr.next`，刪掉所有重複的 node；每一次 `curr` 都往後移動直到 `curr` 為 null 返回 `dummy.next`。

![Demo](https://img.shields.io/badge/Demo-head_=_[1,_2,_3,_3,_4,_4,_5]-white?style=flat-square)

| step | curr.val      | curr.next.val | prev | dummy                    |
| ---- | ------------- | ------------- | ---- | ------------------------ |
| init | [1]           | [2]           | [0]  | [0, 1, 2, 3, 3, 4, 4, 5] |
| 1    | [1]           | [2]           | [0]  | [0, 1, 2, 3, 3, 4, 4, 5] |
| 2    | [2]           | [3]           | [1]  | [0, 1, 2, 3, 3, 4, 4, 5] |
| 3    | [3]           | [3]           | [2]  | [0, 1, 2, 4, 4, 5]       |
| 4    | [4]           | [4]           | [2]  | [0, 1, 2, 5]             |
| 5    | [5]           | null          | [2]  | [0, 1, 2, 5]             |
| 6    | null → return | null          | [2]  | [0, 1, 2, 5]             |
