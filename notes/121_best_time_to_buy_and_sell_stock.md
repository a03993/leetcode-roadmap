# 121 Best Time to Buy and Sell Stock

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

You are given an array `prices` where `prices[i]` is the price of a given stock on the `iᵗʰ` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return _the maximum profit you can achieve from this transaction._ If you cannot achieve any profit, return `0`.

**Example:**

```java
Input: prices = [7,1,5,3,6,4]
Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

```java
Input: prices = [7,6,4,3,1]
Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
```

**Constraints:**

- `1 <= prices.length <= 10⁵`
- `0 <= prices[i] <= 10⁴`

**Note:**

| Topic  | Time Complexity | Space Complexity |
| ------ | --------------- | ---------------- |
| Greedy | O(n)            | O(1)             |

遍歷 `prices`，用一個 `min` 記錄目前看過的最低價格。每一天都試著用當天價格減掉最低價，更新能拿到的最大利潤。
