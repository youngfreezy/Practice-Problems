function forEachobj(obj, callback){

	for(var prop in obj){

		callback(obj[prop]);
	};


}

console.log(forEachobj({x:1, y:2, z:3}, function(x){console.log(x * 2)}));

function filter(array, test){
	passed = [];

	for(var i =0; i<array.length; i++){

		if(test(array[i])){

			passed.push(array[i]);
		}
	}
	return passed
}

// arr = [1, 2, 3, 4]
// console.log(filter(arr, function(n){return n%2 !== 0}))


function map(array, transform){
transformed= [];
for(var i = 0; i<array.length; i++){

	transformed.push(transform(array[i]));
}
	return transformed
}





arr = [1, 2, 3, 4]
console.log(map(arr, function(n){return n * 3}))