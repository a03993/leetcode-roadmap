# 69 Sqrt(x)

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given a non-negative integer `x`, return _the square root of `x` rounded down to the nearest integer_. The returned integer should be **non-negative** as well.

You **must not use** any built-in exponent function or operator.

- For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

**Example:**

```java
Input: x = 4
Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
```

```java
Input: x = 8
Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
```

**Constraints:**

- `0 <= x <= 2³¹ - 1`

**Note:**

| Algorithm     | Time Complexity | Space Complexity |
| ------------- | --------------- | ---------------- |
| Brute Force   | O(√x)           | O(1)             |
| Binary Search | O(log x) ✅     | O(1)             |

1. Brute Force

    從 0 開始逐一嘗試平方，找到小於等於 x 的最大整數平方根。

    ```js
    var mySqrt = function (x) {
        let num = 0;

        while ((num + 1) * (num + 1) <= x) {
            num++;
        }

        return num;
    };
    ```

2. Binary Search

    用二分搜尋法，設定搜尋範圍 `left = 0`、`right = x`。每次取中間值 `mid`，如果 `mid * mid <= x`，代表平方根至少是 `mid`，把 `left` 移到 `mid + 1`；如果 `mid * mid > x`，平方根比 `mid` 小，把 `right` 移到 `mid - 1`。最後 return `right`。

    Solution: 👉 [code](../codes/069_sqrt_x.js)

**_Why Binary search is the better approach?_**

![Demo](https://img.shields.io/badge/Demo-num_=_8-white?style=flat-square)

| Step | Brute Force | Binary Search       |
| ---- | ----------- | ------------------- |
| init | num = 0     | left = 0, right = 8 |
| 1    | num = 1     | left = 0, right = 3 |
| 2    | num = 2     | left = 2, right = 3 |
| 3    | return num  | left = 3, right = 3 |
| 4    | -           | left = 3, right = 2 |
| 5    | -           | return right        |

- Brute Force: simple, just better for small `x`
- Binary Search: efficient, suitable for large `x`

| x         | Math (√x) | Binary Search (log₂x) |
| --------- | --------- | --------------------- |
| 8         | 2 ✅      | 3                     |
| 16        | 4         | 4                     |
| 64        | 8         | 6 ✅                  |
| 100       | 10        | 7 ✅                  |
| 1,000     | 32        | 10 ✅                 |
| 10,000    | 100       | 14 ✅                 |
| 1,000,000 | 1000      | 20 ✅                 |
