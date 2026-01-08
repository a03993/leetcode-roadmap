# 151 Reverse Words in a String

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given an input string `s`, reverse the order of the **words**.

A **word** is defined as a sequence of non-space characters. The **words** in `s` will be separated by at least one space.

Return _a string of the words in reverse order concatenated by a single space_.

**Note** that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

**Example:**

```java
Input: s = "the sky is blue"
Output: "blue is sky the"
```

```java
Input: s = " hello world "
Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
```

```java
Input: s = "a good example"
Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
```

**Constraints:**

- `1 <= s.length <= 10⁴`
- `s` contains English letters (upper-case and lower-case), digits, and spaces `' '`.
- There is **at least** one word in `s`.

**Follow-up:** If the string data type is mutable in your language, can you solve it **in-place** with `O(1)` extra space?

**Note:**

| Topic        | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Two Pointers | O(n)            | O(n)             |

先用 `split` 把字串 `s` 依照**單一**空格切成陣列，然後再用 `filter` 過濾掉空字串。用 two pointers 從前後互換單詞位置，完成翻轉後再把單詞用空格連回字串。

💡 JS 由於**字串的不可變性**，這一題沒辦法做到 O(1) 的空間複雜度。

- `String.prototype.split()`: 將字串依照指定的符號切割成陣列
- `Array.prototype.filter()`: return 一個新陣列，包含原陣列中符合 callback 條件的元素
- `Array.prototype.join()`: 將陣列元素用指定的符號連接成字串
