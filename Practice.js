//forEach -- build this out manually.
function forEach(arr, callback){  //callback is the action you perform on each element-- ie the anonymous function
		for(var i = 0; i<arr.length; i++){
				callback(arr[i]);
	}
};
var newArray = [1,2,3,4];
//forEach(newArray, function(x){console.log(x * 2)});
// for Object

function forEachObject(obj, callback){
if(typeof obj == 'object'){
	for (var prop in obj){
		if(typeof callback == 'function'){
			callback(obj[prop]);
		}
	}

}
};
var newObject = {x:1, y:2, z:3};
//forEachObject(newObject, function(x){console.log(x * 2)});
//reduce -- build it while calling the forEach
function reduced(arr){
	var sum = 0;
	forEach(arr, function(number){sum+=number;})
	return sum;
}

//console.log(reduced(newArray)); //no log anywhere inside so need to log it


function reducedObject(object){
	var sum = 0;
	forEachObject(object, function(number){sum+=number;})
	return sum;
}

//console.log(reducedObject(newObject));


function reduceWithoutForEach(arr){
	var sum = 0;
	for(var i = 0; i<arr.length; i++){
		sum += arr[i];
	}
	
	return sum;
}

console.log(reduceWithoutForEach([1,2,3,4,5]));





