function fibsRec(n){
  //Base Case
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  //Recursive Case
  prev = fibsRec(n-1);
  nextVal = prev[prev.length-2] + prev[prev.length-1];
  prev.push(nextVal);
  return prev;
}

console.log(fibsRec(8))