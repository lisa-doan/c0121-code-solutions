/* exported reverse */
function reverse(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}
