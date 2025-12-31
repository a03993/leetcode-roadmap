# 14 Longest Common Prefix

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example:**

```java
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

```java
Input: strs = ["dog","racecar","car"]
Output: ""
// Explanation: There is no common prefix among the input strings.
```

**Constraints:**

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters if it is non-empty.

**Note:**

| Topic       | Time Complexity | Space Complexity |
| ----------- | --------------- | ---------------- |
| Brute Force | O(m\*n)         | O(1)             |

以第一個字串為基準，從左到右逐字元檢查所有字串同一位置是否相同，直到遇到第一個不相同的位置就回傳目前累積的 `prefix`。
