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
 * Returns the best revenue of items
 * that fit in the bag
 * WARNING: This is an implementation I came up with, which is not very performant
 * Running Time: ???
 * Technique: Divide and Conquer
 * @param {Array} items 
 * @param {number} maxWeight 
 */
function knapsack(items, maxWeight) {
  if (items.length === 0) {
    return 0;
  }

  if (calculateTotalWeight(items) <= maxWeight) {
    return calculateSalesValue(items);
  }

  const combinations = [];

  items.forEach((_, i) => {
    const left = items.slice(0, i);
    const right = items.slice(i + 1);
    combinations.push((knapsack(left.concat(right), maxWeight)));
  });

  return Math.max.apply(null, combinations);
}

knapsack.calculateSalesValue = calculateSalesValue;
knapsack.calculateTotalWeight = calculateTotalWeight;

module.exports = knapsack;
