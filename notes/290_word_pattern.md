# 290 Word Pattern

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8?style=flat-square)

Given a `pattern` and a string `s`, find if `s` follows the same pattern.

Here **follow** means a full match, such that there is a bijection between a letter in `pattern` and a **non-empty** word in `s`. Specifically:

- Each letter in `pattern` maps to **exactly** one unique word in `s`.
- Each unique word in `s` maps to **exactly** one letter in `pattern`.
- No two letters map to the same word, and no two words map to the same letter.

**Example:**

```java
Input: pattern = "abba", s = "dog cat cat dog"
Output: true;
// Explanation: The bijection can be established as 'a' maps to "dog" and 'b' maps to "cat"
```

```java
Input: pattern = "abba", s = "dog cat cat fish"
Output: false
```

```java
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
```

**Constraints:**

- `1 <= pattern.length <= 300`
- `pattern` contains only lower-case English letters.
- `1 <= s.length <= 3000`
- `s` contains only lowercase English letters and spaces `' '`.
- `s` **does not contain** any leading or trailing spaces.
- All the words in `s` are separated by a **single space**.

**Note:**

| Algorithm | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Hash Map  | O(n)            | O(n)             |

將字串 `s` 依空格拆成單詞陣列 `arr`，如果長度是否與 `pattern` 不一樣就直接 return `false`。

用兩個 map 建立雙向對應：

- `pattern` 字元 → `arr` 單詞
- `arr` 單詞 → `pattern` 字元

遍歷過程中，如果對應不一致就直接回傳 `false`，最後遍歷結束就代表一致，回傳 `true`。
