/* exported lastChars */
function lastChars(length, string) {
  var output = '';
  var start = string.length - length;
  if (length > string.length) return string;
  if (string) {
    for (var i = start; i < string.length; i++) {
      output += string[i];
    }
  }
  return output;
}
