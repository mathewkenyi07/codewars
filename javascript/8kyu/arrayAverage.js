function findAverage(array) {
  if (array.length===0){
    return 0;
    
  }
  let result = array.reduce(
    function(accumulator,currentValue,index,arr){
      return accumulator+currentValue;
    },0 );
  return result/array.length;
}

console.log(findAverage([67,9,44]));
