function highAndLow(numbers){
    let min = numbers.split(' ').reduce((x, y) => Math.min(x, y)).toString()
    let max = numbers.split(' ').reduce((x, y) => Math.max(x, y)).toString()
    let result =`${max} ${min}`
    return result
  }
  console.log(highAndLow(("1 2 3 4 5")))