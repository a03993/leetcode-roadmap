# 69 Sqrt(x)

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given a non-negative integer `x`, return _the square root of `x` rounded down to the nearest integer_. The returned integer should be **non-negative** as well.

You **must not use** any built-in exponent function or operator.

- For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

**Example:**

```
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
```

```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
```

**Constraints:**

- `0 <= x <= 2³¹ - 1`

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
      <td rowspan="2">Array, Binary Search</td>
      <td rowspan="2">Calculation</td>
      <td>Iterative check</td>
      <td>O(sqrt(x))</td>
      <td>O(1) </td>
    </tr>
    <tr>
      <td>Binary search</td>
      <td>O(log x) ✅</td>
      <td>O(1)</td>
    </tr>
  </tbody>
</table>

<details>
<summary style="font-size: 1.25em; font-weight: bold">Iterative check</summary>

- Loop Condition: While `(num + 1) * (num + 1) <= x`.

- Steps:
    1. Initialize `num = 0`.
    2. If `true`, increment `num`.

    ```
    [start] → [num=0] → [check (num+1)^2 <= x?] → [num=num+1]
                        | Yes                         |
                        └─────────────────────────────┘
                        |
                        No
                        ↓
                    [return num]

    Example: x = 8
    [start] → [0] → [1^2 <= 8?] → [1] → [2^2 <= 8?] → [2] → [3^2 <= 8?] → [return 2]
    ```

- Code Skeleton:

```
let num = 0;

while ((num + 1) * (num + 1) <= x) {
    num++;
}

return num;
```

</details>

<details>
<summary style="font-size: 1.25em; font-weight: bold">Binary search</summary>

- Initialize:
    - Set `left` to `0` to represent the **minimum** possible value of the square root.
    - Set `right` to `x` to represent the **maximum** possible value of the square root.

- Loop Condition: While `left <= right` - _means valid search range remains_.

- Steps:
    1. Calculate `mid` as the floor `of (left + right) / 2`, which represents the candidate integer square root.
    2. If `mid * mid <= x`, this means `mid` could be the answer, but there might be a larger integer that also satisfies the condition. So, move the lower bound up: `left = mid + 1`.
    3. If `mid * mid > x`, this means `mid` is too large to be the square root. Move the upper bound down: `right = mid - 1`.

    ```
    [start] → [left=0, right=x] → [mid=(left+right)//2] → [mid^2 <= x?]
                        | Yes                     | No
                        ↓                         ↓
            [left=mid+1]                  [right=mid-1]
                        └───────────────┘
                            |
                            Repeat until left > right
                            ↓
                            [return right]

    Example: x = 8
    [start] → [0,8] → mid=4 → 16>8 → right=3
            → mid=1 → 1<=8 → left=2
            → mid=2 → 4<=8 → left=3
            → mid=3 → 9>8 → right=2 → return 2
    ```

</details>

## Notes

- Iterative: simple, `O(sqrt(x))`, better for **small `x`**.
- Binary search: efficient, `O(log x)`, suitable for **large `x`**.

    | x         | Iterative √x | Binary Search log2(x) |
    | --------- | ------------ | --------------------- |
    | 16        | 4            | 4                     |
    | 64        | 8            | 6                     |
    | 100       | 10           | 7                     |
    | 1,000     | 32           | 10                    |
    | 10,000    | 100          | 14                    |
    | 1,000,000 | 1000         | 20                    |

- In binary search, `right` holds the **largest integer whose square ≤ x**.
