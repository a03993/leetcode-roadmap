# 2 Add Two Numbers

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Medium](https://img.shields.io/badge/Medium-ffb800)

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example:**

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

```
Input: l1 = [0], l2 = [0]
Output: [0]
```

```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

**Constraints:**

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

## Approach

| Topics                       | Category             | Key Idea                                                               | Time Complexity | Space Complexity |
| ---------------------------- | -------------------- | ---------------------------------------------------------------------- | --------------- | ---------------- |
| Linked List, Math, Recursion | Iterative Simulation | Traverse both lists, add digits with carry, build new nodes for result | O(max(m, n))    | O(max(m, n))     |

- Initialization:
    - `dummyHead`: A sentinel node (`ListNode(0)`) that serves as the anchor for the final resulting list.
    - `curr`: Reference to the current node in the resulting list, initially set to `dummyHead`.
    - `carry = 0`: To track the carry during addition.

- Traversal Nodes:
    - `l1`: Current node in the first linked list.
    - `l2`: Current node in the second linked list.

- Loop Condition: While `l1` or `l2` or `carry` exists.

- Steps:
    1. Take the current value `val1` from `l1` and `val2` from `l2` (0 if null).
    2. Compute `sum = val1 + val2 + carry`.
    3. Set `carry = Math.floor(sum / 10)` for the next digit.
    4. Create a new node with value `sum % 10` and attach it to `current.next`.
    5. Move `curr` to the new node.
    6. Advance `l1` and `l2` to their next nodes if they exist.

## Notes

- Use a `dummyHead` as a sentinel to anchor the resulting list.
- When `l1` and `l2` have different lengths, treat missing node as `0` to avoid `undefined`.
- Includes `carry > 0` in the loop condition to handle the case where the last addition generates a new node (For example: `Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]`).
