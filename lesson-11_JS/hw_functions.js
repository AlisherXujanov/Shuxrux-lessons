// ex-1: Напишите функцию, которая принимает целое число минут и преобразует его в секунды

// function minToSec(minutes){
//     return minutes * 60;
// }

// console.log(minToSec(5));

// ==========================================================================
// ex-2 Напишите функцию, которая принимает строку в качестве аргумента и
// возвращает ее в обратном порядке. Ex: Hello -> olleH

// function reverseWord(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseWord("Hello"));

// ==========================================================================
// ex-3 Напишите функцию, которая принимает число в качестве аргумента и
// возвращает его в обратном порядке. Ex: 12345 -> 54321

// function reverseNum(num) {
//   let reverseStrNum = num.toString().split("").reverse().join("");
//   return parseInt(reverseStrNum);
// }
// console.log(reverseNum(12345));

// ==========================================================================
// ================= INTERMIDATE =========================
// 2. Напишите функцию, которая принимает строку в
// качестве параметра и преобразует первую букву каждого
// слова строки в верхний регистр.

// "This is test text" -> "This Is Test Text"
// function makeTitle(str) {
//     let splitted_text = str.split(" ")
//     let result = ''
//     splitted_text.forEach(word => {
//         // word  ===  hello
//         let word_first_letter = word[0]
//         // Hello   =>   H  +  ello
//         result += word_first_letter.toUpperCase() + word.slice(1) + " "
//     })
//     return result
// }
// -----------------------------
// let text = "This is test text"
// let r = makeTitle(text)
// console.log("Result: ", r)
// -----------------------------
// let text2 = "hello world of universe"
// let r2 = makeTitle(text2)
// console.log("Result 2: ", r2)
// -----------------------------
// ==========================================================================
// 3.Напишите функцию, которая принимает строку в качестве параметра и
// находит самое длинное слово в строке.
// function getLongestWord(str) {
//     let splitted_text = str.split(" ")
//     let result = splitted_text.reduce((acc, next) => {
//         if (acc.length < next.length) { return next }
//         else { return acc }
//     }, "")
//     return result
// }
// let text3 = "hello world of universe"
// let r3 = getLongestWord(text3)
// console.log("Result 3: ", r3)
// // -----------------------------------
// let text4 = "This is test text"
// let r4 = getLongestWord(text4)
// console.log("Result 4: ", r4)
// ==========================================================================
// 4. Напишите функцию, которая принимает строку в качестве параметра
// и подсчитывает количество гласных в строке.
// function countVowels(str) {
//     // let result = str.split("").filter(letter => {
//     //     if ("aouei".includes(letter.toLowerCase())) {
//     //         return letter
//     //     }
//     // })
//     // return result.length
//     let result2 = str.split("").reduce((acc, next) => {
//         // acc = 0,   next = T   =>   0
//         // acc = 0,   next = h   =>   0
//         // acc = 0,   next = i   =>   1
//         // ...
//         if ("aouei".includes(next.toLowerCase())) {
//             return acc + 1
//         } else {
//             return acc
//         }
//     }, 0)
//     return result2
// }
// let vowelCount = countVowels("This is test text eee")
// console.log("Count words: ", vowelCount)
// ==========================================================================
// 5. Напишите функцию, которая принимает два аргумента, строку и букву,
// и функция будет подсчитывать количество этой указанной буквы в строке.
// function countLetterInText(text, letter) {
// let result = 0
// for (let i=0;  i<text.length;  i++) {
//     if (text[i].toLowerCase() == letter.toLowerCase()) {
//         result += 1
//     }
// }
// return result
//     let result3 = text.split("").reduce((acc, next) => {
//         if(letter.toLowerCase() == next.toLowerCase()){
//             return acc + 1;
//         }else {
//             return acc;
//         }
//     }, 0)
//     return result3;
// }
// let r6 = countLetterInText("This is test text", "t")
// console.log("Result 6: ", r6)
// ==========================================================================

// ADVANCED LEVEL  (Pro)
// 1. Напишите функцию для извлечения уникальных символов
// или букв (которые только 1 раз указаны) из строки
// function uniqueLetters(str) {
//     let result = ""
//     for (let i=0;  i<str.length;  i++) {
//         let current = str[i].toLowerCase()
//         if (current != " ") { // Если текущий символ не пробел
//             let before = str.slice(0, i).toLowerCase()
//             let after = str.slice(i+1).toLowerCase()
//             if (!before.includes(current) && !after.includes(current)) {
//                 result += current
//             }
//         }
//     }
//     // TODO: Convert this loop into forEach
//     // RU: Преобразовать этот цикл в forEach
//     return result
// }
// let r7 = uniqueLetters("This is test text")  // Expected: "hx"
// console.log("Result 7: ", r7)

// -----------------------------------------------------------------
// 1. Напишите функцию для извлечения уникальных символов 
// или букв (которые только 1 раз указаны) из строки 
// function uniqueLetters(str) {
//     let result = ""
//     for (let i = 0; i < str.length; i++) {
//         let current = str[i].toLowerCase()
//         if (current != " ") { // Если текущий символ не пробел
//             let before = str.slice(0, i).toLowerCase()
//             let after = str.slice(i + 1).toLowerCase()
//             if (!before.includes(current) && !after.includes(current)) {
//                 result += current
//             }
//         }
//     }
//     // RU: Преобразовать этот цикл в forEach
//     return result
// }
// let r7 = uniqueLetters("This is test text")  // Expected: "hx"
// console.log("Result 7: ", r7)

// -------------------------------------------------------------------------
// ex-1 again with forEache method
// function uniqueLetters(str) {
//     let result = ""
//     str.split("").forEach((current, index) => {
//         let before = str.slice(0, index).toLowerCase()
//         let after = str.slice(index + 1).toLowerCase()
//         let current_lower = current.toLowerCase()
//         if (!before.includes(current_lower) && !after.includes(current_lower)) {
//             result += current
//         }
//     })
//     return result
// }

// let r7 = uniqueLetters("This is test text")
// console.log("Result 7: ", r7)
// -------------------------------------------------------------------------
// let x = "Andrey"
// if (x != "Andrey") {
//     console.log("Eshigdi och")
// }

// ==========================================================================

// 4. Напишите функцию, которая принимает массив строк. Функция должна вернуть
// новый массив, в котором каждая строка перевернута.

// let myArr = ["itachi", "naruto", "kisame"]
// function reverseStr(arr) {
    // let reverseResult = []
    // for (i = 0; i < arr.length; i++) {
    //     let reversedStr = arr[i].split("").reverse().join("")
    //     reverseResult.push(reversedStr)
    // }
    // return reverseResult
    // return arr.map(str => str.split("").reverse().join(""))
// }
// let result = reverseStr(myArr)
// console.log(result)
// ==========================================================================
// 5. Напишите функцию для генерации строки ID (указанной длины) из случайных символов 

function passwordGenerator(len) {
    let numbers = '1234567890'
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let symbols = '!@#$%^&*'
    let total = numbers + alphabet + symbols
    let result = ""
    for (let i=0;  i<len;  i++) {
        let randomIndex = parseInt(Math.random() * total.length)
        result += total[randomIndex]
    }
    return result
}
let randomPassword = passwordGenerator(15)
console.log(randomPassword)
