// Run-length encoding (RLE) is a very simple form of lossless data compression in which runs of data are stored as a single data value and count.

// A simple form of RLE would encode the string "AAABBBCCCD" as "3A3B3C1D" meaning, first there are 3 A, then 3 B, then 3 C and last there is 1 D.

// Your task is to write a RLE encoder and decoder using this technique. The texts to encode will always consist of only uppercase characters, no numbers.

function encode(input) {
    let arr = input.split("");
    console.log(arr);
    // for (let num of arr){
    //     console.log(num);
        
    // }
    for (let i = 0; i<=arr.length; i++){
        
    }
  
}

function decode(input) {
  
}

console.log(encode("ABCB"));



// const Test = require('@codewars/test-compat');

// describe('Fixed tests', function() {
//   it('Test encode', function() {
//     Test.assertEquals(encode('A'), '1A');
//     Test.assertEquals(encode('AAA'), '3A');
//     Test.assertEquals(encode('AB'), '1A1B');
//     Test.assertEquals(encode('AAABBBCCCA'), '3A3B3C1A');
//   });
//   it('Test decode', function() {
//     Test.assertEquals(decode('1A'), 'A');
//     Test.assertEquals(decode('3A'), 'AAA');
//     Test.assertEquals(decode('1A1B'), 'AB');
//     Test.assertEquals(decode('3A3B3C1A'), 'AAABBBCCCA');
//   });
//   it('Round trip', function() {
//     Test.assertEquals(decode(encode('AAAAAAAAAAB')), 'AAAAAAAAAAB');
//     Test.assertEquals(decode(encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ')), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
//     Test.assertEquals(encode(decode('10A1B')), '10A1B');
//     Test.assertEquals(encode(decode('1A1B1C1D1E1F1G1H1I1J1K1L1M1N1O1P1Q1R1S1T1U1V1W1X1Y1Z')), '1A1B1C1D1E1F1G1H1I1J1K1L1M1N1O1P1Q1R1S1T1U1V1W1X1Y1Z');
//   });
// });