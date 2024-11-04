
// // 1. Write a logic that finds the longest string in an array of strings.
// // RU: Напишите логику, которая находит самую длинную строку в массиве строк.
// let arr = ['apple', 'banana', 'kiwi', 'orange', 'strawberry', 'watermelon']
// let longest = ''
// for (let i=0;  i<arr.length;  i++) {
//     let fruit = arr[i]
//     if (fruit.length > longest.length) {
//         longest = fruit
//     }
// }
// console.log(longest) // Expected: 'strawberry'
// // ===========================================================================
// // 2. Write a logic that finds the shortest string in an array of strings.
// // RU: Напишите логику, которая находит самую короткую строку в массиве строк.
// let shortest = arr[0]
// for (let i=0;  i<arr.length;  i++) {
//     let fruit = arr[i]
//     if (fruit.length < shortest.length) {
//         shortest = fruit
//     }
// }
// console.log(shortest) // Expected: 'strawberry'
// ===========================================================================
// 3. Write a logic that finds the max number from an array of numbers.
// RU: Напишите логику, которая находит самое большое число в массиве чисел.
// let numbers = [212, 3, 433, 51, 1, 6, 7, 89, 99, 10]
// let max = 0
// for (let i = 0;   i<numbers.length;    i++) {
//     let num = numbers[i]
//     if (num > max) { max = num  }
// }
// console.log(max) // Expected: 433
// ===========================================================================
// 4. Write a logic that finds the min number from an array of numbers.
// RU: Напишите логику, которая находит самое маленькое число в массиве чисел.
// let min = numbers[0]
// for (let i = 0;   i<numbers.length;   i++) {
//     let num = numbers[i]
//     if (num < min) { min = num }
// }
// console.log(min) 
// ===========================================================================
// 5. Create an array of strings with names.
// Then create another array with ages.
// Then find the min age and the max age and print who is the oldest and who is the youngest.
// RU: Создайте массив строк с именами.
// Затем создайте другой массив с возрастами.
// Затем найдите минимальный возраст и максимальный возраст и напечатайте, кто старше и кто младше.
// let names = ['John', 'Jane', 'James', 'Judy', 'Jack']
// let ages =  [34,     67,     45,      56,      23]

// let result = []
// let minAge = ages[0]
// let maxAge = 0

// for (let i=0;  i < ages.length;  i++) {
//     if (ages[i] > maxAge) { maxAge = ages[i] }
//     if (ages[i] < minAge) { minAge = ages[i] }
// }
// console.log('The oldest is ' + maxAge + ' years old')
// console.log('The youngest is ' + minAge + ' years old')

// let oldest = names[ages.indexOf(maxAge)]
// let youngest = names[ages.indexOf(minAge)]
// console.log('The oldest is ' + oldest)
// console.log('The youngest is ' + youngest)

// ===========================================================================
// 6. Create an array of numbers. Find the max number (ex: 12345) the add up each digit in the number (ex: 1+2+3+4+5=15)
// RU: Создайте массив чисел. Найдите максимальное число (например, 12345), затем сложите каждую цифру в числе (например, 1 + 2 + 3 + 4 + 5 = 15).

// let numbers2 = [12345, 67890, 54321, 98765, 10101]
// // 9 + 8 + 7 + 6 + 5    =   35

// let max2 = 0
// for (let i = 0;   i<numbers2.length;    i++) {
//     let num = numbers2[i]
//     if (num > max2) { max2 = num  }
// }
// console.log(max2) // Expected: 98765

// let result = 0
// let max2_str = String(max2)  //  "98765"
// for (let i=0; i < max2_str.length; i++) {
//     let next_number = max2_str[i]
//     result += parseInt(next_number)
// }
// console.log(result) // Expected: 35



    
    

    