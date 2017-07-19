/**
 * Returns if a string is a palindrome.
 * @param {string} word 
 */
function palindrome(word) {
  let len = word.length;

  if (len <= 1) {
    return true;
  }
  if (word.charAt(0) !== word.charAt(len - 1)) {
    return false;
  }

  return palindrome(word.substring(1, len - 1));
}

console.log(palindrome('a')); // true
console.log(palindrome('ab')); // false
console.log(palindrome('aba')); // true
console.log(palindrome('abc')); // false
console.log(palindrome('abba')); // true
console.log(palindrome('abca')); // false
console.log(palindrome('ababa')); // true
console.log(palindrome('abaca')); // false
