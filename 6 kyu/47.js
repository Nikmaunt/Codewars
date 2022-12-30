/*Implement the function unique_in_order which takes as argument a
 sequence and returns a list of items without any elements with 
 the same value next to each other and preserving the original order of elements.*/

 var uniqueInOrder=function(iterable){
  let newArr = []
    for (let i = 0; i < iterable.length; i++) {
      if( typeof iterable === String){
           let copy = iterable.split('')
      }
          else  copy = iterable
      if (copy[i] !== copy[i+1]) {
        copy[i] = copy[i]
        newArr.push(copy[i])
      }
    }
    return newArr
}

console.log(uniqueInOrder([1,2,3,1,1]))


/*var uniqueInOrder=function(iterable){
  return [...iterable].filter((a, i) => a !== iterable[i-1])
}*/