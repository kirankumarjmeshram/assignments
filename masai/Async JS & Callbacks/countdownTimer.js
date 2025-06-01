const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startCountdown(seconds) {
  let remaining = seconds;
  let intervalId;

  intervalId = setInterval(() => {
    console.log(`Time left: ${remaining} second(s)`);
    remaining--;

    if (remaining < 0) {
      clearInterval(intervalId);
      console.log("Countdown Complete!");
      process.exit(); // Exit process
    }
  }, 1000);

  setTimeout(() => {
    process.stdin.on("data", (data) => {
      const input = data.toString().trim().toLowerCase();
      if (input === "s") {
        clearInterval(intervalId);
        console.log("Countdown stopped by user.");
        process.exit();
      }
    });
  }, 1000);
}

rl.question("Enter countdown time in seconds: ", (answer) => {
  const seconds = parseInt(answer);
  if (!isNaN(seconds) && seconds > 0) {
    startCountdown(seconds);
  } else {
    console.log("Please enter a valid positive number.");
    process.exit();
  }
});
