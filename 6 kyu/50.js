/*You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while
leaving the even numbers at their original positions.*/

function sortArray(array) {

    let odd = array.filter(el => el % 2).sort((a,b)=> a - b)
  
    let result = array.map(el=> el % 2 ? odd.shift(): el) 
      
    return result
  }
  
  console.log( sortArray([5, 8, 6, 3, 4]))