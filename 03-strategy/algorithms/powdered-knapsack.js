/**
 * Callback to attach calculated
 * property `valueWeightRatio` to an item
 * @param {object} item
 */
function addValueWeightRatio({ name, price, weight }) {
  let valueWeightRatio = price / weight;

  return {
    name,
    price,
    weight,
    valueWeightRatio: +valueWeightRatio.toFixed(2)
  };
}

/**
 * Callback for sorting by value/weight ratio.
 * @param {object} a First item
 * @param {object} b Second item
 */
function byValueWeightRatio(a, b) {
  return b.valueWeightRatio - a.valueWeightRatio;
}

/**
 * Creates a copy of list of items with a `valueWeightRatio` property
 * and sorts it by that new property.
 * @param {Array} items 
 */
function sortByValueWeightRatio(items) {
  return items.map(addValueWeightRatio).sort(byValueWeightRatio);
}

/**
 * Orders the list of items by its value/weight ratio
 * and then put them (complete or splitted) in the bag untilg nothing else fits.
 * Technique: Heuristics
 * @param {Array} items List of items
 * @param {number} maxWeight Max weight the bag can carry
 */
function powderedKnapsack(items, maxWeight) {
  let bagValue = 0;
  let bagWeight = 0;
  let bagItems = [];
  items = sortByValueWeightRatio(items);

  items.forEach(item => {
    let availableSpace = maxWeight - bagWeight;
    let weight = Math.min(availableSpace, item.weight);

    if (weight > 0) {
      bagWeight += weight;
      bagValue += weight * item.valueWeightRatio;
      item.baggedWeight = weight;
      bagItems.push(item);
    }
  })

  return {
    bagItems,
    bagValue
  };
}

powderedKnapsack.sortByValueWeightRatio = sortByValueWeightRatio;

module.exports = powderedKnapsack;
