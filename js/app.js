/*--------------------------------- Pseudo ---------------------------------*/
// * Considerations:
// 1. One player
// 2. Frog can move up, down, left and right

// * Inputs (user submitted or computer generated)
// 1. Click start button
// 2. Press arrow keys

// * Variables & State (think scores, choices, timers, lives etc)
// 1. Score - Start from 0, increase by 100 each time a frog successfully crosses the river and lands on the correct spot(a frog home).
// 2. Lives - Start from 3, decrease by 1 each time fails
// 3. Timer - A 2-min timer starts when a frog is reset at the starting point. Timer stops when the frog successfully crosses the river, fails from a collision, or fails to reach the correct spot within 2 minutes.
// 4. Cars - Moving cars appear on the road in the bottom half of the screen when the game starts. Five rows move either left or right. The frog must avoid these cars — if it gets hit, it loses one life.
// 5. Logs - Moving logs appear in the river in the top half of the screen when the game starts. Five rows move either left or right. The frog must jump onto the logs to cross safely — if it falls into the river, it fails and loses one life.
// 6. Five frog homes - at the very top of the screen

// * User Interactions (user initiated events like clicks, hovers, key presses etc)
// 1. Player initiated the game by clicking start button
// 2. then player presses the arrow keys to move the frog to cross the road and river.

// * Core Logic / Rules (List the core rules that will dictate the win lose condition)
// 1. Frog must cross the road and river to reach one of the five homes.
// 2. If frog reaches the correct spot(an empty home), score increases by 100.
// 3. If frog is hit by a car on the road, lose one life.
// 4. If frog jumps into water without landing on a log in the river, lose one life.
// 5. If frog reach to a home that is already occupied, lose one life.
// 6. If frog fails to reach a home within 2 minutes, lose one life.
// 7. Game ends when lives equal to 0 or all 5 frogs reach to 5 homes.

// * Conditions / Branching (which conditions will lead to which things happening)
// 1. If score = 500, player wins
// 2. If lives = 0, game over
// 3. If frog touches car, river or a filled home, lose 1 life and reset frog (When the frog resets, it returns to the starting position at the center bottom of the screen.)
// 4. If frog not home within the timer ends, lose 1 life and reset frog

// * Loops (if any) (does any logic repeat? For example a ticking timer or in a game of poker maybe multiple computer choices generated on a loop)

// * Outputs / Feedback (What will the app output to the screen)
// Player's score
// Player's lives
// Win or lose message

/*-------------------------------- Variables --------------------------------*/
// Variables for the grid
// columns = 11
const columns = 11;
// rows = 13
const rows = 13;
const cellCount = columns * rows;
const cellElement = [];

// Variables for the frog
// starting position - frog's starting position
const startingPos = 137;
// current position - frog's current position
let currentPos = startingPos;
// alive = true - frog is alive
// timerInterval - 2mins
const score = 0;
// score - start from 0, increase by 100 each time a frog successfully crosses the river and lands on the correct spot.
const lives = 3;
// lives - start from 3, decrease by 1 each time fails
// message - You won! / You lose!

// Variables for the left moving car 11
const startingPosLeftCar11 = 131;
let currentPosLeftCar11 = startingPosLeftCar11;
// Variables for the left moving car 12
const startingPosLeftCar12 = 128;
let currentPosLeftCar12 = startingPosLeftCar12;
// Variables for the left moving car 13
const startingPosLeftCar13 = 124;
let currentPosLeftCar13 = startingPosLeftCar13;

// Variables for the left moving car 2
const startingPosLeftCar2 = 109;
let currentPosLeftCar2 = startingPosLeftCar2;

// Variables for the left moving car 3
const startingPosLeftCar3 = 87;
let currentPosLeftCar3 = startingPosLeftCar3;

// Variables for the right moving car 1
const startingPosRightCar1 = 110;
let currentPosRightCar1 = startingPosRightCar1;

// Variables for the right moving car 2
const startingPosRightCar2 = 88;
let currentPosRightCar2 = startingPosRightCar2;

/*------------------------ Cached Element References ------------------------*/
// start button
// 13 * 11 grid
const grid = document.getElementById("grid");

/*-------------------------------- Functions --------------------------------*/
function init() {}
//gameStart();
function gameStart() {
  createGrid();
  resetFrog();
  movingCars();
  movingLogs();
  //timerInterval = setInterval(resetFrog, 120000);
}

function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    // create the div cell
    const cell = document.createElement("div");

    // add meta data to the cell
    cell.innerText = i;
    cell.dataset.index = i;

    // style the cell for height and width
    cell.style.width = `${100 / columns}%`;
    cell.style.height = `${100 / rows}%`;

    cellElement.push(cell);

    // append the new cell to the grid container
    grid.appendChild(cell);
  }
}

function resetFrog() {
  // add the class frog to the starting position
  cellElement[startingPos].classList.add("frog");
}

function movingCars() {
  movingLeftCar11();
  movingLeftCar12();
  movingLeftCar13();
  //movingLeftCar2();
  //movingLeftCar3();
  //movingRightCar1();
  //movingRightCar2();
}

