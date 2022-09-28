/* Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array. */

function countPositivesSumNegatives(input) {
    if (!input || input.length == 0) return [];
  let f = 0;
  let s = 0;
  input.forEach (item => {
    if (item > 0) {
      f++;
    }
      else {
      s += item;
      }
    });
  return[f,s];
  }