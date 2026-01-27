# 383 Ransom Note

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8?style=flat-square)

Given two strings `ransomNote` and `magazine`, return `true` _if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise_.

Each letter in `magazine` can only be used once in `ransomNote`.

**Example:**

```java
Input: ransomNote = "a", magazine = "b"
Output: false
```

```java
Input: ransomNote = "aa", magazine = "ab"
Output: false
```

```java
Input: ransomNote = "aa", magazine = "aab"
Output: true
```

**Constraints:**

- `1 <= ransomNote.length, magazine.length <= 10⁵`
- `ransomNote` and `magazine` consist of lowercase English letters.

**Note:**

| Algorithm | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Hash Map  | O(m+n)          | O(n)             |

用 map 儲存 `ransomNote` 的字元以及數量。

先遍歷 `ransomNote`，用 Map 記錄每個字母需要的數量；接著遍歷 `magazine`，遇到 Map 中的字母就將其數量減 1，數量減到 0 就刪除該字母。

最後檢查 Map 是否為空，若是空表示 `ransomNote` 的每個字母在 `magazine` 中都有對應數量。
