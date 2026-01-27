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

| Algorithm                   | Time Complexity | Space Complexity |
| --------------------------- | --------------- | ---------------- |
| Greedy + Lookup Table ✅    | O(1)            | O(1)             |
| Greedy + Stepwise Reduction | O(1)            | O(1)             |

1. Greedy + Lookup Table

    用查找表演算法，準備兩個陣列：
    - `vals` 存整數值的 Roman numeral 對應數字，按從大到小排序
    - `romans` 存對應的羅馬字母表示

    遍歷 `vals`，當 `num >= vals[i]`，就把 `vals[i]` 從 `num` 扣掉，並把對應的 `romans[i]` 加入結果字串 `str`，重複這個過程直到 `num` 減為 0。

    這種方法保證每次都用最大的可能值來組成 Roman numeral，演算法核心是貪婪演算法。

    Solution: 👉 [code](../codes/12_integer_to_roman.js)

2. Greedy + Stepwise Reduction

    用逐步扣減法，從最大單位 (1000, 900, 500, ..,) 開始檢查，如果 `num >= 單位值` 就扣掉，並把對應字母加進字串 `str`。若單位需要重複多次 (如 3000 → `"MMM"`)。這種方法直觀，但比較不易讀。

    ```js
    var intToRoman = function (num) {
        let str = "";

        if (Math.floor(num / 1000)) {
            let count = Math.floor(num / 1000);

            while (count > 0) {
                num -= 1000;
                str += "M";
                count--;
            }
        }

        if (Math.floor(num / 900)) {
            num -= 900;
            str += "CM";
        }

        if (Math.floor(num / 500)) {
            num -= 500;
            str += "D";
        }

        if (Math.floor(num / 400)) {
            num -= 400;
            str += "CD";
        }

        if (Math.floor(num / 100)) {
            let count = Math.floor(num / 100);

            while (count > 0) {
                num -= 100;
                str += "C";
                count--;
            }
        }

        if (Math.floor(num / 90)) {
            num -= 90;
            str += "XC";
        }

        if (Math.floor(num / 50)) {
            num -= 50;
            str += "L";
        }

        if (Math.floor(num / 40)) {
            num -= 40;
            str += "XL";
        }

        if (Math.floor(num / 10)) {
            let count = Math.floor(num / 10);

            while (count > 0) {
                num -= 10;
                str += "X";
                count--;
            }
        }

        if (Math.floor(num / 9)) {
            num -= 9;
            str += "IX";
        }

        if (Math.floor(num / 5)) {
            num -= 5;
            str += "V";
        }

        if (Math.floor(num / 4)) {
            num -= 4;
            str += "IV";
        }

        while (num > 0) {
            str += "I";
            num--;
        }

        return str;
    };
    ```
