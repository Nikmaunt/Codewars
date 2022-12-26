//The main idea is to count all the occurring characters in a string. If you have ////a string like aba, then the result should be {'a': 2, 'b': 1}.

//What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  

    let res = string.split('').reduce((acc, item)=> ({
...acc, [item]: (acc[item]||0)+ 1
}), {})



 return res;
}