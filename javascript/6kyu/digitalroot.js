//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


function digitalRoot(n) {
   let array = n.toString().split("");
     let max = [];

    for (let i = 0; i<array.length; i++){
        max.push(Number(array[i]));
    }

    let reducedArray = max.reduce((a,b)=>{
        return a+b;
    },0)


    let str = reducedArray.toString()

    

    if (str.length<=1){
        return reducedArray;
    }

    else{
         return digitalRoot(reducedArray);
        
    }
 
  
}
console.log(digitalRoot(132189));
console.log(digitalRoot(16));







