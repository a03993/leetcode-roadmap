# 28 Find the Index of the First Occurrence in a String

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

**Example:**

```java
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
```

```java
Input: haystack = "leetcode", needle = "leeto"
Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
```

**Constraints:**

- `1 <= haystack.length, needle.length <= 10⁴`
- `haystack` and `needle` consist of only lowercase English characters.

**Note:**

| Topic       | Time Complexity | Space Complexity |
| ----------- | --------------- | ---------------- |
| Brute Force | O(n\*m)         | O(1)             |

從 `haystack` 的每個可能起始位置開始，逐字符比較 `needle`，找到完整匹配則 return 起始的 index，否則 return `-1`。
