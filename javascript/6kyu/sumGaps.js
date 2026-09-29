// function sumGroups(arr) {
// let results = [];
// let array = [];
// let count = 0;
// let even;
// let odd;
// let evenPattern = 2;
// let oddPattern = 1;


// for (let i=0; i<arr.length-1; i++){
//     array.push(arr[i])
//     if (arr[i]%2===0){
//         arr[i] = even
//         count++;
//         if (count>1){
//             if(arr[i]===2+evenPattern){
//                 results.push(arr[i] + (arr[i]-1))
//             }
//         }

//     }
//     else{
//         arr[i] = odd
//         count++;
//         if (count>1){
//             if (arr[i]===1+oddPattern){
//                 results.push(arr[i]+(arr[i]-1))
//             }
//         }
//     }




 
  
// }

// return results.length;
// }


function sumGroups(arr) {
    let changed = true;

    while (changed) {
        changed = false;
        let results = [];

        for (let i = 0; i < arr.length; i++) {
            let sum = arr[i];

            while (
                i + 1 < arr.length &&
                arr[i] % 2 === arr[i + 1] % 2
            ) {
                sum += arr[i + 1];
                i++;
                changed = true;
            }

            results.push(sum);
        }

        arr = results;
    }

    return arr.length;
}
console.log(sumGroups([2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]));
