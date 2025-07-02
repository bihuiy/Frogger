function movingLeftCar1(currentPos, startingPos, classname(leftcar1),121) {
    cellElement[startingPos].classList.add("leftcar1");
  
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
        resetLeftCar1(startingPosLeftCar11);//???
        currentPos = startingPosLeftCar11;
      }
    }, 600);
  }

  // The first left-swimming fish
function swimmingLeftFish1(logClassname, startingPos, currentPos,direction,numberOfLogs) {
    resetLog(startingPos, logClassname);
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
  function resetLog(startingPos, logClassname) {
    for (i = 0; i < startingPos.length; i++) {
      const element = startingPos[i];
      cellElement[element].classList.add(logClassname);
    }
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