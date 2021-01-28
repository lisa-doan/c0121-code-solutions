/* exported oddOrEven */
function oddOrEven(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      output.push('even');
    } else {
      output.push('odd');
    }
  }
  return output;
}
