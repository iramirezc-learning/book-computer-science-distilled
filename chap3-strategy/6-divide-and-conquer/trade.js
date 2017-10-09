// Divide And Conquer version of the 
// Brute force algorithm best-trade.js

// Divide and Trade. You have the daily prices of gold for a interval of time.
// You want to find two days in this interval such that if you had bought then
// sold gold at those dates, you'd have made the maximum possible profit.

// Algorithm Complexity: O(n log n)

function trade(prices) {
  if (prices.length === 1) {
    return 0; // buying and selling the same day has non profit
  }

  const former = prices.splice(0, Math.round(prices.length / 2));
  const latter = prices;
  const case3 = Math.max.apply(null, latter) - Math.min.apply(null, former);

  return Math.max(trade(latter), trade(former), case3);
}

// Start
// ==============================
const prices = [27, 53, 7, 25, 33, 2, 32, 47, 43];
console.log(trade(prices)); // 45

// same input as in the brute force version
const goldPrices = [11, 5, 2, 6, 7, 8, 4, 10, 3, 4, 6, 9, 8, 1, 3];
console.log(trade(goldPrices)); // 8