/*Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.*/


function high(x){
  
    const wordArray =  x.split(' ')
    const score = wordArray.map(el=> {
      return el.split('').reduce((a,b)=> {
      return  a + (b.charCodeAt(0)-96)
    },0 )  
    } )
      const bestScoreInd = score.indexOf(Math.max(...score))
      const bestScoreWord = wordArray[bestScoreInd]
      return bestScoreWord
    }
    console.log(high("man i need a taxi up to ubud"))