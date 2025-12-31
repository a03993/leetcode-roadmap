# 172 Factorial Trailing Zeroes

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given an integer `n`, return _the number of trailing zeroes in `n!`_.

Note that `n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1`.

**Example:**

```java
Input: n = 3
Output: 0
// Explanation: 3! = 6, no trailing zero.
```

```java
Input: n = 5
Output: 1
// Explanation: 5! = 120, one trailing zero.
```

```java
Input: n = 0
Output: 0
```

**Constraints:**

- `0 <= n <= 10⁴`

**Follow up:** Could you write a solution that works in logarithmic time complexity?

| Topic          | Time Complexity | Space Complexity |
| -------------- | --------------- | ---------------- |
| Brute Force ❌ | O(n)            | O(1)             |
| Math           | O(log n)        | O(1)             |

1. Brute Force

    直接計算 `n!` 會很快溢位，尤其 n 超過 20 以上就會超出 JS 的安全整數範圍，甚至更小的 n 也可能溢位。

    ```js
    var trailingZeroes = function (n) {
        let sum = n;
        let count = 0;

        while (n > 1) {
            const next = n - 1;
            sum *= next;
            n--;
        }

        while (sum % 10 == 0 && sum != 0) {
            count++;
            sum = Math.floor(sum / 10);
        }

        return count;
    };

    // // Wrong Answer: e.g., 30! = 2.652528598121911e+32
    ```

2. Math

    尾隨零來源於乘積中 2\*5 配對，因為 2 的數量比 5 多，所以只需統計 `n!` 中有多少個 5 的倍數。

    Solution: 👉 [code](../codes/172_factorial_trailing_zeroes.js)
