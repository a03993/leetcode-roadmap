# 19 Remove Nth Node From End of List

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given the `head` of a linked list, remove the `nᵗʰ` node from the end of the list and return its head.

**Example:**

```java
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

```java
Input: head = [1], n = 1
Output: []
```

```java
Input: head = [1,2], n = 1
Output: [1]
```

**Constraints:**

- The number of nodes in the list is `sz`.
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

**Follow up:** Could you do this in one pass?

**Note:**

| Algorithm    | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Reverse      | O(n)            | O(1)             |
| Two Pointers | O(n) ✅         | O(1)             |

1. Reverse

    先定義一個 `reverse` 函式 (參考[206](../codes/206_reverse_linked_list.js)) 把 `head` 反轉，這樣原本**倒數第 n 個 node** 就變成**第 n 個 node**；接著用 `dummy` 指向 `head`，`curr` 指向 `dummy`，讓 `curr` 走 `n - 1` 步到**要刪除的 node 的前一個位置**，把 `curr.next` 指向 `curr.next.next`，就完成刪除；`dummy.next` 是反轉後的 head，最後把它反轉回來後回傳。

    ```js
    var removeNthFromEnd = function (head, n) {
        function reverse(head) {
            let prev = null;
            let curr = head;

            while (curr) {
                const temp = curr.next;

                curr.next = prev;
                prev = curr;
                curr = temp;
            }

            return prev;
        }

        head = reverse(head);

        let dummy = new ListNode(0, head);
        let curr = dummy;

        for (let i = 0; i < n - 1; i++) {
            curr = curr.next;
        }

        curr.next = curr.next.next;

        head = reverse(dummy.next);

        return head;
    };
    ```

2. Two Pointers

    用快慢指針，先建立一個 `dummy` 指向 `head`，並讓 `fast` 和 `slow` 都從 `dummy` 開始。先讓 `fast` 走 `n` 步，這樣 `fast` 和 `slow` 之間就隔了 `n` 個節點；接著同時移動 `fast` 和 `slow`，直到 `fast.next` 為 null，此時 `slow` 正好在**倒數第 n 個節點的前一個位置**；把 `slow.next` 指向 `slow.next.next`，就完成刪除。最後回傳 `dummy.next`。

    Solution: 👉 [code](../codes/019_remove_nth_node_from_end_of_list.js)

    ![Demo](https://img.shields.io/badge/Demo-head_=_[1,_2,_3,_4,_5],_n_=_2-white?style=flat-square)
    - 先讓 `fast` 走 `n` 步

        ```
        [dummy] → [1] → [2] → [3] → [4] → [5]
        ↑             ↑
        slow          fast
        ```

    - 移動 `fast` 和 `slow`，直到 `fast.next` 為 null

        | step | fast | slow    |
        | ---- | ---- | ------- |
        | init | [2]  | [dummy] |
        | 1    | [3]  | [1]     |
        | 2    | [4]  | [2]     |
        | 3    | [5]  | [3]     |

    - `slow` 正好在倒數第 n 個節點的前一個位置

        ```
        [dummy] → [1] → [2] → [3] → [4] → [5]
                               ↑           ↑
                              slow        fast
        ```

    - 把 `slow.next` 指向 `slow.next.next`，就完成刪除

**Two Pointers v.s. Reverse:**

Reverse 需反轉整個 linked list 兩次，Two Pointers 一次遍歷即可，即使時間複雜度同樣為 O(n)，Two Pointers 實務上通常效能更佳。
