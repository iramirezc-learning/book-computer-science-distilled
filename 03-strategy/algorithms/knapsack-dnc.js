/**
 * Prepares data for Recursive Knapsack Algorithm
 * @param {Array} items
 * @param {number} maxWeight
 */
function knapsack(items, maxWeight) {
  const itemsPrices = items.map(i => i.price);
  const itemsWeight = items.map(i => i.weight);

  /**
   * Actual implementation of Knapsack Algorithm (Recursive)
   * returning the best revenue that can be retrieved
   * by selling items that fit in the bag.
   * Running Time: O(n log n)
   * Technique: Divide and Conquer
   * @param {number} itemIndex Current item's index
   * @param {number} maxWeight Current left weight in the bag
   */
  function doKnapsack(itemIndex, maxWeight) {
    /**
     * Base cases:
     * When there's no more space in the bag
     * When there are no more items in the list
     */
    if (maxWeight == 0 || itemIndex < 0) return 0;
    // discard items that don't fit in the bag
    if (itemsWeight[itemIndex] > maxWeight) return doKnapsack(itemIndex - 1, maxWeight);

    return Math.max(
      doKnapsack(itemIndex - 1, maxWeight), /* don't take the item */
      doKnapsack(itemIndex - 1, maxWeight - itemsWeight[itemIndex]) + itemsPrices[itemIndex] /* take the item */
    );
  }

  return doKnapsack(items.length - 1, maxWeight);
}

module.exports = knapsack;
