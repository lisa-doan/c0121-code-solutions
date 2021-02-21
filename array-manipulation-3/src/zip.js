/* exported zip */
function zip(first, second){
    var output = [];
    if(first.length > second.length) {
        for(var i = 0; i < second.length ; i++) {
            var subArray = [];
            subArray.push(first[i])
            subArray.push(second[i]);
            output.push(subArray);
        }
    }
    else if(second.length >= first.length) {
        for(var i = 0; i < first.length ; i++) {
            var subArray = [];
            subArray.push(first[i])
            subArray.push(second[i]);
            output.push(subArray);
        }
    }
    return output
}
