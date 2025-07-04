<p>ReadMe Sections</p>
<h1 id="frogger-game">Frogger game</h1>
<p>Description</p>
<p>Instructions</p>
<p>Here, give a short description of the project. It can be a couple of sentences where you discuss the point in time during the course that you completed it, the topic of the project and potentially the tech stack.</p>
<p>Insert your Description here:
This project is a browser-based Frogger-style arcade action game. The object of the game is to direct five frogs to their homes by avoiding cars on a busy road, then crossing a river by jumping on floating logs. I created this game as my first project in the General Assembly Software Engineering Bootcamp of learning JavaScript DOM manipulation and JavaScript Array Iterator Methods. It was developed using HTML, CSS, and JavaScript.</p>
<p>Deployment link</p>
<p>Instructions</p>
<p>Here include the information on where the deployed project can be found. If login details are needed to access the full project, make sure you include them.</p>
<p>If you have not yet deployed your project, you can add this in later.</p>
<p>Insert your Deployment link here:
<a href="https://bihuiy.github.io/Frogger/">https://bihuiy.github.io/Frogger/</a></p>
<p>Getting Started/Code Installation</p>
<p>Instructions</p>
<p>Explain how the reader accesses your code. Include a step by step approach.</p>
<p>Insert your Getting Started/Code Installation here:
To play the game, simply open the deployed link in your browser.</p>
<p>Timeframe &amp; Working Team (Solo/Pair/Group)</p>
<p>Instructions</p>
<p>Share the timeframe given for the project and whether you worked independently, in a pair, or in a group.</p>
<p>If you worked in a pair or group, include the names of the people you collaborated with. As a bonus, you can also provide links to their GitHub repo.</p>
<p>Insert your Timeframe &amp; Working Team here:
This project was completed individually over one week, from 27th June to 4th July 2025.</p>
<p>Technologies Used</p>
<p>Instructions</p>
<p>List every technology you used to complete the project. This can be in one long list, or broken down into categories (Back End, Front End, Development Tools).</p>
<p>Insert your Technologies Used here:
Front End: HTML, CSS, JavaScript.
Development Tools: Visual Studio Code, GitHub</p>
<p>Brief
Instructions</p>
<p>Include the brief set by your instructional team here. This sets the context of the project you were working towards and mimics briefs you will be set later in your future roles.</p>
<p>This can either be in bullets or in a paragraph.</p>
<p>Insert your Brief here:
Render the game in the browser using the DOM manipulation techniques demonstrated in lecture.
Include win/loss logic and render win/loss messages in HTML. The game you chose must have a win/lose condition.
Include separate HTML, CSS, JavaScript, and JavaScript data files organized in an appropriate directory structure.
Include all required features specific to your game. 
The game is deployed online so that the rest of the world can play it.
Code must follow best practices, including proper indentation, meaningful variable names, and no remaining dead/commented-out code.
CSS Flexbox or Grid used for layout.</p>
<p>Planning</p>
<p>Instructions</p>
<p>The planning stage is important, as all projects in your future roles will have detailed plans before any coding happens. It is a great experience to share with potential engineer employers, as this reflects real engineering team practices. </p>
<p>Start by explaining the initial steps you took in the project. </p>
<p>Did you do any sketches? If so, discuss this and include images.
Any wireframes of the front end and UI? You did? Then explain this and include images.
Any ERDs? Same here, explain and include images.
Use a project management tool to plan the sprint? If so, talk through this - what tool did you use? How you allocated tickets/responsibilities, sprint timeline etc. Also include screenshots of this.
Any pseudocode? 
If it was a group or pair project - Discuss who was designated which tasks. This is very important, as engineers want to understand who owned the different code elements when looking at a group project.</p>
<p>For each project, review the above bullets and discuss every step you took in the planning stage, including the relevant images.</p>
<p>Not every project will include the above, but it’s important to discuss any of the bullets that you did implement.</p>
<p>Insert your Planning here:
Sketched a basic layout of the game grid (13 rows x 11 columns). Defined each row&#39;s role: safe zones, river, roads, and home areas.</p>
<p>Created pseudocode for frog movement, car and log animation, collision detection, and score/lives updates. Here is a snippet of the pseudocode I wrote for the game logic:</p>
<p>// * User Interactions (user initiated events like clicks, hovers, key presses etc)
// 1. Player initiated the game by clicking start button
// 2. then player presses the arrow keys to move the frog to cross the road and river to reach to the five frog homes.</p>
<p>// * Core Logic / Rules (List the core rules that will dictate the win lose condition)
// 1. Frog must cross the road and river to reach one of the five homes.
// 2. If frog reaches an empty home, score increases by 100.
// 3. If frog is hit by a car on the road, lose one life.
// 4. If frog jumps into water without landing on a log or fish in the river, lose one life.
// 5. If frog reach to a home that is already occupied, lose one life.
// 6. If frog fails to reach a home within 2 minutes, lose one life.
// 7. Game ends when lives equal to 0 or all 5 frogs reach to 5 homes / score equals to 500.</p>
<p>You can find the full pseudocode file here: Pseudocode</p>
<p>Build/Code Process</p>
<p>Instructions</p>
<p>The Build/Code Process will be the longest section of your ReadMe and will be most insightful to the engineers that review them. This is where you will discuss the steps you took to code the project.</p>
<p>You want to see your ReadMes as a way to walk the engineers through your approach and problem solving from the start of the project through to the end.</p>
<p>You&#39;ll need to include a minimum of 3-4 code snippets, highlighting code you&#39;re particularly proud of and these code snippets will have descriptions on what you did, how and why to set the context of the snippet you include. These explanations are important for the engineers, as they will want to understand what you did and the reasoning behind the steps you took.</p>
<p>You don&#39;t need to document every single thing you coded, but walk them through the key sections of the project build.</p>
<p>For any group project, you will just focus on your contributions. </p>
<p>Some people will document the build/code process by discussing the key stages they worked on. Others will do a day by day guide. It’s entirely up to you how you structure this, as long as you discuss all the key things above.</p>
<p>Insert your Build/Code Process here:</p>
<ol>
<li><p>Setting up the Grid
I began by building a flexible 13x11 grid using JavaScript. Snippets of the createGrid function: 
function createGrid() {
for (let i = 0; i &lt; cellCount; i++) {
const cell = document.createElement(&quot;div&quot;);
//cell.innerText = i;
cell.dataset.index = i;
// Add the color to the bottom row, middle row and top row
if (i === 1 || i === 3 || i === 5 || i === 7 || i === 9) {
  cell.classList.add(&quot;home&quot;);
} else if (i &gt;= (rows - 1) * columns || (i &gt;= 66 &amp;&amp; i &lt;= 76)) {
  cell.classList.add(&quot;saferow&quot;);
} else if (i &gt;= 77 &amp;&amp; i &lt;= 131) {
  cell.classList.add(&quot;road&quot;);
} else if (i &gt;= 0 &amp;&amp; i &lt;= 65) {
  cell.classList.add(&quot;river&quot;);
}
cellElement.push(cell);
grid.appendChild(cell);
}
grid.style.display = &quot;grid&quot;;
grid.style.gridTemplateColumns = <code>repeat(${columns}, 1fr)</code>;
grid.style.gridTemplateRows = <code>repeat(${rows}, 1fr)</code>;
}</p>
</li>
<li><p>Implementing Frog Movement
Then I completed keyboard-controlled movement for the frog. I added an event listener to listen for keydown events and update the frog’s position within the grid. The frog is represented by adding/removing a CSS class to specific cells. Snippets of the moveFrog function: 
function moveFrog(event) {
// Remove the frog from the old position
removeFrog();
// Calculate frog&#39;s current/new position based on the keys pressed</p>
</li>
</ol>
<p> const keyPressed = event.code;
 if (keyPressed === &quot;ArrowUp&quot; &amp;&amp; currentPosFrog - columns &gt;= 0) {
   currentPosFrog -= columns;
 } else if (
   keyPressed === &quot;ArrowRight&quot; &amp;&amp;
   (currentPosFrog + 1) % columns !== 0
 ) {
   currentPosFrog++;
 } else if (keyPressed === &quot;ArrowLeft&quot; &amp;&amp; currentPosFrog % columns !== 0) {
   currentPosFrog--;
 } else if (
   keyPressed === &quot;ArrowDown&quot; &amp;&amp;
   currentPosFrog + columns &lt; cellCount
 ) {
   currentPosFrog += columns;
 }
 // After position changes, add the frog on the new position
 addFrog();</p>
<p> // Check for a collision on the frog&#39;s move
 if (isFrogOnRoad()) {
   // Check for a collision on the road
   crossRoad();
 } else if (isFrogInRiver()) {
   // Check for a safe land in the river
   crossRiver();
 } else if (isFrogInTopRow()) {
   // Check for an arrival at the five frog homes</p>
<p>   checkHome();
   checkScore();
 }
}</p>
<ol>
<li>Moving Cars
Initially, I wrote a separate movement function for each car. Once I noticed the logic was nearly identical, I refactored it into a reusable movingCar() function that takes in parameters for direction and range:
function movingCar({ carClassname, direction, startPos, endPos }) {
let restartPos;
if (direction === &quot;left&quot;) {
restartPos = endPos + columns - 1;
} else {
restartPos = endPos - columns + 1;
}</li>
</ol>
<p> let currentPos = startPos;
 cellElement[restartPos].classList.add(carClassname);</p>
<p> const intervalId = setInterval(() =&gt; {
   cellElement[currentPos].classList.remove(carClassname);
   if (
     (direction === &quot;left&quot; &amp;&amp; currentPos &gt; endPos) ||
     (direction === &quot;right&quot; &amp;&amp; currentPos &lt; endPos)
   ) {
     if (direction === &quot;left&quot;) {
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
}</p>
<ol>
<li>Floating Logs (and Fish)
For logs, I introduced more complex logic — including multi-cell movement and memory of current positions using arrays. I encapsulated this logic into a generalized floatingLog() function.
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
if (direction === &quot;left&quot;) {
restartPos = [endPos + columns - 1];
} else {
restartPos = [endPos - columns + 1];
}</li>
</ol>
<p> const intervalId = setInterval(() =&gt; {
   const length = currentPos.length;
   let head = currentPos[0];
   let tail = currentPos[length - 1];</p>
<p>   // Expanding - the movement of three fish appear one by one from the right starting point
   if (
     (direction === &quot;left&quot; &amp;&amp; head &gt; endPos &amp;&amp; length &lt; numberOfLogs) ||
     (direction === &quot;right&quot; &amp;&amp; head &lt; endPos &amp;&amp; length &lt; numberOfLogs)
   ) {
     if (direction === &quot;left&quot;) {
       currentPos.unshift(head - 1);
     } else {
       currentPos.unshift(head + 1);
     }
     cellElement[currentPos[0]].classList.add(logClassname);
   }
   // Sliding - the movement of three fish swimmming from right to left together
   else if (
     (direction === &quot;left&quot; &amp;&amp; head &gt; endPos) ||
     (direction === &quot;right&quot; &amp;&amp; head &lt; endPos)
   ) {
     if (direction === &quot;left&quot;) {
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
     (direction === &quot;left&quot; &amp;&amp; tail &gt;= endPos) ||
     (direction === &quot;right&quot; &amp;&amp; tail &lt;= endPos)
   ) {
     if (direction === &quot;left&quot;) {
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
     restartPos.forEach((pos) =&gt; currentPos.push(pos));
   }</p>
<p>   checkFrogOnLog(currentPos);
 }, 800);
 intervalIds.push(intervalId);
}</p>
<ol>
<li><p>Collision Detection
I wrote modular functions for checking whether the frog is on a car, in a river, or safely landed on a log or home. This modular logic ensures frog behavior adapts properly to any zone.
function checkFrogOnLog() {
// Check whether the log has the frog on it
const frogInRiver = isFrogInRiver();
const frogOnAnyLog = allLogPositions.some((logPos) =&gt;
logPos.includes(currentPosFrog)
);
if (frogInRiver &amp;&amp; !frogOnAnyLog) {
removeFrog();
checkLives();
}
}</p>
</li>
<li><p>Win/Lose Logic
The frog earns points when it safely reaches one of five homes. Each win increases the score by 100, and the game ends when all homes are filled or the player loses all lives.
function checkHome() {
const idx = homeIdx.indexOf(currentPosFrog);</p>
</li>
</ol>
<p> if (idx === -1) {
   // currentPosFrog isn&#39;t in the home area
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
}</p>
<p>Challenges</p>
<p>Instructions</p>
<p>Challenges are great for showing your learning journey and problem solving, and this is a section that many engineers will check out. Every day of your engineering career you’ll encounter challenges, this is part of your growth and development. It’s the challenges you encounter that helps you become a stronger and more competent engineer. </p>
<p>Here you will detail any particular challenges you encountered as you were coding the project. </p>
<p>Questions to answer here:</p>
<p>What technical challenges did you come across? 
Why were these challenges? 
What problem solving did you do to rectify them?
Team dynamics/ Project management
Tools/Tech you used</p>
<p>Insert your Challenges here:</p>
<p>One of the most significant challenges I faced was managing the movement logic for multiple cars and logs on the river. Initially, I wrote individual functions for each car/log, and each had its own start position (startPos) and current position (currentPos). While this worked, it led to a lot of repetitive code, and it became inefficient and error-prone when I needed to update the logic. Snippet of the initial repetitive code for car/log declarations (version 1): </p>
<p>// Variables for the left-moving car 11
const startingPosLeftCar11 = 131;
let currentPosLeftCar11 = startingPosLeftCar11;
// Variables for the left-moving car 12
const startingPosLeftCar12 = 128;
let currentPosLeftCar12 = startingPosLeftCar12;
// Variables for the left-moving car 13
const startingPosLeftCar13 = 124;
let currentPosLeftCar13 = startingPosLeftCar13;</p>
<p>// Variables for the left-moving car 21
const startingPosLeftCar21 = 109;
let currentPosLeftCar21 = startingPosLeftCar21;
// Variables for the left-moving car 22
const startingPosLeftCar22 = 104;
let currentPosLeftCar22 = startingPosLeftCar22;
// Variables for the left-moving car 23
const startingPosLeftCar23 = 100;
let currentPosLeftCar23 = startingPosLeftCar23;</p>
<p>// Variables for the left-moving car 31
const startingPosLeftCar31 = 87;
let currentPosLeftCar31 = startingPosLeftCar31;
// Variables for the left-moving car 32
const startingPosLeftCar32 = 85;
let currentPosLeftCar32 = startingPosLeftCar32;
// Variables for the left-moving car 33
const startingPosLeftCar33 = 81;
let currentPosLeftCar33 = startingPosLeftCar33;</p>
<p>// Variables for the right-moving car 11
const startingPosRightCar11 = 110;
let currentPosRightCar11 = startingPosRightCar11;
// Variables for the right-moving car 12
const startingPosRightCar12 = 115;
let currentPosRightCar12 = startingPosRightCar12;
// Variables for the right-moving car 13
const startingPosRightCar13 = 119;
let currentPosRightCar13 = startingPosRightCar13;</p>
<p>Snippet of the initial repetitive code for car/log movement functions (version 1):</p>
<p>function movingCars() {
 movingLeftCar11();
 movingLeftCar12();
 movingLeftCar13();
 movingLeftCar2();
 movingLeftCar3();
 movingRightCar1();
 movingRightCar2();
}</p>
<p>// Codes for the first left moving car
function movingLeftCar11() {
 leftcar11Reset();</p>
<p> setInterval(() =&gt; {
   cellElement[currentPosLeftCar11].classList.remove(&quot;leftcar1&quot;);
   if (currentPosLeftCar11 &gt; 121) {
     currentPosLeftCar11--;
     cellElement[currentPosLeftCar11].classList.add(&quot;leftcar1&quot;);
   } else {
     leftcar11Reset();
     currentPosLeftCar11 = startingPosLeftCar11;
   }
 }, 600);
}
function leftcar11Reset() {
 const cell = cellElement[startingPosLeftCar11];
 cell.classList.add(&quot;leftcar1&quot;);
}
function movingLeftCar12() {
 leftcar12Reset();</p>
<p> setInterval(() =&gt; {
   cellElement[currentPosLeftCar12].classList.remove(&quot;leftcar1&quot;);
   if (currentPosLeftCar12 &gt; 121) {
     currentPosLeftCar12--;
     cellElement[currentPosLeftCar12].classList.add(&quot;leftcar1&quot;);
   } else {
     leftcar11Reset();
     currentPosLeftCar12 = startingPosLeftCar11;
   }
 }, 600);
}
function leftcar12Reset() {
 const cell = cellElement[startingPosLeftCar12];
 cell.classList.add(&quot;leftcar1&quot;);
}
function movingLeftCar13() {
 leftcar13Reset();</p>
<p> setInterval(() =&gt; {
   cellElement[currentPosLeftCar13].classList.remove(&quot;leftcar1&quot;);
   if (currentPosLeftCar13 &gt; 121) {
     currentPosLeftCar13--;
     cellElement[currentPosLeftCar13].classList.add(&quot;leftcar1&quot;);
   } else {
     leftcar11Reset();
     currentPosLeftCar13 = startingPosLeftCar11;
   }
 }, 600);
}
function leftcar13Reset() {
 const cell = cellElement[startingPosLeftCar13];
 cell.classList.add(&quot;leftcar1&quot;);
}
// Codes for the second left moving car
function movingLeftCar2() {
 leftcar2Reset();</p>
<p> setInterval(() =&gt; {
   cellElement[currentPosLeftCar2].classList.remove(&quot;leftcar2&quot;);
   if (currentPosLeftCar2 &gt; 99) {
     currentPosLeftCar2--;
     cellElement[currentPosLeftCar2].classList.add(&quot;leftcar2&quot;);
   } else {
     leftcar2Reset();
     currentPosLeftCar2 = startingPosLeftCar2;
   }
 }, 600);
}
function leftcar2Reset() {
 const cell = cellElement[startingPosLeftCar2];
 cell.classList.add(&quot;leftcar2&quot;);
}
// Codes for the third left moving car
function movingLeftCar3() {
 leftcar3Reset();</p>
<p> setInterval(() =&gt; {
   cellElement[currentPosLeftCar3].classList.remove(&quot;leftcar3&quot;);
   if (currentPosLeftCar3 &gt; 77) {
     currentPosLeftCar3--;
     cellElement[currentPosLeftCar3].classList.add(&quot;leftcar3&quot;);
   } else {
     leftcar3Reset();
     currentPosLeftCar3 = startingPosLeftCar3;
   }
 }, 600);
}
function leftcar3Reset() {
 const cell = cellElement[startingPosLeftCar3];
 cell.classList.add(&quot;leftcar3&quot;);
}
// Codes for the first right moving car
function movingRightCar1() {
 rightcar1Reset();</p>
<p> setInterval(() =&gt; {
   cellElement[currentPosRightCar1].classList.remove(&quot;rightcar1&quot;);
   if (currentPosRightCar1 &lt; 120) {
     currentPosRightCar1++;
     cellElement[currentPosRightCar1].classList.add(&quot;rightcar1&quot;);
   } else {
     rightcar1Reset();
     currentPosRightCar1 = startingPosRightCar1;
   }
 }, 600);
}
function rightcar1Reset() {
 const cell = cellElement[startingPosRightCar1];
 cell.classList.add(&quot;rightcar1&quot;);
}</p>
<p>I then attempted to restructure my code by creating more generic functions for each river row. I passed in the startingPos and currentPos as parameters. For example, in my movingLogs() function, I called swimmingLeftFish1(startingPosLeftFish11, currentPosLeftFish11) and similar functions for different logs and fish. This approach helped reduce code repetition by reusing logic, but I soon encountered issues when passing in arrays as arguments into the same function for different logs. I noticed a strange bug: when the frog landed on a log, the game treated it as a fail — even though landing on a log should be safe.</p>
<p>To investigate, I added some console.log() statements to print out the frog’s current position and the current position array of the logs when the frog landed on them. That’s when I discovered the log’s position array was incorrect. It wasn’t representing the actual position of the logs at that moment, which led to the faulty game logic.</p>
<p>This led me to realize there was an issue with how I was handling arrays — I was accidentally sharing references between multiple logs on the same river row, causing them to overwrite each other&#39;s state. Snippet of the generic functions for each river row (version 2):</p>
<p>function movingLogs() {
 swimmingLeftFish1(startingPosLeftFish11, currentPosLeftFish11);
 swimmingLeftFish1(startingPosLeftFish12, currentPosLeftFish12);
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
// The first left-swimming fish
function swimmingLeftFish1(startingPos, currentPos) {
 resetLeftFish1(startingPos);
 let lengthOfFish;</p>
<p> setInterval(() =&gt; {
   lengthOfFish = currentPos.length;
   let firstEle = currentPos[0];
   let lastEle = currentPos[lengthOfFish - 1];</p>
<p>   // The three fish appear one by one from the right starting point
   if (firstEle &gt; 55 &amp;&amp; lengthOfFish &lt; 3) {
     currentPos.unshift(firstEle - 1);
     cellElement[currentPos[0]].classList.add(&quot;leftcrab&quot;);
   }
   // The three fish swimmming from right to left together
   else if (firstEle &gt; 55) {
     firstEle--;
     cellElement[firstEle].classList.add(&quot;leftcrab&quot;);
     cellElement[lastEle].classList.remove(&quot;leftcrab&quot;);
     currentPos.pop(lastEle);
     currentPos.unshift(firstEle);
   }
   //  The three fish disappear one by one from the left ending point
   else if (lastEle &gt;= 55) {
     cellElement[lastEle].classList.remove(&quot;leftcrab&quot;);
     currentPos.pop(lastEle);
     lastEle--;
   } // The three fish start from the right starting point
   else {
     // Reset the fish to the LeftFish11&#39;s starting position
     resetLeftFish1(startingPosLeftFish11);
     currentPos = startingPosLeftFish11.slice();
   }
 }, 600);
}
// Reset the current position to the starting position
function resetLeftFish1(startingPos) {
 for (i = 0; i &lt; startingPos.length; i++) {
   const element = startingPos[i];
   cellElement[element].classList.add(&quot;leftcrab&quot;);
 }
}
// The second left-swimming fish
function swimmingLeftFish2(startingPos, currentPos) {
 resetLeftFish2(startingPos);
 let lengthOfFish;</p>
<p> setInterval(() =&gt; {
   lengthOfFish = currentPos.length;
   let firstEle = currentPos[0];
   let lastEle = currentPos[lengthOfFish - 1];</p>
<p>   // Codes for the three fish appear one by one from the right starting point
   if (firstEle &gt; 22 &amp;&amp; lengthOfFish &lt; 2) {
     currentPos.unshift(firstEle - 1);
     cellElement[currentPos[0]].classList.add(&quot;leftfish&quot;);
   }
   // Codes for the three fish swimmming from right to left together
   else if (firstEle &gt; 22) {
     firstEle--;
     cellElement[firstEle].classList.add(&quot;leftfish&quot;);
     cellElement[lastEle].classList.remove(&quot;leftfish&quot;);
     currentPos.pop(lastEle);
     currentPos.unshift(firstEle);
   }
   //  Codes for the three fish disappear one by one from the left ending point
   else if (lastEle &gt;= 22) {
     cellElement[lastEle].classList.remove(&quot;leftfish&quot;);
     currentPos.pop(lastEle);
     lastEle--;
   } else {
     resetLeftFish2(startingPosLeftFish21);
     currentPos = startingPosLeftFish21.slice();
   }
 }, 600);
}
// Reset the current position to the starting position
function resetLeftFish2(startingPos) {
 for (i = 0; i &lt; startingPos.length; i++) {
   const element = startingPos[i];
   cellElement[element].classList.add(&quot;leftfish&quot;);
 }
}
// The first right-floating log
function floatingRightLog1(currentPos) {
 resetRightLog1(startingPosRightLog11);</p>
<p> setInterval(() =&gt; {
   cellElement[currentPos].classList.remove(&quot;rightlog&quot;);
   if (currentPos &lt; 54) {
     currentPos++;
     cellElement[currentPos].classList.add(&quot;rightlog&quot;);
   } else {
     resetRightLog1(startingPosRightLog11);
     currentPos = startingPosRightLog11;
   }
 }, 600);
}
function resetRightLog1(startingPos) {
 const cell = cellElement[startingPos];
 cell.classList.add(&quot;rightlog&quot;);
}</p>
<p>To solve this, I encapsulated each log in an object with its own startPos, currentPos, and direction. By wrapping each instance inside an object and passing that object into the shared function, I ensured each entity maintained its own internal state. This eliminated the reference-sharing issue and made the game logic much more stable and maintainable. Snippet of final encapsulated data in an object (final version):</p>
<p>const logs = [
 // left-swimming crab row 7
 {
   logClassname: &quot;leftcrab&quot;,
   direction: &quot;left&quot;,
   startPos: [65],
   endPos: 55,
   numberOfLogs: 5,
 },
 {
   logClassname: &quot;leftcrab&quot;,
   direction: &quot;left&quot;,
   startPos: [57, 58, 59],
   endPos: 55,
   numberOfLogs: 5,
 },
 // left-swimming fish row 10
 {
   logClassname: &quot;leftfish&quot;,
   direction: &quot;left&quot;,
   startPos: [32],
   endPos: 22,
   numberOfLogs: 2,
 },
 {
   logClassname: &quot;leftfish&quot;,
   direction: &quot;left&quot;,
   startPos: [28, 29],
   endPos: 22,
   numberOfLogs: 2,
 },
 {
   logClassname: &quot;leftfish&quot;,
   direction: &quot;left&quot;,
   startPos: [24, 25],
   endPos: 22,
   numberOfLogs: 2,
 },
 // right-floating log row 8
 {
   logClassname: &quot;rightlog&quot;,
   direction: &quot;right&quot;,
   startPos: [44],
   endPos: 54,
   numberOfLogs: 7,
 },</p>
<p> // right-floating log row 9
 {
   logClassname: &quot;rightlog&quot;,
   direction: &quot;right&quot;,
   startPos: [33],
   endPos: 43,
   numberOfLogs: 3,
 },</p>
<p>Wins</p>
<p>Instructions</p>
<p>The Wins section is your opportunity to highlight the aspects of your project you are most proud of. See this as your chance to showcase these parts of your projects to the engineers reading your ReadMes.</p>
<p>Things you could discuss here:</p>
<p>Interesting problem solving you did
Strong sections of code
Collaboration with other team members
Visual design of the project</p>
<p>Insert your Wins here:
One of the most satisfying moments of this project was abstracting all the logs movement logic into a single reusable floatingLog() function.</p>
<p>Initially, I had separate movement functions for each individual log, which resulted in a lot of repetitive code and was hard to maintain. As I progressed, I noticed that although the start positions, directions, and number of log segments varied, the underlying movement pattern was the same. </p>
<p>To create the final reusable floatingLog() function, I compared two different log movement functions — one for logs floating to the left and one to the right, each with different segment lengths. By identifying the shared patterns and differences, I was able to consolidate the logic into a single, flexible function that covers all log movement scenarios, regardless of direction or log length.</p>
<p>The final general-purpose floatingLog() function accepts parameters such as:</p>
<p>logClassname – the class name of the log or fish
direction – left or right
startPos – an array of starting positions
endPos – the point at which the log disappears
numberOfLogs – how many cells the log should occupy</p>
<p>This function now handles the expansion, sliding, and disappearing phases of the log animation, while also resetting positions once a cycle is complete. Snippet of floatingLog() function:</p>
<p>function floatingLog({
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
 if (direction === &quot;left&quot;) {
   restartPos = [endPos + columns - 1];
 } else {
   restartPos = [endPos - columns + 1];
 }</p>
<p> const intervalId = setInterval(() =&gt; {
   const length = currentPos.length;
   let head = currentPos[0];
   let tail = currentPos[length - 1];</p>
<p>   // Expanding - the movement of three fish appear one by one from the right starting point
   if (
     (direction === &quot;left&quot; &amp;&amp; head &gt; endPos &amp;&amp; length &lt; numberOfLogs) ||
     (direction === &quot;right&quot; &amp;&amp; head &lt; endPos &amp;&amp; length &lt; numberOfLogs)
   ) {
     if (direction === &quot;left&quot;) {
       currentPos.unshift(head - 1);
     } else {
       currentPos.unshift(head + 1);
     }
     cellElement[currentPos[0]].classList.add(logClassname);
   }
   // Sliding - the movement of three fish swimmming from right to left together
   else if (
     (direction === &quot;left&quot; &amp;&amp; head &gt; endPos) ||
     (direction === &quot;right&quot; &amp;&amp; head &lt; endPos)
   ) {
     if (direction === &quot;left&quot;) {
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
     (direction === &quot;left&quot; &amp;&amp; tail &gt;= endPos) ||
     (direction === &quot;right&quot; &amp;&amp; tail &lt;= endPos)
   ) {
     if (direction === &quot;left&quot;) {
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
     restartPos.forEach((pos) =&gt; currentPos.push(pos));
   }</p>
<p>   checkFrogOnLog(currentPos);
 }, 800);
 intervalIds.push(intervalId);
}</p>
<p>Key Learnings/Takeaways</p>
<p>Instructions</p>
<p>This section is one of the other most important parts of your ReadMe from an engineers’ perspective and helps to differentiate each of you from your classmates and team members. </p>
<p>Engineers love to understand what you learn from each project and how it has shaped you as an engineer. </p>
<p>See this as your opportunity to show the engineers how your skills grew during each project sprint. </p>
<p>Things you could discuss here:</p>
<p>What Technologies/Tools do you now feel more confident with? Tell them specifically what you learnt about these. 
What engineering processes did you become more comfortable with? Standups? Pair programming? Project management? Tell them what you learnt from these processes?</p>
<p>Insert your Key Learnings/Takeaways here:
At the beginning, I wrote the code strictly following my pseudocode step by step, which made it hard to see the overall structure from the start. I imagined myself playing the game and wrote the code in the order things happened — for example, I created a separate function for each car and each log as I encountered them one by one.</p>
<p>After finishing these individual functions and making sure everything worked well, I stepped back to look at the project from a bigger perspective. I realized there was a lot of repetition in the code, so I refactored it by creating more general, reusable functions based on the duplicated logic.</p>
<p>If I had tried to write these general functions from the beginning, I don’t think I would have been able to do it. The process of building the detailed code first, then refactoring to generalize, was crucial for me to understand and improve the project.</p>
<p>Bugs</p>
<p>Instructions</p>
<p>If you have any bugs in your project, it’s important that you flag them in your ReadMe. This helps the engineers reviewing your projects to understand that you are aware that there are issues - if you don’t flag these, then they won’t have that visibility that you know these problems are in your code and it can result in them not having a full understanding of your technical knowledge. </p>
<p>In either sentences or bullets, explain what the bugs are.</p>
<p>If you have no bugs, you can leave this section blank.</p>
<p>Insert your Bugs here:
When the frog landed on a log, the log image disappeared from that cell, leaving only the frog visible, making it look like the log had disappeared rather than the frog standing on it.</p>
<p>Future Improvements</p>
<p>Instructions</p>
<p>It’s common to get to the end of your project and have ideas on what you would do if you have more time, as well as how you might improve it. </p>
<p>If you do, you should detail this here. It’s great to give that context on potential future improvements, to share your creative or technical ideas with the engineers reading your ReadMes.</p>
<p>In either sentences or bullets, explain what your future improvements would be.</p>
<p>Insert your Future Improvements here:
Fix the visual issue that mentioned in the bugs section.
Add a 2-min timer, starts when a frog is reset at the starting point. Timer stops when the frog successfully crosses the river, fails from a collision, or fails to reach the correct spot within 2 minutes.</p>
