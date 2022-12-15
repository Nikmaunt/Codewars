
//Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
   
    let z = string.split('').map((el => el.toLowerCase() === el? el :  ' '  +el)).join('')
return z    
}