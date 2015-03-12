function reduce(array, combine, start) {
var current = start;
for (var i = 0; i < array.length; i++)
current = combine(current, array[i]);
return current;
}

function range(start, end, step) {
if (step == null) step = 1;
var array = [];

if (step > 0) {
for (var i = start; i <= end; i += step)
array.push(i);
} else {
for (var i = start; i >= end; i += step) 
// could you have said for(var i = start; i <= end; i-=step) also? 
//It’s accounting for negative numbers it seems like.  
// you can't do that because it would subtract a negative number and screw it up
array.push(i);
}
return array;
}

function reverseArrayInPlace(array) {
for (var i = 0; i < Math.floor(array.length / 2); i++) {
var old = array[i];
array[i] = array[array.length - 1 - i];
array[array.length - 1 - i] = old;
}
return array;
}


var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(flat, current) {
return flat.concat(current);
}, []));