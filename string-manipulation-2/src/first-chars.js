/* exported firstChars */
function firstChars(length, string) {
  var output = '';
  if (string) {
    for (var i = 0; i < Math.min(length, string.length); i++) {
      output += string[i];
    }
  }
  return output;
}
