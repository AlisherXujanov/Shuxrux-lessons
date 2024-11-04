let lives = 7;
let rNum = parseInt(Math.random() * 100) + 1;

while (lives > 0) {
    let answer = parseInt(prompt("Guess a number: "));
    if (!isNaN(answer)) {
        if (answer == rNum) {
            // Tog'ri bulgan holda
            alert(`Congratulations! You won!  You have ${lives} left.`);
            if (confirm("Yana o'ynashni hohlaysizmi ?")) {
                lives = 7;
                rNum = parseInt(Math.random() * 100) + 1;
            } else {
                break;
            }
        } else {
            // Xato bulgan holda
            lives--;
            if (lives == 0) {
                alert(`GAME OVER! The number was ${rNum}`);
                if (confirm("Yana o'ynashni hohlaysizmi ?")) {
                    lives = 7;
                    rNum = parseInt(Math.random() * 100) + 1;
                    continue;
                } else {
                    break;
                }
            }
            let livesInfo = `You have ${lives} lives left.`;
            if (answer > rNum) {
                // Katta
                alert("Too high! " + livesInfo);
            } else {
                // Kichik
                alert("Too low! " + livesInfo);
            }
        }
    } else {
        alert("Nomer yoz bemiyya!!!");
    }
}

if (lives == 0) {
    alert(`GAME OVER! The number was ${rNum}`);
}





// GAME WITH COMPUTER (This time computer will guess the number)
// 1. Guess any random number that computer should find by guessing
// 2. User should give a number
// 3. Computer should guess the number
// 4. User should say if the number is too high, too low or correct
// 5. Computer should guess the number in 7 attempts
// 6. If computer can't guess the number in 7 attempts, user wins
// 7. If computer can guess the number in 7 attempts, computer wins


// Is it 50?
// h|l|c  or high|low|correct   =>  You entered l for example:
// Is it 25?
// h   ->  higher
// Each time for incorrect guess, computer's lives decrease by 1
// If computer's lives become 0, user wins
// If computer can guess the number in 7 attempts, computer wins
