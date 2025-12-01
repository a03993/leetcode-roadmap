# 58 Length of Last Word

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given a string `s` consisting of words and spaces, return _the length of the **last** word in the string_.

A **word** is a maximal substring consisting of non-space characters only.

**Example:**

```
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
```

```
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4.
```

```
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
```

**Constraints:**

- `1 <= s.length <= 10⁴`
- `s` consists of only English letters and spaces `' '`.
- There will be at least one word in `s`.

## Approach

| Topics | Category    | Key Idea                   | Time Complexity | Space Complexity |
| ------ | ----------- | -------------------------- | --------------- | ---------------- |
| String | Calculation | Traverse from end to start | O(n)            | O(1)             |

- Initialize:
    - `length` to count the length of the last word.
    - `started` to track if we have started counting the last word.

- Traverse the string from the end (`i = s.length - 1`) to the start.

- Steps:
    1. If current character is **not** a space, increment `length` and set `started = true`.
    2. If current character **is a space and started is true** - _means we finished counting the last word_, break the loop.

## Notes

- Using `started` avoids counting spaces after the last word.
