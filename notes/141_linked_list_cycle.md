# 141 Linked List Cycle

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter.**

Return `true` _if there is a cycle in the linked list._ Otherwise, return `false`.

**Example:**

```java
Input: head = [3,2,0,-4], pos = 1
Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

```java
Input: head = [1,2], pos = 0
Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

```java
Input: head = [1], pos = -1
Output: false
// Explanation: There is no cycle in the linked list.
```

**Constraints:**

- The number of the nodes in the list is in the range `[0, 10⁴]`.
- `-10⁵ <= Node.val <= 10⁵`
- `pos` is `-1` or a **valid index** in the linked-list.

**Follow up:** Can you solve it using `O(1)` (i.e. constant) memory?

**Note:**

| Algorithm    | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Hash Set     | O(n)            | O(n)             |
| Two Pointers | O(n)            | O(1) ✅          |

1. Hash Set

    用 Hash Table 擦湊表，從 linked list 的 head 開始遍歷，每次檢查當前的 node `curr` 是否已經在 `passedNode` 集合中。如果已存在，代表 linked list 是一個循環，回傳 true；如果不存在，就把 `curr` 加入 `passedNode`，繼續往下遍歷。遍歷完代表 linked list 不是循環，回傳 false。

    ```js
    let curr = head;
    const passedNode = new Set();

    while (curr) {
        if (passedNode.has(curr)) {
            return true;
        }

        passedNode.add(curr);
        curr = curr.next;
    }

    return false;
    ```

2. Two Pointers

    用快慢指針 `slow` 和 `fast` 從 linked list 的 head 開始。慢指針每次走一步，快指針每次走兩步；如果 linked list 是一個循環，快指針一定會追上慢指針，則回傳 true；如果快指針走到鏈表尾部 (null)，代表沒有巡環，回傳 false。這個方法不需要額外空間，空間複雜度是 O(1)，是判斷 linked list cycle 的最優解。

    Solution: 👉 [code](../codes/141_linked_list_cycle.js)

    ![Demo](https://img.shields.io/badge/Demo-head_=_[1,_2],_pos_=_0-white?style=flat-square)

    ```
    slow → [1] → [2] → [1]
    fast → [1] → [1] → [1]
                        ↑
                      cycle
    ```
