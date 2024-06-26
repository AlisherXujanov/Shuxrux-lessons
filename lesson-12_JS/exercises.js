// 1. Напишите функцию для извлечения уникальных символов или букв 
// (которые только 1 раз указаны) из строки  
function getUniques(str) {
    let res = ''
    for (let i = 0; i < str.length; i++) {
        let before = str.slice(0, i).toLowerCase()
        let after = str.slice(i + 1).toLowerCase()
        let current_letter = str.charAt(i).toLowerCase()

        if (!before.includes(current_letter) && !after.includes(current_letter)) {
            res += current_letter
        }
    }
    return res
}
// let res1 = getUniques("This is test text")
// console.log(res1)
// output:  hx
// ======================================================================================
// ======================================================================================
// ======================================================================================
// 2. Напишите функцию для генерации строки ID (указанной длины) из случайных символов
function generatePassword(pass_length, difficulty_level = 'easy') {
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
    const alpha_upper = ALPHABET.toUpperCase()
    const NUMBERS = "0123456789"
    const SYMBOLS = "!@#$%^&*()_+"
    const ruAlpha = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
    const ruAlpha_upper = ruAlpha.toUpperCase()

    let easyLevel = ALPHABET + alpha_upper + NUMBERS
    let intermediateLevel = easyLevel + SYMBOLS
    let advancedLevel = intermediateLevel + ruAlpha + ruAlpha_upper

    let total = null
    switch (difficulty_level) {
        case 'easy':
            total = easyLevel
            break
        case 'intermediate':
            total = intermediateLevel
            break
        case 'advanced':
            total = advancedLevel
            break
        default:
            total = easyLevel
    }
    let result = ''
    for (let i = 0; i < pass_length; i++) {
        let randomInt = parseInt(Math.random() * total.length)
        result += total.charAt(randomInt)
    }
    return result
}
let res2 = generatePassword(20, difficulty_level = 'advanced')
// console.log(res2)
// ======================================================================================
// ======================================================================================
// ======================================================================================
// 3. Напишите функцию, которая принимает строку на вход и возвращает новую строку, 
// в которой первая буква каждого слова написана с заглавной буквы.
let text = 'this is test text.'


// ======================================================================================
// ======================================================================================
// ======================================================================================
// 4. Напишите функцию, которая принимает массив строк. Функция должна вернуть 
// новый массив, в котором каждая строка перевернута. 
let arr = ['hello', 'world', 'javascript', 'python', 'java', 'c++']
// output: ['olleh', 'dlrow', 'tpircsavaj', 'nohtyp', 'avaj', '++c']
function reverseEachText(arr) {
    let result = []
    // Your code 
    return result
    // ------------------------
    // return [...].map(...)
}
let res3 = reverseEachText(arr)
// console.log(res3)
// ======================================================================================
// ======================================================================================
// ======================================================================================
// 5. Напишите функцию, которая принимает строку слов и возвращает строку, 
// отсортированную по длине слов
let text2 = 'Hello world. This is text'
// output: "is This text Hello world."
let res4 = sortByLength(text2)
// console.log(res4)
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
function sortByLength(str) {
    let result = []
    let splittedText = str.split(" ")

    let totalLength = splittedText.length
    for (let i = 0;   i < totalLength;   i++) {
        let smallest = getSmallestWord(splittedText)
        result.push(smallest)
        splittedText = splittedText.filter(word => word !== smallest)
    }
    return result.join(" ")
}
function getSmallestWord(words) {
    let min = words[0]
    words.forEach(word => {
        if (word.length < min.length) {
            min = word
        }
    })
    return min
}

// ======================================================================================
// ======================================================================================
// ======================================================================================
// 6. Напишите функцию, которая принимает строку и возвращает символ, 
// который появляется больше всего раз.
function countLetters(str) {
    let result = {}
    str.split("").forEach(letter => {
        letter = letter.toLowerCase()
        if (result[letter]) {
            result[letter] += 1
        } else {
            result[letter] = 1
        }
    })
    return result
}

function getMostRepetitiveLetter(str) {
    // x = {"l":3, 'e':3, ...}
    // x['l'] => 3
    let letterCount = countLetters(str)
    let counts = Object.values(letterCount)
    let max = counts.sort((a,b) => a-b)[counts.length-1]

    let neededKey = ''
    Object.keys(letterCount).forEach(key => {
        if (letterCount[key] == max) {
            neededKey = key
        }
    })
    return `${neededKey} occures in text ${max} times`
}

let text5 = "Hello world. This is test text"
let result6 = getMostRepetitiveLetter(text5)
console.log(result6)