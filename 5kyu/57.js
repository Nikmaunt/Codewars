function rot13(str) {
 let upperletters  = str.split('').map((el,i)=> str.charCodeAt(i) ).map((el,i)=> el >= 65 && el <= 90 ? i : '' ).filter(el=> el !== '')
 let rot = str.split('').map((el,i)=>  
 str.toLowerCase().charCodeAt(i) ).map((el,i)=> el >=91 && el<= 96 ?  String.fromCharCode(el) : el + 13 <= 122 && el>=65 && el<=122   ? String.fromCharCode(el+13): el && el>=65 && el<=122 ?    
 String.fromCharCode(97 + (el+13 -123)):  String.fromCharCode(el))
  let res =  rot.map((el,i)=> upperletters.includes(i) ? 
  el.toUpperCase() : el ).join('')
  console.log(upperletters)
    console.log(rot)
  return res
    console.log()
}

console.log(rot13("@[`{"))
