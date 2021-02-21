/* exported flatten */
function flatten(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      output.push(array[i][j])
    }
    if (typeof array[i] === 'number' || !array[i]) {
      output.push(array[i])
    }
  }
  return output
};
