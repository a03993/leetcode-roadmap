# 122 Best Time to Buy and Sell Stock II

<span style="background-color: #6CC644; color: white; padding: 0.2em 0.6em; border-radius: 12px; font-size: 0.9em">Top Interview 150</span>

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

## Approach

| Topics                             | Category             | Key Idea                   | Time Complexity | Space Complexity |
| ---------------------------------- | -------------------- | -------------------------- | --------------- | ---------------- |
| Array, Dynamic Programming, Greedy | In-place Calculation | Accumulate Profit on Rises | O(n)            | O(1)             |

- Traverse the array once.
- For each consecutive pair of days, if the price increases (`prices[i + 1] > prices[i]`), add the difference to `profit`.

#### 🚀 Demonstration: `prices = [7,1,5,3,6,4]`

| Index (Day) | Price | Price Diff | Profit |
| ----------- | ----- | ---------- | ------ |
| 0           | 7     | 1 - 7 = -6 | 0      |
| 1           | 1     | 5 - 1 = 4  | 4      |
| 2           | 5     | 3 - 5 = -2 | 4      |
| 3           | 3     | 6 - 3 = 3  | 7      |
| 4           | 6     | 4 - 6 = -2 | 7      |

## Notes

- **No need to track buy or sell days**.
- By summing all positive differences between consecutive days, we capture every profitable transaction, which **guarantees the maximum total profit**. (累加正差值 = 最大利潤)
