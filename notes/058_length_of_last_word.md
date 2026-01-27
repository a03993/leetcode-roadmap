# 58 Length of Last Word

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given a string `s` consisting of words and spaces, return _the length of the **last** word in the string_.

A **word** is a maximal substring consisting of non-space characters only.

**Example:**

```java
Input: s = "Hello World"
Output: 5
// Explanation: The last word is "World" with length 5.
```

```java
Input: s = " fly me to the moon "
Output: 4
// Explanation: The last word is "moon" with length 4.
```

```java
Input: s = "luffy is still joyboy"
Output: 6
// Explanation: The last word is "joyboy" with length 6.
```

**Constraints:**

- `1 <= s.length <= 10⁴`
- `s` consists of only English letters and spaces `' '`.
- There will be at least one word in `s`.

**Note:**

| Algorithm    | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Two Pointers | O(n)            | O(1)             |

從 `s` 的最後一個字元往前遍歷，先跳過空格，遇到第一個非空格字元就開始計算 `len`，直到遇到空格為止。
