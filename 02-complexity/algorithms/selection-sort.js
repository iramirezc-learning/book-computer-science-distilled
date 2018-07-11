/**
 * Swaps two values in an array by the indexes given.
 * @param {Array} list 
 * @param {int} current (index of array)
 * @param {int} smallest (index of array)
 */
function swap(list, current, smallest) {
  let copy = list[current];

  list[current] = list[smallest];
  list[smallest] = copy;
}

/**
 * Selection Sort Algorithm
 * Running Time: O(n^2)
 * @param {Array} list 
 */
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

module.exports = selectionSort;
