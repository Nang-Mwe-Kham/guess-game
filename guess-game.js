let targetNumber;
let attempts = 0;
const maxAttempts = 5;

// Function to check if a value is a valid number
function isNumeric(value) {
  return !isNaN(value) && !isNaN(parseFloat(value));
}

// Function to initialize the game UI
function initGame() {
  attempts = 0;
  document.getElementById("attempt").textContent = `${attempts}`;
  document.getElementById("result").textContent = "No result";
  document.getElementById("guess-value").value = "";
  document.getElementById("guess-btn").style.display = "none";
  document.getElementById("restart-btn").style.display = "block";
}

// Function to start a new game
function startNewGame() {
  targetNumber = Math.floor(Math.random() * 20) + 1;
  attempts = 0;
  document.getElementById("result").textContent = "";
  document.getElementById("guess-value").value = "";
  document.getElementById("guess-value").focus();
  document.getElementById("guess-btn").style.display = "block";
  document.getElementById("restart-btn").style.display = "none";
}

// Function to handle guess button click
function handleGuess() {
  const guessInput = document.getElementById("guess-value");
  const inputValue = guessInput.value.trim();

  if (!inputValue) {
    return;
  }

  if (!isNumeric(inputValue)) {
    return;
  }

  const guess = parseInt(inputValue);

  if (guess < 1 || guess > 20) {
    return;
  }

  attempts++;

  if (guess === targetNumber) {
    document.getElementById("result").textContent = "You WIN!";
    document.getElementById("guess-btn").style.display = "none";
    document.getElementById("restart-btn").style.display = "block";
  } else if (attempts >= maxAttempts) {
    document.getElementById("result").textContent = "You LOSE!";
    document.getElementById("guess-btn").style.display = "none";
    document.getElementById("restart-btn").style.display = "block";
  } else {
    if (guess > targetNumber) {
      document.getElementById("result").textContent = guess + " is too high.";
    } else {
      document.getElementById("result").textContent = guess + " is too low.";
    }
  }

  document.getElementById("attempt").textContent = attempts;
  guessInput.value = "";
}

// Initialize the game when the page loads
window.onload = function () {
  initGame();
};

// Add event listeners
document.getElementById("guess-btn").addEventListener("click", handleGuess);
document.getElementById("restart-btn").addEventListener("click", startNewGame);
