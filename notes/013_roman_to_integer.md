# 13 Roman to Integer

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

**Example:**

```java
Input: s = "III"
Output: 3
// Explanation: III = 3.
```

```java
Input: s = "LVIII"
Output: 58
// Explanation: L = 50, V= 5, III = 3.
```

```java
Input: s = "MCMXCIV"
Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

**Constraints:**

- `1 <= s.length <= 15`
- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
- It is **guaranteed** that s is a valid roman numeral in the range `[1, 3999]`.

**Note:**

| Algorithm                   | Time Complexity | Space Complexity |
| --------------------------- | --------------- | ---------------- |
| Greedy + Hash Map ✅        | O(n)            | O(1)             |
| Greedy + Stepwise Condition | O(n)            | O(1)             |

1. Greedy + Hash Map

    用 map 把每個 Roman 字母對應的整數值存起來。從左到右遍歷 `s`，**題目保證 input 是合法的羅馬數字**，因此如果 `curr` 小於 `next`，可直接視為減法組合（例如 `IV`、`IX`），就從 `sum` 中減掉當前值 `curr`；否則就把 `sum` 加上 `curr`。

    Solution: 👉 [code](../codes/013_roman_to_integer.js)

2. Greedy + Stepwise Condition

    從左到右遍歷 `s`，直接對每個 Roman 字母做條件判斷，遇到小數字在大數字前（如 `IV`、`IX`）就減去，否則就加上。直觀且安全，**可以避免把非法輸入（例如 `IM`）誤判為減法**，但程式碼較冗長，維護成本高。

    ```js
    var romanToInt = function (s) {
        let sum = 0;

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "I") {
                if (s[i + 1] === "V" || s[i + 1] === "X") {
                    sum -= 1;
                } else {
                    sum += 1;
                }
            }

            if (s[i] === "V") {
                sum += 5;
            }

            if (s[i] === "X") {
                if (s[i + 1] === "L" || s[i + 1] === "C") {
                    sum -= 10;
                } else {
                    sum += 10;
                }
            }

            if (s[i] === "L") {
                sum += 50;
            }

            if (s[i] === "C") {
                if (s[i + 1] === "D" || s[i + 1] === "M") {
                    sum -= 100;
                } else {
                    sum += 100;
                }
            }

            if (s[i] === "D") {
                sum += 500;
            }

            if (s[i] === "M") {
                sum += 1000;
            }
        }

        return sum;
    };
    ```
