// Best Trade. You have the daily prices of gold for a interval of time.
// You want to find two days in this interval such that if you had bought then
// sold gold at those dates, you'd have made the maximum possible profit.

// Algorithm Complexity: O(n^2)

const goldPrices = [11, 5, 2, 6, 7, 8, 4, 10, 3, 4, 6, 9, 8, 1, 3]; // prices of gold of 15 days

function bruteForceGold(prices) {
  let maximum;
  let buyingDate;
  let sellingDate;

  // selecting buying date
  for (let i = 0, len = prices.length; i < len - 1; i++) {
    // selecting selling date
    for (let j = i; j < len; j++) {
      let profit = prices[j] - prices[i];
      if (!maximum || profit > maximum) {
        // save new maximum
        maximum = profit;
        // save dates
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

const result = bruteForceGold(goldPrices);

console.log(`Maximum profit you can get: ${result.maximum}.`); // (buying in $2, selling in $10) = 8
console.log(`Buying Date: ${result.buyingDate}.`); // index 2
console.log(`Selling Date: ${result.sellingDate}.`); // index 7


