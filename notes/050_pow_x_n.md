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

透過迴圈把底數乘自身 n 次，負指數先轉為正數再取倒數，得到 `xⁿ`。

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

    將指數拆成二進位，每次平方底數並在指數為奇數時乘到結果，快速計算 xⁿ，負指數先取倒數。

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
