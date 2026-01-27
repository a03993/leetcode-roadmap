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

| Algorithm       | Time Complexity | Space Complexity |
| --------------- | --------------- | ---------------- |
| Hash Map + Sort | O(m\*n log n)   | O(m\*n)          |

建立一個 map，key 儲存**排序後的字串**，value 儲存**索引**。

遍歷 `strs`，將該項的字串拆成字元陣列、排序、再 join 回字串，把這個字串當作 key 跟 map 比對，若有這個 key 就取得該索引並 push 到 `res` 的該項中；如果沒有就把 key 存入 map，並在 `res` 新增一個 group。

遍歷完 `strs` 後回傳 `res` 即為所求。
