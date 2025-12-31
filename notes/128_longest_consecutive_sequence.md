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

**Note:**

| Topic    | Time Complexity | Space Complexity |
| -------- | --------------- | ---------------- |
| Hash Set | O(n)            | O(n)             |

利用 Set 快速查找序列起點，從每個起點往右擴展計算連續序列長度，更新最大值。

![Demo](https://img.shields.io/badge/Demo-nums_=_[100,_4,_200,_1,_3,_2]-white?style=flat-square)

| num | start | currNum       | currLen | maxLength |
| --- | ----- | ------------- | ------- | --------- |
| 100 | ✅    | 100           | 1       | 1         |
| 4   | -     | -             | -       | 1         |
| 200 | ✅    | 200           | 1       | 1         |
| 1   | ✅    | 1 → 2 → 3 → 4 | 4       | 1 → 4     |
| 3   | -     | -             | -       | 4         |
| 2   | -     | -             | -       | 4         |
