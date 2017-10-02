// Knapsack. You have a knapsack to carry products for selling.
// It holds up to a certain weight, not enough for carrying all your products
// - you must choose which ones to carry. 
// Knowing the weight and sales value of each product,
// which choice of products gives the highest revenue?

// Algorithm Complexity: O(2^n)

const powerSet = require('../1-iteration/power-set');

function calculateTotalWeight(items) {
  return items.map(item => item.weight).reduce((prev, current) => prev + current, 0);
}

function calculateSalesValue(items) {
  return items.map(item => item.price).reduce((prev, current) => prev + current, 0);
}

function knapsack(items, maxWeight) {
  let bestValue = 0;
  let bestCandidate = null;

  powerSet(items).forEach(candidate => {
    if (calculateTotalWeight(candidate) <= maxWeight) {
      const candidateValue = calculateSalesValue(candidate);
      if (candidateValue > bestValue) {
        bestValue = candidateValue;
        bestCandidate = candidate;
      }
    }

  });

  return bestCandidate;
}

const maxWeight = 4; // 4 Kg
const items = [
  {
    name: 'Computer',
    weight: 2,
    price: 6000,
  },
  {
    name: 'Speaker',
    weight: 0.5,
    price: 2000,
  },
  {
    name: 'Raspeberry',
    weight: 0.2,
    price: 1500,
  },
  {
    name: 'Mouse',
    weight: 0.5,
    price: 300,
  },
  {
    name: 'Keyboard',
    weight: 0.8,
    price: 500,
  },
  {
    name: 'Tablet',
    weight: 1,
    price: 3000,
  },
  {
    name: 'Smartphone',
    weight: 0.3,
    price: 5000,
  },
  {
    name: 'iPhone',
    weight: 0.4,
    price: 8000,
  }
];

const itemsToCarry = knapsack(items, maxWeight);

console.log('knapsack->');
console.log(itemsToCarry);
console.log('Total Weight->', calculateTotalWeight(itemsToCarry));
console.log('Total Revenue->', calculateSalesValue(itemsToCarry));