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

## Approach

| Topics             | Category | Key Idea                                                            | Time Complexity | Space Complexity |
| ------------------ | -------- | ------------------------------------------------------------------- | --------------- | ---------------- |
| Hash Table, String | Hash Map | Use two maps to ensure characters map one-to-one in both directions | O(n)            | O(1)             |

1. Create two maps to map characters from `s` to `t` and from `t` to `s`.
2. Loop through each character in both strings.
3. For each pair of characters:
    - If a character from `s` has not been mapped yet, map it to the corresponding character in `t`; do the same for the character from `t`.
    - If any mapping conflicts with existing ones, return false.
4. After the loop, return true — _all characters follow a consistent one-to-one mapping_.

### Complexity

1. **Time Complexity**: `O(n)`
    - Traverse once
    - `n`: length of the `s`/`t`
2. **Space Complexity**: `O(m+n)` → `O(1)`
    - `m`: number of unique characters in `s`
    - `n`: number of unique characters in `t`
    - Since the input **only contains** lowercase letters (a–z), the map stores **at most 26 keys**, so it's effectively `O(1)`.
