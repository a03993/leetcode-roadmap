# 61 Rotate List

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given the `head` of a linked list, rotate the list to the right by `k` places.

**Example:**

```java
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
```

```java
Input: head = [0,1,2], k = 4
Output: [2,0,1]
```

**Constraints:**

- The number of nodes in the list is in the range `[0, 500]`.
- `-100 <= Node.val <= 100`
- `0 <= k <= 2 * 10⁹`

**Note:**

| Algorithm   | Time Complexity | Space Complexity |
| ----------- | --------------- | ---------------- |
| Linked List | O(n)            | O(1)             |

宣告一個 `dummy` 指向 `head` 來計算長度，再透過 `k % n` 計算有效旋轉次數 (同[189](../notes/189_rotate_array.md) 避免多餘旋轉)，最後這個 `dummy` 指向 `head` 的尾節點。

用指標 `curr` 指向 `head` 並遍歷至 `len - k - 1` 個節點，這個節點就是**新尾節點**；用 `newHead` 指向 `curr.next` 作為**新頭節點**；再把 `curr` 與 `curr.next` 斷開讓 `curr` 變成**新尾節點**；將**原尾節點** `dummy` 指向原 `head`完成旋轉。最後回傳 `newHead`。
