/*Write a function that outputs the transpose of a matrix - 
a new matrix where the columns and rows of the original are swapped.*/

function transpose(matrix) {
    let arr=[]
    console.log(matrix[0].slice())
    for (let i=0;i<matrix[0].slice().length;i++){
      let tempArr=[]
      for (let j=0;j<matrix.slice().length;j++){
        tempArr.push(matrix[j][i])
      }
      arr.push(tempArr)
    }
    return arr
  }
     
  console.log( transpose([[1,2,3],[4,5,6]]))