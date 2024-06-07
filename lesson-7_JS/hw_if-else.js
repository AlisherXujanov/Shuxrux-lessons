// ====================================== BEGINNER LEVEL ======================================
// 1. Напишите логику, которая проверяет, является ли число положительным, отрицательным или нулем.

// let num = 10 // can you put numbers (1, 0, -1)

// if (num > 0) {
//   console.log("положительное")
// } else if (num < 0) {
//   console.log("отрицательное")
// } else {
//   console.log("равно нулю")
// }

// -----------------------------------------------------------------------------------------------

// 2. Напишите логику, которая проверяет, четное число или нет.

// let num = 9 // провепяем делится ли оно без остатка?
//             // если делиться без остатка (четное число), если есть остаток (не четное число)

// if(num % 2 === 0) {
//     console.log("четное")
// } else {
//     console.log("не четное")
// }

// -----------------------------------------------------------------------------------------------

// 3. Напишите логику, которая проверяет, кратно ли число на 3 и 5 одновременно.
// (делится ли число и на 3 и на 5 одновременно без остатка)

// let num = 10 // you can change this number to check

// if (num % 3 === 0 && num % 5 === 0) {
//   console.log("кратное числа")
// } else {
//   console.log("не кратное числа")
// }

// -----------------------------------------------------------------------------------------------

// 4. Напишите логику, которая проверяет, пустая строка или нет

// let str = ""

// if (str === "") {
//   console.log("empty")
// } else {
//   console.log("not empty")
// }

// -----------------------------------------------------------------------------------------------

// 5. Напишите логику, которая проверяет, содержит ли строка определенный символ.

// let str = "Impossible is possible"
// let search = "is"

// if (str.includes(search)) {
//     console.log("содержит символ которое мы ищем")
// } else {
//     console.log("не содержит символ которое мы ищем")
// }

// -----------------------------------------------------------------------------------------------

// 6. Напишите логику, которая проверяет, начинается ли строка с определённого символа.

// let str = "Hello baby"
// let search = "s"

// if (str.startsWith(search)) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// ====================================== INTERMIDATE LEVEL ======================================

// 1. FizzBuzz
//  Напишите логику, которая проверит число,
//  если оно кратно (если можно делить 3) 3, то выведите fizz,
//  если оно кратно (если можно делить на 5) 5, то выведите buzz,
//  если оно кратно (если можно делить на 3 и на 5) 3 и 5 то выведите fizzbuzz.
//    В остальных случаях выводите само число

// let num = 11

// if (num % 3 === 0 && num % 5 === 0) {
//   console.log("fizzbuzz")
// } else if (num % 3 === 0) {
//   console.log("fizz")
// } else if (num % 5 === 0) {
//   console.log("fizz")
// } else {
//   console.log(num % 3 && num % 5)
// }

// ???????????????????? question ????????????????????
// let num = 30
// if (num % 3 === 0) {
//     console.log("fizz")
// } else if (num % 5 === 0) {
//     console.log("buzz")
// } else if (num % 3 === 0 && num % 5 === 0) {
//     console.log("fizzbuzz")
// } else {
//     console.log(num % 3 && num % 5)
// }
// ???????????????????? question ????????????????????

// -----------------------------------------------------------------------------------------------
// 4. i don't understand what is this palindrome and how to solve the example
// let str = 'madam'
// // .split("") - ['m', 'a', 'd', 'a', 'm']
// // .reverse() - ['m', 'a', 'd', 'a', 'm']
// // .join("")  - 'madam'
// if (str == str.split("").reverse().join("")) {
//     console.log("palindrome")
// } else {
//     console.log("not palindrome")
// }
// -----------------------------------------------------------------------------------------------
// 5. Prime numbers are ->  1, 2, 3, 5, 7, 11, 13, 17, 19 ...
// Простые числа - это числа которые делятся только на себя и на 1 без остатка.
// А на все остальные числа с остатком.
let n = 7
if (n==1 || n==2 || n==3 || n==5 || n==7) {
    console.log("PRIME NUMBER")
} else if (n%2 == 0 || n%3 == 0 || n%5 == 0 || n%7 == 0) {
    console.log("Not prime")
} else {
    console.log("PRIME NUMBER")
}