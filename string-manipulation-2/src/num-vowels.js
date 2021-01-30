/* exported numVowels */
function numVowels(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a' ||
    string[i].toLowerCase() === 'e' ||
    string[i].toLowerCase() === 'i' ||
    string[i].toLowerCase() === 'o' ||
    string[i].toLowerCase() === 'u') {
      counter += 1;
    }
  }
  return counter;
}
