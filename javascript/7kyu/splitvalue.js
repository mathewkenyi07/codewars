// For k = 6 and elements = [6, 4, 10, 10, 6], the output should be splitByValue(k, elements) = [4, 6, 10, 10, 6].

// For k = 5 and elements = [1, 3, 5, 7, 6, 4, 2], the output should be splitByValue(k, elements) = [1, 3, 4, 2, 5, 7, 6].


function splitByValue(k, elements) {
  let arr = [];
  let arr2 = [];
  for (let i=0; i<=elements.length-1; i++){
    if (elements[i]<k){
      arr.push(elements[i]);
      
    }
    
    else{
        arr2.push(elements[i])
    }

  }
  
  
  let results = [...arr,...arr2];
  return results;
  
}

console.log(splitByValue(6,[6, 4, 10, 10, 6]));
console.log(splitByValue(5,[1, 3, 5, 7, 6, 4, 2]));


