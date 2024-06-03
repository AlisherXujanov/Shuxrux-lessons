// https://regexr.com/
// /t/   // raw text
// -----------------------------------------------------------
// function_name()
// parseInt()
// typeof()
// -----------------------------------------------------------
// '...'.method-name()
// -----------------------------------------------------------
// REPLACE
// let container = str.replace("old-value", "new-value")
// let str = "HellO world OOO ooo"
// let container = str.replace(/o/gi, "*")
// console.log(container) // Hi world
// -----------------------------------------------------------
// INDEXes
// starts always from 0
// -----------------------------------------------------------
// SLICE
// let str = "Hello...world"
// let result1 = str.slice(2)      // llo world
// let result2 = str.slice(2, 8)   // llo wo

// console.log(result1)
// console.log(result2)

// const MIDDLE = parseInt(str.length / 2)
// let firstPart = str.slice(0, MIDDLE)
// let lastPart = str.slice(MIDDLE)
// -----------------------------------------------------------
// CHARAT  ||   [INDEX]   =>  specific character
// Get character by index

// let str = "Hello world"
// console.log(str.charAt(0))
// console.log(str.charAt(str.length-1))  // 11-1=10
// //   ===
// console.log(str[0])
// console.log(str[str.length-1])  // 11-1=10
// -----------------------------------------------------------
// indexOf()  ||  lastIndexOf()
// Get index by character
// let str = "Hello world"
// console.log(str.indexOf("o"))  // 4
// console.log(str.lastIndexOf("o"))  // 7
// // -----------------------------------------------------------
// // Search('...' || regExp)    &&    Match('...' || regExp)
// let str = "O Hello world"
// console.log(str.search("o"))   // 6    => RegEx does not work search
// console.log(str.search(/o/i))  // 0    =>  does NOT work with 'g'
// // --------------------------
// console.log(str.match("o"))   // [ 'o', index: 6, input: 'O Hello world', groups: undefined ]
// console.log(str.match(/o/i))  // [ 'O', index: 0, input: 'O Hello world', groups: undefined ]
// console.log(str.match(/o/gi))  // [ 'O', 'o', 'o' ]
// -----------------------------------------------------------
// SPLIT  =>  split the text into many pieces
// let str = "This is test text"
// console.log(str.split(""))     // [ 'T', 'h', 'i', 's', ' ', 'i', 's', ' ', 't', 'e', 's', 't', ' ', 't', 'e', 'x', 't' ]
// console.log(str.split(" "))    // [ 'This', 'is', 'test', 'text' ]
// console.log(str.split("t"))    // [ 'This is ', 'es', ' ', 'ex', '' ]
// console.log(str.split("test")) // [ 'This is ', ' text' ]
// console.log(str.split("t", 2)) // [ 'This is ', 'es' ]
// -----------------------------------------------------------
// padStart(min-count, '...')  &&  padEnd(min-count, '...')
// let str = "Hello"
// console.log(str.padStart(10, "*"))  // *****Hello
// console.log(str.padEnd(10, "*"))    // Hello*****
// -----------------------------------------------------------
// includes('...')  &&  startsWith('...')  &&  endsWith('...')
// let str = "Hello world"
// console.log(str.includes("o"))  // true
// console.log(str.includes("g"))  // false
// // --------------------------
// console.log(str.startsWith("H"))  // true
// console.log(str.startsWith("h"))  // false
// // --------------------------
// console.log(str.endsWith("d"))  // true
// console.log(str.endsWith("D"))  // false
// -----------------------------------------------------------
// REPEAT
// let str = "Hello "
// console.log(str.repeat(3)) // Hello Hello Hello
// -----------------------------------------------------------
// [...].reverse()  &&  [...].join()
// let str = "Hello world"
// let arr = str.split(" ")
// console.log(arr.reverse().join(" "))  // world Hello
// // ----------------------
// let arr2 = str.split("")  // [...]
// console.log(arr2.reverse().join(""))  // dlrow olleH
// -----------------------------------------------------------
//*  /.../            => regular expression (regExp)
//!               RU: регулярное выражение
//*  /.../i           => insensitive
//!               RU: нечувствительный
//*  /.../g           => global
//!               RU: глобальный
//*  string           => text
//!               RU: текст
//*  length           => the length of the string (text)
//!               RU: длина строки (текста)
//*  slice()          => the special part of the string
//!               RU: специальная часть строки
//*  replace()        => replace the string with a new string
//!               RU: заменить строку на новую строку
//*                   can take a special regExp as an parameter
//!               RU: может принимать специальное регулярное выражение
//*  toUpperCase()
//*  toLowerCase()
//*  concat('...')         => merges two strings
//!                RU: объединяет две строки
//*  trim()           => removes whitespace in the beginning
//*                      and at the end of the string
//!                RU: удаляет пробелы в начале и в конце строки
//*  split()          => splits the text into many pieces
//!                RU: разделяет текст на множество частей
//*  padStart()       => if the resulting string does NOT reach a
//*                      given length we can fill it with a sybmol
//*                      at the start
//!                RU: если полученная строка НЕ достигает заданной
//!                   длины, мы можем заполнить ее символом в начале
//*  padEnd()         => if the resulting string does NOT reach a
//*                      given length we can fill it with a sybmol
//*                      at the end
//!                RU: если полученная строка НЕ достигает заданной
//!                     длины, мы можем заполнить ее символом в конце
//*  charAt()         => Returns the character at the specified index
//!                RU: Возвращает символ по указанному индексу
//*  indexOf()        => returns the index of the first
//*                         string or letter that it finds
//!                RU: возвращает индекс первой строки или буквы,
//!                      которую он находит
//*  lastIndexOf()    => returns the last index of the string
//!                RU: возвращает последний индекс строки
//*  search()         => returns the first expression that it finds
//!                RU: возвращает первое выражение, которое он находит
//*  match()          => returns the matched string (all
//*                         strings if we use /.../gi)
//!                RU: возвращает совпавшую строку (все строки, если
//!                      мы используем /.../gi)
//*  includes()       => returns true if the string is found
//!                RU: возвращает true, если строка найдена
//*  startsWith()     => checks if the string starts with ...
//!                RU: проверяет, начинается ли строка с ...
//*  endsWith()       => checks if the string ends with ...
//!                RU: проверяет, заканчивается ли строка на ...
//*  repeat()         => repeats the string number of times
//!                RU: повторяет строку определенное количество раз
//*  join()           => joins all elements of an array into a string
//!                RU: объединяет все элементы массива в строку
