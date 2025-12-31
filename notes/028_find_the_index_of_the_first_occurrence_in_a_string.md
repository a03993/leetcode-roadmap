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
| KMP         | ...             | ...              |

從 `haystack` 的每個可能起點開始嘗試對齊 `needle`，只要第一個字母對了，就往後一個一個比。中途不合就換下一個起點，全部掃完還沒中就回傳 -1。

<!-- TODO: 更優解 -->
