# 92 Reverse Linked List II

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return the _reversed list_.

**Example:**

```java
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
```

```java
Input: head = [5], left = 1, right = 1
Output: [5]
```

**Constraints:**

- The number of nodes in the list is `n`.
- `1 <= n <= 500`
- `-500 <= Node.val <= 500`
- `1 <= left <= right <= n`

**Follow up:** Could you do it in one pass?

**Note:**

| Algorithm                 | Time Complexity | Space Complexity |
| ------------------------- | --------------- | ---------------- |
| Linked List, Two Pointers | O(n)            | O(1)             |

用一個 dummy node 指向 `head`，`reversePrev` 作為其指標，遍歷 `left - 1` 次找到*反轉區間的**前一個** node*；從 `reversePrev.next` 開始，用三個指標 `curr`、`prev`、`temp` 反轉 `right - left + 1` 個 node，最後 `prev` 就是反轉區間；先將區間內最後一個 node 連接到區間之後的 node `curr`，再將將反轉區間的前一個 node 指向 `prev`；最後回傳 `dummy.next`。

![Demo](https://img.shields.io/badge/Demo-head_=_[1,_2,_3,_4,_5],_left_=_2,_right_=_4-white?style=flat-square)

1. 用一個 dummy node 指向 `head`，`reversePrev` 作為其指標，遍歷 `left - 1` 次找到*反轉區間的**前一個** node*:

    ```
    [0] → [1] → [2] → [3] → [4] → [5]
           ↑
       reversePrev
    ```

2. 從 `reversePrev.next` 開始，用三個指標 `curr`、`prev`、`temp` 反轉 `right - left + 1` 個 node，最後 `prev` 就是反轉區間: (反轉 linked list 可參考[code](../codes/206_reverse_linked_list.js))

    ```
    [0] → [1] → [2] → [3] → [4] → [5]
                 ↑
                curr
    ```

    | i    | prev      | curr         |
    | ---- | --------- | ------------ |
    | init | null      | [2, 3, 4, 5] |
    | 0    | [2]       | [3, 4, 5]    |
    | 1    | [3, 2]    | [4, 5]       |
    | 2    | [4, 3, 2] | [5]          |

3. 先將區間內最後一個 node 連接到區間之後的 node `curr`，再將將反轉區間的前一個 node 指向 `prev`:

    prev = [4, 3, 2]
    curr = [5]

    | step                           | dummy              |
    | ------------------------------ | ------------------ |
    | init                           | [0, 1, 2, 3, 4, 5] |
    | `reversePrev.next.next = curr` | [0, 1, 2, 5]       |
    | `reversePrev.next = prev`      | [0, 1, 4, 3, 2, 5] |

    ⚠️ 要注意順序不能返過來：

    | i                              | dummy              |
    | ------------------------------ | ------------------ |
    | init                           | [0, 1, 2, 3, 4, 5] |
    | `reversePrev.next = prev`      | [0, 1, 4, 3, 2]    |
    | `reversePrev.next.next = curr` | [0, 1, 4, 3, 5] ❌ |
