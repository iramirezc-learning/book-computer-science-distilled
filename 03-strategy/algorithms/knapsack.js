const powerSet = require('./power-set');

/**
 * Reduces a list of items to their weight
 * @param {Array} items 
 */
function calculateTotalWeight(items) {
  return items.reduce((prev, currentItem) => prev + currentItem.weight, 0);
}

/**
 * Reduces a list of items to their price
 * @param {Array} items 
 */
function calculateSalesValue(items) {
  return items.reduce((prev, currentItem) => prev + currentItem.price, 0);
}

/**
 * Returns the list of items that
 * fit in the bag and that will give the
 * best revenue.
 * Running Time: O(2^n)
 * Technique: Brute Force
 * @param {Array} items 
 * @param {number} maxWeight 
 */
function knapsack(items, maxWeight) {
  let bestValue = 0;
  let bestCandidates = null;
  let combinationValue;

  powerSet(items).forEach(combination => {
    if (calculateTotalWeight(combination) <= maxWeight) {
      combinationValue = calculateSalesValue(combination);
      if (combinationValue > bestValue) {
        bestValue = combinationValue;
        bestCandidates = combination;
      }
    }
  });

  return bestCandidates;
}

knapsack.calculateTotalWeight = calculateTotalWeight;
knapsack.calculateSalesValue = calculateSalesValue;

module.exports = knapsack;