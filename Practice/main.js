// Declaration of Variables

// Get DOM-Elements

const items = [...document.querySelectorAll(".item")];
const resetFieldBtn = document.querySelector(".reset-field-btn");
const resetGameBtn = document.querySelector(".reset-game-btn");
const scorePlayerOne = document.querySelector(".score-player-one");
const scorePlayerTwo = document.querySelector(".score-player-two");

// Declare re-assignable variables

let totalPlayerOne = 0;
let totalPlayerTwo = 0;
let playerOne = true;
let playerTwo = false;

// Declaration of Functions

const handleEmptyItems = () => {
  const emptyItems = items.filter((item) => item.textContent === "");
  emptyItems.forEach((item) => (item.textContent = "-"));
};

const checkWinner = () => {
  if (
    (items[0].textContent === "X" &&
      items[1].textContent === "X" &&
      items[2].textContent === "X") ||
    (items[2].textContent === "X" &&
      items[5].textContent === "X" &&
      items[8].textContent === "X") ||
    (items[8].textContent === "X" &&
      items[7].textContent === "X" &&
      items[6].textContent === "X") ||
    (items[6].textContent === "X" &&
      items[3].textContent === "X" &&
      items[0].textContent === "X") ||
    (items[0].textContent === "X" &&
      items[4].textContent === "X" &&
      items[8].textContent === "X") ||
    (items[2].textContent === "X" &&
      items[4].textContent === "X" &&
      items[6].textContent === "X") ||
    (items[1].textContent === "X" &&
      items[4].textContent === "X" &&
      items[7].textContent === "X") ||
    (items[3].textContent === "X" &&
      items[4].textContent === "X" &&
      items[5].textContent === "X")
  ) {
    console.log("Player 1 won! - [X]");
    handleEmptyItems();
    totalPlayerOne += 1;
    scorePlayerOne.textContent = totalPlayerOne;
  } else if (
    (items[0].textContent === "O" &&
      items[1].textContent === "O" &&
      items[2].textContent === "O") ||
    (items[2].textContent === "O" &&
      items[5].textContent === "O" &&
      items[8].textContent === "O") ||
    (items[8].textContent === "O" &&
      items[7].textContent === "O" &&
      items[6].textContent === "O") ||
    (items[6].textContent === "O" &&
      items[3].textContent === "O" &&
      items[0].textContent === "O") ||
    (items[0].textContent === "O" &&
      items[4].textContent === "O" &&
      items[8].textContent === "O") ||
    (items[2].textContent === "O" &&
      items[4].textContent === "O" &&
      items[6].textContent === "O") ||
    (items[1].textContent === "O" &&
      items[4].textContent === "O" &&
      items[7].textContent === "O") ||
    (items[3].textContent === "O" &&
      items[4].textContent === "O" &&
      items[5].textContent === "O")
  ) {
    console.log("Player 2 won! - [O]");
    handleEmptyItems();
    totalPlayerTwo += 1;
    scorePlayerTwo.textContent = totalPlayerTwo;
  }
};

const resetField = () => {
  items.forEach((item) => (item.textContent = ""));
  playerOne = true;
  playerTwo = false;
};

const resetGame = () => {
  items.forEach((item) => (item.textContent = ""));
  playerOne = true;
  playerTwo = false;
  totalPlayerOne = 0;
  scorePlayerOne.textContent = totalPlayerOne;
  totalPlayerTwo = 0;
  scorePlayerTwo.textContent = totalPlayerTwo;
};

// Model

items.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent === "") {
      if (playerOne === true) {
        item.textContent = "X";
        playerOne = false;
        playerTwo = true;
        checkWinner();
      } else if (playerTwo === true) {
        item.textContent = "O";
        playerOne = true;
        playerTwo = false;
        checkWinner();
      }
    }
  });
});

resetFieldBtn.addEventListener("click", () => {
  resetField();
});

resetGameBtn.addEventListener("click", () => {
  resetGame();
});
