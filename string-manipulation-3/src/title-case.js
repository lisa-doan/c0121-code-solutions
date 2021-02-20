/* exported titleCase */

var specialCases = {
  javascript: 'JavaScript',
  'javascript:': 'JavaScript:',
  api: 'API',
  web: 'Web'
};
var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

function titleCase(string) {
  var stringArray = string.toLowerCase().split(' ');
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].includes(':')) {
      stringArray[i + 1] = stringArray[i + 1].charAt(0).toUpperCase() + stringArray[i + 1].slice(1);
    }
    if (stringArray[i].includes('-')) {
      stringArray[i] = capitalizeHyphen(stringArray[i]);
    }
    if (stringArray[i] in specialCases) {
      stringArray[i] = specialCases[stringArray[i]];
    } else if (!minorWords.includes(stringArray[i])) {
      stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
    }
  }
  var newString = stringArray.join(' ');
  return newString;
}

function capitalizeHyphen(string) {
  var splitHyphenWord = string.trim().split('-');
  var output = [];
  for (var j = 0; j < splitHyphenWord.length; j++) {
    output.push(splitHyphenWord[j].charAt(0).toUpperCase() + splitHyphenWord[j].slice(1));
  }
  var newWord = output.join('-');
  return newWord;
}
