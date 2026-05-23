// Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.

// The first mission: let all elements in the array keep two decimal places(No need to convert number n).

// The second mission: Traversal arr, count the number of elements which are smaller than n and return it.

function howManySmaller(arr,n){
  let count = 0;
  for (let i = 0; i<arr.length;i++ ){
    let result = arr[i].toFixed(2);
    if (result<n){
      count++; 
    }
  }
  return count;
  
  
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));

