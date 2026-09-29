// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 


function occur(arr){

    let max = 0;
    for (let i=0; i<=arr.length; i++){
    const num = arr.filter(a=>a===arr[i]).length;   //use the first element inthe array and check how many times it appears
    if (num>max){  
        max=num;
    }
    
    }

    console.log(max);
    
}
occur( [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]);

