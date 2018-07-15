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
 * Callback for sorting by price.
 * @param {object} a First item
 * @param {object} b Second item
 */
function sortByPrice(a, b) {
  return b.price - a.price;
}

/**
 * Orders the list of items by its max price
 * and then put them in the bag until nothing else fits
 * Technique: Heuristics
 * @param {Array} items 
 * @param {number} maxWeight Max weight the bag can carry
 */
function greedyKnapsack(items, maxWeight) {
  let bagWeight = 0;
  let bagItems = [];

  items.sort(sortByPrice).forEach(item => {
    if ((bagWeight + item.weight) <= maxWeight) {
      bagWeight += item.weight;
      bagItems.push(item);
    }
  });

  return bagItems;
}

greedyKnapsack.calculateTotalWeight = calculateTotalWeight;
greedyKnapsack.calculateSalesValue = calculateSalesValue;

module.exports = greedyKnapsack;
