// Write a function that takes a string as an input and returns an object
// that has all the individual letters as keys, and the amount of times they
// appear in the string as values.

// Example: characterFrequency('mississippi')
// Should Return: {
//   m: 1,
//   i: 4,
//   s: 4,
//   p: 2
// }

var characterFrequency = function(string) {
	var map = {};
	for(var i =0; i<string.length; i++){
		if(!map[string[i]]){ 
			map[string[i]] = 1;} //it was all because of the equals...one is for setting. 2/3 are going to return true or false.  


		else {map[string[i]]++;}
	}

	
  return map
};

console.log(characterFrequency('mississippi'))

// only other thing here might be the newlines?