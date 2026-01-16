# 2 Add Two Numbers

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example:**

```java
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

```java
Input: l1 = [0], l2 = [0]
Output: [0]
```

```java
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

**Constraints:**

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

**Note:**

| Algorithm  | Time Complexity | Space Complexity |
| ---------- | --------------- | ---------------- |
| Simulation | O(max(m, n))    | O(max(m, n))     |

用 `dummyHead` 來建立最後要回傳的 linked list，並用 `carry` 紀錄進位。從 `l1` 和 `l2` 的 head 開始逐位相加。取出兩個 node 的值（不存在就當作是 0），加上 `carry` 得到 `sum`；新 node 的值是 `sum % 10`，新的 `carry` 是 `Math.floor(sum / 10)`；把新 node 接到 linked list 後面，然後指標往後移；重複直到 `l1`、`l2` 都走完且沒有進位為止，最後回傳 `dummyHead.next`。
