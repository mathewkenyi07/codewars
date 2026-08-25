

// {
//         assert.deepEqual(swapHeadAndTail([ 1, 2, 3, 4, 5 ] ), [ 4, 5, 3, 1, 2 ]);
//         assert.deepEqual(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
//         assert.deepEqual(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);
//         assert.deepEqual(swapHeadAndTail([ 1 ]), [ 1 ]);
//     }


//     [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
//  \----/   \----/         
//   head     tail 

// [ -1, 2 ]  => [ 2, -1 ] 
// [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]  


function swapHeadAndTail(arr) {
    let results = [];
    if(arr.length===1) return [...arr];
    if (arr.length%2===0){
        let length = arr.length;
        let half = length/2;
        results.push(arr.slice(half)) 
        results.push(arr.slice(0,half));
        return results.flat(Infinity)
    }
    else{
        let half = Math.floor(arr.length/2);        
        results.push(arr.slice(half+1)) 
        results.push(arr[half])
        results.push(arr.slice(0,half));
        return results.flat(Infinity)
        
    }
 
}

console.log(swapHeadAndTail([56,17,-96,28,-41,55,-51]));

console.log(swapHeadAndTail([1]));
console.log(swapHeadAndTail([2,3]));
console.log(swapHeadAndTail([1,2,3,4]));
console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]));

