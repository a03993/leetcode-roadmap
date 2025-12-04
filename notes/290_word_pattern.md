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

## Approach

| Topics             | Category | Key Idea                                                            | Time Complexity | Space Complexity |
| ------------------ | -------- | ------------------------------------------------------------------- | --------------- | ---------------- |
| Hash Table, String | Hash Map | Use two maps to ensure one-to-one mapping between pattern and words | O(n)            | O(n)             |

1. Split `s` into `words`.
2. Check if the length of `pattern` and `words`; if not, return false.
3. Create two maps to track mappings from `pattern` to `words` and from `words` to `pattern`.
4. Loop through each index:
    - If a pattern character or word has not been mapped yet, add the mapping.
    - If the existing mapping conflicts, return false.
5. Return true — _pattern matches the words_.

### Complexity

n = `pattern.length` = `words.length`

1. **Time Complexity**: O(n)
    - Split string `s` into `words`: O(n)
    - Traverse `pattern` and `words`: O(n)
    - Map operations (`get`, `set`, `has`): O(1) each

2. **Space Complexity**: O(n)
    - Store the split string `s` into array `words`: O(n)
    - Two Maps (`patternMap` and `wordMap`): O(n)
