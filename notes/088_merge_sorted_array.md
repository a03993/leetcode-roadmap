# 88 Merge Sorted Array

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

**Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order**.

The final sorted array should not be returned by the function, but instead be _stored inside the array `nums1`_. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

**Example:**

```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```

```
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```

**Constraints:**

- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10⁹ <= nums1[i], nums2[j] <= 10⁹`

**Follow up:** Can you come up with an algorithm that runs in `O(m + n)` time?

## Approach

| Topics                       | Category       | Key Idea                                              | Time Complexity | Space Complexity |
| ---------------------------- | -------------- | ----------------------------------------------------- | --------------- | ---------------- |
| Array, Two Pointers, Sorting | In-place Merge | Use read/write pointers to merge `nums2` into `nums1` | O(m + n)        | O(1)             |

- Pointers:
    - `i` (read pointer): Last element in `nums1`.
    - `j` (read pointer): Last element in `nums2`.
    - `k` (write pointer): Last position in the merged `nums1`.

- Loop Condition: While `j >= 0` — _as long as there are elements in `nums2` to merge in `nums1`._

- Steps:
    1. If `nums1[i] > nums2[j]`, write `nums1[i]` to `nums1[k]` and decrement `i`, write `nums2[j]` to `nums1[k]` and decrement `j` otherwise.
    2. Decrement `k` each iteration.

## Notes

- Filling from the back prevents overwriting elements in `nums1` that have not yet been compared.
- Always compare `nums1[i] > nums2[j]`, **not the other way around**!
    - Ensures that when `i < 0`, remaining elements in `nums2` are safely copied to the front of `nums1`.
    - Reversing the comparison (`nums2[j] > nums1[i]`) can lead to `undefined` comparisons and may cause infinite loops or timeout:

        ```
        let i = m - 1;
        let j = n - 1;
        let k = m + n - 1;

        while (j >= 0) {
            if (nums2[j] > nums1[i]) {
                nums1[k] = nums2[j];
                j--;
            } else {
                nums1[k] = nums1[i];
                i--;
            }
            k--;
        }
        ```

        <span style="color: red; font-weight: bold">❌ Error: Time Limit Exceeded</span>
        - <span style="color: red;">When `i = -1`, `nums[i]` is `undefined`.</span>
        - <span style="color: red;">`nums2[j] > nums1[i]` → `false`.</span>
        - <span style="color: red;">Enter `else` → decrement `i` → `i` becomes `-2`, `-3`...</span>
        - <span style="color: red;">`j` is always the same → infinite loops → timeout.</span>

- Edge cases:
    - If `n = 0`: `nums2` is empty → `nums1` stays unchanged.
    - If `m = 0`: `nums1` is empty → copy all elements from `nums2`.
