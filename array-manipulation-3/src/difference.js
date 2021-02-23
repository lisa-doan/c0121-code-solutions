/* exported difference */
function difference(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      output.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      output.push(second[j]);
    }
  }
  return output;
}
