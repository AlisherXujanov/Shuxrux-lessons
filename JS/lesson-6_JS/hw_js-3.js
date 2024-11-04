// Js intermidate level example - 1
// let fullName = "Alisher Khujanov Rashidovich";

// let lastName = fullName.slice(fullName.lastIndexOf(" ") + 1)
// let initials = fullName.slice(0, 1) + ". " + fullName.slice(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" ")).replace(/[^A-Z]/g, "") + "."
// console.log(lastName + " " + initials)
// ------------------------------------------------------------------------
// Js intermidate level example - 2
// let test_string = "Vladimir"  // VladVladVladimirimirimir
// let n = 3
// const MIDDLE = parseInt(test_string.length / 2)

// let firstSlice = test_string.slice(0, MIDDLE)
// let lastSlice = test_string.slice(MIDDLE)
// let resut = firstSlice.repeat(n) + lastSlice.repeat(n)
// console.log(resut)
// ------------------------------------------------------------------------
// Js advanced level example - 3
// let str = "This is test text TTT"
// let symbol = "$"

// let firstLetter = str[0] // "A"
// console.log("First letter: " + firstLetter)

// str = str.toLowerCase()
// console.log("Lower case: " + str)

// str = str.replaceAll(firstLetter.toLowerCase(), symbol)
// console.log("Replace all: " + str)

// let result = firstLetter + str.slice(1)
// console.log("Result: " + result)