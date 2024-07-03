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


