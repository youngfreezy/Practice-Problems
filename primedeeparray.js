// function isItPrime()
function isItPrime(num){
    if(num == 1){return false;}
    if(num%2 == 0){return false;}
    for(var i = 3; i < num/2; i+=2){
        if(num%i == 0){return false;}
    }
    return true;
}

console.log(isItPrime(37))


// Given a multi-dimensional Array: a = [1, [2, [3, 4]], [5, 6]],  deep_array_sum would return 21.

// You may not use the Ruby Array#flatten method (or any other method that may use this method for you). You are free to use Python, but the test cases are only currently setup to work for answers in Ruby or Javascript.
 
// HINT
// This problem should probably take about 12 lines or less

// base case and build

                     //[4,5]
function deep_array_sum(arr) {
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){ // [4,5]
            sum += deep_array_sum(arr[i]); // 
        }
        
        else{sum += arr[i]}
    }
    return sum; // 6
    
}

console.log(deep_array_sum([1, [2, [3, 4]], [5, 6,[[[7]]]]]))
