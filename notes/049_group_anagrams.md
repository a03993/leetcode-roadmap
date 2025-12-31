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

**Note:**

| Topic             | Time Complexity | Space Complexity |
| ----------------- | --------------- | ---------------- |
| Hash Table + Sort | O(m\*n log n)   | O(m\*n)          |

對每個字串將字母排序後作為 key，如果 Map 已經存在這個 key，就把字串加入對應的 arr 中；否則建立新 arr。
