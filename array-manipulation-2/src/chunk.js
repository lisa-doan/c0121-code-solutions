/* exported chunk */
function chunk(array, count) {
  var output = [];
  for (var i = 0; i < array.length; i += count) {
    output.push(array.slice(i, i + count));
  }
  return output;
}
