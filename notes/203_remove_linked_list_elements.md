# 203 Remove Linked List Elements

![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

**Example:**

```java
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
```

```java
Input: head = [], val = 1
Output: []
```

```java
Input: head = [7,7,7,7], val = 7
Output: []
```

**Constraints:**

- The number of nodes in the list is in the range `[0, 10⁴]`.
- `1 <= Node.val <= 50`
- `0 <= val <= 50`

**Note:**

| Topic       | Time Complexity | Space Complexity |
| ----------- | --------------- | ---------------- |
| Linked List | O(n)            | O(1)             |

用一個 dummy node 指向 `head`，`curr` 作為其指標，檢查 `curr.next.val` 是否等於目標值 `val`，若相同就 `curr.next = curr.next.next` 跳過該 node；不同則將把 `curr` 往後走，最後回傳 `dummy.next`。
