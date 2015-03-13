
// You’re given two integer ranges x and y as (x1, x2) and (y1, y2). An integer range is a list of numbers. The x range includes every number from x1  to x2 (including x2). Similarly, the y range includes every number from y1 to y2.
 
// Return the sum of the numbers that only exist in both ranges. 
 
// SAMPLE OUTPUT
// A function call of sum_of_overlap(1, 10, 5, 20) -> returns 45

// EXPLANATION:
// To get the answer 45, we summed 5, 6, 7, 8, 9 and 10 since those numbers exist in both ranges (1,10) and (5,20). 

// REACTO

// Repeat
// Example

// Approach 
// Code

// Test
// Optimize

// 4=="4" ==> true
// 4==="4" ==> false

//  1                   100                  25
//  x1-------------------x2 
//              y1------------------y2
//              50                   20


function sum_of_overlap(x1, x2, y1, y2) {
    var sum = 0;
    var start;
    var end;
    
    
    //if x1 > y1, you can just start at x1
    // else start at y1 
    
    if(x1 > y1){
        start = x1;
    }
    else {
        start = y1; }
    if(y2>x2){
        end = x2;
        
    } 
    else {
        end = y2;
        
    }
    //if y2>x2 you'd stop at x2
    // else stop at y2
    for(i = start; i<= end; i++){
        
        sum += i;
        
    }
    
    return sum;
}


console.log(sum_of_overlap(1, 10, 5, 20))
