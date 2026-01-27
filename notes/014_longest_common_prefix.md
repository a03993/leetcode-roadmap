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

| Algorithm        | Time Complexity | Space Complexity |
| ---------------- | --------------- | ---------------- |
| Horizon scanning | O(m \* n)       | O(1)             |
| Binary Search    | ...             | ...              |

用兩個迴圈水平掃描，外層迴圈用第一個字串 `strs[0]` 作為參考字串，從左到右遍歷所有字元並存到 `char` 中；內層迴圈從左到右遍歷陣列 `strs`，檢查所有字串 `strs[j]` 的該位置字元是否與 `char` 相同，若不同則**直接回傳**目前累積的 `prefix`；若相同則將 `char` 加入 `prefix`，遍歷完第一個字串仍沒中斷，**回傳**完整 prefix。

<!-- TODO: Binary Search -->
