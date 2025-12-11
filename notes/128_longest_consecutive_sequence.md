# 128 Longest Consecutive Sequence

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given an unsorted array of integers `nums`, return _the length of the longest consecutive elements sequence_.

You must write an algorithm that runs in `O(n)` time.

**Example:**

```java
Input: nums = [100,4,200,1,3,2]
Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

```java
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```

```java
Input: nums = [1,0,1,2]
Output: 3
```

**Constraints:**

- `0 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Approach

| Topics                        | Category | Key Idea                                                                                      | Time Complexity | Space Complexity |
| ----------------------------- | -------- | --------------------------------------------------------------------------------------------- | --------------- | ---------------- |
| Array, Hash Table, Union Find | Hash Set | Use a Set to store numbers; only start counting sequence from numbers that are sequence heads | O(n)            | O(n)             |

1. Put all numbers from the array into a Set for `O(1)` lookups.
2. Initialize `maxLength = 0`.
3. Loop through each number in the Set:
    - If `num - 1` is not in the Set, treat `num` as the sequence start.
    - Count consecutive numbers (`num`, `num + 1`, `num + 2`...) until the sequence ends.
    - Update `maxLength` if the current sequence is longer.
4. After the loop, return `maxLength` as the length of the longest consecutive sequence.

![Demo](https://img.shields.io/badge/Demo-nums_=_[100,_4,_200,_1,_3,_2]-white?style=flat-square)

| num | start | currNum       | currLen | maxLength |
| --- | ----- | ------------- | ------- | --------- |
| 100 | ✅    | 100           | 1       | 1         |
| 4   | -     | -             | -       | 1         |
| 200 | ✅    | 200           | 1       | 1         |
| 1   | ✅    | 1 → 2 → 3 → 4 | 4       | 1 → 4     |
| 3   | -     | -             | -       | 4         |
| 2   | -     | -             | -       | 4         |

### Complexity

n = `nums.length`

1. **Time Complexity:** O(n)
    - Traverse the Set: O(n)
    - For each sequence starting number, iterate in the `while` loop: O(n)
    - `Set.has()`: O(1)
    - `Math.max()`: O(1)

2. **Space Complexity:** O(n)
    - Store all numbers from `nums` in the Set: O(n)
    - Variables `maxLength`, `currNum`, `currLength`: O(1)
