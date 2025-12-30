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

| Topics        | Key Idea                                                      | Time Complexity | Space Complexity |
| ------------- | ------------------------------------------------------------- | --------------- | ---------------- |
| Math          | Start form 0, keep incrementing until `(num+1)^2 > x`         | O(√x)           | O(1)             |
| Binary Search | Use binary search to find the largest `mid` with `mid^2 <= x` | O(log x) ✅     | O(1)             |

1. Math
    - Start with `num = 0`
    - While `(num + 1) * (num + 1) <= x`, keep adding 1 to `num`
    - When the loop stops, `num` is the integer square root of `x`

    Solution:

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
    - Initialize `left = 0` and `right = x`
    - While `left <= right`
        - Const `mid = Math.floor((left + right) / 2)`
        - If `mid * mid <= x`, move `left = mid + 1`
        - Otherwise, move `right = mid - 1`
    - At the end, `right` is the integer square root of `x`

Solution: 👉 [code](../codes/069_sqrt_x.js)

![Demo](https://img.shields.io/badge/Demo-num_=_8-white?style=flat-square)

| Step | Math       | Binary Search       |
| ---- | ---------- | ------------------- |
| 1    | num = 1    | left = 0, right = 3 |
| 2    | num = 2    | left = 2, right = 3 |
| 3    | return nun | left = 3, right = 3 |
| 4    | -          | left = 3, right = 2 |
| 5    | -          | return right        |

**_Why Binary search is the better approach?_**

- Math: simple, just better for small `x`
- Binary search: efficient, suitable for large `x`

| x         | Math (√x) | Binary Search (log₂x) |
| --------- | --------- | --------------------- |
| 8         | 2 ✅      | 3                     |
| 16        | 4         | 4                     |
| 64        | 8         | 6 ✅                  |
| 100       | 10        | 7 ✅                  |
| 1,000     | 32        | 10 ✅                 |
| 10,000    | 100       | 14 ✅                 |
| 1,000,000 | 1000      | 20 ✅                 |
