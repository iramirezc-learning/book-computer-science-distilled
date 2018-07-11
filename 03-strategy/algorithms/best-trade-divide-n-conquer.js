/**
 * Finds the maximum profit of buying and selling in
 * a list of prices.
 * Running Time: O(n log n)
 * Technique: Divide and Conquer
 * @param {Array} prices list of prices
 */
function bestTrade(prices) {
  if (prices.length === 1) {
    return 0; // buying and selling the same day has non profit
  }

  const firstHalf = prices.splice(0, Math.floor(prices.length / 2));
  const case3 = Math.max.apply(null, prices) - Math.min.apply(null, firstHalf);

  return Math.max(bestTrade(prices), bestTrade(firstHalf), case3);
}

module.exports = bestTrade;
