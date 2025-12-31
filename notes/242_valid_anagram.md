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

| Topic    | Time Complexity | Space Complexity |
| -------- | --------------- | ---------------- |
| Hash Map | O(n)            | O(n)             |

用 hash map 統計 s 的字符數量，遍歷 t 扣除數量，全部扣完則為異位詞，否則不是。
