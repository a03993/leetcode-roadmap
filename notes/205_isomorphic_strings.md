# 205 Isomorphic Strings

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8?style=flat-square)

Given two strings `s` and `t`, _determine if they are isomorphic_.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example:**

```java
Input: s = "egg", t = "add"
Output: true
// Explanation: The strings s and t can be made identical by mapping 'e' to 'a' and 'g' to 'd'
```

```java
Input: s = "foo", t = "bar"
Output: false
// Explanation: The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.
```

```java
Input: s = "paper", t = "title"
Output: true
```

**Constraints:**

- `1 <= s.length <= 5 * 10⁴`
- `t.length == s.length`
- `s` and `t` consist of any valid ascii character.

**Note:**

| Algorithm | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Hash Map  | O(n)            | O(n)             |

用雙向 hash table 確保每個字符的映射是一對一對應，如果遇到不一致就返回 false，否則返回 true。
