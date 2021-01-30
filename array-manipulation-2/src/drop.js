/* exported drop */
function drop(array, count) {
  var output = [];
  for (var i = count; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
