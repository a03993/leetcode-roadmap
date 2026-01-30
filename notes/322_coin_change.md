# 322 Coin Change

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return _the fewest number of coins that you need to make up that amount_. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

**Example:**

```java
Input: coins = [1,2,5], amount = 11
Output: 3
// Explanation: 11 = 5 + 5 + 1
```

```java
Input: coins = [2], amount = 3
Output: -1
```

```java
Input: coins = [1], amount = 0
Output: 0
```

**Constraints:**

- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 2³¹ - 1`
- `0 <= amount <= 10⁴`

**Note:**

| Algorithm                | Time Complexity | Space Complexity |
| ------------------------ | --------------- | ---------------- |
| Dynamic Programming (DP) | O(n²)           | O(1)             |

建立一個長度為 `amount + 1` 的 array 並且每一項都為 `Infinity`，將第 0 項目改為 0，因為湊 0 元不需要任何硬幣。

用兩個迴圈，外層迴圈遍歷所有金額，從 1 元開始到 `amount`，內層迴圈遍歷 `coins`

![Demo](https://img.shields.io/badge/Demo-coins_=_[1,_2,_5],_amount_=_11-white?style=flat-square)

| i    | coin | dp                                       |
| ---- | ---- | ---------------------------------------- |
| init | -    | [0, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞]     |
| 1    | 1    | [0, **1**, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞] |
| 1    | 2    | [0, 1, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞]     |
| 1    | 5    | [0, 1, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞]     |
| 2    | 1    | [0, 1, **2**, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞] |
| 2    | 2    | [0, 1, **1**, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞] |
| 2    | 5    | [0, 1, 1, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞]     |
| 3    | 1    | [0, 1, 1, **2**, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞] |
| 3    | 2    | [0, 1, 1, 2, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞]     |
| 3    | 5    | [0, 1, 1, 2, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞]     |
| 4    | 1    | [0, 1, 1, 2, **3**, ∞, ∞, ∞, ∞, ∞, ∞, ∞] |
| 4    | 2    | [0, 1, 1, 2, **2**, ∞, ∞, ∞, ∞, ∞, ∞, ∞] |
| 4    | 5    | [0, 1, 1, 2, 2, ∞, ∞, ∞, ∞, ∞, ∞, ∞]     |
| 5    | 1    | [0, 1, 1, 2, 2, **3**, ∞, ∞, ∞, ∞, ∞, ∞] |
| 5    | 2    | [0, 1, 1, 2, 2, 3, ∞, ∞, ∞, ∞, ∞, ∞]     |
| 5    | 5    | [0, 1, 1, 2, 2, **1**, ∞, ∞, ∞, ∞, ∞, ∞] |
| 6    | 1    | [0, 1, 1, 2, 2, 1, **2**, ∞, ∞, ∞, ∞, ∞] |
| 6    | 2    | [0, 1, 1, 2, 2, 1, 2, ∞, ∞, ∞, ∞, ∞]     |
| 6    | 5    | [0, 1, 1, 2, 2, 1, 2, ∞, ∞, ∞, ∞, ∞]     |
| 7    | 1    | [0, 1, 1, 2, 2, 1, 2, **3**, ∞, ∞, ∞, ∞] |
| 7    | 2    | [0, 1, 1, 2, 2, 1, 2, **2**, ∞, ∞, ∞, ∞] |
| 7    | 5    | [0, 1, 1, 2, 2, 1, 2, 2, ∞, ∞, ∞, ∞]     |
| 8    | 1    | [0, 1, 1, 2, 2, 1, 2, 2, **3**, ∞, ∞, ∞] |
| 8    | 2    | [0, 1, 1, 2, 2, 1, 2, 2, 3, ∞, ∞, ∞]     |
| 8    | 5    | [0, 1, 1, 2, 2, 1, 2, 2, 3, ∞, ∞, ∞]     |
| 9    | 1    | [0, 1, 1, 2, 2, 1, 2, 2, 3, **4**, ∞, ∞] |
| 9    | 2    | [0, 1, 1, 2, 2, 1, 2, 2, 3, **3**, ∞, ∞] |
| 9    | 5    | [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, ∞, ∞]     |
| 10   | 1    | [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, **4**, ∞] |
| 10   | 2    | [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 4, ∞]     |
| 10   | 5    | [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, **2**, ∞] |
| 11   | 1    | [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, **3**] |
| 11   | 2    | [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3]     |
| 11   | 5    | [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3]     |
