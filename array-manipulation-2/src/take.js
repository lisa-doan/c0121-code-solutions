/* exported take */
function take(array, count) {
  var output = [];
  for (var i = 0; i < Math.min(count, array.length); i++) {
    output.push(array[i]);
  }
  return output;
}
