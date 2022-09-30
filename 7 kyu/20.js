function strong(n) {
    function factorial(num) {
                 if (num === 0){
                     return 1;
                 } else if(n != 1) {
     return num * factorial(num - 1)
                 } else {return 1}
             }
 let s = String(n),
   result = 0
   for ( let i = 0; i < s.length; i ++) {
     result += factorial(Number(s[i]))
 }
   if (result == n) {
     return "STRONG!!!!"
   } else{
     return "Not Strong !!"
   }
 }
   console.log(strong(342));