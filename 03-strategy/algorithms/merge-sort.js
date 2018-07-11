/**
 * Merges two ordered lists into one.
 * @param {array} left first sorted list
 * @param {array} right second sorted list
 */
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

/**
 * Merge Sort Algorithm
 * Running Time: O(n log n)
 * Technique: Divide and Conquer
 * @param {Array} list List of numbers to be sorted
 */
function mergeSort(list) {
  if (list.length === 1) {
    return list;
  }

  const middleIndex = Math.floor(list.length / 2);
  const secondHalf = list.splice(middleIndex);

  return merge(mergeSort(secondHalf), mergeSort(list));
}

module.exports = mergeSort;
