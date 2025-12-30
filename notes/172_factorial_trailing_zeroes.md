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

| Topics         | Key Idea                                                            | Time Complexity | Space Complexity |
| -------------- | ------------------------------------------------------------------- | --------------- | ---------------- |
| Brute Force ❌ | Compute `n!` and count trailing zeros                               | O(n)            | O(1)             |
| Math           | Count how many 5s appear when multiplying all numbers from 1 to `n` | O(log n)        | O(1)             |

1. Brute Force
    - JS can’t handle huge factorials exactly because it uses 64-bit floating point numbers. So calculating `n!` directly will give wrong results for big `n`.

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
    - Initialize `count = 0`
    - While `n > 0`
        - Divide `n` by 5
        - Add the n to `count`
    - Return `count`

    Solution: 👉 [code](../codes/172_factorial_trailing_zeroes.js)
    - Each trailing zero comes from a pair of 2 and 5
    - There are always more 2s than 5s in `n!`, so **counting the number of 5s is enough**
