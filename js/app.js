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
let score = 0; // score - start from 0, increase by 100 each time a frog successfully crosses the river and lands on the correct spot.
let lives = 3; // lives - start from 3, decrease by 1 each time fails.

// message - You won! / You lose!
// timerInterval - 2mins

// Variables for the homes
const homesIdx = [
  { idx: 1, empty: true },
  { idx: 3, empty: true },
  { idx: 5, empty: true },
  { idx: 7, empty: true },
  { idx: 9, empty: true },
];

// Variables for the crossRoad
const carClasses = [
  "leftcar1",
  "leftcar2",
  "leftcar3",
  "rightcar1",
  "rightcar2",
];
// Variables for the crossRiver
const logClasses = ["leftcrab", "leftfish", "rightlog"];

// Variables for the left-moving car 11
const startingPosLeftCar11 = 131;
let currentPosLeftCar11 = startingPosLeftCar11;
// Variables for the left-moving car 12
const startingPosLeftCar12 = 128;
let currentPosLeftCar12 = startingPosLeftCar12;
// Variables for the left-moving car 13
const startingPosLeftCar13 = 124;
let currentPosLeftCar13 = startingPosLeftCar13;

// Variables for the left-moving car 21
const startingPosLeftCar21 = 109;
let currentPosLeftCar21 = startingPosLeftCar21;
// Variables for the left-moving car 22
const startingPosLeftCar22 = 104;
let currentPosLeftCar22 = startingPosLeftCar22;
// Variables for the left-moving car 23
const startingPosLeftCar23 = 100;
let currentPosLeftCar23 = startingPosLeftCar23;

// Variables for the left-moving car 31
const startingPosLeftCar31 = 87;
let currentPosLeftCar31 = startingPosLeftCar31;
// Variables for the left-moving car 32
const startingPosLeftCar32 = 85;
let currentPosLeftCar32 = startingPosLeftCar32;
// Variables for the left-moving car 33
const startingPosLeftCar33 = 81;
let currentPosLeftCar33 = startingPosLeftCar33;

// Variables for the right-moving car 11
const startingPosRightCar11 = 110;
let currentPosRightCar11 = startingPosRightCar11;
// Variables for the right-moving car 12
const startingPosRightCar12 = 115;
let currentPosRightCar12 = startingPosRightCar12;
// Variables for the right-moving car 13
const startingPosRightCar13 = 119;
let currentPosRightCar13 = startingPosRightCar13;

// Variables for the right-moving car 21
const startingPosRightCar21 = 88;
let currentPosRightCar21 = startingPosRightCar21;
// Variables for the right-moving car 22
const startingPosRightCar22 = 95;
let currentPosRightCar22 = startingPosRightCar22;
// Variables for the right-moving car 23
const startingPosRightCar23 = 97;
let currentPosRightCar23 = startingPosRightCar23;

// Variables for the left-swimming fish 11
const startingPosLeftFish11 = [65];
let currentPosLeftFish11 = [...startingPosLeftFish11];
// Variables for the left-swimming fish 12
const startingPosLeftFish12 = [57, 58, 59];
let currentPosLeftFish12 = [...startingPosLeftFish12];

// Variables for the left-swimming fish 21
const startingPosLeftFish21 = [32];
let currentPosLeftFish21 = [...startingPosLeftFish21];
// Variables for the left-swimming fish 22
const startingPosLeftFish22 = [28, 29];
let currentPosLeftFish22 = [...startingPosLeftFish22];
// Variables for the left-swimming fish 23
const startingPosLeftFish23 = [24, 25];
let currentPosLeftFish23 = [...startingPosLeftFish23];

// Variables for the right-floating log 11
const startingPosRightLog11 = 44;
let currentPosRightLog11 = startingPosRightLog11;
// Variables for the right-floating log 12
const startingPosRightLog12 = 48;
let currentPosRightLog12 = startingPosRightLog12;
// Variables for the right-floating log 13
const startingPosRightLog13 = 51;
let currentPosRightLog13 = startingPosRightLog13;

// Variables for the right-floating log 21
const startingPosRightLog21 = [33];
let currentPosRightLog21 = [...startingPosRightLog21];
// Variables for the right-floating log 22
const startingPosRightLog22 = [38, 39, 40];
let currentPosRightLog22 = [...startingPosRightLog22];

// Variables for the right-floating log 31
const startingPosRightLog31 = [11];
let currentPosRightLog31 = [...startingPosRightLog31];
// Variables for the right-floating log 32
const startingPosRightLog32 = [15, 16];
let currentPosRightLog32 = [...startingPosRightLog32];
// Variables for the right-floating log 33
const startingPosRightLog33 = [19, 20];
let currentPosRightLog33 = [...startingPosRightLog33];

