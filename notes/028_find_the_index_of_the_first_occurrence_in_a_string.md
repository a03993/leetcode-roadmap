# 28 Find the Index of the First Occurrence in a String

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

**Example:**

```
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
```

```
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
```

**Constraints:**

- `1 <= haystack.length, needle.length <= 10⁴`
- `haystack` and `needle` consist of only lowercase English characters.

## Approach

| Topics                                | Category    | Key Idea                                                       | Time Complexity | Space Complexity |
| ------------------------------------- | ----------- | -------------------------------------------------------------- | --------------- | ---------------- |
| Two Pointers, String, String Matching | Brute Force | Check for `needle` at every possible start index in `haystack` | O(n\*m)         | O(1)             |

![TODO](https://img.shields.io/badge/TODO-KMP%2FRabin--Karp-orange)

- Initialization:
    - `start`: Index in `haystack` where the current substring comparison begins.
    - `matched`: Counts how many characters of `needle` match consecutively with `haystack` at the current start.

- Loops:
    1. Traverse `haystack` from left to right, stopping at `haystack.length - needle.length` to avoid overflow.
    2. For each starting index, traverse `needle` from left to right, comparing each character with the corresponding character in `haystack` until a mismatch occurs or the entire needle is matched.

- Steps:
    1. Only start comparing if `haystack[start] == needle[0]`.
    2. Compare characters of `needle` with `haystack` one by one. While `matched < needle.length` and `haystack[start + matched] == needle[matched]`, increment `matched`.
    3. If `matched == needle.length` return `start` - _the entire needle is matched_.
    4. If mismatch occurs, increment `start` by 1 and repeat.

## Notes

- **Key mistake:** Using `start += matched` can skip over the correct starting position. → Incrementing `start++` ensures **a character-by-character check** and avoids missing matches.
- Only start comparing the subsequent characters when the first character matches, reducing unnecessary comparisons.
