# 009 Palindrome Number

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given an integer `x`, return _`true` if `x` is a palindrome, and `false` otherwise_.

**Example:**

```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

**Constraints:**

- `-2³¹ <= x <= 2³¹ - 1`

**Follow up:** Could you solve it without converting the integer to a string?

## Approach

| Topics | Category | Key Idea            | Time Complexity | Space Complexity |
| ------ | -------- | ------------------- | --------------- | ---------------- |
| Math   | Number   | Reverse half number | O(n)            | O(1)             |

- Initialization:
    - `y`: stores the reversed half of the integer `x`.

- Loop Condition: `x > y`

- Steps:
    1. Update `y` by multiplying the current `y` by 10 and adding _**the remainder when `x` is divided by 10** (the last digit of `x`)_.
    2. Update `x` by dividing tje current `x` and taking the integer part - _remove the last digit_.

## Notes

- 0 is a palindrome.
- Negative number are **never** a palindrome.
- If `x` has an odd number of digit, compare `x` with `y` after removing its last digit(i.e., `x == Math.floor(y / 10)`).
