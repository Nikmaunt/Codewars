/* Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. */

var summation = function (n) {
    {
     if (n == 1) return 1;
     return n +  summation(n - 1);
   }
   }