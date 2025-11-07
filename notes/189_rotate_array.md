# 189 Rotate Array(Top Interview 150)

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

| Technique          | Method         | Time Complexity | Space Complexity |
| ------------------ | -------------- | --------------- | ---------------- |
| Temporary Array    | Slice & Concat | O(n)            | O(n)             |
| Cyclic Replacement | Traversal      | O(n)            | O(1) ✅          |
| Reverse            | Reverse        | O(n)            | O(1) ✅          |

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
<summary style="font-size: 1.25em; font-weight: bold">Cyclic Replacement</summary>

- Start at index 0 and store index in `current` and element in `prev`.
- Calculate the new position for this element: `next = (current + k) % n`.
- Place `prev` at `next`, and store the original value at `next` as the new `prev`.
- Move to `next` and repeat until return to the starting index → one cycle is complete.
- If there ate still elements left(`count < nums.length`), move to the next unprocessed index and start a new cycle.

### Code Skeleton

```
k = k % nums.length;

let count = 0;

for (let i = 0; count < nums.length; i++) {
    let current = i;
    let prev = nums[i];

    do {
        const next = (current + k) % nums.length;
        const temp = nums[next];

        nums[next] = prev;
        prev = temp;
        current = next;
        count++;
    } while (current !== i);
}
```

</details>

<details>
<summary style="font-size: 1.25em; font-weight: bold">Reverse</summary>

- Create a helper function to reverse a subarray. (Using `Array.prototype.reverse()` alone can only reverse entire array.)
- Reverse entire array.
- Reverse the first `k` element. (from start to `k - 1`)
- Reverse the remaining element form index `k` to the end.

</details>

## Notes

- Always do `k = k % nums.length` to handle cases where `k` is larger than the array length.
- Normalize your approach for large arrays (length up to 10⁵) — **in-place** methods (Cyclic Replacement or Reverse) is efficient.
