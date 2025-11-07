# 122 Best Time to Buy and Sell Stock II(Top Interview 150)

You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `iᵗʰ` day.

On each day, you may decide to buy and/or sell the stock. You can only hold _at most one_ share of the stock at any time. However, you can sell and buy the stock multiple times on the _same day_, ensuring you never hold more than one share of the stock.

Find and return *the *maximum* profit you can achieve.*

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

| Technique | Method             | Time Complexity | Space Complexity |
| --------- | ------------------ | --------------- | ---------------- |
| Math      | linear scan/greedy | O(n)            | O(1)             |

- Traverse the array once.
- For each consecutive pair of days, if the price goes up (`prices[i + 1] > prices[i]`), add the difference to the `sum`.
- Repeat for all pairs.

## Notes

- No need to explicitly track "buy" or "sell" days; accumulating all positive differences is sufficient.
- Can also be implemented using a "buy/sell state" approach, but adding all upward differences is simpler and intuitive.
