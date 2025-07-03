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
// 5. Logs & fish - Floating logs and swimming fish appear in the river in the top half of the screen when the game starts. Five rows move either left or right. The frog must jump onto the logs or fish to cross safely — if it falls into the river, it fails and loses one life.
// 6. Five frog homes - at the very top of the screen.

// * User Interactions (user initiated events like clicks, hovers, key presses etc)
// 1. Player initiated the game by clicking start button
// 2. then player presses the arrow keys to move the frog to cross the road and river to reach to the five frog homes.

// * Core Logic / Rules (List the core rules that will dictate the win lose condition)
// 1. Frog must cross the road and river to reach one of the five homes.
// 2. If frog reaches an empty home, score increases by 100.
// 3. If frog is hit by a car on the road, lose one life.
// 4. If frog jumps into water without landing on a log or fish in the river, lose one life.
// 5. If frog reach to a home that is already occupied, lose one life.
// 6. If frog fails to reach a home within 2 minutes, lose one life.
// 7. Game ends when lives equal to 0 or all 5 frogs reach to 5 homes / score equals to 500.

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
const columns = 11;
const rows = 13;
const cellCount = columns * rows;
const cellElement = [];

// Variables for the frog
const startingPosFrog = 137;
let currentPosFrog = startingPosFrog;

const MAXSCORES = 500;
let score = 0; // score - start from 0, increase by 100 each time a frog successfully crosses the river and lands on the correct spot
const MAXLIVES = 3;
let lives = MAXLIVES; // lives - start from 3, decrease by 1 each time fails
let homeIdx = [1, 3, 5, 7, 9]; // index for the home destinations

// To save all the setInterval, to clear all the old setInterval when initial the game
const intervalIds = [];

// Variables for the sound
const homeSound = document.getElementById("home");
const hitSound = document.getElementById("hit");
const winSound = document.getElementById("win");
const loseSound = document.getElementById("lose");

// Variables for the crossRoad function
const carClasses = [
  "leftcar1",
  "leftcar2",
  "leftcar3",
  "rightcar1",
  "rightcar2",
];
// Variables for the crossRiver function
const logClasses = ["leftcrab", "leftfish", "rightlog"];

// Variables for the moving cars
const cars = [
  // left-moving car row 1
  { carClassname: "leftcar1", direction: "left", startPos: 131, endPos: 121 },
  { carClassname: "leftcar1", direction: "left", startPos: 128, endPos: 121 },
  { carClassname: "leftcar1", direction: "left", startPos: 124, endPos: 121 },
  // left-moving car row 3
  { carClassname: "leftcar2", direction: "left", startPos: 109, endPos: 99 },
  { carClassname: "leftcar2", direction: "left", startPos: 104, endPos: 99 },
  { carClassname: "leftcar2", direction: "left", startPos: 100, endPos: 99 },
  // left-moving car row 5
  { carClassname: "leftcar3", direction: "left", startPos: 87, endPos: 77 },
  { carClassname: "leftcar3", direction: "left", startPos: 85, endPos: 77 },
  { carClassname: "leftcar3", direction: "left", startPos: 81, endPos: 77 },
  // right-moving car row 2
  { carClassname: "rightcar1", direction: "right", startPos: 110, endPos: 120 },
  { carClassname: "rightcar1", direction: "right", startPos: 115, endPos: 120 },
  { carClassname: "rightcar1", direction: "right", startPos: 119, endPos: 120 },
  // right-moving car row 4
  { carClassname: "rightcar2", direction: "right", startPos: 88, endPos: 98 },
  { carClassname: "rightcar2", direction: "right", startPos: 95, endPos: 98 },
  { carClassname: "rightcar2", direction: "right", startPos: 97, endPos: 98 },
];

