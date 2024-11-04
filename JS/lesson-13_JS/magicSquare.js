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

let HIDDEN_TEXT = "_".repeat(text.length)
let letters_pool = ''

while (lives > 0) {
    if (!HIDDEN_TEXT.includes("_")) {
        alert("Congratulations! You guessed the word!")
        break
    }

    let letter = prompt(`
EXPLANATION: ${explanation}
-----------------------------
WORD: ${HIDDEN_TEXT}        
-----------------------------
You have: ${lives} lives
-----------------------------
Guess a letter: `).toLowerCase()

    if (letters_pool.includes(letter)) {
        alert("Already entered THIS letter")
        continue
    } else {
        letters_pool += letter
    }


    if (letter.length == 1 && isNaN(letter)) {
        if (text.toLowerCase().includes(letter)) {
            alert("CORRECT! Continue ...")

            let new_text = ""
            for (let i = 0; i < text.length; i++) {
                // "-----"   ->   p
                // "-pp--"   ->   p

                // "-pp--"   ->   e
                // "-pp-e"   ->   e
                if (letter == text[i].toLowerCase()) {
                    new_text += text[i]
                } else {
                    new_text += HIDDEN_TEXT[i]
                }
            }
            HIDDEN_TEXT = new_text
        } else {
            alert("WRONG! Try again ...")
            lives--
        }
    }
    else if (letter == text.toLowerCase()) {
        alert("Congratulations! You guessed the word!")
        break
    }
    else {
        alert("Please enter only one letter")
    }
}

if (lives == 0) {
    alert("GAME OVER!!!" + `\n` + `The word was: ${text}`)
}



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


