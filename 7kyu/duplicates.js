// function removeDuplication(arr){
// let list =  [...new Set(arr)]
// let results = [];
// for (let i= 0; i<= arr.length; i++){
//     if ()
// }

// }



function removeDuplication(arr) {
let results = arr.filter((ele)=> {
return arr.indexOf(ele) === arr.lastIndexOf(ele);
});
return results;

}

console.log(removeDuplication([1,2,3,2,4,6,2,6,7]));
console.log(removeDuplication([1,2,1,2,1,1,2,2]));
console.log(removeDuplication([2,5,6,7,5,2,6]));