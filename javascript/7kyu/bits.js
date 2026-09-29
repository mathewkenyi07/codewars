//padStart() is a JavaScript string method that adds characters to the beginning of a string until the string reaches a specified length.

Number.prototype.toBits = function(length) {
  return length.toString(2);
}


function bits(input){
    return input.toString(2)
}
console.log(bits(10));
console.log(bits(0));
console.log(bits(7));
console.log(bits(128));
console.log(bits(255));




