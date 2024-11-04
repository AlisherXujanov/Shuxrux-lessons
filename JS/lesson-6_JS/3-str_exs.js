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

// ===========================================================
// ===========================================================
// ===========================================================
// ===========================================================

// NEW TASKS

// 1. у вас есть текст. Поменяйте местами первый и последний буквы в строке.
// обращайте внимание на большие и на маленькие буквы
// Например:  Cyber  ->  Rybec
// let text = "Cyber"
// let firstLetter = text[0]
// let lastLetter = text[text.length-1]
// let result = lastLetter.toUpperCase() + text.slice(1, text.length-1) + firstLetter.toLowerCase()
// console.log(result)
// ===========================================================

// 2. у вас есть текст. Найдите серединную букву и повторите его 3 раза в оригинальном тексте.
// Например:  Cyber  ->  Cybbber
// let my_name = "Cyber"
// let half = parseInt(my_name.length / 2)  // 2
// let letter = my_name[half].repeat(3)  // 'bbb'
// let result = my_name.slice(0, half) + letter + my_name.slice(half + 1)
// console.log(result)
// ===========================================================

// 3. у вас есть текст и номер. Повторите пред-последнюю и вторую буквы по номер разу.
// Например:
// 	let str = "Cyber"
// 	let num = 3
// 	Результат должен быть: "Cyyybeeer"

// let str = "Cyber";
// let num = 3;

// let result = str[0] + str[1].repeat(num) + str.slice(2, -2) + str[str.length -2].repeat(num) + str[str.length -1]

// console.log(result);

// ===========================================================

// 4. у вас есть текст и номер и символ.
// Поменяйте пред-последнюю и вторую буквы на этот симвл если те буквы гласные.
// let str = "Hello world"
// let vowels = "aioue"
// let symbol = '$'

// let second = str[1]
// let former = str[str.length - 2]

// if (vowels.includes(second)) {second = symbol}
// if (vowels.includes(former)) {former = symbol}

// let result = str[0] + second + str.slice(2, str.length - 2)  + former + str[str.length - 1]
// console.log("Result: " + result)
