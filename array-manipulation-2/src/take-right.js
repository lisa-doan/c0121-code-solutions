/* exported takeRight */
function takeRight(array, count) {
  var output = [];
  if (array.length === 0) return output;
  var start = array.length - count;
  for (var i = start; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
