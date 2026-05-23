// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenorOdd(num){
    if (num%2===0) return `Even`;
    return `Odd`;
}

console.log(evenorOdd(3));