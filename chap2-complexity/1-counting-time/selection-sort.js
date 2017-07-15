const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function swap(list, current, smallest) {
  let copy = list[current];

  list[current] = list[smallest];
  list[smallest] = copy;
}

function selectionSort(list) {
  for (let current = 0, len = list.length; current < len - 1; current++) {
    let smallest = current;

    for (let i = current + 1; i < len; i++) {
      if (list[i] < list[smallest]) {
        smallest = i;
      }
    }
    swap(list, current, smallest);
  }
}

console.log(numbers.join(', ')); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0

selectionSort(numbers);

console.log(numbers.join(', ')); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
