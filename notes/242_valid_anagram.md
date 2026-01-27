# 242 Valid Anagram

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8?style=flat-square)

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

**Example:**

```java
Input: s = "anagram", t = "nagaram"
Output: true
```

```java
Input: s = "rat", t = "car"
Output: false
```

**Constraints:**

- `1 <= s.length, t.length <= 5 * 10⁴`
- `s` and `t` consist of lowercase English letters.

**Follow up:** What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

**Note:**

| Algorithm | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Hash Map  | O(n)            | O(n)             |

先檢查兩字串長度，如果不一樣直接 return `false`。

用 map 記錄 `s` 中每個字母出現次數，然後遍歷 `t` 減少對應字母的數量，若數量減到 0 就刪除該字母。

最後回傳 `map.size === 0`，map 空就表示兩字串字母及數量完全一致。
