/* exported dropRight */
function dropRight(array, count) {
  var output = [];
  for (var i = 0; i < array.length - count; i++) {
    output.push(array[i]);
  }
  return output;
}