// Variables for the floating logs - arrays
const logs = [
  // left-swimming crab row 7
  {
    logClassname: "leftcrab",
    direction: "left",
    startPos: [65],
    endPos: 55,
    numberOfLogs: 5,
  },
  {
    logClassname: "leftcrab",
    direction: "left",
    startPos: [57, 58, 59],
    endPos: 55,
    numberOfLogs: 5,
  },
  // left-swimming fish row 10
  {
    logClassname: "leftfish",
    direction: "left",
    startPos: [32],
    endPos: 22,
    numberOfLogs: 2,
  },
  {
    logClassname: "leftfish",
    direction: "left",
    startPos: [28, 29],
    endPos: 22,
    numberOfLogs: 2,
  },
  {
    logClassname: "leftfish",
    direction: "left",
    startPos: [24, 25],
    endPos: 22,
    numberOfLogs: 2,
  },
  // right-floating log row 8
  {
    logClassname: "rightlog",
    direction: "right",
    startPos: [44],
    endPos: 54,
    numberOfLogs: 7,
  },

  // right-floating log row 9
  {
    logClassname: "rightlog",
    direction: "right",
    startPos: [33],
    endPos: 43,
    numberOfLogs: 3,
  },
  {
    logClassname: "rightlog",
    direction: "right",
    startPos: [38, 39, 40],
    endPos: 43,
    numberOfLogs: 3,
  },
  // right-floating log row 11
  {
    logClassname: "rightlog",
    direction: "right",
    startPos: [11],
    endPos: 21,
    numberOfLogs: 2,
  },
  {
    logClassname: "rightlog",
    direction: "right",
    startPos: [15, 16],
    endPos: 21,
    numberOfLogs: 2,
  },
  {
    logClassname: "rightlog",
    direction: "right",
    startPos: [19, 20],
    endPos: 21,
    numberOfLogs: 2,
  },
];

// To save all the logs position to see if any of the log has a frog on it
const allLogPositions = [];

/*------------------------ Cached Element References ------------------------*/
// start screen
const startScreen = document.querySelector(".start-screen");
// start button
const startBtn = document.getElementById("start-button");
// 13 * 11 grid
const grid = document.getElementById("grid");

/*-------------------------------- Functions --------------------------------*/
function init() {
  intervalIds.forEach((id) => clearInterval(id)); // clear/stop all the old setIntervals
  intervalIds.length = 0; // clear the interval array
  startScreen.style.display = "block";
  startBtn.style.display = "block";
  grid.style.display = "none";
}

function gameStart() {
  startScreen.style.display = "none";
  startBtn.style.display = "none";
  createGrid();
  score = 0;
  lives = MAXLIVES;
  updateDisplay();
  resetHomes();
  resetFrog();
  cars.forEach((car) => {
    movingCar(car);
  });
  logs.forEach((log) => {
    floatingLog(log);
  });
}

function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement("div");
    //cell.innerText = i;
    cell.dataset.index = i;
    // Add the color to the bottom row, middle row and top row
    if (i === 1 || i === 3 || i === 5 || i === 7 || i === 9) {
      cell.classList.add("home");
    } else if (i >= (rows - 1) * columns || (i >= 66 && i <= 76)) {
      cell.classList.add("saferow");
    } else if (i >= 77 && i <= 131) {
      cell.classList.add("road");
    } else if (i >= 0 && i <= 65) {
      cell.classList.add("river");
    }
    cellElement.push(cell);
    grid.appendChild(cell);
  }
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}

function resetHomes() {
  homeIdx = [1, 3, 5, 7, 9];
  homeIdx.forEach((home) => {
    const frog = cellElement[home].classList.contains("frog");
    if (frog) cellElement[home].classList.remove("frog");
  });
}

function resetFrog() {
  currentPosFrog = startingPosFrog;
  addFrog();
}

