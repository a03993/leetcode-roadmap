# 205 Isomorphic Strings

<span style="background-color: #6CC644; color: white; padding: 0.2em 0.6em; border-radius: 12px; font-size: 0.9em">Top Interview 150</span>

Given two strings `s` and `t`, _determine if they are isomorphic_.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example:**

```
Input: s = "egg", t = "add"
Output: true
```

Explanation - The strings `s` and `t` can be made identical by:

- Mapping `'e'` to `'a'`.
- Mapping `'g'` to `'d'`.

```
Input: s = "foo", t = "bar"
Output: false
```

Explanation - The strings `s` and `t` can not be made identical as `'o'` needs to be mapped to both `'a'` and `'r'`.

```
Input: s = "paper", t = "title"
Output: true
```

**Constraints:**

- `1 <= s.length <= 5 * 10⁴`
- `t.length == s.length`
- `s` and `t` consist of any valid ascii character.

## Approach

| Topics             | Category | Key Idea             | Time Complexity | Space Complexity |
| ------------------ | -------- | -------------------- | --------------- | ---------------- |
| Hash Table, String | Hash Map | Double mapping check | O(n)            | O(n+m)           |

- Initialize: Create two Map `sMap` and `tMap`, to store mappings from `s` → `t` and `t` → `s`.

- Traverse the string once, checking both mappings.

- Steps:
    1. If `sMap` contains `s[i]`, check if `sMap.get(s[i]) != t[i]` return `false`.
    2. If `tMap` contains `t[i]`, check if `tMap.get(t[i]) != s[i]` return `false`.
    3. If both checks pass, set `sMap.set(s[i], t[i])` and `tMap.set(t[i], s[i])`.

## Notes

- Using only one Map is insufficient; e.g., `s = "badc", t = "baba"` would return wrong result.
- Double mapping ensures each character in `s` maps uniquely to `t` and vice versa.
