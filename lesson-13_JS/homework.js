// ================================================
// PIRAMID
// function drawPiramid(lines) {
//     for (let i = 1; i < lines; i++) {
//         let spaces = ' '.repeat(lines - i);
//         let stars = '*'.repeat(2 * i - 1);
//         console.log(spaces + stars);

// }
// // drawPiramid(10)
// }
//     *
//    ***
//   *****
//  *******
// *********
// ================================================
// FACTORIAL
// !5  =   5 * 4 * 3 * 2 * 1     =>    120
// !10 =   10*9*8*7*6*5*4*3*2*1  =>    3628800
// function factorial(num) { 
//     // !5  =   5 * 4 * 3 * 2 * 1     =>    120
//     // !10 =   10*9*8*7*6*5*4*3*2*1  =>    3628800
//     let result = 1;
//     for(let i = 1; i <= num; i++){
//         result = result * i;

//         // result *= i
//     }
//     return result
// }

// let r1 = factorial(5) // 120
// let r2 =  factorial(10) // 3628800
// console.log(r1);
// console.log(r2);
// ================================================
// FIBONACCI  (1)
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ... 
// function fibbo_upto(num) {}

function fibbo_upto(num) {
    let result = [0, 1];

    // RE-DO
    
    return result;
}

let fibo = fibbo_upto(100) // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// console.log(fibo); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]


// ================================================
// FIBONACCI  (2)
function fibbo_n(how_many) {
    let result = [0, 1]
    for (let i = 2; i < how_many; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result
}

let fiboNum = fibbo_n(5) // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
console.log(fiboNum);

// 1, 3, 5, 7, 11, 13, 17, 23
// ================================================

