// FOR loops

// 1. standard for - loop (3 expressions)
// 2. for ... in   - loop  (objects)
// 3. for ... of   - loop  (arrays)

// ==================================================================
// ==================================================================
// 1. standard for - loop (3 expressions)
// SYNTAX: 
// for (ex-1;  ex-2;  ex-3) { block of code }
//     1-expression > - initialization (creationg of the controller)
//     2-expression > - condition (creating a condition using 1-expression)
//     3-expression > - control of first exp

// for (let i=0;  i<10;  i++) { "..." }

// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango',
//     'grapes', 'watermelon', 'papaya', 'pineapple', 'strawberry'];

// for (let i = 0;   i<fruits.length;  i++) {
//     console.log(fruits[i])
// }
// ==================================================================
// ==================================================================
// 2. for ... in   - loop  (objects)
// SYNTAX:
// for (let key in {...}) { block of code }
// let user = {
//     name: 'John',
//     age: 30,
//     email: 'test@gmail.com'
// }
// for (let key in user) {
//     console.log(`Key: ${key},  Value:${user[key]}`)
// }
// ---------------------------------------------------
// Even if for ... in - loop is created for objects, it can 
// still be used for arrays or etc. But it is NOT recommended.
// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango']
// for (let idx in fruits) {
//     console.log(`${idx}. ${fruits[idx]}`)
// }
// ==================================================================
// ==================================================================
// 3. for ... of   - loop  (arrays)
// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango']
// for (let fruit of fruits) {
//     console.log(fruit)
// }
// ==================================================================
// ==================================================================
// let user = {
//     name: 'John',
//     age: 30,
//     email: 'test@gmail.com'
// }
// console.log(Object.keys(user))
// ==================================================================
// ==================================================================
// function drawStarsUp(lines) {
//     for (let i = 0; i <= lines; i++) {
//         console.log("*".repeat(i));
//     }
// }
// drawStarsUp(5)
// *
// **
// ***
// ****
// *****
// ---------------------------------
// function drawStarsDown(lines) {
//     for (let i = lines; i > 0; i--) {
//         console.log("*".repeat(i))
//     }
// }
// drawStarsDown(10);
// *****
// ****
// ***
// **
// *
// ---------------------------------
// function drawReversedStarsUp(lines) {
//     for (let i = 0; i <= lines; i++) {
//         let neededSpaces = lines - i
//         console.log(" ".repeat(neededSpaces) + "*".repeat(i))
//     }
// }
// drawReversedStarsUp(20)
//     *
//    **
//   ***
//  ****
// *****
// ---------------------------------
// function drawReversedStarsDown(lines) {
//     for (let i = lines; i > 0; i--) {
//         let neededSpaces = lines - i
//         console.log(" ".repeat(neededSpaces) + "*".repeat(i))
//     }
// }
// drawReversedStarsDown(10);
// *****
//  ****
//   ***
//    **
//     *
// ---------------------------------
