/*Your task is to make function, which returns the sum of a sequence of integers.
The sequence is defined by 3 non-negative values: begin, end, step (inclusive).
If begin value is greater than the end, function should returns 0*/

const sequenceSum = (begin, end, step) => {
 if( begin > end) return 0
     let s = 0
  for( let i=begin; i<=end; i= step + i)
    {
        s = i + s
    }
  return s
};

console.log(sequenceSum (1,5,1))