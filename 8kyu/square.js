function squareOrSquareRoot(array) {
  let results = [];
  for (let i=0; i<array.length; i++){
    let squared = Math.sqrt(array[i]);

    if (Number.isInteger(squared)){
      results.push(squared);
    }
    else {
      results.push(array[i]**2);
    }
  }
  return results;
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]));
