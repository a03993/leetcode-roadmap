# 88 Merge Sorted Array(Top Interview 150)

You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

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
- `-109 <= nums1[i], nums2[j] <= 109`

**Follow up:** Can you come up with an algorithm that runs in `O(m + n)` time?

## Approach

| Technique      | Method    | Time Complexity | Space Complexity |
| -------------- | --------- | --------------- | ---------------- |
| Three pointers | Traversal | O(m + n)        | O(1)             |

### Three pointers

- `i`: pointers to the last valid element of `nums1`.
- `j`: pointers to the last element of `nums2`.
- `k`: pointers to the last position of `nums1`.

### Traversal

- Condition: While `j >= 0` — as long as there are still elements from `nums2` to be placed.
- Step:
    1. Compare `nums1[i]` and `nums2[j]`, if `nums1[i] > nums2[j]`, place `nums1[i]` at `nums1[k]` and decrement `i`. Otherwise, place `nums2[j]` at `nums1[k]` and decrement `j`.
    2. Move `k` one step left each iteration.
    3. <a id="step3"></a>When `nums1` is exhausted (`i < 0`), the remaining elements of `nums2` will naturally be copied to the front of `nums1`.

## Notes

- The key insight is that filling from the back prevents overwriting elements in `nums1` that have not yet been compared.
- If `n = 0`, `nums2` is empty → `nums1` stays unchanged.
- If `m = 0`, `nums1` is empty → copy all from `nums2`. (Related to [Traversal Step 3](#step3))
