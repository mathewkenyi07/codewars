




function number(sums) {
    let array = sums.split("").map(element => Number(element))
    let results = [];
    console.log(array);
    for (let i =0; i<array.length; i++){
        for (let k = i+1; k<array.length; k++){
             results.push(array[i] + array[k])
        }
       
    }
// return results;
    
}


// 12345
// [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
// [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]

console.log(number("1234"));

//i wanna change the above algorithm in reverse
function num(input){
    let results = [];
     let array = input.split("").map(element => Number(element))
     for (let i =0; i<array.lenght; i++){
        let first = array[0];
        results.push(first + array[i+1])
        if (array[i+1]!==first){
            i++;

        }
     }
     return results;


}

console.log(num("3,4,5,6,7,8,9"));

