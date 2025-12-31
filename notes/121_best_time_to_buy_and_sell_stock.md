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

遍歷股價，用一個變數記錄目前最低價格，計算每一天以最低價格買入、當天賣出的最大利潤，最後得到整體最大利潤。

## Notes

Manual `if/else` approach:

```
let profit = 0;
let min = prices[0];

for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
        min = prices[i];
    } else if (profit < prices[i] - min) {
        profit = prices[i] - min;
    }
};

return profit;
```

- Using `Math.min`, `Math.max` can simplify the code.
