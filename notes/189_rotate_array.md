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
      <td rowspan="3">Array, Math, Two Pointers</td>
      <td>Temporary Array</td>
      <td>Slice & Concat</td>
      <td>O(n)</td>
      <td>O(n)</td>
    </tr>
    <tr>
      <td>In-place Replacement</td>
      <td>Cyclic Replacement</td>
      <td>O(n)</td>
      <td>O(1)✅ </td>
    </tr>
    <tr>
      <td>In-place Reverse</td>
      <td>Three Reversals</td>
      <td>O(n)</td>
      <td>O(1)✅ </td>
    </tr>

  </tbody>
</table>

<details>
<summary style="font-size: 1.25em; font-weight: bold">Temporary Array</summary>

- Take the remainder of `k` to **avoid exceeding the array length**.
- Slice the last `k` elements.
- Concatenate the rest to form the rotated array.
- Overwrite `nums` with the new order.

### Code Skeleton

```
k = k % nums.length;

const temp = nums.slice(-k).concat(nums.slice(0, nums.length - k));

for (let i = 0; i < nums.length; i++) {
    nums[i] = temp[i];
}
```

</details>

<details>
<summary style="font-size: 1.25em; font-weight: bold">In-place Replacement</summary>

- Initialize `count = 0` to track how many elements have been rotated.
- Loop through the array starting from index 0:
    1. Set `current = i` and `prev = nums[i]`.
    2. Use a `do-while` loop to process the current cycle:
        - Calculate the new position: `next = (current + k) % n`.
        - Place `prev` at `nums[next]`
        - Save `temp` (the original `nums[next]` value) as the new `prev`.
        - Move `current` to `next`.
        - Increment `count`.
    3. Continue the `do-while` loop until `current` returns to the starting index (`i`) → one cycle complete.
- If `count < nums.length`, move to the next unprocessed index and start a new cycle.

### Code Skeleton

```
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
```

### Flow

| Iteration | current | next | prev | nums            | count |
| --------- | ------- | ---- | ---- | --------------- | ----- |
| 1         | 0       | 3    | 1    | [1,2,3,1,5,6,7] | 1     |
| 2         | 3       | 6    | 4    | [1,2,3,1,5,6,4] | 2     |
| 3         | 6       | 2    | 7    | [1,2,7,1,5,6,4] | 3     |
| 4         | 2       | 5    | 3    | [1,2,7,1,5,3,4] | 4     |
| 5         | 5       | 1    | 6    | [1,6,7,1,5,3,4] | 5     |
| 6         | 1       | 4    | 2    | [1,6,7,1,2,3,4] | 6     |
| 7         | 4       | 0    | 5    | [5,6,7,1,2,3,4] | 7     |

</details>

<details>
<summary style="font-size: 1.25em; font-weight: bold">In-place Reverse</summary>

- **Create a helper function** to reverse a subarray.
- Reverse entire array.
- Reverse the first `k` element. (from start to `k - 1`)
- Reverse the remaining element form index `k` to the end.

</details>

## Notes

- Always do `k = k % nums.length` to handle cases where `k` is larger than the array length.
- For large arrays (length up to 10⁵) — **In-place** methods are more efficient.
- Using `Array.prototype.reverse()` alone can only reverse entire array, so a helper function is needed to reverse subarrays in the **In-place Reverse** method.
