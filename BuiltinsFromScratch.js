

function each(x, callback){
    if(Array.isArray(x) == true){
    	for(var i = 0; i<x.length; i++){
        callback(x[i]);
        }
    }
    else{
    	for(var prop in x){
        callback(x[prop]);
        
        };
    
    };
        
    
}


map([1,2,3,4,5], function(val){return val*2;});
//[2,4,6,8,10]

function map(x, callback){
newArray = [];
	each(x, function(y){
    	newArray.push(callback(y));
    })

return newArray;

}

filter([1,2,3,4,5], function(val){return val > 2;});

function filter(array, test){
	passed = [];
    each(array, function(x){
    if(test(x)){
    passed.push(x);}
    })
    return passed
}

reduce([1,2,3,4,5], function(total, val){ return total+val;}, 5);

function reduce(arr, callback, start){
var sum = start;
for(var i = 0; i<arr.length; i++){
	sum = callback(sum, arr[i]);
}
return sum;
}

function reduce(list, callback, start){
each(x, function(y){
if(!start){start=y};
else{start = callback(start, y);}
})
return start;  
}





