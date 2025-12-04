# 202 Happy Number

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8?style=flat-square)

Write an algorithm to determine if a number `n` is happy.

A happy number is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it **loops endlessly in a cycle** which does not include 1.
- Those numbers for which this process **ends in 1** are happy.

Return _`true` if `n` is a happy number, and `false` if not_.

**Example:**

```java
Input: n = 19
Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
```

```java
Input: n = 2
Output: false
```

**Constraints:**

- `1 <= n <= 2³¹ - 1`

## Approach

<table>
    <thead>
        <tr>
            <th>Topics</th>
            <th>Category</th>
            <th>Key Idea</th>
            <th>Time Complexity</th>
            <th>Space Complexity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2">Hash Table, Math, Two Pointers</td>
            <td>Two Pointers ✅</td>
            <td>Detect cycle using slow/fast pointers on sum-of-squares sequence</td>
            <td>O(log n)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <td>Hash Set</td>
            <td>Use a set to detect cycles in sum-of-squares sequence</td>
            <td>O(log n)</td>
            <td>O(1)</td>
        </tr>
    </tbody>
</table>

If the number is happy, the sequence eventually reaches 1:

```java
19 → 82 → 68 → 100 → 1 → end
```

Otherwise, it falls into a cycle without reaching 1:

```java
2 → 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 → ...
```

#### Two Pointers

1. Create a helper function to calculate the next number by summing the squares of its digit.
2. Use slow and fast pointers to detect a cycle.
3. Return true if fast pointer reaches 1; otherwise, return false.

<div style="display:flex; justify-content:center; gap:2rem; margin-top:3rem">

<div>

![Demo](https://img.shields.io/badge/Demo-nums_=_19-white?style=flat-square)

|      | init | 1   | 2     |
| ---- | ---- | --- | ----- |
| slow | 19   | 82  | 68    |
| fast | 82   | 100 | **1** |

</div>

<div>

![Demo](https://img.shields.io/badge/Demo-nums_=_2-white?style=flat-square)

|      | init | 1   | 2   | 3   | 4   | 5   | 6   | 7      |
| ---- | ---- | --- | --- | --- | --- | --- | --- | ------ |
| slow | 2    | 4   | 16  | 37  | 58  | 89  | 145 | **42** |
| fast | 4    | 37  | 89  | 42  | 4   | 37  | 89  | **42** |

</div>

</div>

👉 [code](../codes/202_happy_number.js)

#### Hash Set

1. Create a set to keep track of numbers that have already been encountered.
2. While `n` does not reach 1 and is not in the set:
    - Add `n` to the set.
    - Calculate the sum of squares of its digit and update `n`.
3. Return true if `n` reaches 1 — _the number is happy_; otherwise, return false.

```js
var isHappy = function (n) {
    const seen = new Set();

    while (n != 1 && !seen.has(n)) {
        seen.add(n);
        let sum = 0;

        while (n > 0) {
            const digit = n % 10;

            sum += digit * digit;
            n = Math.floor(n / 10);
        }

        n = sum;
    }

    return n == 1;
};
```

### Complexity

#### Two Pointers

- **Time Complexity:** `O(log n)`
    - Each step sums the squares of digits of the current number (num has ~log n digits)
    - Converges to a number ≤ 243, so the number of iterations is effectively constant

- **Space Complexity:** `O(1)` － just tow pointers

#### Hash Set

- **Time Complexity**: `O(log n)`
    - Each step sums the squares of digits of the current number (num has ~log n digits)
    - Converges to a number ≤ 243, so the number of iterations is effectively constant

- **Space Complexity**: `O(n)` → `O(1)`
    - `n`: number in `seen`
    - Since **at most 243 numbers** are stored in the set, so it's effectively `O(1)`.

### Why Two Pointers is the better approach?

Although the Big-O is the same, the `Two Pointer` approach is generally **more efficient** than the `Hash Set` approach because:

| Feature                    | Set                             | Two Pointers                                  |
| -------------------------- | ------------------------------- | --------------------------------------------- |
| Space Usage                | Stores all seen numbers         | Only two pointers ✅                          |
| Memory Overhead            | Grows with sequence length      | Constant `O(1)` space ✅                      |
| Performance Predictability | Depends on number of iterations | Stable; does not depend on storing history ✅ |
