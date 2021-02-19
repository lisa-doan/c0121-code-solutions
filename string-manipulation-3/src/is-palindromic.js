/* exported isPalindromic */
function isPalindromic(string) {
  var trim = string.split(' ').join('');
  var reverse = '';
  for (var i = trim.length - 1; i >= 0; i--) {
    reverse += trim[i];
  }
  if (reverse === trim) {
    return true;
  } else {
    return false;
  }
}
