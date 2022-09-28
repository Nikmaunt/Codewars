// Sum Numbers
/* Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0. */

function sum (numbers) {
    if (numbers.length <= 0) return 0;
   let s = 0;
    numbers.forEach (item =>  {
        s += item;  
      });
    return s;
    }
    console.log(sum([0,1,32,-1]));