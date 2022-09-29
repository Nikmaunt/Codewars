
function getCount(str) {
    const reg = /[aeoiu]/gi;
     let result = str.match(reg)
     if ( result == null) return 0;
     if (result.length > 0) return result.length;
      else return  0;
   }
      console.log(getCount('ma pyx'));
   