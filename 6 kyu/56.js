/*Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.*/

function countSmileys(arr) {
    if (arr.length === 0) return 0
   const res = arr.filter(el => el.includes(')') || el.includes('D'))
   .filter(el=>  el.includes(':')|| el.includes(';') ).map(el=> el[1] === '-' || el[1] === '~' || el.length === 2  ? el : '').filter(el=> el !== '' && el.length < 4 ).length
   return res
   
 }
