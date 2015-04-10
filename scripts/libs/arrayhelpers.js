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

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function randomizeToPercentage(orig, denominator){
  return orig+randomIntFromInterval(-(orig/denominator), orig/denominator);
}