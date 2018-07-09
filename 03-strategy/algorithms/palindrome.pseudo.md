# palindrome

```bash
function palindrome (word)
  if (word.length <= 1)
    return true
  if (word.first_char != word.last_char)
    return false
  w = word.remove_first_and_last_chars
  return palindrome(w)
```
