const saltFish = ['Cod', 'Herring', 'Marlin'];
const freshFish = ['Asp', 'Carp', 'Ide', 'Trout'];

/**
 * Merges two ordered lists into one.
 * @param {array} ordered list of saltwater fish
 * @param {array} ordered list of freshwater fish
 */
function mergeFish(salt, fresh) {
  let result = [];

  while (salt.length && fresh.length) {
    if (salt[0] < fresh[0]) {
      result.push(salt.shift());
    } else {
      result.push(fresh.shift());
    }
  }

  result = result.concat(salt, fresh); // appends remaining items in the list

  return result;
}

console.log(mergeFish(saltFish, freshFish).join('\n'));
// Asp
// Carp
// Cod
// Herring
// Ide
// Marlin
// Trout