// Codes for the first left moving car
function movingLeftCar11() {
  leftcar11Reset();

  setInterval(() => {
    cellElement[currentPosLeftCar11].classList.remove("leftcar1");
    if (currentPosLeftCar11 > 121) {
      currentPosLeftCar11--;
      cellElement[currentPosLeftCar11].classList.add("leftcar1");
    } else {
      leftcar11Reset();
      currentPosLeftCar11 = startingPosLeftCar11;
    }
  }, 600);
}
function leftcar11Reset() {
  const cell = cellElement[startingPosLeftCar11];
  cell.classList.add("leftcar1");
}
function movingLeftCar12() {
  leftcar12Reset();

  setInterval(() => {
    cellElement[currentPosLeftCar12].classList.remove("leftcar1");
    if (currentPosLeftCar12 > 121) {
      currentPosLeftCar12--;
      cellElement[currentPosLeftCar12].classList.add("leftcar1");
    } else {
      leftcar11Reset();
      currentPosLeftCar12 = startingPosLeftCar11;
    }
  }, 600);
}
function leftcar12Reset() {
  const cell = cellElement[startingPosLeftCar12];
  cell.classList.add("leftcar1");
}
function movingLeftCar13() {
  leftcar13Reset();

  setInterval(() => {
    cellElement[currentPosLeftCar13].classList.remove("leftcar1");
    if (currentPosLeftCar13 > 121) {
      currentPosLeftCar13--;
      cellElement[currentPosLeftCar13].classList.add("leftcar1");
    } else {
      leftcar11Reset();
      currentPosLeftCar13 = startingPosLeftCar11;
    }
  }, 600);
}
function leftcar13Reset() {
  const cell = cellElement[startingPosLeftCar13];
  cell.classList.add("leftcar1");
}

// Codes for the second left moving car
function movingLeftCar2() {
  leftcar2Reset();

  setInterval(() => {
    cellElement[currentPosLeftCar2].classList.remove("leftcar2");
    if (currentPosLeftCar2 > 99) {
      currentPosLeftCar2--;
      cellElement[currentPosLeftCar2].classList.add("leftcar2");
    } else {
      leftcar2Reset();
      currentPosLeftCar2 = startingPosLeftCar2;
    }
  }, 600);
}
function leftcar2Reset() {
  const cell = cellElement[startingPosLeftCar2];
  cell.classList.add("leftcar2");
}

// Codes for the third left moving car
function movingLeftCar3() {
  leftcar3Reset();

  setInterval(() => {
    cellElement[currentPosLeftCar3].classList.remove("leftcar3");
    if (currentPosLeftCar3 > 77) {
      currentPosLeftCar3--;
      cellElement[currentPosLeftCar3].classList.add("leftcar3");
    } else {
      leftcar3Reset();
      currentPosLeftCar3 = startingPosLeftCar3;
    }
  }, 600);
}
function leftcar3Reset() {
  const cell = cellElement[startingPosLeftCar3];
  cell.classList.add("leftcar3");
}

// Codes for the first right moving car
function movingRightCar1() {
  rightcar1Reset();

  setInterval(() => {
    cellElement[currentPosRightCar1].classList.remove("rightcar1");
    if (currentPosRightCar1 < 120) {
      currentPosRightCar1++;
      cellElement[currentPosRightCar1].classList.add("rightcar1");
    } else {
      rightcar1Reset();
      currentPosRightCar1 = startingPosRightCar1;
    }
  }, 600);
}
function rightcar1Reset() {
  const cell = cellElement[startingPosRightCar1];
  cell.classList.add("rightcar1");
}

// Codes for the second right moving car
function movingRightCar2() {
  rightcar2Reset();

  setInterval(() => {
    cellElement[currentPosRightCar2].classList.remove("rightcar2");
    if (currentPosRightCar2 < 98) {
      currentPosRightCar2++;
      cellElement[currentPosRightCar2].classList.add("rightcar2");
    } else {
      leftcar3Reset();
      currentPosRightCar2 = startingPosRightCar2;
    }
  }, 600);
}
function rightcar2Reset() {
  const cell = cellElement[startingPosRightCar2];
  cell.classList.add("rightcar2");
}

function movingLogs() {}

function moveFrog(event) {
  removeFrog();
  // calculate frog's current position based on the keys pressed
  const keyPressed = event.code;
  if (keyPressed === "ArrowUp" && currentPos - columns >= 0) {
    currentPos -= columns;
  } else if (keyPressed === "ArrowRight" && (currentPos + 1) % columns !== 0) {
    currentPos++; // ?? what if I changed the number of columns and rows, will these conditions change?
  } else if (keyPressed === "ArrowLeft" && currentPos % columns !== 0) {
    currentPos--;
  } else if (keyPressed === "ArrowDown" && currentPos + columns < cellCount) {
    currentPos += columns;
  }
  addFrog();
  crossRoad();
  crossRiver();
  checkHome();
  // if score = 500, player won!
}
function addFrog() {
  const cell = cellElement[currentPos];
  cell.classList.add("frog");
}
function removeFrog() {
  const cell = cellElement[currentPos];
  cell.classList.remove("frog");
}
function crossRoad() {
  // If the frog's current cell has a car, alive = false, lives--, call function checkLives()
  // Else, alive = true
}
function crossRiver() {
  // If the frog's current cell has a log, alive = true
  // Else, alive = false, lives--, call function checkLives()
}
function checkHome() {
  // If the frog reach to an empty home, alive = true, score +=100, clear timerInterval
  // If frog reaches a home that is already occupied, alive = false, lives--, call function checkLives()
}
function checkLives() {
  // if (lives == 0) call init(), game over
  // else frogReset()
}

/*----------------------------- Event Listeners -----------------------------*/
// 1. Add an event listener to the start button, call function gameStart
// 2. Add an event listener to the keyboard arrow keys (left, right, up, down), call function moveFrog
document.addEventListener("keydown", moveFrog);

/*------------------------------- Page Load ------------------------------*/
// function init: When page load, there will be a "Frogger" title, a start button, display score is 0 and lives are 3. Once start button is clicked, the game area will be displayed.
//init();
