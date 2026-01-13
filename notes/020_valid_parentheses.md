# 20 Valid Parentheses

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example:**

```java
Input: s = "()"
Output: true
```

```java
Input: s = "()[]{}"
Output: true
```

```java
Input: s = "(]"
Output: false
```

```java
Input: s = "([])"
Output: true
```

```java
Input: s = "([)]"
Output: false
```

**Constraints:**

- `1 <= s.length <= 10⁴`
- `s` consists of parentheses only `'()[]{}'`.

**Note:**

| Algorithm | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Stack     | O(n)            | O(n)             |

建立一個空的陣列 `stack` 和一個對應括號的映射 map。從頭遍歷字串 `s`，如果遇到左括號 `(`、`[`、`{`，就把它放進 `stack`；如果遇到右括號 `)`、`]`、`}`，就檢查 `stack` 是否為空，或 `stack` 的最後一項是否為對應的括號，若不符合就返回 false，否則則用 `pop()` 把 `stack` 的最後一項移除。遍歷完如果 `stack` 為空陣列，代表所有括號配對正確，返回 true，否則返回 false。
