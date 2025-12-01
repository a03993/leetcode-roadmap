# 14 Longest Common Prefix

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example:**

```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Constraints:**

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters if it is non-empty.

## Approach

| Topics              | Category   | Key Idea                         | Time Complexity | Space Complexity |
| ------------------- | ---------- | -------------------------------- | --------------- | ---------------- |
| Array, String, Trie | Comparison | Compare all strings by character | O(m\*n)         | O(1)             |

- Initialization:
    - `prefix` to accumulate the common characters.

- Loop Condition:
    1. Iterate over each character index `i` of the **first string**.
    2. At each position compare against all other strings.

- Steps:
    1. Read `char` from `strs[0][i]`.
    2. Compare `char` with `strs[j][i]` for every other string.
    3. If any mismatch occurs, return `prefix` **immediately**.
    4. If all match, append `char` to `prefix`.

## Notes

- The loop stops as soon as **a mismatch appears** — _no need to check further_.
