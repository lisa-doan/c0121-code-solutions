/* exported reverseWords */
function reverseWords(string) {
  var split = string.split(' ');

  var reverseString = function (string) {
    var output = '';
    for (var i = string.length - 1; i >= 0; i--) {
      output += string[i];
    }
    return output;
  };

  var wordsReverse = [];

  for (var i = 0; i < split.length; i++) {
    wordsReverse.push(reverseString(split[i]));
  }
  return wordsReverse.join(' ');
}
