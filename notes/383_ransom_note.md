# 383 Ransom Note

<span style="background-color: #6CC644; color: white; padding: 0.2em 0.6em; border-radius: 12px; font-size: 0.9em">Top Interview 150</span>

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

| Topics                       | Category | Key Idea                                             | Time Complexity | Space Complexity |
| ---------------------------- | -------- | ---------------------------------------------------- | --------------- | ---------------- |
| Hash Table, String, Counting | Hash Map | Count `ransomNote` letters and match with `magazine` | O(n+m)          | O(1)             |

- Initialize: create a new Map and record the count of every character of `ransomNote`.

- Loop Condition:
    1. Traversal `ransomNote` to populate the Map.
    2. Traversal `magazine` to decrement counts of corresponding characters.

- Steps:
    1. If a character exists in the Map, decrease its count.
    2. Delete the key from the Map if its count reaches 0.
    3. Return `true` immediately if the Map becomes empty.

## Notes

- Use `Map.get` and `Map.set` to read/update counts.
- Use `Map.size == 0` for efficient termination instead of looping through keys.
- Early return `true` if Map becomes empty.
- Space Complexity: `O(1)`, because if we only deal with the 26 lowercase English letters a–z, the Map (or array) will store at most 26 keys regardless of the input string length.
