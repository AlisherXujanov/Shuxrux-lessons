// // TASK 1:
// Create a function that takes a str and number then
// repeats every character of the str number of times
// RU: Создайте функцию, которая принимает строку и число,
// затем повторяет каждый символ строки number раз
// Security, 2 => SSeecckkuurriittyy
// Cyber, 3 => CCCyyybbbeeerrr

// let text = "Security"
// let r_times = 2
// ------------------------
// let result = text.split("").map((val, index) => {
//     return val.repeat(r_times)
// })
// console.log(result.join(""))
// ------------------------
// let result2 = text.split("").reduce((acc, next) => {
//     // acc == "",  next == "S"   =>   "SS"
//     // acc == "SS", next == "e"   =>   "SSee"
//     // acc == "SSee", next == "c" =>   "SSeecc"
//     // ...
//     return acc + next.repeat(r_times)
// }, "")
// console.log(result2)
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// // TASK 2: HomeWork
// let colors   = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// let suffixes = ["th","st","nd","rd"]
// OUTPUT:
//      "1st choice is Blue."
//      "2nd choice is Green."
//      "3rd choice is Red."
// ----------------------------------------------------------
// let colors = [
//     "Blue",
//     "Green",
//     "Red",
//     "Orange",
//     "Violet",
//     "Indigo",
//     "Yellow",
//     "Pink",
//     "Black",
//     "Aqua",
//     "Grey",
//     "Purple",
// ];
// let suffixes = ["th", "st", "nd", "rd"];

// for (let i = 0; i < colors.length; i++) {
//     let suffix;
//     let number = i + 1;

//     if (number % 10 === 1) {
//         suffix = "st";
//     } else if (number % 10 === 2) {
//         suffix = "nd";
//     } else if (number % 10 === 3) {
//         suffix = "rd";
//     } else {
//         suffix = "th";
//     }
//     console.log(`${number}${suffix} choice is ${colors[i]}.`);
// }
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// // TASK 3:
// Write a JavaScript function to retrieve the value of a
// given property from all elements in an array
// RU: Напишите функцию JavaScript для получения значения
// заданного свойства из всех элементов в массиве
// ----------------------------------------------------------
// Expected result : [15, -22, 47]
// let arr = [NaN, 0, 15, false, -22, '', undefined, 47, null]
// let result1 = arr.filter((val, index) => {
//     if (typeof(val) == 'number') {
//         if (val != 0 && !isNaN(val)) {
//             return val
//         }
//     }
// })
// console.log(result1)
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// //TASK 4 Homework
// Find the difference between two arrays.
// RU: Найти разницу между двумя массивами.
// ----------------------------------------------------------
// ex:1 let z = [1, 2, 3]
// let x = [100, 2, 1, 10]
// Output  ==>>  ["3", "10", "100"]
// ----------------------------------------------------------
// function arrDifference(arr1, arr2) {
//     let difference1 = arr1.filter(item => !arr2.includes(item))
//     let difference2 = arr2.filter(item => !arr1.includes(item))
//     return difference1.concat(difference2);
// }

// let z = [1, 2, 3];
// let x = [100, 2, 1, 10];
// let result1 = arrDifference(x, z);
// console.log("ex-1", result1);
// ----------------------------------------------------------
// ex:2 let z2 = [1, 2, 15]
// let x2 = [11, 3, 4, 1, 2]
// ["15", "11", "4", "3"]
// ----------------------------------------------------------
// let z2 = [1, 2, 15];
// let x2 = [11, 3, 4, 1, 2];
// let result2 = arrDifference(z2, x2);
// console.log("ex-2", result2);
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// //TASK 7 HomeWork
// Write a JS program to triple all numbers in a given list of integers using map()
// RU: Напишите программу JS, чтобы утроить все числа
// в данном списке целых чисел с помощью map()
// ----------------------------------------------
// function triple(arr) { "..." }
// triple([1, 2, 3, 4]) // => [3, 6, 9, 12]

// let result = triple([2, 3, 4, 5]);

// function triple(arr) {
//   return arr.map((num) => num * 3);
// }

// console.log(result);
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// //TASK 11 HomeWork
// Напишите программу JS, чтобы найти количество четных цифр
// в заданном целом числе`
// ----------------------------------------------------------
function even_digits(number) {
    let arr = []
    String(number).split("").forEach((val, idx) => {
        if (parseInt(val) % 2 == 0) {
            arr.push(parseInt(val))
        }
    })
    return arr
}
let n = 123456789
let result = even_digits(n) // => 4 (2, 4, 6, 8)
console.log(result)

