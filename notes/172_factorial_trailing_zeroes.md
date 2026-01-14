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

**Note:**

| Algorithm      | Time Complexity | Space Complexity |
| -------------- | --------------- | ---------------- |
| Brute Force ❌ | O(n)            | O(1)             |
| Math           | O(log₅ n)       | O(1)             |

1. Brute Force

    直接計算 `n!` 會很快溢位，尤其 `n` 超過 20 以上就會超出 JS 的安全整數範圍，甚至更小的 `n` 也可能溢位。

    ```js
    var trailingZeroes = function (n) {
        let sum = 1;
        let count = 0;

        while (n) {
            sum *= n;
            n--;
        }

        while (sum % 10 === 0 && sum != 0) {
            sum = Math.floor(sum / 10);
            count++;
        }

        return count;
    };

    // // Wrong Answer: e.g., n = 30
    ```

2. Math

    尾階乘末尾的零來源於 10，而 10 = 2 × 5。因為階乘中 2 的數量一定比 5 多，所以只需計算階乘中 5 的因子數量。每次把 `n` 除以 5，累加到 `count`，然後用整除更新 `n`。重複直到 `n` 為 0，`count` 就是階乘末尾零的個數。

    Solution: 👉 [code](../codes/172_factorial_trailing_zeroes.js)

    ![Demo](https://img.shields.io/badge/Demo-n_=5-white?style=flat-square)

    | step | n   | count      |
    | ---- | --- | ---------- |
    | init | 5   | 0          |
    | 1    | 1   | 1          |
    | 2    | 0   | 1 (return) |

    Time Complexity `O(log₅ n)`: log₅ 5 = 1

    ![Demo](https://img.shields.io/badge/Demo-n_=200-white?style=flat-square)

    | step | n   | count       |
    | ---- | --- | ----------- |
    | init | 200 | 0           |
    | 1    | 40  | 40          |
    | 2    | 8   | 48          |
    | 3    | 1   | 49          |
    | 4    | 0   | 49 (return) |

    Time Complexity `O(log₅ n)`: log₅ 200 ≒ 3 (5 x 5 x 5 = 125)
