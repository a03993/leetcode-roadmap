# 169 Majority Element

<span style="background-color: #6CC644; color: white; padding: 0.2em 0.6em; border-radius: 12px; font-size: 0.9em">Top Interview 150</span>

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
      <td rowspan="2">Array, Hash Table, Divide and Conquer, Sorting, Counting</td>
      <td>Sorting</td>
      <td>Sort and return middle</td>
      <td>O(n log n)</td>
      <td>O(1)</td>
    </tr>
    <tr>
      <td>In-place Voting</td>
      <td>Boyer-Moore</td>
      <td>O(n) ✅</td>
      <td>O(1)</td>
    </tr>
  </tbody>
</table>

<details>
<summary style="font-size: 1.25em; font-weight: bold">Sorting</summary>

- Sort the array using `Array.prototype.sort()`.
- After sorting, the majority element always occupies the middle position, which can be found using `Math.floor()`.

- Code Skeleton:

```
nums.sort((a, b) => a - b);
return nums[Math.floor(nums.length / 2)];
```

</details>

<details>
<summary style="font-size: 1.25em; font-weight: bold">Boyer-Moore</summary>

- Initialization:
    - `candidate`: The current candidate element.
    - `count`: The vote count for the candidate.

- Traverse the array once.

- Steps:
    1. If `count == 0`, update `candidate` to `nums[i]`.
    2. If the current element equals `candidate`, increment `count`; otherwise, decrement `count`.

</details>

## Notes

- **Sort** is simple and intuitive, but time complexity is `O(n log n)` due to sorting. Therefore, **Boyer-Moore** is the preferred approach.
    - **Sort:**
        - **The majority element always occupies the middle position** after sorting, regardless of other elements.

    - **Boyer-Moore:**
        - Whenever `count` drops to 0, the previous candidate has been **balanced out** by other elements.
        - Since the majority element appears more than n/2 times, the final `candidate` after traversal is guaranteed to be the majority element.
