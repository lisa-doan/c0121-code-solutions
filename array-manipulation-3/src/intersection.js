/* exported intersection */
function intersection(first, second) {
    var output= [];
   for(var i = 0; i < first.length; i++) {
     if (second.includes(first[i])) {
      output.push(first[i]);
    }
   }
  return output;
}
