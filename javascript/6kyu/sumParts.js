// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []


function partsSums(ls) {
    let results = [];
    for (let i = 0; i<=ls.length; i++){
        let newList = ls.slice(i);
        // console.log(newList);
        
        let added = newList.reduce((initial,current,index,array)=>{
            return initial + current;
        },0)
        results.push(added);
    }
    return results;
}

console.log(partsSums([0, 1, 3, 6, 10]));
console.log(partsSums([1, 2, 3, 4, 5, 6]));
console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));



