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

| Topic  | Time Complexity | Space Complexity |
| ------ | --------------- | ---------------- |
| String | O(n)            | O(1)             |

從字串尾端往前掃描，計算最後一個單詞的長度，遇到空格就停止。
