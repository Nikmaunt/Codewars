//Write a function that takes a single string (word) as argument. 
//The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
    let b = word.split('')
    let c = b.map((el,i) => el.toUpperCase() === el ? i : '').join('').split('').map(el=>  parseInt(el))
    return c
 };
 console.log(capitals('CodEWaRs')) 