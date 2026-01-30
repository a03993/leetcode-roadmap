# 139 Word Break

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

**Note** that the same word in the dictionary may be reused multiple times in the segmentation.

**Example:**

```java
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
```

```java
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
```

```java
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
```

**Constraints:**

- `1 <= s.length <= 300`
- `1 <= wordDict.length <= 1000`
- `1 <= wordDict[i].length <= 20`
- `s` and `wordDict[i]` consist of only lowercase English letters.
- All the strings of `wordDict` are **unique**.

**Note:**

| Algorithm                | Time Complexity | Space Complexity |
| ------------------------ | --------------- | ---------------- |
| Dynamic Programming (DP) | O(n²)           | O(1)             |

這一題要判斷 `wordDict` 的字串是否可以組成 `s`，也就是說 `s` 能不能被拆解成 `wordDict` 的字串。以 `s = "leetcode"` 舉例，要從 `wordDict` 中：

- 找出一個單字可以到達第 4 個字元 (leet)
- 如果有的話，就要再繼續檢查有沒有另一個單字可以從第 4 個字元出發，到達第 8 個字元 (code)
- 如果有的話就回傳 `true`

建立一個長度為 `s.length + 1` 的 array `dp`，用來記錄當前的字元是否可以被拆解，每一項預設為不可被拆解，都先填入 `false`，第 0 項是空字元視為可以拆解，設為 `true`。

用兩個迴圈：

- 外層迴圈從第 1 個字元開始 (`i = 1`) 遍歷 `s` 所有字元
- 內層迴圈從 `j = 0` 遍歷小於 `i` 的範圍
    - 判斷當前的字元是否可以被拆解：`dp[j] = true`
    - 如果可以被拆解就判斷當前 `s` 從 `j` 到 `i` 所構成的 sub string 其是否存在於 `wordDict`
    - 有的話就代表到這個字元可以被拆解，將 `dp[i]` 設為 `true`，並且直接 break (因為對於 `i` 這個位置來說，只要有一種拆解方式可行，不需要再測試其他拆法)

一直到遍歷完後，最後一個字元 `dp[s.length]` 如果可以拆解，就代表 `s` 可以由 `wordDict` 組成。

![Demo](https://img.shields.io/badge/Demo-s_=_"leetcode",_wordDict_=_["leet",_"code"]-white?style=flat-square)

| i    | j    | sub      | dp                              |
| ---- | ---- | -------- | ------------------------------- |
| init | init | -        | [t, f, f, f, f, f, f, f, f]     |
| 1    | 0    | l        | [t, f, f, f, f, f, f, f, f]     |
| 2    | 0    | le       | [t, f, f, f, f, f, f, f, f]     |
| 3    | 0    | lee      | [t, f, f, f, f, f, f, f, f]     |
| 4    | 0    | leet     | [t, f, f, f, **t**, f, f, f, f] |
| 5    | 0    | leetc    | [t, f, f, f, t, f, f, f, f]     |
| 5    | 4    | c        | [t, f, f, f, t, f, f, f, f]     |
| 6    | 0    | leetco   | [t, f, f, f, t, f, f, f, f]     |
| 6    | 4    | co       | [t, f, f, f, t, f, f, f, f]     |
| 7    | 0    | leetcod  | [t, f, f, f, t, f, f, f, f]     |
| 7    | 4    | cod      | [t, f, f, f, t, f, f, f, f]     |
| 8    | 0    | leetcode | [t, f, f, f, t, f, f, f, f]     |
| 8    | 4    | code     | [t, f, f, f, t, f, f, f, **t**] |

![Demo](https://img.shields.io/badge/Demo-s_=_"applepenapple",_wordDict_=_["apple",_"pen"]-white?style=flat-square)

| i    | j    | sub           | dp                                             |
| ---- | ---- | ------------- | ---------------------------------------------- |
| init | init | -             | [t, f, f, f, f, f, f, f, f, f, f, f, f, f]     |
| 1    | 0    | a             | [t, f, f, f, f, f, f, f, f, f, f, f, f, f]     |
| 2    | 0    | ap            | [t, f, f, f, f, f, f, f, f, f, f, f, f, f]     |
| 3    | 0    | app           | [t, f, f, f, f, f, f, f, f, f, f, f, f, f]     |
| 4    | 0    | appl          | [t, f, f, f, f, f, f, f, f, f, f, f, f, f]     |
| 5    | 0    | apple         | [t, f, f, f, f, **t**, f, f, f, f, f, f, f, f] |
| 6    | 0    | applep        | [t, f, f, f, f, t, f, f, f, f, f, f, f, f]     |
| 6    | 5    | p             | [t, f, f, f, f, t, f, f, f, f, f, f, f, f]     |
| 7    | 0    | applepe       | [t, f, f, f, f, t, f, f, f, f, f, f, f, f]     |
| 7    | 5    | pe            | [t, f, f, f, f, t, f, f, f, f, f, f, f, f]     |
| 8    | 0    | applepen      | [t, f, f, f, f, t, f, f, f, f, f, f, f, f]     |
| 8    | 5    | pen           | [t, f, f, f, f, t, f, f, **t**, f, f, f, f, f] |
| 9    | 0    | applepena     | [t, f, f, f, f, t, f, f, t, f, f, f, f, f]     |
| 9    | 5    | pena          | [t, f, f, f, f, t, f, f, t, f, f, f, f, f]     |
| 9    | 8    | a             | [t, f, f, f, f, t, f, f, t, f, f, f, f, f]     |
| 10   | 0    | applepenap    | [t, f, f, f, f, t, f, f, t, f, f, f, f, f]     |
| 10   | 5    | penap         | [t, f, f, f, f, t, f, f, t, f, f, f, f, f]     |
| 10   | 8    | ap            | [t, f, f, f, f, t, f, f, t, f, f, f, f, f]     |
| 11   | 0    | applepenapp   | [t, f, f, f, f, t, f, f, t, f, f, f, f, f]     |
| 11   | 5    | penapp        | [t, f, f, f, f, t, f, f, t, f, f, f, f, f]     |
| 11   | 8    | app           | [t, f, f, f, f, t, f, f, t, f, f, f, f, f]     |
| 12   | 0    | applepenappl  | [t, f, f, f, f, t, f, f, t, f, f, f, f, f]     |
| 12   | 5    | penappl       | [t, f, f, f, f, t, f, f, t, f, f, f, f, f]     |
| 12   | 8    | appl          | [t, f, f, f, f, t, f, f, t, f, f, f, f, f]     |
| 13   | 0    | applepenapple | [t, f, f, f, f, t, f, f, t, f, f, f, f, f]     |
| 13   | 5    | penapple      | [t, f, f, f, f, t, f, f, t, f, f, f, f, f]     |
| 13   | 8    | apple         | [t, f, f, f, f, t, f, f, t, f, f, f, f, **t**] |
