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

