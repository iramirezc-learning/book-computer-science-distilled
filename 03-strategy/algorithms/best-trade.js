/**
 * @typedef {Object} BestTrade
 * @property {number} maximum The maximum profit obtained
 * @property {number} buyingDate The index of the day to buy
 * @property {number} sellingDate the index of the day to sell
 */

/**
 * Finds maximum profit of buying and selling in
 * a list of prices.
 * Running time: O(n^2)
 * Technique: Brute Force
 * @param {Array} prices
 * @returns {BestTrade} The maximum profit, and the indexes of buying and selling days
 */
function bestTrade(prices) {
  let buyingDate;
  let sellingDate;
  let maximum = -Infinity;

  for (let i = 0, len = prices.length; i < len - 1; i++) {
    for (let j = i; j < len; j++) {
      let profit = prices[j] - prices[i];
      if (profit > maximum) {
        maximum = profit;
        buyingDate = i;
        sellingDate = j;
      }
    }
  }

  return {
    maximum,
    buyingDate,
    sellingDate,
  };
}

module.exports = bestTrade;

