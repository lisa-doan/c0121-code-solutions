/* exported difference */
function difference(first, second) {
   var firstDiff= first.filter(function(element) {
       if(!second.includes(element)) {
           return element
       }
   });
  var secondDiff= second.filter(function(element) {
       if(!first.includes(element)) {
           return element
       }
   });
  var output = firstDiff.concat(secondDiff)
  return output;
}
