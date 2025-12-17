# 172 Factorial Trailing Zeroes

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Medium](https://img.shields.io/badge/Medium-ffb800)

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

## Approach

| Topics | Category | Key Idea                   | Time Complexity | Space Complexity |
| ------ | -------- | -------------------------- | --------------- | ---------------- |
| Math   | Number   | Count factors of 5 in `n!` | O(log₅ n)       | O(1)             |

1. Initialize `count = 0`
2. Divide `n` by 5 using integer division: `n = Math.floor(n / 5)`
3. Add `n` to `count` － this counts the number of 5's contributed by multiples of 5, 25, 125, ...

### Complexity

1. **Time Complexity:** O(log₅ n)
    - Loop runs while `n > 0`
    - Each iteration: `n = Math.floor(n / 5)` → n shrinks by factor of 5

2. **Space Complexity:** O(1)
    - Only integer variables used, no extra storage

### Why this works?

- Each trailing zero in `n!` comes from a factor 10 → 2 \* 5
- 2’s are abundant, so the number of 5’s determines trailing zeros
- By summing `floor(n/5)` + `floor(n/25)` +` floor(n/125)` + …, we count all factors of 5
