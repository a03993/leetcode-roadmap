# 169 Majority Element(Top Interview 150)

Given an array `nums` of size `n`, return _the majority element_.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

**Example:**

```
Input: nums = [3,2,3]
Output: 3
```

```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 5 * 10⁴`
- `-10⁹ <= nums[i] <= 10⁹`
- The input is generated such that a majority element will exist in the array.

**Follow-up:** Could you solve the problem in linear time and in `O(1)` space?

## Approach

| Technique   | Method                     | Time Complexity | Space Complexity |
| ----------- | -------------------------- | --------------- | ---------------- |
| Sorting     | Sort and return middle     | O(n log n)      | O(1)             |
| Boyer-Moore | Single-pass candidate vote | O(n) ✅         | O(1)             |

<details>
<summary style="font-size: 1.25em; font-weight: bold">Sorting</summary>

- Sort the array numerically using `Array.prototype.sort()`.
- After sorting, the majority element always occupies the middle position, which can be found using `Math.floor()`.

### Code Skeleton

```
nums.sort((a, b) => a - b);
return nums[Math.floor(nums.length / 2)];
```

</details>

<details>
<summary style="font-size: 1.25em; font-weight: bold">Boyer-Moore</summary>

### Initial

- `candidate`: the current candidate element.
- `count`: the vote count for the candidate.

### Traversal Steps

- Condition: While `i < nums.length`, iterate through the array.
- Step:
    1. If `count == 0`, replace `candidate` with `nums[i]`.
    2. If the current element equals `candidate`, increment `count`; otherwise, decrement `count`.

</details>

## Notes

- **Sort** is simple and intuitive, but time complexity is `O(n log n)` due to sorting. Therefore, **Boyer-Moore** is the preferred approach.
    - **Sort:**
        - The majority element always occupies the middle position after sorting, regardless of the number of other distinct elements.

    - **Boyer-Moore:**
        - Whenever `count` drops to 0, the previous candidate has been "balanced out" by other elements.
        - Since the majority element appears more than n/2 times, it will remain as the candidate through all cancellations.
        - Therefore, the final `candidate` after traversal is guaranteed to be the majority element.
