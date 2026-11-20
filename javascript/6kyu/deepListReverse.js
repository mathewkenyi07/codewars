// https://www.codewars.com/kata/5786f020e55533ebb7000153/train/javascript

// original array         regular reverse        deep reverse
// ───────────────────────────────────────────────────────────────────────────────

// [[1,2],[3,4]]          [[3,4],[1,2]]          [[4,3],[2,1]]

// [[9,8,7],[6,5,4],[3,2,1]]
//                        [[3,2,1],[6,5,4],[9,8,7]]
//                                               [[1,2,3],[4,5,6],[7,8,9]]

// [[50,51,[52,53]],[[54,55],56,57]]
//                        [[[54,55],56,57],[50,51,[52,53]]]
//                                               [[57,56,[55,54]],[[53,52],51,50]]




function deepReverse(l) {
    l.reverse();
    for (let i = 0; i<l.length; i++){
        if (Array.isArray(l[i])){
            deepReverse(l[i])
        }
    }

   return l;
    
}
console.log(deepReverse([[1,2],[3,4]]));
console.log(deepReverse([[9,8,7],[6,5,4],[3,2,1]]));
console.log(deepReverse([[50,51,[52,53]],[[54,55],56,57]]));


