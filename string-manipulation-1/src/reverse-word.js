/* exported reverseWord */
function reverseWord(word) {
  var newWord = '';
  var counter = word.length - 1;
  while (counter >= 0) {
    newWord += word[counter];
    counter--;
  }
  return newWord;
}
