# 290 Word Pattern

<span style="background-color: #6CC644; color: white; padding: 0.2em 0.6em; border-radius: 12px; font-size: 0.9em">Top Interview 150</span>

Given a `pattern` and a string `s`, find if `s` follows the same pattern.

Here **follow** means a full match, such that there is a bijection between a letter in `pattern` and a **non-empty** word in `s`. Specifically:

- Each letter in `pattern` maps to **exactly** one unique word in `s`.
- Each unique word in `s` maps to **exactly** one letter in `pattern`.
- No two letters map to the same word, and no two words map to the same letter.

**Example:**

```
Input: pattern = "abba", s = "dog cat cat dog"
Output: true
```

Explanation - The bijection can be established as:

- `'a'` maps to `"dog"`.
- `'b'` maps to `"cat"`.

```
Input: pattern = "abba", s = "dog cat cat fish"
Output: false
```

```
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

## Approach

| Topics             | Category | Key Idea             | Time Complexity | Space Complexity |
| ------------------ | -------- | -------------------- | --------------- | ---------------- |
| Hash Table, String | Hash Map | Double mapping check | O(n)            | O(n+m)           |

- Initialize:
    - Const `word` to store the string `s` after `spilt(" ")`.
    - Create two Map `patternMap` and `wordMap`, to store mappings from `pattern` → `word` and `word` → `pattern`.

- Traverse the string once, checking both mappings.

- Steps:
    1. If `patternMap` contains `pattern[i]`, check if `patternMap.get(pattern[i]) != word[i]` return `false`.
    2. If `wordMap` contains `word[i]`, check if `wordMap.get(word[i]) != pattern[i]` return `false`.
    3. If both checks pass, set `patternMap.set(pattern[i], word[i])` and `wordMap.set(word[i], pattern[i])`.

## Notes

- Same logic as [205 Isomorphic Strings](./205_isomorphic_strings.md).
- Use `array.spilt(" ")` to spilt a string by spaces, because the problem states that `s` is a string where words are **separated by exactly one space**.
