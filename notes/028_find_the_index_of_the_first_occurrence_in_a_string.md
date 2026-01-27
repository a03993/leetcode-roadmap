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

| Algorithm   | Time Complexity | Space Complexity |
| ----------- | --------------- | ---------------- |
| Brute Force | O(n\*m)         | O(1)             |
| KMP         | ...             | ...              |

用 `start` 指向 `haystack` 的起始位置，最多只掃到 `haystack.length - needle.length`。當 `haystack[start]` 等於 `needle[0]` 時，檢查之後的每個字元是否與 needle 對應位置相同，用 `curr` 從 1 開始比對：

- 若整段 needle 都匹配，回傳 `start`
- 若不匹配，`start++` 往後移，繼續檢查

若掃完整個 `haystack` 都沒有找到，回傳 -1

<!-- TODO: KMP -->
