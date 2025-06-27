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
// columns = 11
// rows = 13
// starting position - frog's starting position
// current position - frog's current position
// alive = true - frog is alive
// timerInterval - 2mins
// score - start from 0, increase by 100 each time a frog successfully crosses the river and lands on the correct spot.
// lives - start from 3, decrease by 1 each time fails
// message - You won! / You lose!

/*------------------------ Cached Element References ------------------------*/
// start button
// 13 * 11 grid

/*-------------------------------- Functions --------------------------------*/
function init() {}
init();

function gameStart() {
  createGrid();
  resetFrog();
  movingCars();
  movingLogs();
  timerInterval = setInterval(frogReset, 120000);
}
function createGrid() {}
function resetFrog() {}
function movingCars() {} // ? setInterval
function movingLogs() {} // ? setInterval

function moveFrog() {
  removeFrog();
  // calculate frog's current position based on the keys pressed
  addFrog();
  crossRoad();
  crossRiver();
  checkHome();
  // if score = 500, player won!
}
function addFrog() {} // cell.classList.add("frog")
function removeFrog() {}
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

/*------------------------------- Page Load ------------------------------*/
// function init: When page load, there will be a "Frogger" title, a start button, display score is 0 and lives are 3. Once start button is clicked, the game area will be displayed.
