// Merge Sort Algorithm

// Algorithm Complexity: O(n log n)

function merge(left, right) {
  const merged = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  while (left.length) {
    merged.push(left.shift());
  }

  while (right.length) {
    merged.push(right.shift());
  }

  return merged;
}

function mergeSort(list) {
  if (list.length === 1) {
    return list;
  }

  const middleIndex = Math.round(list.length / 2);
  const secondHalf = list.splice(middleIndex);

  return merge(mergeSort(secondHalf), mergeSort(list));
}

// Start
// ==============================
const numbers = [10, 9, 8, 7, 6, 20, 4, 3, 2, 1];

console.log('Sorted numbers->');
console.log(mergeSort(numbers));
// [ 1, 2, 3, 4, 6, 7, 8, 9, 10, 20 ]