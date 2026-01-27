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

| Algorithm | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| String    | O(n)            | O(n)             |

建立一個長度為 `numRows` 的陣列 `rows`，使用指標 `currRow` 表示當前行，`goingDown` 控制方向（向下或向上）。

遍歷字串 `s`：

- 將當前字元加入 `rows[currRow]`
- 如果走到最上面或最下面就反轉方向 `goingDown = !goingDown`
- 根據 `goingDown` 更新 `currRow++` 或 `currRow--`

最後用 `join("")` 把 `rows` 的所有行串起來，即為 zigzag 排列後的結果。
