// // 1) FIBONACCI  (1)
// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...
function fibbo_upto(num) {
    let result = [0, 1];
    for (let i = 2; ; i++) {
        let nextFib = result[i - 1] + result[i - 2];
        if (nextFib > num) {
            break;
        }
        result.push(nextFib);
    }
    return result;
}

// let fibo = fibbo_upto(100); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// console.log(fibo); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

// =======================================================================
// 2) Juft sonlari bir-biriya qushib chiqarish
// 2 + 4 + 6 + 8 = 20
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         sum = sum + numbers[i];
//     }
// }
// console.log(sum);
// =======================================================================
// 3. n_guessing_game with computer

// let lives = 7
// let min = 1
// let max = 100

// alert(`
// Welcome to the number guessing game!
// Think of any number between ${min} and ${max} and i will try to guess it.
// `)

// while (lives > 0) {
//     const MIDDLE = Math.floor((min + max) / 2)

//     let answer = prompt(`It the number you guessed ${MIDDLE}? 
// Enter: h or Hight || l or Low || c or Correct`).toLowerCase()

//     if (answer == "c" || answer == 'correct') {
//         alert("Wohoo! I am very smart 👍!")
//         break
//     } else {
//         lives--
//         if (answer == "l" || answer == 'low') {
//             alert("Hmm, I think you are lying. I will try again. 😭")
//             max = MIDDLE
//         } else if (answer == "h" || answer == 'hight') {
//             alert("Hmm, I think you are lying. I will try again. 😭")
//             min = MIDDLE
//         } else {
//             alert("Invalid input. Try again.")
//             lives++
//         }
//     }
// }


// if (lives == 0) {
//     alert("You are a liar! 😡")
// }


// 77
// 50  ->
// 75  ->
// 88  ->
// 82  ->
// 79  ->
// 77  ->  Correct
// =======================================================================
// =======================================================================
function isPrime(n) {
    if (n == 1 || n == 2 || n == 3 || n == 5 || n == 7) {
        return true
    } else if (n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0) {
        return false
    } else {
        return true
    }
}

/**
 * Generates an array of prime Fibonacci numbers.
 *
 * @param {number} num - The number of prime Fibonacci numbers to generate.
 * @returns {number[]} - An array of prime Fibonacci numbers.
 */
// This function generates an array of prime Fibonacci numbers.
function prime_n_fibbos(num) {
    // Initialize the Fibonacci sequence with the first two numbers.
    let fibbos = [0, 1]
    // Initialize the array to store prime Fibonacci numbers.
    let prime_fibbos = [0, 1]

    // Calculate the next Fibonacci number.
    let nextFib = fibbos[fibbos.length - 1] + fibbos[fibbos.length - 2]

    // Loop until the desired number of prime Fibonacci numbers is reached.
    while (prime_fibbos.length < num) {
        // Check if the next Fibonacci number is prime.
        if (isPrime(nextFib)) {
            // If it is prime, add it to the array of prime Fibonacci numbers.
            prime_fibbos.push(nextFib)
        }
        // Add the next Fibonacci number to the Fibonacci sequence.
        fibbos.push(nextFib)
        // Calculate the next Fibonacci number.
        nextFib = fibbos[fibbos.length - 1] + fibbos[fibbos.length - 2]
    }
    // Return the array of prime Fibonacci numbers.
    return prime_fibbos
}
// Call the prime_n_fibbos function with the argument 10 and store the result in the variable fibo.
let fibo = prime_n_fibbos(10)
// Print the array of prime Fibonacci numbers to the console.
console.log(fibo)


