/* exported union */
function union(first, second) {
  var array = first.concat(second);
    var output= [];
   for(var i = 0; i < array.length; i++) {
     if (!output.includes(array[i])) {
      output.push(array[i]);
    }
   }
  return output;
}
