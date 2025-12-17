# 009 Palindrome Number

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given an integer `x`, return _`true` if `x` is a palindrome, and `false` otherwise_.

**Example:**

```java
Input: x = 121
Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
```

```java
Input: x = -121
Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

```java
Input: x = 10
Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

**Constraints:**

- `-2³¹ <= x <= 2³¹ - 1`

**Follow up:** Could you solve it without converting the integer to a string?

## Approach

| Topics | Category | Key Idea            | Time Complexity | Space Complexity |
| ------ | -------- | ------------------- | --------------- | ---------------- |
| Math   | Number   | Reverse half number | O(n)            | O(1)             |

1. Initialize `y = 0` to stores the reversed half of the integer
2. Update `y` by multiplying it by 10 and adding the last digit of `x` (`x % 10`)
3. Update `x` by removing its digit using integer division (`Math.floor(x / 10)`)
4. Stop when `x <= y` － meaning half of digits have been processed
5. Return `x == y` or `x == Math.floor(y / 10)` for both even and odd digits

### Complexity

1. **Time Complexity:** O(n)
    - n = number of digits in `x`
    - Reverse half of the number: O(n/2) → O(n)
    - Comparison of the halves: O(1)

    → Overall: O(n)

2. **Space Complexity:** O(1)
    - Only uses a few integer variables (`x`, `y`), no extra data structures

## Notes

- 0 is a palindrome.
- Negative number are **never** a palindrome.
- If `x` has an odd number of digit, compare `x` with `y` after removing its last digit(i.e., `x == Math.floor(y / 10)`).
