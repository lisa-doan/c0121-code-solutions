/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  var output = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    output += word[i].toLowerCase();
  }
  return output;
}
