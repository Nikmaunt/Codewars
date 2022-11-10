
//Complete the function that accepts a string parameter, and reverses each word in the string. 
//All spaces in the string should be retained

function reverseWords(str) {
    let s  = str.split(' ')
      let z = s.map(el=> el.split('').reverse().join('') )  
      return z.join(' ')
    }
    