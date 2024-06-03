// Дана строка str. Вам нужно вернуть первую половину
// строки, используя slice().
// Например: "Cтрока" => "Cтр"

// let str = "Cтрока"
// const MIDDLE = parseInt(str.length / 2)
// console.log("First half: " + str.slice(0, MIDDLE) )
// console.log("Last half: " + str.slice(MIDDLE) )

// let str2 = "This is test"  // est   => last 3 characters

// let lastThree = str2.slice(str2.length -3)
// console.log(lastThree);

// let index = parseInt(str2.length/2)
// let res = str2.charAt(index)
// console.log(res)
// ===============================
// ===============================
// ===============================
// Дана строка str, замените все вхождения
// буквы "a" на букву "e", используя replace().
//       Например: "Атомная станция" => "етомнeя стeнцeя

// let text = "Atomic station"
// let result = text.replace(/a/gi, "e")
// console.log(result)
// ======================================================
// ======================================================
// ======================================================
// Используйте эти методы, чтобы центрировать слово,
// если длина слова меньше ожидаемой.
//       Например: "Hello" =>

// let word = "Hello";
// let expectedLength = 20;
// let symbol = "*";
// "**********Hello**********"
// let len = word.length;
// let lackingLength = expectedLength - len;

// let lackingHalf = parseInt(lackingLength / 2);
// let result = word.padStart(len + lackingHalf, symbol).padEnd(20, symbol);
// console.log(result);
// -------------------------------------------------------------------
