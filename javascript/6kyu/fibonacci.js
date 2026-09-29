// You are given a positive integer n greater than one.

// How many ways are there to represent it as a product of some Fibonacci numbers greater than one?

// (Fibonacci sequence: 1, 1, 2, 3, 5, 8...).

// For example, there are two ways for n = 40:

// 2 * 2 * 2 * 5
// 5 * 8
// But you can't represent n = 7 in an aforementioned way.

// Note that n may be really big (up to 10^36)



function fib(input){
    let arr = [0,1]
    for (let i = 1; i <= input; i++){
        arr.push(arr[i-1]+(arr[i]))
    }
    let results = arr.filter(element=>element>=2&&element<=input)
    let numMultiple = []
    for (let k = 0; k < results.length; k++){
        if (input%results[k]===0){
            numMultiple.push(results[k])
        }
    }
    console.log(numMultiple);
    let finalResults = []
    let count = 0;
    for (let j=0; j<numMultiple.length; j++){
        if (input%numMultiple[j]===0){
            finalResults.push(numMultiple[j])
        }


    }
    
}
console.log(fib(40));
