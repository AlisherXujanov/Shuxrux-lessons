// ================================================
// PIRAMID
function drawPiramid(lines) {
    // for (let i = 1; i < lines; i++) {
    //     let spaces = ' '.repeat(lines - i);
    //     let stars = '*'.repeat(2 * i - 1);
    //     console.log(spaces + stars);
    // }
    for (let i = 1; i < lines; i++) {
        console.log(" ".repeat(lines - i) + "* ".repeat(i))
    }
}
// drawPiramid(10)
//     *
//    ***
//   *****
//  *******
// *********
// ================================================
// FACTORIAL
// !5  =   5 * 4 * 3 * 2 * 1     =>    120
// !10 =   10*9*8*7*6*5*4*3*2*1  =>    3628800
function factorial(num) {
    let result = 1
    for (let i = 1; i <= num; i++) {
        result = result * i
        // result *= i
    }
    return result
}
let r1 = factorial(5)  // 120
let r2 = factorial(10) // 3628800
// console.log(r1)
// console.log(r2)
// ================================================
// FIBONACCI  (1)
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ... 
function fibbo_upto(num) {
    
}

fibbo_upto(100) // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

// ================================================
// FIBONACCI  (2)
function fibbo_n(how_many) { }

fibbo_n(20) // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181
// ================================================
