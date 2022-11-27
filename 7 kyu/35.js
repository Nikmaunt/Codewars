//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


function getMiddle(s)
{
  let a1 = s.length / 2  - 1
  let a2 = s.length / 2 + 1 
  let a3 =  s.length / 2 
  if ( s.length % 2 !== 0 ) 
  {  return  s.split('').slice(a3,a2).join('')  }
   else return  s.split('').slice(a1, a2).join('') 
  
}