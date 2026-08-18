function moveZeros(arr) {
  let arr2 = [];
  let arr3 = [];
  for (let i=0; i<=arr.length-1; i++){
    if (arr[i]===0){
      arr2.push(arr[i])
    }
    else {
      arr3.push(arr[i]);
    }
    
  }
  return [...arr3, ...arr2]
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));   //[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]





