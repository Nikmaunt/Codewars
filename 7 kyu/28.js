function getSum( a,b )
  { if (a == b) return a;
   let min = Math.min(a,b),
       max = Math.max(a,b)
   return (max - min + 1) * (max + min) / 2
}
