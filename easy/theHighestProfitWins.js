// Write a function that returns both the minimum and maximum number of the given list/array.


function minMax(arr){
  
    arr.sort(function(a, b) {
    return a - b;
    });
    
    let minMax = [arr[0],arr[arr.length-1]];
    
    return minMax;
}