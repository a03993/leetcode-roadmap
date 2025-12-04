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
            <td>Hash Set</td>
            <td>Use a set to detect cycles in sum-of-squares sequence</td>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <td>Two Pointers</td>
            <td>Detect cycle using slow/fast pointers on sum-of-squares sequence</td>
            <td>O(1)</td>
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

#### Hash Set

1. Create a set to keep track of numbers that have already been encountered.
2. While `n` does not reach 1 and is not in the set:
    - Add `n` to the set.
    - Calculate the sum of squares of its digit and update `n`.
3. Return true if `n` reaches 1 — _the number is happy_; otherwise, return false.

👉 [code](../codes/202_happy_number.js)

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

```js
var isHappy = function (n) {
    const getNext = (num) => {
        let sum = 0;

        while (num > 0) {
            const d = num % 10;
            sum += d * d;
            num = Math.floor(num / 10);
        }

        return sum;
    };

    let slow = n;
    let fast = getNext(n);

    while (fast != 1 && slow != fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }

    return fast == 1;
};
```

### Complexity

#### Two Pointer

- **Time Complexity:** O(1)
    - Each step computes sum-of-squares of digits: O(log n)
    - Sequence converges to a number ≤ 243: O(1)

- **Space Complexity:** O(1) － Only two pointers (`slow` and `fast`)

#### Hash Set

- **Time Complexity**: O(1)
    - Same reasoning as the two-pointer approach.

- **Space Complexity**: O(1)
    - Maximum 243 numbers stored in the Set: O(1)

### Set vs Two Pointer

| Approach    | Advantages                         | Disadvantages                      |
| ----------- | ---------------------------------- | ---------------------------------- |
| Set         | Simple, easy to read and maintain  | Slightly more memory               |
| Two Pointer | Minimal memory, stable performance | Slightly harder to read/understand |
