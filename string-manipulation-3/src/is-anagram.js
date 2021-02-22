/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var newFirstString = sortString(firstString);
  var newSecondString = sortString(secondString);

  if (newFirstString.length !== newSecondString.length) {
    return false;
  } else if (newFirstString === newSecondString) {
    return true;
  } else {
    return false;
  }
}

function sortString(string) {
  var newStringArray = string.split('').sort();
  var newString = '';
  for (var i = 0; i < newStringArray.length; i++) {
    if (newStringArray[i] !== ' ') {
      newString += newStringArray[i];
    }
  }
  return newString;
}
