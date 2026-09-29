function squareDigits(num){
  let results = num.toString().split("");
  return Number(results.map(ele=>ele**2).join(""))  
}

console.log(squareDigits(3212));
console.log(squareDigits(2112));

