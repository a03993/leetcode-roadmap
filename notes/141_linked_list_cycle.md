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

| Topic        | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Hash Set     | O(n)            | O(n)             |
| Two Pointers | O(n)            | O(1) ✅          |

1. Hash Set

    遍歷 linked list，將訪問過的 node 加入 Set，若再次遇到已訪問 node 則存在環。

    ```
    [head] → [node1] → [node2] → [node3] → [node4]
                    ↑                       |
                    └───────── (back to node2) ← cycle
    ```

    ```js
    let curr = head;
    let passedNode = new Set();

    while (curr) {
        if (passedNode.has(curr)) return true;
        passedNode.add(curr);
        curr = curr.next;
    }

    return false;
    ```

2. Two Pointers

    用指標 fast & slow pointers 遍歷 linked list，fast pointer 走兩步、slow pointer 走一步，若相遇表示存在環，否則無環。

    ```
    slow → [head] → [node1] → [node2] → [node3] → [node4]
    fast → [head] → [node2] → [node4] → [node2] → [node4]
                                                     ↑
                                                   cycle
    ```
