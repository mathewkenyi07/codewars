// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

function otherAngle(a, b, c) {
  return 180 - (a+b);
}

console.log(otherAngle(90,60,15));
