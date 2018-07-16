# Computer Science Distilled

## Summary - Chapter 3: Strategy

> If you find a good move, look for a better one.
>
> -- _Emanuel Lasker_

**:dart: Objectives:**

> * _Iteration_
> * _Recursion_
> * _Brute Force_
> * _Backtracking_
> * _Heuristics_
> * _Divide and conquer_
> * _Dynamic Programming_
> * _Branch and Bound_

---

### Section 1: Iteration

#### Merge

> **Fish Reunion**
>
> _You're given a list of saltwater fish and a list of freshwater fish, both in alphabetical order._
>
> _How do you create a list featuring all the fish in alphabetical order?_

```bash
function merge (list1, list2)
  result <- List.new

  while not (list1.empty and list2.empty)
    if list1.top_item < list2.top_item
      item <- list1.remove_top_item
    else
      item <- list2.remove_top_item

    result.append(item)

  return result
```

> Code: [merge-two-sorted-lists.js](./algorithms/merge-two-sorted-lists.js)

#### Power Sets

Generating **power sets** = generating **truth tables**

> **Exploring Scents**
>
> _Floral fragances are made combining scents from flowers. Give a set of flowers `F`, how do you list all fragances that can be made?_

```bash
function power_set (flowers)
  fragances <- Set.new
  fragances.add(Set.new)

  for each (flower in flowers)
    new_fragances <- copy(fragances)
    for each (france in new_fragances)
      fragances.add(flower)
    fragances <- fragances + new_fragances

  return fragances
```

> Code: [power-set.js](./algorithms/power-set.js)

---

### Section 2: Recursion

#### A recursive function...

> is a function that calls _itself_
>
> has a **base** case
>
> spawn numerous clones of itself, introducing computational overhead
>
> can be visualized with **recursion trees**

#### Fibonacci

> _How do you code a function that returns the `nth` Fibonacci number?_

```bash
function fib (n)
  if n <= 2
    return 1

  return fib(n - 1) + fib(n - 2)
```

> Code: [fibonacci.js](./algorithms/fibonacci.js)

#### Palindrome

```bash
function palindrome (word)
  if (word.length <= 1)
    return true
  if (word.first_char != word.last_char)
    return false
  w = word.remove_first_and_last_chars
  return palindrome(w)
```

> Code: [palindrome.js](./algorithms/palindrome.js)

#### Recursive Power Set

```bash
function recursive_power_set (items)
  ps <- copy(items)

  for each (e in items)
    ps <- ps.remove(e)
    ps <- ps + recursive_power_set(ps)
    ps <- ps.add(e)

  return ps
```

> Code: [power-set-recursive.js](./algorithms/power-set-recursive.js)

---

### Section 3: Brute Force

#### Brute Force?

> solves problems by inspecting all of the problem's possible solution candidates aka **exhaustive search**

#### Best Trade

> _You have the daily prices of gold for a interval of time. You want to find two days in this interval such that if you had bought then sold gold at those dates, you'd have made the maximum possible profit._

```bash
function best_trade (gold_prices)
  buyingDate
  sellingDate
  maxProfit

  for each (buyingPrice in gold_prices)
    for each (sellingPrice in gold_prices)
      profit <- sellingPrice - buyingPrice
      if profit > maxProfit
        maxProfit <- profit
        buyingDate <- indexOf(buyingPrice)
        sellingDate <- indexOf(sellingPrice)

  return maxProfit
```

> Code: [best-trade.js](./algorithms/best-trade.js)

#### Knapsack

> _You have a knapsack to carry products for selling. It holds up to a certain weight, not enough for carrying all your products - you must choose which ones to carry. Knowing the weight and sales value of each product, which choice of products gives the highest revenue?_

```bash
function knapsack (items, max_weight)
  best_value <- 0

  for each (candidate in power_set(items))
    if (total_weight(candidate) <= max_weight)
      if sales_value(candidate) > best_value
        best_value <- sales_value(candidate)
        best_candidate <- candidate

  return best_candidate
```

> Code: [knapsack.js](./algorithms/knapsack.js)

---

### Section 4: Backtracking

#### Backtracking?

> works best in problems where the solution is a sequence of choices and making a choice restraings subsequent choices.
>
> _"Fail early, fail often."_

#### Eight Queens Puzzle

> _How do you place eight queens on the board such that no queens attack each other?_

```bash
function queens (board)
  if board.has_8_queens
    return board

  for each (position in board.unattacked_positions)
    board.place_queen(position)
    solution <- queens(board)
    if (solution)
      return solution
    board.remove_queen(position) # backtracking

  return false
```

> Code: [eight-queens-puzzle.v1.js (Object Oriented)](./algorithms/eight-queens-puzzle.v1.js)
>
> Code: [eight-queens-puzzle.v2.js](./algorithms/eight-queens-puzzle.v1.js)

---

### Section 5: Heuristics

#### Greed

> A greedy algorithm tries to make the best choice at each step and never coming back. It's the opposite of backtracking.

#### Greedy Knapsack

