# 242 Valid Anagram

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

**Example:**

```
Input: s = "anagram", t = "nagaram"
Output: true
```

```
Input: s = "rat", t = "car"
Output: false
```

**Constraints:**

- `1 <= s.length, t.length <= 5 * 10⁴`
- `s` and `t` consist of lowercase English letters.

**Follow up:** What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

## Approach

| Topics                      | Category | Key Idea                                            | Time Complexity | Space Complexity |
| --------------------------- | -------- | --------------------------------------------------- | --------------- | ---------------- |
| Hash Table, String, Sorting | Hash Map | Mapping letters from `s` letters and match with `t` | O(n)            | O(1)             |

- Initialize: create a new Map and record the count of every character of `s`.

- Loop Condition:
    1. Traversal `s` to populate the Map.
    2. Traversal `t` to decrement counts of corresponding characters.

- Steps:
    1. If a character exists in the Map, decrease its count.
    2. Delete the key from the Map if its count reaches 0.

## Notes

- Same logic as [383 Ransom Note](./383_ransom_note.md).
- Time Complexity: `O(n + m)`, which is `O(2n)` (often simplified to `O(n)` on LeetCode) because `s.length == t.length` (n = m).
- Space Complexity: `O(1)`, because only 26 lowercase English letters (`a–z`) are involved, so the Map stores at most 26 keys.
