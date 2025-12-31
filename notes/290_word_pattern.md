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

| Topic    | Time Complexity | Space Complexity |
| -------- | --------------- | ---------------- |
| Hash Map | O(n)            | O(n)             |

建立 pattern ↔ words 的雙向映射，檢查是否一對一對應，違反即返回 false，全部一致即返回 true。
