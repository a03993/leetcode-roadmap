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

| Topic    | Time Complexity | Space Complexity |
| -------- | --------------- | ---------------- |
| Array    | O(m+n)          | O(1) ✅          |
| Hash Map | O(m+n)          | O(n)             |

1. Array

    用固定長度陣列統計 magazine 的字母數量，遍歷 ransomNote 扣除數量，不足即無法構造，全部扣完即能構造。

    👉 [code](../codes/383_ransom_note.js)

2. Hash Map

    用 Hash map 統計 ransomNote 需要的字符數，遍歷 magazine 消耗字符，全部消耗完表示可以構造。

    ```js
    var canConstruct = function (ransomNote, magazine) {
        const map = new Map();

        for (let char of ransomNote) {
            map.set(char, (map.get(char) || 0) + 1);
        }

        for (let char of magazine) {
            if (map.has(char)) {
                const count = map.get(char) - 1;

                if (count == 0) {
                    map.delete(char);
                } else {
                    map.set(char, count);
                }

                if (map.size == 0) {
                    return true;
                }
            }
        }

        return map.size == 0;
    };
    ```

### Why Array is the better approach?

| Approach | Advantages                  | Disadvantages                |
| -------- | --------------------------- | ---------------------------- |
| Array    | Fast, low memory, simple    | Only works for lowercase a–z |
| Hash Map | Flexible for any characters | Slightly slower, more code   |

- Array: Directly grab the item from the drawer, straightforward and immediate.
- Map: First find the key (hash it), handle possible collisions, then open the drawer.
