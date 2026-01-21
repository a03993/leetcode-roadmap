# 150 Evaluate Reverse Polish Notation

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

You are given an array of strings `tokens` that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return _an integer that represents the value of the expression_.

**Note** that:

- The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
- Each operand may be an integer or another expression.
- The division between two integers always **truncates toward zero**.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all the intermediate calculations can be represented in a **32-bit** integer.

**Example:**

```java
Input: tokens = ["2","1","+","3","*"]
Output: 9
// Explanation: ((2 + 1) \* 3) = 9
```

```java
Input: tokens = ["4","13","5","/","+"]
Output: 6
// Explanation: (4 + (13 / 5)) = 6
```

```java
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
// Explanation: ((10 _ (6 / ((9 + 3) _ -11))) + 17) + 5
// = ((10 _ (6 / (12 _ -11))) + 17) + 5
// = ((10 _ (6 / -132)) + 17) + 5
// = ((10 _ 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22
```

**Constraints:**

- `1 <= tokens.length <= 10⁴`
- `tokens[i]` is either an operator: `"+"`, `"-"`, `"*"`, or `"/"`, or an integer in the range `[-200, 200]`.

**Note:**

| Algorithm | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Stack     | O(n)            | O(n)             |

建立一個 `stack` 用來存暫存數字。遍歷 `tokens`，若遇到數字就 push 到 `stack`；若遇到運算符號就 pop 兩個數字，計算結果後再 push 回 `stack`。**減法和除法要注意順序**，除法也要記得使用 `Math.trunc` 取整數以符合題目要求 (truncate toward zero)，最後 `stack` 只剩一個元素，就是計算結果。
