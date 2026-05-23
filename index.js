// Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

// Please return the gap between the first position of c and the last position of c.

// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, 
// should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

function firstToLast(str,c){
   const one = str.indexOf(c);
  const second = str.lastIndexOf(c);
  if (one === -1) {
    return -1;
  }
  return second - one;
}
//indexOf  used on arrays and strings returns  first positon
//lastIndexOf  used on arrays and strings returns  last positon
//findIndex   works on only arrays and objects returns position
//search works on strings returns position
//-1 means not found
  
console.log(firstToLast("love","e"));
