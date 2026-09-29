function descendingOrder(n: number) : number{
  return Number(n.toString().split("").sort((a,b)=> Number(b)-Number(a)).join("")
  )
}

// console.log(descendingOrder(1234567));
console.log(descendingOrder(123456789));
console.log(1);
console.log(0);





export function descendingOrder(n: number): number {
 return Number( n.toString().split("").sort((a, b) => Number(b) - Number(a)).join("")
  );
}