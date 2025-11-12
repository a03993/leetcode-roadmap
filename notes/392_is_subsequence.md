# 392 Is Subsequence

<span style="background-color: #6CC644; color: white; padding: 0.2em 0.6em; border-radius: 12px; font-size: 0.9em">Top Interview 150</span>

Given two strings `s` and `t`, return `true` _if `s` is a **subsequence** of `t`, or `false` otherwise_.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

**Example:**

```
Input: s = "abc", t = "ahbgdc"
Output: true
```

```
Input: s = "axc", t = "ahbgdc"
Output: false
```

**Constraints:**

- `0 <= s.length <= 100`
- `0 <= t.length <= 10⁴`
- `s` and `t` consist only of lowercase English letters.

**Follow up:** Suppose there are lots of incoming `s`, say `s1, s2, ..., sk` where `k >= 10⁹`, and you want to check one by one to see if `t` has its subsequence. In this scenario, how would you change your code?

## Approach

| Topics                                    | Category       | Key Idea                    | Time Complexity | Space Complexity |
| ----------------------------------------- | -------------- | --------------------------- | --------------- | ---------------- |
| Two Pointers, String, Dynamic Programming | In-place Check | Two Pointers (Left & Right) | O(n)            | O(1)             |

- Pointers:
    - `i` (left pointer): Points to current character in `s`. Moves right when a match is found.
    - `j` (right pointer): Points to current character in `t`. Always moves right.

- Loop Condition: While `i < s.length && j < t.length` — _traverse `t` until either `s` is fully matched or `t` ends_.

- Steps:
    1. Compare `s[i]` with `t[j]`, If they are equal, increment `i`.
    2. Increment `j` in each iteration.
    3. Repeat until loop ends.
    4. After the loop, return `i == s.length` to check if all characters in s were matched in order.

## Notes

- Simplifying the final check to return `i == s.length` avoids an unnecessary if statement:

    ```
    if (i < s.length) {
        return false;
    }

    return true;
    ```

- Works even when `s` is empty (`""` is always a subsequence).
