/* exported capitalizeWords */
function capitalizeWords(string) {
  var splitString = string.toLowerCase().split(' ');
  var newArray = [];
  for (var i = 0; i < splitString.length; i++) {
    newArray.push(splitString[i][0].toUpperCase() + splitString[i].substr(1, splitString[i].length));
  }
  var newString = newArray.join(' ');
  return newString;
}
