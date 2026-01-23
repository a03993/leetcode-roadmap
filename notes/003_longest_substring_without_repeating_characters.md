# 3 Longest Substring Without Repeating Characters

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given a string `s`, find the length of the **longest substring** without duplicate characters.

**Example:**

```java
Input: s = "abcabcbb"
Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
```

```java
Input: s = "bbbbb"
Output: 1
// Explanation: The answer is "b", with the length of 1.
```

```java
Input: s = "pwwkew"
Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Constraints:**

- `0 <= s.length <= 5 * 10⁴`
- `s` consists of English letters, digits, symbols and spaces.

**Note:**

| Algorithm                | Time Complexity | Space Complexity |
| ------------------------ | --------------- | ---------------- |
| Sliding Window + HashSet | O(n)            | O(1)             |

使用 Sliding Window，用兩個指標 `start`、`end` 表示當前的視窗範圍，並用 set 紀錄目前視窗內出現過的字元。

當 `s[end]` 已經存在於 set 中，表示出現重複字元，就 `start++` 縮短視窗，刪除 `s[start]`，直到重複字元被移除。

當 `s[end]` 不在 set 中時，將它加入 set，並將 `end++` 擴張視窗，同時更新最大長度 `maxLen = Math.max(maxLen, end - start)`。

重複這個過程直到 `end` 走完整個字串，最後回傳**最長＆不重複**子字串的長度。

![Demo](https://img.shields.io/badge/Demo-s_=_"abcabcbb"-white?style=flat-square)

| step | start | end        | maxLen | set             |
| ---- | ----- | ---------- | ------ | --------------- |
| init | 0     | 0          | 0      | {}              |
| 1    | 0     | 1          | 1      | {"a"}           |
| 2    | 0     | 2          | 2      | {"a", "b"}      |
| 3    | 0     | 3          | 3      | {"a", "b", "c"} |
| 4    | 1     | 3          | 3      | {"b", "c"}      |
| 5    | 1     | 4          | 3      | {"b", "c", "a"} |
| 6    | 2     | 4          | 3      | {"c", "a"}      |
| 7    | 2     | 5          | 3      | {"c", "a", "b"} |
| 8    | 3     | 5          | 3      | {"a", "b"}      |
| 9    | 3     | 6          | 3      | {"a", "b", "c"} |
| 10   | 4     | 6          | 3      | {"b", "c"}      |
| 11   | 5     | 6          | 3      | {"c"}           |
| 12   | 5     | 7          | 3      | {"c", "b"}      |
| 13   | 6     | 7          | 3      | {"b"}           |
| 14   | 7     | 7          | 3      | {}              |
| 15   | 7     | 8 → return | 3      | {"b"}           |
