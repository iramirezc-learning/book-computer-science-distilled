/**
 * Finds the maximum profit of buying and selling in
 * a list of prices.
 * Running Time: O(day)
 * Technique: Dynamic Programming - Bottom Up
 * @param {Array} prices list of prices
 */
function dBestTrade(prices) {
  /* `B[n]` = Best day to buy if we're selling on `n`th day. */
  const B = {
    0: 0 /* 0 is the best day to buy if selling on B[0] day 0 */
  };
  let sellDay = 0;
  let bestProfit = 0;

  for (let day = 1; day < prices.length; day++) {
    /* if price is less than the one stored in the day before */
    if (prices[day] < prices[B[day - 1]]) {
      B[day] = day;
    } else {
      B[day] = B[day - 1];
    }

    let profit = prices[day] - prices[B[day]];

    if (profit > bestProfit) {
      sellDay = day;
      bestProfit = profit;
    }
  }

  return {
    maximum: bestProfit,
    buyingDate: B[sellDay],
    sellingDate: sellDay,
  };
}

module.exports = dBestTrade;
