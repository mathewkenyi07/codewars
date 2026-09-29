function countNumber(matrix, num) {
    let arr = matrix
    let flatted = arr.flat(Infinity)
    let count = 0;
//   for (let i = 0; i<=arr.length; i++){
//     if (arr[i]>num){
//       count++
//     }
//   }
    
//   return count;
return flatted.filter(ele=>ele===num.length)
}