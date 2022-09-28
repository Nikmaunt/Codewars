/* You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
 */

function inde(array, n){
    if (n > array.length) return -1;
    let b =  array[n]**2
  return b}
  console.log(inde([1,2,3,4],9 ));