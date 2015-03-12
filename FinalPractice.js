//build out each that will work with arrays and objects.  

var array = [1,2,3];
each(array, function(item, index, array) {
  console.log(item, index, array);
}) // [2,3,4]

function each(x, callback){
	if(Array.isArray(x)== true){
		for(var i =0; i<x.length; i++){
			callback(x[i], i, x);
		}
	}else{

		for(var prop in x){
			callback(x[prop], prop, x);
		}
	}

}



//build out map using each

var newArray = map(array, function(item, index, array) {
  return item = item + 1;


});

console.log(newArray) // [2,3,4]

function map(x, callback){
	newArray = [];
	each(x, function(item, index, array){
		newArray.push(callback(item));
	});
	return newArray; // how would I get this to return the item and index like the example above?
}

function filter(array, test){
  var passed = [];
  each(array, function(item){
    if(test(item)){
      passed.push(item);
    }
  })
  return passed;
}

var array = [1, 2, 3]

console.log(filter(array, function(x){
	return x%2 !== 0
}));

function filterUsingMap(array, test){
  //this becomes an array. so you can store it in a variable or just return it directly.  
	//lines 55-59 becomes an array. store in variable and return on line 60, or return on line 55.	
	return map(array, function(item){
    if(test(item)){
      return item; //meaning you put it on to the array that gets returned, see line 27
   };
  });
  
}

var array = [1, 2, 3]

console.log(filterUsingMap(array, function(x){
	return x%2 !== 0
}));

//map will go through every item in the array and on 
//each iteration it will return something
//that will get added to the array.  

//inside higher order functions, returns don't stop the loops from running. 
//(usually)

// So remember when I said they only do either filter or map, 
// not both, I think this may be why. Writing filter with map 
// won’t actually work, since map is going to add something to 
// the new array for every item in the original array, and filter 
// is trying to not add items at some points. Thats why all the 
// things that did pass the filter test were in there, but the thing 
// that didn’t just came in as a falsey value. If they have you do filter, 
// they will have you use it with each. Sorry about that, but I 
// still think the things we talked through were valuable when 
// going through that function, it just won’t work with map as we want.