# 242 Valid Anagram

<span style="background-color: #6CC644; color: white; padding: 0.2em 0.6em; border-radius: 12px; font-size: 0.9em">Top Interview 150</span>

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

| Topics                      | Category | Key Idea                             | Time Complexity | Space Complexity |
| --------------------------- | -------- | ------------------------------------ | --------------- | ---------------- |
| Hash Table, String, Sorting | Hash Map | Count `s` letters and match with `t` | O(n)            | O(1)             |

- Initialize: create a new Map and record the count of every character of `s`.

- Loop Condition:
    1. Traversal `s` to populate the Map.
    2. Traversal `t` to decrement counts of corresponding characters.

- Steps:
    1. If a character exists in the Map, decrease its count.
    2. Delete the key from the Map if its count reaches 0.

## Notes

- Same logic as [383 Ransom Note](./383_ransom_note.md).
- Time Complexity: `O(n + m)`, which simplifies to `O(n)` when `s.length = t.length (n = m)`, because big O notation ignores constant factors.
- Space Complexity: `O(1)`, because if we only deal with the 26 lowercase English letters a–z, the Map (or array) will store at most 26 keys regardless of the input string length.
