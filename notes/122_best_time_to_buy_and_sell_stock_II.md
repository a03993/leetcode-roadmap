# 122 Best Time to Buy and Sell Stock II

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `iᵗʰ` day.

On each day, you may decide to buy and/or sell the stock. You can only hold **at most one** share of the stock at any time. However, you can sell and buy the stock multiple times on the **same day**, ensuring you never hold more than one share of the stock.

Find and return _the **maximum** profit you can achieve_.

**Example:**

```
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
```

```
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
```

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
```

Constraints:

- `1 <= prices.length <= 3 * 10⁴`
- `0 <= prices[i] <= 10⁴`

**Note:**

| Topic  | Time Complexity | Space Complexity |
| ------ | --------------- | ---------------- |
| Greedy | O(n)            | O(1)             |

遍歷股價，只要明天比今天貴就賺取差價，累加所有上漲段，得到最大收益。

![Demo](https://img.shields.io/badge/Demo-prices_=_[7,_1,_5,_3,_6,_4]-white?style=flat-square)

| Index (Day) | Price | Price Diff | Profit |
| ----------- | ----- | ---------- | ------ |
| 0           | 7     | 1 - 7 = -6 | 0      |
| 1           | 1     | 5 - 1 = 4  | 0 → 4  |
| 2           | 5     | 3 - 5 = -2 | 4      |
| 3           | 3     | 6 - 3 = 3  | 4 → 7  |
| 4           | 6     | 4 - 6 = -2 | 7      |
