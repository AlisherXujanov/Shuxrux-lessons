// // 1) FIBONACCI  (1)
// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...

// function fibbo_upto(num) {
//   let result = [0, 1];

//   for (let i = 2; ; i++) {
//     let nextFib = result[i - 1] + result[i - 2];
//     if (nextFib > num) {
//       break;
//     }
//     result.push(nextFib);
//   }

//   return result;
// }

// let fibo = fibbo_upto(100); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// console.log(fibo); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

// =======================================================================
// 2) Juft sonlari bir-biriya qushib chiqarish
// 2 + 4 + 6 + 8 = 20
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     sum = sum + numbers[i];
//   }
// }
// console.log(sum);
// =======================================================================
// 3. n_guessing_game with computer

// let lives = 7;
// let min = 1;
// let max = 100;
// let rNum = parseInt(prompt("1 do 100 gacha bo'lgan son kiriting: "));

// while (lives > 0) {
//   let guess = Math.floor((min + max) / 2);
//   alert(`Computer guesses: ${guess}`);
//   let response = prompt(
//     `Is the number too high (H), too low (L), or correct (C)?`
//   ).toUpperCase();

//   if (response === "C") {
//     alert(`Congratulations! Computer guessed your number! It was ${guess}.`);
//     if (confirm("Would you like to play again?")) {
//       lives = 7;
//       min = 1;
//       max = 100;
//       rNum = parseInt(prompt("Zadajte chislo ot 1 do 100: "));
//     } else {
//       break;
//     }
//   } else if (response === "H") {
//     max = guess - 1;
//     lives--;
//   } else if (response === "L") {
//     min = guess + 1;
//     lives--;
//   } else {
//     alert("Please enter a valid response (H, L, or C).");
//   }

//   if (lives === 0) {
//     alert(`GAME OVER! Computer couldn't guess your number in 7 tries.`);
//     if (confirm("Would you like to play again?")) {
//       lives = 7;
//       min = 1;
//       max = 100;
//       rNum = parseInt(prompt("Zadajte chislo ot 1 do 100: "));
//     } else {
//       break;
//     }
//   }
// }
// =======================================================================
