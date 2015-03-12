/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurance items and return the first one. 
 * Return null if there are no even-occurance items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurence = function(arr) {
	var tally = [];

	for(var i =0; i<arr.length; i++){
		if(!tally[arr[i]]){tally[arr[i]] = 1;}
		else{tally[arr[i]]++;}

	}

	for(var i =0; i<tally.length; i++){
		var number = i;
		if(tally[number] %2 == 0){return number;}
	}

  return number // as soon as I find the first even number in tally, i want to return 'i'
};


console.log(evenOccurence([1,2,3,3,3, 4, 4, 6, 6]))

//optimized:

var evenOccurence = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    var current = arr[i];
    
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] === current) {
        count++;
      }
    }
    
    if (count % 2 === 0) {
      return current;
    }
  }
  return false;
};

console.log(evenOccurence([1,2,3,3,3,4,4,6,6]))