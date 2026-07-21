// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]



// function removeSmallest(numbers) {

//     let length = numbers.length;
//     let small;

//     for (let i=0; i<length; i++){
//         for (let j=0; j<length-1; j++){
//             if (numbers[j]>numbers[j+1]){
//                 small = numbers[j];

//             }

//         }
//     }


        
// }

// function removeSmallest(numbers){
//     let results = numbers.sort((a,b)=> a-b)
//     console.log(results);
    
// }

// console.log(removeSmallest([5,3,2,1,4]));


function removeSmallest(numbers){
    let results = Math.min(...numbers);
    let index = numbers.indexOf(results)
    console.log(index);
    let final = numbers.slice(0,index);
    let final1 = numbers.slice(index+1,numbers.length);
    
    // console.log(fianl);
    // console.log(fianl1);
    return [...final,...final1]
    
}
console.log(removeSmallest([1,2,3,4,5]));



