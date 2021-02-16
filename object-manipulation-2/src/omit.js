/* exported omit */
function omit(source, keys) {
  var output = {};
  for (var key in source) {
    if (!keys.includes(key) && source[key] !== undefined) {
      output[key] = source[key];
    }
  }
  return output;
}
