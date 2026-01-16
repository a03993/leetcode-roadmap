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

| Algorithm    | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Two Pointers | O(n)            | O(1)             |

建立一個虛擬的 node `dummy` 並指向 `head`。遍歷 `left - 1` 次找到**反轉區間的前一個 node** `leftPrev`；從 `leftPrev.next` 開始，用三個指標 `curr`、`prev`、`temp` 反轉 `right - left + 1` 個 node；將區間內最後一個 node 連接到區間之後的 node `curr`，將 `leftPrev.next` 指向區間內第一個 node `prev`；最後回傳 `dummy.next`。

![Demo](https://img.shields.io/badge/Demo-head_=_[1,_2,_3,_4,_5],_left_=_2,_right_=_4-white?style=flat-square)

1. 遍歷 `left - 1` 次找到反轉區間的前一個 node `leftPrev`:

    ```
    [dummy] → [1] → [2] → [3] → [4] → [5]
               ↑
            leftPrev
    ```

2. 接著從 `leftPrev.next` 開始，用三個指標 `curr`、`prev`、`temp` 反轉 `right - left + 1` 個 node:

    | i    | prev            | curr |
    | ---- | --------------- | ---- |
    | init | null            | [2]  |
    | 0    | [2] → null      | [3]  |
    | 1    | [3] → [2]       | [4]  |
    | 2    | [4] → [3] → [2] | [5]  |

3. 將區間內最後一個 node 連接到區間之後的 node `curr`，將 `leftPrev.next` 指向區間內第一個 node `prev`:

    prev = [4] → [3] → [2]
    curr = [5]

    <!-- TODO:確認流程！！！ -->

    | step                        | linked list                           |
    | --------------------------- | ------------------------------------- |
    | init                        | [dummy] → [1] → [2] → [3] → [4] → [5] |
    | `leftPrev.next.next = curr` | [dummy] → [1] → [2] → [5]             |
    | `leftPrev.next = prev`      | [dummy] → [1] → [4] → [3] → [2] , [5] |

    ⚠️ 要注意順序不能返過來：

    | i              | linked list                                  |
    | -------------- | -------------------------------------------- |
    | init           | [dummy] → [1] → [2] ← [3] ← [4] , [5]        |
    | [1].next = [4] | [dummy] → **[1] → [4]** → [3] → [2] , [5]    |
    | [4].next = [5] | [dummy] → [1] → **[4] → [5]** , [3] → [2] ❌ |
