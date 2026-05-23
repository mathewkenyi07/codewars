// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

function betterThanAverage(classPoints, yourPoints) {
  let average = classPoints.reduce(function(accumulator,currentValue,index,array){
    return accumulator+currentValue; 
  },0)
  
  let results = average/classPoints.length;
  if (results<yourPoints){
    return true; 
  }
  else{
    return false;
  }
}

console.log(betterThanAverage([20,70.89,56],10));
