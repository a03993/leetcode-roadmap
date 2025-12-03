# 202 Happy Number

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Write an algorithm to determine if a number `n` is happy.

A happy number is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it **loops endlessly in a cycle** which does not include 1.
- Those numbers for which this process **ends in 1** are happy.

Return _`true` if `n` is a happy number, and `false` if not_.

**Example:**

```
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

```
Input: n = 2
Output: false
```

**Constraints:**

- `1 <= n <= 2³¹ - 1`

## Approach

| Topics                         | Category | Key Idea                               | Time Complexity | Space Complexity |
| ------------------------------ | -------- | -------------------------------------- | --------------- | ---------------- |
| Hash Table, Math, Two Pointers | Hash Set | Track visited numbers to detect cycles | O(1)            | O(1)             |

![TODO](https://img.shields.io/badge/TODO-Two_Pointers-orange)

- Initialize: create a Set to store visited numbers.

- Loops:
    1. While `n != 1` and `n` is not in `seen`.
    2. While `n > 0` to process digits of `n`.

- Steps:
    1. Add `n` to `seen`.
    2. Compute the next number by summing the squares of its digits.
    3. Replace `n` with the computed `sum` and repeat.

## Notes

- Time Complexity: `O(log n)` per iteration, but sequence **is bounded (≤243)**, so practically `O(1)`.
- Space Complexity: `O(n)` for visited numbers, but **max 243 values**, so practically `O(1)`.