function movingCar({ carClassname, direction, startPos, endPos }) {
  let restartPos;
  if (direction === "left") {
    restartPos = endPos + columns - 1;
  } else {
    restartPos = endPos - columns + 1;
  }

  let currentPos = startPos;
  cellElement[restartPos].classList.add(carClassname);

  const intervalId = setInterval(() => {
    cellElement[currentPos].classList.remove(carClassname);
    if (
      (direction === "left" && currentPos > endPos) ||
      (direction === "right" && currentPos < endPos)
    ) {
      if (direction === "left") {
        currentPos--;
      } else {
        currentPos++;
      }
      if (currentPos === currentPosFrog) {
        removeFrog();
        checkLives();
      }
      cellElement[currentPos].classList.add(carClassname);
    } else {
      cellElement[restartPos].classList.add(carClassname);
      currentPos = restartPos;
    }
  }, 600);
  intervalIds.push(intervalId);
}

function floatingLog({
  logClassname,
  direction,
  startPos,
  endPos,
  numberOfLogs,
}) {
  resetLog(startPos, logClassname);
  let currentPos = [...startPos];
  allLogPositions.push(currentPos);
  let restartPos;
  if (direction === "left") {
    restartPos = [endPos + columns - 1];
  } else {
    restartPos = [endPos - columns + 1];
  }

  const intervalId = setInterval(() => {
    const length = currentPos.length;
    let head = currentPos[0];
    let tail = currentPos[length - 1];

    // Expanding - the movement of three fish appear one by one from the right starting point
    if (
      (direction === "left" && head > endPos && length < numberOfLogs) ||
      (direction === "right" && head < endPos && length < numberOfLogs)
    ) {
      if (direction === "left") {
        currentPos.unshift(head - 1);
      } else {
        currentPos.unshift(head + 1);
      }
      cellElement[currentPos[0]].classList.add(logClassname);
    }
    // Sliding - the movement of three fish swimmming from right to left together
    else if (
      (direction === "left" && head > endPos) ||
      (direction === "right" && head < endPos)
    ) {
      if (direction === "left") {
        head--;
      } else {
        head++;
      }
      cellElement[head].classList.add(logClassname);
      cellElement[tail].classList.remove(logClassname);
      currentPos.pop();
      currentPos.unshift(head);
    }
    // Disappearing - the movement of three fish disappear one by one from the left ending point
    else if (
      (direction === "left" && tail >= endPos) ||
      (direction === "right" && tail <= endPos)
    ) {
      if (direction === "left") {
        head--;
      } else {
        head++;
      }
      cellElement[tail].classList.remove(logClassname);
      currentPos.pop();
    } // The movement of three fish start from the right starting point
    else {
      resetLog(restartPos, logClassname);
      //currentPos = [...restartPos];
      currentPos.length = 0;
      restartPos.forEach((pos) => currentPos.push(pos));
    }

    checkFrogOnLog(currentPos);
  }, 800);
  intervalIds.push(intervalId);
}
function resetLog(startPos, logClassname) {
  for (i = 0; i < startPos.length; i++) {
    const element = startPos[i];
    cellElement[element].classList.add(logClassname);
  }
}
function checkFrogOnLog() {
  // Check whether the log has the frog on it
  const frogInRiver = isFrogInRiver();
  const frogOnAnyLog = allLogPositions.some((logPos) =>
    logPos.includes(currentPosFrog)
  );
  if (frogInRiver && !frogOnAnyLog) {
    removeFrog();
    checkLives();
  }
}

