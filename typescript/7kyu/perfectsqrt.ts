// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

export default function isSquare(n: number): boolean {
  if (n<0) return false
  let results = Math.sqrt(n)

   if(Number.isInteger(results)){
    return true
  }
  return false

};
