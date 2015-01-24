function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}
function removeByValue(a, obj){
	var index = a.indexOf(obj);
	a.splice(index, 1);
}