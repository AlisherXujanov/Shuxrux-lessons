// ================================================
// PIRAMID
// function drawPiramid(lines) {
//     for (let i = 1; i < lines; i++) {
//         let spaces = ' '.repeat(lines - i);
//         let stars = '*'.repeat(2 * i - 1);
//         console.log(spaces + stars);

// }
// // drawPiramid(10)
// }
//     *
//    ***
//   *****
//  *******
// *********
// ================================================
// FACTORIAL
// !5  =   5 * 4 * 3 * 2 * 1     =>    120
// !10 =   10*9*8*7*6*5*4*3*2*1  =>    3628800
// function factorial(num) { 
//     // !5  =   5 * 4 * 3 * 2 * 1     =>    120
//     // !10 =   10*9*8*7*6*5*4*3*2*1  =>    3628800
//     let result = 1;
//     for(let i = 1; i <= num; i++){
//         result = result * i;

//         // result *= i
//     }
//     return result
// }

// let r1 = factorial(5) // 120
// let r2 =  factorial(10) // 3628800
// console.log(r1);
// console.log(r2);
// ================================================
// FIBONACCI  (1)
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ... 
// function fibbo_upto(num) {}
// function fibbo_upto(num) {
//     let result = [0, 1];

//     for(let i = 2; i <= num; i++) {
//         let prevNumber1 = result[i - 1];
//         let prevNumber2 = result[i - 2];
//         result.push(prevNumber1 + prevNumber2)
//     }    
//     return result[num];
//   }
  
//   let fibo = fibbo_upto(10) // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
//   console.log(fibo); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]


// ================================================
// FIBONACCI  (2)
// function fibbo_n(how_many) {
    
//     let result = [0, 1]
//     for(let i = 2; i < how_many; i++){
//         result.push(result[i - 1] + result[i - 2]);
//     }
//     return result;
//   }
  
  
//   let fiboNum = fibbo_n(3)
//   console.log(fiboNum); 
// ================================================


// ====================== HW ==========================
let randomPool = {
    question1: {
        word: "Banana",
        explanation: "A fruit that is yellow and long"
    }, 
    question2: {
        word: "Phone",
        explanation: "A device that is used to make calls and send messages"
    },
    question3: {
        word: "Orange",
        explanation: "A fruit that is orange and round"
    },
    question4: {
        word: "Table",
        explanation: "A piece of furniture with a flat top and one or more legs"
    },
    question5: {
        word: "Television",
        explanation: "A device that receives signals and displays them on a screen"
    },
}

let totalLength = Object.keys(randomPool).length
let randomIndex = Math.floor(Math.random() * totalLength)
let randomKey = Object.keys(randomPool)[randomIndex]

let text = randomPool[randomKey].word
let explanation = randomPool[randomKey].explanation
let lives = 5





// 1. Define a word and explain it to the user
// RU: Определите слово и объясните его пользователю
// -----------------------------------------------
// 2. Ask the user a letter for the word
// RU: Спросите у пользователя букву для слова
// -----------------------------------------------
// 3. Check if the answer has only ONE letter
// RU: Проверьте, содержит ли ответ только ОДНУ букву
// -----------------------------------------------
// 4. CHECK the letter
// RU: ПРОВЕРЬТЕ букву
//  -- If the letter is in the word, show the word with the letter
// RU:  -- Если буква есть в слове, покажите слово с буквой
// ex:   _ A _ A _ A   =>  B A N A N A
//  -- If the letter is NOT in the word, reduce the number of lives
// RU:  -- Если буквы НЕТ в слове, уменьшите количество жизней