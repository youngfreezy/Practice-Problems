var array = [1,2,3];
each(array, function(item, index, array) {
  console.log(item);
})
console.log(array) // [2,3,4]

function each(x, callback){
  if(Array.isArray(x)){
  for(var i = 0; i<array.length; i++){
    callback(x[i], i, x);
  }
  }
  else{
    for(var prop in x){
      callback(x[prop], prop, x);
    }
  }
}

var newArray = map(array, function(item, index, array) {
  return item = item + 1;
});

console.log(newArray) // [2,3,4]

function map(x, callback){
  var newArray = [];
  each(x, function(item, index, array){ //callback and inputs have to be provided/could be anything, we defined this based on line 10
    
   newArray.push(callback(item));//each item mapped by the given callback function body.  
    
    
  })
  // no array needed in the loop, no for needed in the loop - each is already doing that.  
  
  return newArray; // how would I get this to return the item and index like the example above?
}