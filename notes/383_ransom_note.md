# 383 Ransom Note

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given two strings `ransomNote` and `magazine`, return `true` _if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise_.

Each letter in `magazine` can only be used once in `ransomNote`.

**Example:**

```
Input: ransomNote = "a", magazine = "b"
Output: false
```

```
Input: ransomNote = "aa", magazine = "ab"
Output: false
```

```
Input: ransomNote = "aa", magazine = "aab"
Output: true
```

**Constraints:**

- `1 <= ransomNote.length, magazine.length <= 10⁵`
- `ransomNote` and `magazine` consist of lowercase English letters.

## Approach

| Topics                       | Category | Key Idea                                                    | Time Complexity | Space Complexity |
| ---------------------------- | -------- | ----------------------------------------------------------- | --------------- | ---------------- |
| Hash Table, String, Counting | Hash Map | Mapping letters form `ransomNote` and match with `magazine` | O(n+m)          | O(1)             |

- Initialize: create a new Map and record the count of every character of `ransomNote`.

- Loop Condition:
    1. Traversal `ransomNote` to populate the Map.
    2. Traversal `magazine` to decrement counts of corresponding characters.

- Steps:
    1. If a character exists in the Map, decrease its count.
    2. _Delete the key from the Map_ if the count reaches 0 and _update the Map with the new count_ otherwise.
    3. Return `true` immediately if the Map becomes empty.

## Notes

- Same logic as [242 Valid Anagram](./242_valid_anagram.md).
- Use `Map.get` and `Map.set` to read/update counts.
- Early return `true` if Map becomes empty.
- Use `Map.size == 0` for efficient termination instead of checking all keys.
- Space Complexity: `O(1)`, because only 26 lowercase English letters (`a–z`) are involved, so the Map stores at most 26 keys.
