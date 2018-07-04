// TODO: divide-knapsack
const maxWeight = 4;
const items = [
  {
    name: 'Laptop',
    weight: 3,
    value: 5000,
  },
  {
    name: 'MacBook',
    weight: 4,
    value: 6000,
  }
];

// Incorrect algorithm
function knapsack(n, weight) {
  if (weight < 0) {
    return null;
  }
  if (n.length === 1) {
    if (n[0].weight <= weight) {
      return n[0].value;
    } else {
      return 0;
    }
  }

  const extraItem = n.pop();

  n = n.slice();

  // extra item not selected
  const opt1 = knapsack(n, weight);
  // extra item selected
  let opt2 = knapsack(n, weight - extraItem.weight);

  if (opt2 !== null) {
    opt2 += extraItem.value
  } else {
    opt2 = 0;
  }


  return Math.max(opt1, opt2);
}

const val = knapsack(items, maxWeight);

console.log(val); // 6000

const items2 = [
  {
    name: 'Laptop',
    weight: 3,
    value: 5000,
  },
  {
    name: 'MacBook',
    weight: 5,
    value: 6000,
  }
];

const val2 = knapsack(items2, maxWeight);

console.log(val2); // 5000


const items3 = [
  {
    name: 'Computer',
    weight: 2,
    value: 6000,
  },
  {
    name: 'Speaker',
    weight: 0.5,
    value: 2000,
  },
  {
    name: 'Raspeberry',
    weight: 0.2,
    value: 1500,
  },
  {
    name: 'Mouse',
    weight: 0.5,
    value: 300,
  },
  {
    name: 'Keyboard',
    weight: 0.8,
    value: 500,
  },
  {
    name: 'Tablet',
    weight: 1,
    value: 3000,
  },
  {
    name: 'Smartphone',
    weight: 0.3,
    value: 5000,
  },
  {
    name: 'iPhone',
    weight: 0.4,
    value: 8000,
  }
];

const val3 = knapsack(items3, maxWeight);

console.log(val3); // 23500