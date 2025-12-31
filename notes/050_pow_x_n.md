# 50 Pow(x, n)

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Implement pow(x, n), which calculates `x` raised to the power `n` (i.e., `xⁿ`).

**Example:**

```java
Input: x = 2.00000, n = 10
Output: 1024.00000
```

```java
Input: x = 2.10000, n = 3
Output: 9.26100
```

```java
Input: x = 2.00000, n = -2
Output: 0.25000
// Explanation: 2⁻² = 1/2² = 1/4 = 0.25
```

**Constraints:**

- `-100.0 < x < 100.0`
- `-2³¹ <= n <= 2³¹-1`
- `n` is an integer.
- Either `x` is not zero or `n > 0`.
- `-10⁴ <= xⁿ <= 10⁴`

| Topic                 | Time Complexity | Space Complexity |
| --------------------- | --------------- | ---------------- |
| Brute Force           | O(n) - TLE ❌   | O(1)             |
| Binary Exponentiation | O(log n)        | O(1)             |

1. Brute Force

    先處理特殊情況，像 0 次方或底數是 1。負指數就把底數取倒數。然後直接用迴圈把底數乘自己 n 次，最後得到結果。寫法簡單，但當 n 很大時會很慢。

    ```js
    var myPow = function (x, n) {
        if (n == 0 || x == 1) {
            return 1;
        }

        if (n < 0) {
            x = 1 / x;
            n = -n;
        }

        let sum = x;

        while (n > 1) {
            sum *= x;
            n--;
        }

        return sum;
    };

    // Time Limit Exceeded: e.g., x = 2.00000, n = -2147483648
    ```

2. Binary Exponentiation

    如果指數是負的，先把底數取倒數再轉成正指數。用平方加倍的方法，每次把指數二分，指數為奇數就把當前底數乘到結果上。

    Solution: 👉 [code](../codes/050_pow_x_n.js)

    ![Demo](https://img.shields.io/badge/Demo-x_=_2.00000,_n_=_10-white?style=flat-square)

    | Step   | x     | n   | result   |
    | ------ | ----- | --- | -------- |
    | init   | 2     | 10  | 1        |
    | 1      | 4     | 5   | 1        |
    | 2      | 16    | 2   | 4        |
    | 3      | 256   | 1   | 4        |
    | 4      | 65536 | 0   | 1024     |
    | return | -     | -   | **1024** |
