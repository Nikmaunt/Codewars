/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.*/

function findOdd(arr) {
    const array = arr.reduce((acc, item) => {
    if(acc[item]) {
    acc[item].push(item);
    } else {
    acc[item] = [item]
    }
      return acc
  }, {})
  
  return  Object.values(array).filter(el=> el.length % 2 !==0)[0][0];
  }
  
  console.log(findOdd([0,1,0,1,0]))