# 2 Add Two Numbers(Top Interview 150)

## Problem Description

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

Describe the algorithm, technique, and complexity.

**Algorithm:** Traversal
**Technique:** Two Pointers

- Initialize a **dummyHead** pointing to a new ListNode (value 0).

- Initialize a variable `carry = 0` to track the carry for addition.

- Initialize two pointers:
  1. `curr`: pointing to dummyHead, which will be used to build the resulting list.
  2. `l1` and `l2`: pointing to themselves

- Traverse the list (while `l1` or `l2` or `carry` is non-zero):
  1. Take the current values from `l1` and `l2`.
  2. Compute `sum = val1 + val2 +carry`.
  3. Set `carry = Math.floor(sum / 10)` for the next digit.
  4. Create a new node with value `sum % 10` and attach it to `current.next`.
  5. Move `curr` to the new node.
  6. Advance `l1` and `l2` to their next nodes if they exist.

**Time Complexity:** O(max(m, n))
**Space Complexity:** O(1)

## Implementation Notes

- Use a `dummyHead` to simplify handling of the head node.
- If `l1` and `l2` have different lengths, treat the missing node as 0 when computing `val1` or `val2`.
- Always maintain a current pointer (`curr`) to keep track of the last node in the result list.
- Maintain a carry variable to handle values ≥10 and propagate them to the next node.
- The loop condition includes carry > 0 to handle the case where the last addition generates a new node.
