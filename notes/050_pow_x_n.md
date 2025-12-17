# 50 Pow(x, n)

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Medium](https://img.shields.io/badge/Medium-ffb800)

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

## Approach

| Topics          | Category      | Key Idea                                                                           | Time Complexity | Space Complexity |
| --------------- | ------------- | ---------------------------------------------------------------------------------- | --------------- | ---------------- |
| Math, Recursion | Binary search | Use binary exponentiation (divide-and-conquer) to reduce number of multiplications | O(log n)        | O(1)             |

1. Initialize `num = n` and `result = 1`
2. If `num < 0`, set `x = 1 / x` and `num = -num` to handle negative exponent
3. If `num` is odd (`num % 2 != 0`), multiply `result` by `x`
4. Square `x` → `x *= x`
5. Divide `num` by 2 (floor division) → `num = Math.floor(num / 2)`
6. Return `result`

![Demo](https://img.shields.io/badge/Demo-x_=_2.00000,_n_=_10-white?style=flat-square)

| Step | num | result | x     | next num |
| ---- | --- | ------ | ----- | -------- |
| 1    | 10  | 2      | 4     | 5        |
| 2    | 5   | 4      | 16    | 2        |
| 3    | 2   | 4      | 256   | 1        |
| 4    | 1   | 1024   | 65536 | 0        |

### Complexity

1. **Time Complexity:** O(log n)
    - Each step halves `num`, so total steps ≈ log₂(n).

2. **Space Complexity:** O(1)
    - Only constant variables (`result`, `x`, `num`) are used.
