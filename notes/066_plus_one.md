# 66 Plus One

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

You are given a **large integer** represented as an integer array `digits`, where each `digits[i]` is the `iᵗʰ` digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.

Increment the large integer by one and return _the resulting array of digits_.

**Example:**

```java
Input: digits = [1,2,3]
Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
```

```java
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
```

```java
Input: digits = [9]
Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].
```

**Constraints:**

- `1 <= digits.length <= 100`
- `0 <= digits[i] <= 9`
- `digits` does not contain any leading `0`'s.

| Topics      | Key Idea                               | Time Complexity | Space Complexity |
| ----------- | -------------------------------------- | --------------- | ---------------- |
| Array, Math | Traverse from last digit, handle carry | O(n)            | O(1)             |

1. Traverse the array from the last digit to the first
    - If `digits[i] < 9`, increment `digits[i]` by 1 and **return immediately** since no carry is needed
    - If `digits[i] = 9`, set `digits[i]` to 0 and continue to the next digit to propagate the carry
2. If loop finishes without returning means **all digits are 9**, insert 1 at the beginning using `digits.unshift(1)`
3. Return `digits`
