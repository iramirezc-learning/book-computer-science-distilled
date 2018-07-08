/**
 * Merges two ordered lists into one.
 * @param {array} list1 sorted list one
 * @param {array} list2 sorted list two
 */
function merge(list1, list2) {
  let result = [];

  while (list1.length && list2.length) {
    if (list1[0] < list2[0]) {
      result.push(list1.shift());
    } else {
      result.push(list2.shift());
    }
  }

  // appends remaining items in any of the lists
  result = result.concat(list1, list2);

  return result;
}

module.exports = merge;