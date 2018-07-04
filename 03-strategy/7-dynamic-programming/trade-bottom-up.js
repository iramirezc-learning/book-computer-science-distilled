

function dTrade(P) {
  const B = {
    0: 0 // to sell on day 0, you need to buy on day 0
  };
  let sellDay = 0;
  let bestProfit = 0;

  for (let n = 1; n < P.length; n++) {
    // if price is less than the one
    // stored in 
    if (P[n] < P[B[n - 1]]) {
      B[n] = n;
    } else {
      B[n] = B[n - 1];
    }

    let profit = P[n] - P[B[n]];

    if (profit > bestProfit) {
      sellDay = n;
      bestProfit = profit;
    }
  }

  console.log(B, sellDay);

  return [sellDay, B[sellDay]];
}

// Start
// ==============================

const prices = [27, 53, 7, 25, 33, 2, 32, 47, 43];
const [sDay, bDay] = dTrade(prices);
console.log(prices[sDay] - prices[bDay]); // 45


// same input as in the brute force version
const goldPrices = [11, 5, 2, 6, 7, 8, 4, 10, 3, 4, 6, 9, 8, 1, 3];
const [sell, buy] = dTrade(goldPrices);
console.log(goldPrices[sell] - goldPrices[buy]); // 8

