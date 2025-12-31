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

從第一個 str 開始，一個字母一個字母比對其他 str 同位置的字符。只要遇到不一樣的，就回傳目前累積的 `prefix`。比完整個字串都沒差異，最後回傳整個第一個字串就是最大前綴。
