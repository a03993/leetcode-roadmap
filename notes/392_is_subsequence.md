# 392 Is Subsequence

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given two strings `s` and `t`, return `true` _if `s` is a **subsequence** of `t`, or `false` otherwise_.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

**Example:**

```java
Input: s = "abc", t = "ahbgdc"
Output: true
```

```java
Input: s = "axc", t = "ahbgdc"
Output: false
```

**Constraints:**

- `0 <= s.length <= 100`
- `0 <= t.length <= 10⁴`
- `s` and `t` consist only of lowercase English letters.

**Follow up:** Suppose there are lots of incoming `s`, say `s1, s2, ..., sk` where `k >= 10⁹`, and you want to check one by one to see if `t` has its subsequence. In this scenario, how would you change your code?

## Approach

| Topics                                    | Category       | Key Idea                                                                      | Time Complexity | Space Complexity |
| ----------------------------------------- | -------------- | ----------------------------------------------------------------------------- | --------------- | ---------------- |
| Two Pointers, String, Dynamic Programming | In-place Check | Use two pointers to iterate through `s` and `t` and match characters in order | O(n)            | O(1)             |

1. Initialize two pointers: `i = 0` for `s` and `j = 0` for `t`
2. Loop through `t` using pointer `j`
3. If `s[i] == t[j]`, move pointer `i` forward － _character matched_
4. Always move pointer `j` forward
5. After the loop, if `i == s.length`, return true if all chars in s matched, else false

### Complexity

1. **Time Complexity:** O(n)
    - Traverse array `t`
    - n = `t.length`

2. **Space Complexity:** O(1)
    - constant space, only two pointers used

## Notes

- Simplifying the final check to return `i == s.length` avoids an unnecessary if statement:

    ```js
    if (i < s.length) {
        return false;
    }

    return true;
    ```

- Works even when `s` is empty (`""` is always a subsequence).
