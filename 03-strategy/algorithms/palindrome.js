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

module.exports = palindrome;