// DATA TYPES
// 1. String    =>   текст
// 2. Number    =>   числа  (up to 17 digits)
// 3. Bigint    =>   большие цыфры
// 4. Boolean   =>   true/false  (истина / ложь) (haqiqtan / yolg'on)
// 5. Undefined =>   не определён  (not defined) (aniqlanmagan)
// 6. Null      =>   пусто  (empty) (bo'sh)
// 7. Symbol    =>   символ
// 8. Object    =>   объект 
// -------------------------------------------------------
// "use strict"
// This is strict mode that helps to avoid mistakes
// -------------------------------------------------------
//* String  ==  "...."  ==  simple text  == обычний текст
// -------------------------------------------------------
//* "",   '',   ``   =>  these quotes are used
//                      to create a string
// -------------------------------------------------------
//* Number  ==  1, 2, 3, ...
// -------------------------------------------------------
//* VARIABLES
// 1. var       =>  5%
// 2. let       =>  55%
// 3. const     =>  40%

// var myName = "Alisher"
// let myAge = 29
// const myCity = "Tashkent"
// {
//     let myAge = 30
//     console.log(myAge)
// }
// console.log(myAge)


// var   =>  global variable
//           can be updated anytime anywhere with/without
//           keyword var
//           can leave block

// let   =>  local variable
//           can NOT be updated anytime anywhere with
//           keyword let but only possible without 'let'
//           can NOT leave block

// const =>  local variable
//           can NOT be updated
//           can NOT leave block
// ----------------------------------------------
//* ---- SYNTAX ----
// keyword variable-name = value
// ключавое-слово имя-переменной = значение
// ----------------------------------------------
//* Variables inside of BLOCK OF CODE
// {
//     var test1 = "var test"
//     let test2 = "let test"
//     const TEST3 = "const TEST"
// }
// console.log(test1)
// console.log(test2)
// console.log(TEST3)
// ----------------------------------------------
//* CASES  =>  Стили надписи имён
// camelCase  =>  ...^..^.. =>  greatBigAndBeautifulCity
// snake_case =>  ..._..._. =>  great_big_and_beautiful_
// PascalCase =>  ^..^..^.. =>  GreatBigAndBeautifulCity
// kebab-case =>  ..-..-... =>  great-big-and-beautiful-

// ----------------------------------------------
// console.log(...) => shows a message inside of console
//                     показывает сообщение в консоли
//                     нужен для проверки кода
// ----------------------------------------------
// var test = "test"
// `... ${test} ... `

// let myName = 'Alisher'
// let myAge = 28
// console.log(`
//     My name is ${myName}.
//     I am ${myAge} years old
// `)
// ----------------------------------------------
// let myName = "Alisher"
// let info = `This is my first class. My name is ${myName}`
// console.log(info)
