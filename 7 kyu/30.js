//Given an array/list of integers, find the Nth smallest element in the array.
//Array/list size is at least 3.
//Array/list's numbers could be a mixture of positives , negatives and zeros.
//Repetition in array/list's numbers could occur, so don't remove duplications.

function nthSmallest(arr, pos){
    let s = arr.sort(function(a, b){return a - b})
      return s[pos-1] }