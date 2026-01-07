# 12 Integer to Roman

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Seven different symbols represent Roman numerals with the following values:

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

- If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
- If the value starts with 4 or 9 use the **subtractive form** representing one symbol subtracted from the following symbol, for example, 4 is 1 (`I`) less than 5 (`V`): `IV` and 9 is 1 (`I`) less than 10 (`X`): `IX`. Only the following subtractive forms are used: 4 (`IV`), 9 (`IX`), 40 (`XL`), 90 (`XC`), 400 (`CD`) and 900 (`CM`).
- Only powers of 10 (`I`, `X`, `C`, `M`) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (`V`), 50 (`L`), or 500 (`D`) multiple times. If you need to append a symbol 4 times use the **subtractive form**.

Given an integer, convert it to a Roman numeral.

**Example:**

```java
Input: num = 3749
Output: "MMMDCCXLIX"
// Explanation:
// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
// 700 = DCC as 500 (D) + 100 (C) + 100 (C)
// 40 = XL as 10 (X) less of 50 (L)
// 9 = IX as 1 (I) less of 10 (X)

// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
```

```java
Input: num = 58
Output: "LVIII"
// Explanation:
// 50 = L
// 8 = VIII
```

```java
Input: num = 1994
Output: "MCMXCIV"
// Explanation:
// 1000 = M
// 900 = CM
// 90 = XC
// 4 = IV
```

**Constraints:**

- `1 <= num <= 3999`

**Note:**

| Topic  | Time Complexity | Space Complexity |
| ------ | --------------- | ---------------- |
| Greedy | O(1)            | O(1)             |

用兩個陣列分別存數值 `vals` 和對應羅馬字母 `romans`，遍歷 `vals`，每次當 `num` ≥ 當前值，就減掉該值並把對應羅馬字母加到結果字串。重複直到數字降到 0，就得到完整羅馬數字。比長 if-else 版簡潔又易讀。

- if-else 版：

    從最大數值開始逐步減去，也就是從 1000 到 1，對應加上相應的羅馬字母。需要注意特殊組合符號 (4, 9, 40, 90, 400, 900)，最後累加成完整羅馬數字。這種方法直觀，但比較不易讀。

    ```js
    var intToRoman = function (num) {
        let n = num;
        let str = "";

        if (Math.floor(n / 1000)) {
            let count = Math.floor(n / 1000);
            n -= count * 1000;

            while (count > 0) {
                str += "M";
                count--;
            }
        }

        if (Math.floor(n / 900)) {
            n -= 900;
            str += "CM";
        }

        if (Math.floor(n / 500)) {
            n -= 500;
            str += "D";
        }

        if (Math.floor(n / 400)) {
            n -= 400;
            str += "CD";
        }

        if (Math.floor(n / 100)) {
            let count = Math.floor(n / 100);
            n -= count * 100;

            while (count > 0) {
                str += "C";
                count--;
            }
        }

        if (Math.floor(n / 90)) {
            n -= 90;
            str += "XC";
        }

        if (Math.floor(n / 50)) {
            n -= 50;
            str += "L";
        }

        if (Math.floor(n / 40)) {
            n -= 40;
            str += "XL";
        }

        if (Math.floor(n / 10)) {
            let count = Math.floor(n / 10);
            n -= count * 10;

            while (count > 0) {
                str += "X";
                count--;
            }
        }

        if (Math.floor(n / 9)) {
            n -= 9;
            str += "IX";
        }

        if (Math.floor(n / 5)) {
            n -= 5;
            str += "V";
        }

        if (Math.floor(n / 4)) {
            n -= 4;
            str += "IV";
        }

        if (n) {
            while (n > 0) {
                str += "I";
                n--;
            }
        }

        return str;
    };
    ```
