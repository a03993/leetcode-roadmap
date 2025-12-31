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

**Note:**

| Topic        | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Two Pointers | O(n)            | O(1)             |

使用兩個指標 `i` 指向字串 `s`，`j` 指向字串 `t`。當 `s[i]` 等於 `t[j]` 時，`i` 前進一位。遍歷結束後，如果 `i` 已經等於 `s` 的長度，表示 `s` 的所有字元都依序出現在 `t` 中，是 `t` 的子序列。

## Notes

- Simplifying the final check to return `i == s.length` avoids an unnecessary if statement:

    ```js
    if (i < s.length) {
        return false;
    }

    return true;
    ```

- Works even when `s` is empty (`""` is always a subsequence).
