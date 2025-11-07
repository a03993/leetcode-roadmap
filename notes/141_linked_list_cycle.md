# 141 Linked List Cycle

<span style="background-color: #6CC644; color: white; padding: 0.2em 0.6em; border-radius: 12px; font-size: 0.9em">Top Interview 150</span>

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter.**

Return `true` _if there is a cycle in the linked list._ Otherwise, return `false`.

**Example:**

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

**Constraints:**

- The number of the nodes in the list is in the range `[0, 10⁴]`.
- `-10⁵ <= Node.val <= 10⁵`
- `pos` is `-1` or a **valid index** in the linked-list.

**Follow up:** Can you solve it using `O(1)` (i.e. constant) memory?

## Approach

<table>
  <thead>
    <tr>
      <th>Topics</th>
      <th>Category</th>
      <th>Key Idea</th>
      <th>Time Complexity</th>
      <th>Space Complexity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Hash Table, Linked List, Two Pointers</td>
      <td>Hash Set</td>
      <td>Track Visited Nodes</td>
      <td>O(n)</td>
      <td>O(n)</td>
    </tr>
    <tr>
      <td>In-place Traversal</td>
      <td>Two Pointers (Slow & Fast)</td>
      <td>O(n)</td>
      <td>O(1) ✅</td>
    </tr>
  </tbody>
</table>

<details>
<summary style="font-size: 1.25em; font-weight: bold">Hash Set</summary>

- Initialization:
    - `curr`: Points to current node, initially `head`.
    - `passedNode`: A `Set` to store visited nodes.

- Loop Condition: While `curr` is not `null`.

- Steps:
    1. If `passedNode.has(curr)` return `true`.
    2. Add `curr` to `passedNode`.
    3. Move `curr` one step forward.
    4. If loop ends return `false`.

    ```
    [head] → [node1] → [node2] → [node3] → [node4]
                    ↑                       |
                    └───────── (back to node2) ← cycle
    ```

- Code Skeleton:

```
let curr = head;
let passedNode = new Set();

while (curr) {
    if (passedNode.has(curr)) return true;
    passedNode.add(curr);
    curr = curr.next;
}

return false;
```

</details>

<details>
<summary style="font-size: 1.25em; font-weight: bold">In-place Traversal</summary>

- Pointers:
    - `slow` (slow pointer): Moves one step at a time.
    - `fast` (fast pointer): Moves two steps at a time.

- Loop Condition: While `fast` and `fast.next` are not `null`.

- Steps:
    1. Move `slow` one step forward.
    2. Move `fast` two step forward.
    3. If `slow == fast` return true.
    4. If loop ends return `false`.

    ```
    slow → [head] → [node1] → [node2] → [node3] → [node4]
    fast → [head] → [node2] → [node4] → [node2] → [node4]
                                                     ↑
                                                   cycle
    ```

</details>

## Notes

- The `Set` method uses `O(n)` because every visited node is stored. To optimize space to `O(1)`, use the **fast & slow pointer method** instead.

- **`Set`:**
    - Stores **node references** (not values), so `has()` can detect if the same node object has been visited.
- **Fast & slow pointer:**
    - Make sure to check both `fast` and `fast.next` in the loop condition to avoid null pointer errors.
    - If there is a cycle, `slow` and `fast` pointers will eventually meet.
