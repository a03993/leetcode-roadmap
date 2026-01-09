# 6 Zigzag Conversion

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

```java
string convert(string s, int numRows);
```

**Example:**

```java
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

```java
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
```

```java
Input: s = "A", numRows = 1
Output: "A"
```

**Constraints:**

- `1 <= s.length <= 1000`
- `s` consists of English letters (lower-case and upper-case), `','` and `'.'`.
- `1 <= numRows <= 1000`

**Note:**

| Topic  | Time Complexity | Space Complexity |
| ------ | --------------- | ---------------- |
| String | O(n)            | O(n)             |

用一個陣列 `rows` 存每一行的字串，從上到下再回到上 (e.g., 0, 1, 2, 1, 0, 1, 2, ...) 依序把 `s` 的字元加入對應行 `curRow`。碰到第一行或最後一行就透過 `goingDown` 改變方向。最後把 `rows` 每一行字串串起來，就是最終 Z 字形結果。
