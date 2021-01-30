/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var stringToArray = string.split('');
  var output = [];
  for (var i = 0; i < stringToArray.length; i++) {
    if (i === firstIndex) {
      output.push(stringToArray[secondIndex]);
    } else if (i === secondIndex) {
      output.push(stringToArray[firstIndex]);
    } else {
      output.push(stringToArray[i]);
    }
  }
  return output.join('');
}
