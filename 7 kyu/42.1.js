Complete the //function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url){
    let a = url.split('').findIndex((el=> el === '#' ))
    if(a <= 0) return url
    else return url.substring(0, a)
  }