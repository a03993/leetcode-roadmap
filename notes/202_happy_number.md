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

**Note:**

| Topic        | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Hash Set     | O(1)            | O(1)             |
| Two Pointers | O(1)            | O(1)             |

If the number is happy, the sequence eventually reaches 1:

```java
19 → 82 → 68 → 100 → 1 → end
```

Otherwise, it falls into a cycle without reaching 1:

```java
2 → 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 → ...
```

1. Hash Set

👉 [code](../codes/202_happy_number.js)

2. Two Pointers

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

### Set vs Two Pointers

| Approach     | Advantages                         | Disadvantages                      |
| ------------ | ---------------------------------- | ---------------------------------- |
| Set          | Simple, easy to read and maintain  | Slightly more memory               |
| Two Pointers | Minimal memory, stable performance | Slightly harder to read/understand |
