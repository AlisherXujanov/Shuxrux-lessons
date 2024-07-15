//         sqrt(...)   => даёт квадратный корень
//         floor(...)  => округляет в меньшую сторону
//         ceil(...)   => округляет в большую сторону
//         round(....) => округляет до ближайшего целого
//         pow(...)    => возведение в степень
//         trunc(...)  => отбрасывает дробную часть
//         sign(...)   => показывает знак числа
//         abs(...)    => возвращает модуль числа (без знака)
//         random(...) => возвращает случайное число от 0 до 1
//                     ---------------------------
//                     если мы хотим получить случайное число от 0 до 10
//                     то мы должны умножить на 10
//                     ---------------------------
//                     а если от 10 до 90 то умножаем на 10 и прибавляем 80
//                     Например:
//                         Math.random() * 80 + 10
//                     ---------------------------
//         min(..., ..., ...)  => возвращает минимальное число
//         max(..., ..., ...)  => возвращает максимальное число

//     ... => 'SPREAD' operator => that is used to spread 
//                     the array by removing the brackets
//            Also, it is called as 'REST' operator because 
//            it is used to collect the arguments inside 
//            the function

// function get_5_number(max_numbers) {
//     let result = []
//     for (let i=0;   i<max_numbers;   i++) {
//         let num = Math.round(Math.random()*100)
//         result.push(num)
//     }
//     return result
// }
// console.log(get_5_number(5))
// console.log(get_5_number(6))
// console.log(get_5_number(7))


