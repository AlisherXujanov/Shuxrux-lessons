// Array tasks (without looping over arrays)

// BEGINNER LEVEL

// 1. Create an array with 4 items. Then, access the 2nd item in the array and print it to the console.
// RU: Создайте массив с 4 элементами. Выведите в консоль второй элемент массива.
// let arr = ["Alisher", "Olim", "Shokhrukh", "G'aybulla"]
// console.log(arr[2])

// 2. Create an array with 5 numbers. Get first from the end of the array and check if it is even. Print result to the console.
// RU: Создайте массив с 5-ю числами. Получите первое с конца число и проверьте его на четность. Выведите результат в консоль.

// let arrNum = [1, 7, 14, 8, 20]
// let newNum = arrNum[arrNum.length - 1]

// if (newNum % 2 === 0) {
//   console.log("Четное")
// } else {
//   console.log("Не Четное")
// }

// ????????????????????????????????????????????????????????????????????????????????????

// 3. Use prompt() to get a random number from user.
// Then add this number, it's half and quarter to the array.
// RU: Используйте prompt(), чтобы получить случайное число от пользователя.
// Затем добавьте это число, его половину и четверть в массив и выведите результат в консоль.
// let userAnswer = "100"
// let number = parseInt(userAnswer)
// let half = number / 2
// let quarter = number / 4
// let arr = [number, half, quarter]
// console.log(arr)

// ????????????????????????????????????????????????????????????????????????????????????

// 4. Create an array that contains some strings.
// Then push a text that is asked from user by prompt() into the middle of array.
// Then show array in the console
// RU: Создайте массив с несколькими строками.
// Затем добавьте текст, который запрашивается у пользователя с помощью prompt(), в середину массива.
// Затем покажите массив в консоли.

// let arr = ["js", "phyton", "react", "vue", "php"]
// let userText = prompt("введите текст")
// const MIDDLE = parseInt(arr.length / 2)
// arr.splice(MIDDLE, 0, userText)
// console.log(arr)

// 5. Create an array that contains some numbers.
// Then delete the last item in the array and save it into another variable.
// Then, check if this number that is deleted even or odd. Print the result to the console.
// RU: Создайте массив с несколькими числами.
// Затем удалите последний элемент в массиве и сохраните его в другую переменную.
// Затем проверьте, четное ли это число или нет. Выведите результат в консоль.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let removeArr = arr.pop()
// if (removeArr % 2 === 0) {
//   console.log(removeArr, "четное")
// } else {
//   console.log(removeArr, "не четное")
// }

// console.log("оригинальный массив", arr)
// console.log("удаленный элемент", removeArr)
