# 189 Rotate Array

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

**Example:**

```
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

```
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```

**Constraints:**

- `1 <= nums.length <= 10⁵`
- `-2³¹ <= nums[i] <= 2³¹ - 1`
- `0 <= k <= 10⁵`

**Follow up:**

- Try to come up with as many solutions as you can. There are at least **three** different ways to solve this problem.
- Could you do it in-place with `O(1)` extra space?

**Note:**

| Topic              | Time Complexity | Space Complexity |
| ------------------ | --------------- | ---------------- |
| Slice + Concat     | O(n)            | O(n)             |
| Cyclic Replacement | O(n)            | O(1)✅           |
| Three Reversals    | O(n)            | O(1)✅           |

1. Slice + Concat

```js
var rotate = function (nums, k) {
    k = k % nums.length;

    const temp = nums.slice(-k).concat(nums.slice(0, nums.length - k));

    for (let i = 0; i < nums.length; i++) {
        nums[i] = temp[i];
    }
};
```

2. Cyclic Replacement

```js
var rotate = function (nums, k) {
    const n = nums.length;
    k = k % n;

    let count = 0;

    for (let i = 0; count < n; i++) {
        let current = i;
        let prev = nums[i];

        do {
            const next = (current + k) % n;
            const temp = nums[next];

            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        } while (current !== i);
    }
};
```

| Iteration | current | next | prev | nums            | count |
| --------- | ------- | ---- | ---- | --------------- | ----- |
| 1         | 0       | 3    | 1    | [1,2,3,1,5,6,7] | 1     |
| 2         | 3       | 6    | 4    | [1,2,3,1,5,6,4] | 2     |
| 3         | 6       | 2    | 7    | [1,2,7,1,5,6,4] | 3     |
| 4         | 2       | 5    | 3    | [1,2,7,1,5,3,4] | 4     |
| 5         | 5       | 1    | 6    | [1,6,7,1,5,3,4] | 5     |
| 6         | 1       | 4    | 2    | [1,6,7,1,2,3,4] | 6     |
| 7         | 4       | 0    | 5    | [5,6,7,1,2,3,4] | 7     |

3. Three Reversals

    Solution: 👉 [code](../codes/189_rotate_array.js)
