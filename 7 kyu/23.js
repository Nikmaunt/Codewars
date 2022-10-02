function oddOrEven(array) {
    if (array.length == 0 ) return "even";
    let count = 
  array.reduce((acc, num) => { return acc + 
    num});
    if (count % 2 == 0) return "even"
    else return "odd"
  }
  console.log(oddOrEven([1,2,2,2]));