/*------------------------ Cached Element References ------------------------*/
// start button
// 13 * 11 grid
const grid = document.getElementById("grid");

/*-------------------------------- Functions --------------------------------*/
function init() {}
gameStart();
function gameStart() {
  createGrid();
  resetFrog();
  //movingCars();
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
  cellElement[startingPosFrog].classList.add("frog");
  currentPosFrog = startingPosFrog;
}

function movingCars() {
  movingLeftCar1(currentPosLeftCar11);
  movingLeftCar1(currentPosLeftCar12);
  movingLeftCar1(currentPosLeftCar13);
  movingLeftCar2(currentPosLeftCar21);
  movingLeftCar2(currentPosLeftCar22);
  movingLeftCar2(currentPosLeftCar23);
  movingLeftCar3(currentPosLeftCar31);
  movingLeftCar3(currentPosLeftCar32);
  movingLeftCar3(currentPosLeftCar33);
  movingRightCar1(currentPosRightCar11);
  movingRightCar1(currentPosRightCar12);
  movingRightCar1(currentPosRightCar13);
  movingRightCar2(currentPosRightCar21);
  movingRightCar2(currentPosRightCar22);
  movingRightCar2(currentPosRightCar23);
}
// The first left-moving car
function movingLeftCar1(currentPos) {
  resetLeftCar1(startingPosLeftCar11);

  setInterval(() => {
    cellElement[currentPos].classList.remove("leftcar1");
    if (currentPos > 121) {
      currentPos--;
      if (currentPos === currentPosFrog) {
        removeFrog();
        resetFrog();
      }
      cellElement[currentPos].classList.add("leftcar1");
    } else {
      resetLeftCar1(startingPosLeftCar11);
      currentPos = startingPosLeftCar11;
    }
  }, 600);
}
function resetLeftCar1(startingPos) {
  const cell = cellElement[startingPos];
  cell.classList.add("leftcar1");
}
// The second left-moving car
function movingLeftCar2(currentPos) {
  resetLeftCar2(startingPosLeftCar21);

  setInterval(() => {
    cellElement[currentPos].classList.remove("leftcar2");
    if (currentPos > 99) {
      currentPos--;
      if (currentPos === currentPosFrog) {
        removeFrog();
        resetFrog();
      }
      cellElement[currentPos].classList.add("leftcar2");
    } else {
      resetLeftCar2(startingPosLeftCar21);
      currentPos = startingPosLeftCar21;
    }
  }, 600);
}
function resetLeftCar2(startingPos) {
  const cell = cellElement[startingPos];
  cell.classList.add("leftcar2");
}
// The third left-moving car
function movingLeftCar3(currentPos) {
  resetLeftCar3(startingPosLeftCar31);

  setInterval(() => {
    cellElement[currentPos].classList.remove("leftcar3");
    if (currentPos > 77) {
      currentPos--;
      if (currentPos === currentPosFrog) {
        removeFrog();
        resetFrog();
      }
      cellElement[currentPos].classList.add("leftcar3");
    } else {
      resetLeftCar3(startingPosLeftCar31);
      currentPos = startingPosLeftCar31;
    }
  }, 600);
}
function resetLeftCar3(startingPos) {
  const cell = cellElement[startingPos];
  cell.classList.add("leftcar3");
}
// The first right-moving car
function movingRightCar1(currentPos) {
  resetRightCar1(startingPosRightCar11);

  setInterval(() => {
    cellElement[currentPos].classList.remove("rightcar1");
    if (currentPos < 120) {
      currentPos++;
      if (currentPos === currentPosFrog) {
        removeFrog();
        resetFrog();
      }
      cellElement[currentPos].classList.add("rightcar1");
    } else {
      resetRightCar1(startingPosRightCar11);
      currentPos = startingPosRightCar11;
    }
  }, 600);
}
function resetRightCar1(startingPos) {
  const cell = cellElement[startingPos];
  cell.classList.add("rightcar1");
}
// The second right-moving car
function movingRightCar2(currentPos) {
  resetRightCar2(startingPosRightCar21);

  setInterval(() => {
    cellElement[currentPos].classList.remove("rightcar2");
    if (currentPos < 98) {
      currentPos++;
      if (currentPos === currentPosFrog) {
        removeFrog();
        resetFrog();
      }
      cellElement[currentPos].classList.add("rightcar2");
    } else {
      resetRightCar2(startingPosRightCar21);
      currentPos = startingPosRightCar21;
    }
  }, 300);
}
function resetRightCar2(startingPos) {
  const cell = cellElement[startingPos];
  cell.classList.add("rightcar2");
}

