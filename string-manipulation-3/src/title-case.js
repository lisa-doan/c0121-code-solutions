/* exported titleCase */
function titleCase(string) {
  var splitStringArray = string.split('');
  var newString = '';
  for (var i = 0; i < splitStringArray.length; i++) {
    if (splitStringArray.length >= 4) {
      newString += splitStringArray[i];
    }
  }
  return newString;

}
