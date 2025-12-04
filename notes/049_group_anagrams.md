# 49 Group Anagrams

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given an array of strings `strs`, group the anagrams together. You can return the answer in **any order**.

**Example:**

```java
Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
// Explanation:
// There is no string in strs that can be rearranged to form "bat"
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other
```

```java
Input: strs = [""]
Output: [[""]]
```

```java
Input: strs = ["a"]
Output: [["a"]]
```

**Constraints:**

- `1 <= strs.length <= 10⁴`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.

## Approach

| Topics                             | Category       | Key Idea                               | Time Complexity | Space Complexity |
| ---------------------------------- | -------------- | -------------------------------------- | --------------- | ---------------- |
| Array, Hash Table, String, Sorting | Hash Map, Sort | Sort strings and group by key in a map | O(m\*n log n)   | O(m\*n)          |

1. Create a map to store the index of each anagram group.
2. Loop through each string, sort its letters to form a key.
3. If the key exists in the map, push the string to the corresponding group; if not, create a new group and store its index in the map.
4. After the loop, return the array of grouped anagrams.

### Complexity

1. **Time Complexity:** `O(m * n log n)`
    - `m`: length of `strs`
    - `n`: length of each string in `strs`
    - The total `O(m * n log n)` arises from:
        - The for loop iterates `m` times, which is `O(m)`.
        - Processing the key using `split()`, `sort()`, and `join()` takes `O(n log n)` each time.
        - Map operations and array push are `O(1)`

2. **Space Complexity:** `O(m * n)`
    - `m`: length of `strs`
    - `n`: length of each string in `strs`
    - Both map and the final array take `O(m * n)`