function movingLogs() {
  swimmingLeftFish1(startingPosLeftFish11, currentPosLeftFish11);
  //swimmingLeftFish1(startingPosLeftFish12, currentPosLeftFish12);
  swimmingLeftFish2(startingPosLeftFish21, currentPosLeftFish21);
  swimmingLeftFish2(startingPosLeftFish22, currentPosLeftFish22);
  swimmingLeftFish2(startingPosLeftFish23, currentPosLeftFish23);
  floatingRightLog1(currentPosRightLog11);
  floatingRightLog1(currentPosRightLog12);
  floatingRightLog1(currentPosRightLog13);
  floatingRightLog2(startingPosRightLog21, currentPosRightLog21);
  floatingRightLog2(startingPosRightLog22, currentPosRightLog22);
  floatingRightLog3(startingPosRightLog31, currentPosRightLog31);
  floatingRightLog3(startingPosRightLog32, currentPosRightLog32);
  floatingRightLog3(startingPosRightLog33, currentPosRightLog33);
}

function checkFishCollision(currentPos) {
  if (isFrogInRiver() && !currentPos.includes(currentPosFrog)) {
    console.log(currentPos);
    console.log(currentPosFrog);
    removeFrog();
    checkLives();
  }
}


// The first left-swimming fish
function swimmingLeftFish1(startingPos, currentPos) {
  resetLeftFish1(startingPos);
  let lengthOfFish;

  setInterval(() => {
    lengthOfFish = currentPos.length;
    let firstEle = currentPos[0];
    let lastEle = currentPos[lengthOfFish - 1];

    // The movement of three fish appear one by one from the right starting point
    if (firstEle > 55 && lengthOfFish < 3) {
      currentPos.unshift(firstEle - 1);
      cellElement[currentPos[0]].classList.add("leftcrab");
    }
    // The movement of three fish swimmming from right to left together
    else if (firstEle > 55) {
      firstEle--;
      cellElement[firstEle].classList.add("leftcrab");
      cellElement[lastEle].classList.remove("leftcrab");
      currentPos.pop();
      currentPos.unshift(firstEle);
    }
    //  The movement of three fish disappear one by one from the left ending point
    else if (lastEle >= 55) {
      cellElement[lastEle].classList.remove("leftcrab");
      currentPos.pop();
      lastEle--;
    } // The movement of three fish start from the right starting point
    else {
      // Reset the fish to the LeftFish11's starting position
      resetLeftFish1(startingPosLeftFish11);
      currentPos = [...startingPosLeftFish11];
    }

    checkFishCollision(currentPos);

  }, 600);
}
// Reset the current position to the starting position
function resetLeftFish1(startingPos) {
  for (i = 0; i < startingPos.length; i++) {
    const element = startingPos[i];
    cellElement[element].classList.add("leftcrab");
  }
}
// The second left-swimming fish
function swimmingLeftFish2(startingPos, currentPos) {
  resetLeftFish2(startingPos);
  let lengthOfFish;

  setInterval(() => {
    lengthOfFish = currentPos.length;
    let firstEle = currentPos[0];
    let lastEle = currentPos[lengthOfFish - 1];

    // Codes for the three fish appear one by one from the right starting point
    if (firstEle > 22 && lengthOfFish < 2) {
      currentPos.unshift(firstEle - 1);
      cellElement[currentPos[0]].classList.add("leftfish");
    }
    // Codes for the three fish swimmming from right to left together
    else if (firstEle > 22) {
      firstEle--;
      cellElement[firstEle].classList.add("leftfish");
      cellElement[lastEle].classList.remove("leftfish");
      currentPos.pop();
      currentPos.unshift(firstEle);
    }
    //  Codes for the three fish disappear one by one from the left ending point
    else if (lastEle >= 22) {
      cellElement[lastEle].classList.remove("leftfish");
      currentPos.pop();
      lastEle--;
    } else {
      resetLeftFish2(startingPosLeftFish21);
      currentPos = [...startingPosLeftFish21];
    }
  }, 600);
}
// Reset the current position to the starting position
function resetLeftFish2(startingPos) {
  for (i = 0; i < startingPos.length; i++) {
    const element = startingPos[i];
    cellElement[element].classList.add("leftfish");
  }
}
// The first right-floating log
function floatingRightLog1(currentPos) {
  resetRightLog1(startingPosRightLog11);

  setInterval(() => {
    cellElement[currentPos].classList.remove("rightlog");
    if (currentPos < 54) {
      currentPos++;
      cellElement[currentPos].classList.add("rightlog");
    } else {
      resetRightLog1(startingPosRightLog11);
      currentPos = startingPosRightLog11;
    }
  }, 600);
}
function resetRightLog1(startingPos) {
  const cell = cellElement[startingPos];
  cell.classList.add("rightlog");
}
// The second right-floating log
function floatingRightLog2(startingPos, currentPos) {
  resetRightLog2(startingPos);
  let lengthOfLog;

  setInterval(() => {
    lengthOfLog = currentPos.length;
    let firstEle = currentPos[0];
    let lastEle = currentPos[lengthOfLog - 1];

    // Codes for the three fish appear one by one from the right starting point
    if (firstEle < 43 && lengthOfLog < 3) {
      currentPos.unshift(firstEle + 1);
      cellElement[currentPos[0]].classList.add("rightlog");
    }
    // Codes for the three fish swimmming from right to left together
    else if (firstEle < 43) {
      firstEle++;
      cellElement[firstEle].classList.add("rightlog");
      cellElement[lastEle].classList.remove("rightlog");
      currentPos.pop();
      currentPos.unshift(firstEle);
    }
    //  Codes for the three fish disappear one by one from the left ending point
    else if (lastEle <= 43) {
      cellElement[lastEle].classList.remove("rightlog");
      currentPos.pop();
      lastEle++;
    } else {
      resetRightLog2(startingPosRightLog21);
      currentPos = [...startingPosRightLog21];
    }
  }, 600);
}
// Reset the current position to the starting position
function resetRightLog2(startingPos) {
  for (i = 0; i < startingPos.length; i++) {
    const element = startingPos[i];
    cellElement[element].classList.add("rightlog");
  }
}
// The third right-floating log
function floatingRightLog3(startingPos, currentPos) {
  resetRightLog3(startingPos);
  let lengthOfLog;

  setInterval(() => {
    lengthOfLog = currentPos.length;
    let firstEle = currentPos[0];
    let lastEle = currentPos[lengthOfLog - 1];

    // Codes for the three fish appear one by one from the right starting point
    if (firstEle < 21 && lengthOfLog < 2) {
      currentPos.unshift(firstEle + 1);
      cellElement[currentPos[0]].classList.add("rightlog");
    }
    // Codes for the three fish swimmming from right to left together
    else if (firstEle < 21) {
      firstEle++;
      cellElement[firstEle].classList.add("rightlog");
      cellElement[lastEle].classList.remove("rightlog");
      currentPos.pop();
      currentPos.unshift(firstEle);
    }
    //  Codes for the three fish disappear one by one from the left ending point
    else if (lastEle <= 21) {
      cellElement[lastEle].classList.remove("rightlog");
      currentPos.pop();
      lastEle++;
    } else {
      resetRightLog3(startingPosRightLog31);
      currentPos = [...startingPosRightLog31];
    }
  }, 600);
}
// Reset the current position to the starting position
function resetRightLog3(startingPos) {
  for (i = 0; i < startingPos.length; i++) {
    const element = startingPos[i];
    cellElement[element].classList.add("rightlog");
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
  // Add the frog on the new position
  addFrog();

  // Check for a collision on the frog's move
  if (isFrogOnRoad) {
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
// Check if frog is on the bottom half of the game grid
function isFrogOnRoad() {
  const roadStart = columns + columns * Math.floor(rows / 2);
  const roadEnd = cellCount - columns;
  return currentPosFrog >= roadStart && currentPosFrog < roadEnd;
}
// Check if frog is on the top half of the game grid
function isFrogInRiver() {
  const riverStart = columns; // except from the top homes area
  const riverEnd = columns * Math.floor(rows / 2); // till the top half of the game grid
  return currentPosFrog >= riverStart && currentPosFrog < riverEnd;
}
// Check if frog is on the top row
function isFrogInTopRow() {
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
  // check if frog's current position in the homes array
  const arrivedHome = homesIdx.find((home) => {
    return home.idx === currentPosFrog;
  });
  // if frog doesn't land on the homes area
  if (!arrivedHome) {
    removeFrog();
    checkLives();
  } // if frog land on a home and this home is empty
  else if (arrivedHome.empty) {
    score += 100;
    arrivedHome.empty = false;
    resetFrog();
  } // if frog land on a home and this home isn't empty
  else {
    checkLives();
  }
}
function checkLives() {
  lives--;
  if (lives === 0) {
    //clearInterval()//??
    init(); // game over
    //message=you lose//???
  } else {
    resetFrog();
  }
}
function checkScore() {
  if (score === 500) {
    //clearInterval()//??
    init();
    // message = you won//???
  }
}

/*----------------------------- Event Listeners -----------------------------*/
// 1. Add an event listener to the start button, call function gameStart
// 2. Add an event listener to the keyboard arrow keys (left, right, up, down), call function moveFrog
document.addEventListener("keydown", moveFrog);

/*------------------------------- Page Load ------------------------------*/
// function init: When page load, there will be a "Frogger" title, a start button, display score is 0 and lives are 3. Once start button is clicked, the game area will be displayed.
//init();