> **Evil Knapsack**
>
> _A greedy burglar breaks into your home to steal the products you wanted to sell. He decides to use your knapsack to carry the stolen items. Which items will he steal? Remember, the less time he spends in your home, the less likely he is to get caught._

```bash
function greedy_knapsack (items, max_weight)
  bag_weight <- 0
  bag_items <- List.new

  for each (item in sort_by_value(items))
    if max_weight <= bag_weight + item.weight
      bag_weight <- bag_weight + item.weight
      bag_items.append(items)

  return bag_items;
```

> Code: [greedy-knapsack.js](./algorithms/greedy-knapsack.js)

---

### Section 6: Divide and Conquer

Problems with optimal substructure can be divided into similar but smaller subproblems.

**NOTE:**

> $x=\log_{2}n \to 2^x = n$

#### Merge Sort

```bash
function merge_sort(list)
  if list.length = 1
    return list

  left <- list.first_half
  right <- list.last_half

  return merge(merge_sort(left), merge_sort(right));
```

> Code: [merge-sort.js](./algorithms/merge-sort.js)

#### Best Trade - Divide and Conquer

> _You have the daily prices of gold for a interval of time. You want to find two days in this interval such that if you had bought then sold gold at those dates, you'd have made the maximum possible profit._

```bash
function trade (prices)
  if prices.length = 1
    return 0

  former <- prices.first_half
  latter <- prices.last_half
  case3 <- max(latter) - min(former)

  return max(trade(latter), trade(former), case3)
```

> Code: [best-trade-divide-n-conquer.js](./algorithms/best-trade-divide-n-conquer.js)

#### Knapsack - Divide and Conquer

> _You have a knapsack to carry products for selling. It holds up to a certain weight, not enough for carrying all your products - you must choose which ones to carry. Knowing the weight and sales value of each product, what would be the highest possible revenue?_
>
> * $w_i$ is the $i^{th}$ item's weight
> * $v_i$ is the $i^{th}$ item's value

$K(n,\ c) = \max(K(n-1,\ c),\ K(n-1,\ c - w_n) + v_n)$

> Code: [knapsack-dnc.js](./algorithms/knapsack-dnc.js)

---

### Section 7: Dynamic Programming

#### Dynamic Programming?

> is identifying repeated subproblems in order to compute them only once.

#### Memoization

> is a technique to store and reuse partial calculations to repeated subproblems

#### Dynamic Fibonacci using Memoization

> _How do you code a function that returns the `nth` Fibonacci number?_

```bash
M <- [1 -> 1; 2 -> 2]

function dfib (n)
  if n not in M
    M[n] <- dfib(n - 1) + dfib(n - 2)
  return M[n]
```

> Code: [dynamic-fibonacci.js](./algorithms/dynamic-fibonacci.js)

#### Memoizing Knapsack

> _You have a knapsack to carry products for selling. It holds up to a certain weight, not enough for carrying all your products - you must choose which ones to carry. Knowing the weight and sales value of each product, what would be the highest possible revenue?_
>
> Code: [knapsack-dp.js](./algorithms/knapsack-dp.js)

#### Bottom-Up Best Trade

Calculate base cases first, and assemble them over and over again until we get the general solution

> _You have the daily prices of gold for a interval of time. You want to find two days in this interval such that if you had bought then sold gold at those dates, you'd have made the maximum possible profit._

```bash
function best_trade_dp (P)
  B[1] <- 1
  sell_day <- 1
  best_profit <- 0

  for each (n from 2 to P.length)
    if P[n] < P[B[n - 1]]
      B[n] <- n
    else
      B[n] <- B[n - 1]

    profit <- P[n] - P[B[n]]

    if profit > best_profit
      sell_day <- n
      best_profit <- profit

  return (sell_day, B[sell_day])
  ```

> Code: [best-trade-bottom-up.js](./algorithms/best-trade-bottom-up.js)

---

### Section 8: Branch and Bound

#### Branch and bound?

> Many problems involve minimizing or maximizing a target value. They're called **optimization problems**.
>
> When a solution is a sequence of choices, we use the strategy **branch and bound**

#### Bounds

> * An **upper bound** sets the limit on how high the value can be.
> * A **lower bound** sets the limit on how low the value can be.

#### Powdered Knapsack

This algorithm provides the **upper bound** of the optimal profit, while the [_Greedy Knapsack_](#Greedy-Knapsack) algorithm provides the **lower bound**.

> _You have a knapsack to carry products for selling. It holds up to a certain weight, not enough for carrying all your products - you must choose which ones to carry. Knowing the weight and sales value of each product, what would be the highest possible revenue?_

```bash
function powdered_knapsack (items, max_weight)
  bag_value <- 0
  bag_weight <- 0
  bag_items <- List.new
  items <- sort_by_value_weight_ratio(items)

  for each (i in items)
    weight <- min(max_weight - bag_weight, i.weight)
    bag_weight <- bag_weight + weight
    value <- weight * i.value_weight_ratio
    bag_value <- bag_value + value
    bag_items.append(item, weight)

  return bag_items, bag_value
```

> Code: [powdered-knapsack.js](./algorithms/powdered-knapsack.js)

## References

### In the book:

* [Geek&Poke](http://geek-and-poke.com/)
