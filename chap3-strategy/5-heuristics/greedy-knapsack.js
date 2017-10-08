// Evil KnapSack. A greedy burglar breaks into your home
// to steal the products you wanted to sell. He decides
// to use your knapsack to carry the stolen items. Which
// items will he steal? Remember, the less time he spends
// in your home, the less likely he is to get caught.

function calculateTotalWeight(items) {
  return items.map(item => item.weight).reduce((prev, current) => prev + current, 0);
}

function calculateSalesValue(items) {
  return items.map(item => item.price).reduce((prev, current) => prev + current, 0);
}

function sortByValue(a, b) {
  return a.price < b.price;
}

function greedyKanpsack(items, maxWeight) {
  let bagWeight = 0;
  let bagItems = [];

  items.sort(sortByValue).forEach(item => {
    if ((bagWeight + item.weight) <= maxWeight) {
      bagWeight += item.weight;
      bagItems.push(item);
    }
  });

  return bagItems;
}

// Start
// ==============================
const maxWeight = 3; // 3 Kg
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

const stolenItems = greedyKanpsack(items, maxWeight);

console.log('stolenItems->');
console.log(stolenItems);
console.log('Total Weight->', calculateTotalWeight(stolenItems));
console.log('Total Revenue->', calculateSalesValue(stolenItems));