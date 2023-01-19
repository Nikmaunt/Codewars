
/*You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting 
of k consecutive strings taken in the array.*/

function longestConsec(strarr, k) {

    if (k <= 0) { return  '' }
  
    let res = ''
  
    for (let i = 0; i < strarr.length - k + 1; i++) {
      const str = strarr.slice(i, i + k).join('')
        console.log(str)
      if (str.length > max.length) { max = str }
    }
    return res
  }
  console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
  