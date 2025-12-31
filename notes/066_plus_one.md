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

| Topic  | Time Complexity | Space Complexity |
| ------ | --------------- | ---------------- |
| Greedy | O(n)            | O(1)             |

從 `digits` 最後一項開始往前加 1，如果該項的數字小於 9，直接加 1 然後 return `digits` 就好；如果是 9，將該項設為 0 並繼續往前處理。迴圈跑完還沒有 return 就表時前面要多一個進位，就在 `digits` 前插入 1。