function moveFrog(event) {
  // Remove the frog from the old position
  removeFrog();
  // Calculate frog's current/new position based on the keys pressed

  const keyPressed = event.code;
  if (keyPressed === "ArrowUp" && currentPosFrog - columns >= 0) {
    currentPosFrog -= columns;
  } else if (
    keyPressed === "ArrowRight" &&
    (currentPosFrog + 1) % columns !== 0
  ) {
    currentPosFrog++;
  } else if (keyPressed === "ArrowLeft" && currentPosFrog % columns !== 0) {
    currentPosFrog--;
  } else if (
    keyPressed === "ArrowDown" &&
    currentPosFrog + columns < cellCount
  ) {
    currentPosFrog += columns;
  }
  // After position changes, add the frog on the new position
  addFrog();

  // Check for a collision on the frog's move
  if (isFrogOnRoad()) {
    // Check for a collision on the road
    crossRoad();
  } else if (isFrogInRiver()) {
    // Check for a safe land in the river
    crossRiver();
  } else if (isFrogInTopRow()) {
    // Check for an arrival at the five frog homes

    checkHome();
    checkScore();
  }
}

function addFrog() {
  const cell = cellElement[currentPosFrog];
  cell.classList.add("frog");
}
function removeFrog() {
  const cell = cellElement[currentPosFrog];
  cell.classList.remove("frog");
}

function isFrogOnRoad() {
  // Check if frog is on the bottom half of the game grid
  const roadStart = columns + columns * Math.floor(rows / 2);
  const roadEnd = cellCount - columns;
  return currentPosFrog >= roadStart && currentPosFrog < roadEnd;
}
function isFrogInRiver() {
  // Check if frog is on the top half of the game grid
  const riverStart = columns; // except from the top homes area
  const riverEnd = columns * Math.floor(rows / 2); // till the top half of the game grid
  return currentPosFrog >= riverStart && currentPosFrog < riverEnd;
}
function isFrogInTopRow() {
  // Check if frog is on the top row
  return currentPosFrog >= 0 && currentPosFrog < columns;
}

function crossRoad() {
  const cell = cellElement[currentPosFrog];
  // Check if the frog's current position contains any car class
  const hit = carClasses.some((carClass) => {
    return cell.classList.contains(carClass);
  });
  if (hit) {
    removeFrog();
    checkLives();
  }
}
function crossRiver() {
  const cell = cellElement[currentPosFrog];
  // Check if the frog's current position contains any log class
  const land = logClasses.some((logclass) => {
    return cell.classList.contains(logclass);
  });
  if (!land) {
    removeFrog();
    checkLives();
  }
}

function checkHome() {
  const idx = homeIdx.indexOf(currentPosFrog);

  if (idx === -1) {
    // currentPosFrog isn't in the home area
    removeFrog();
    checkLives();
  } else {
    // currentPosFrog is in an empty
    playHomeSound();
    score += 100;
    homeIdx.splice(idx, 1); // remove that home index from home array / this home is no longer available
    updateDisplay();
    resetFrog();
  }
}
function checkLives() {
  lives--;
  updateDisplay();
  if (lives === 0) {
    init(); // game over
    playLoseSound();
  } else {
    playHitSound();
    resetFrog();
  }
}
function checkScore() {
  if (score === 500) {
    init();
    playWinSound();
  }
}
function updateDisplay() {
  // Update score and lives
  document.getElementById("score-display").textContent = `Score: ${score}`;
  document.getElementById("lives-display").textContent = `Lives: ${lives}`;
}

function playHitSound() {
  hitSound.src = "sounds/hit.wav";
  //console.log("i work");
  hitSound.play();
}
function playHomeSound() {
  homeSound.src = "sounds/home.wav";
  homeSound.play();
}
function playLoseSound() {
  loseSound.src = "sounds/lose.wav";
  loseSound.play();
}
function playWinSound() {
  win.src = "sounds/win.wav";
  win.play();
}

/*----------------------------- Event Listeners -----------------------------*/
// 1. Add an event listener to the start button, call function gameStart
startBtn.addEventListener("click", gameStart);
// 2. Add an event listener to the keyboard arrow keys (left, right, up, down), call function moveFrog
document.addEventListener("keydown", moveFrog);

/*------------------------------- Page Load ------------------------------*/
// function init: When page load, there will be a "Frogger" title, a start button, display score is 0 and lives are 3. Once start button is clicked, the game area will be displayed.
init();
