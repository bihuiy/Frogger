function movingCars() {
    movingLeftCar11();
    movingLeftCar12();
    movingLeftCar13();
    movingLeftCar21();
    movingLeftCar22();
    movingLeftCar31();
    movingLeftCar32();
    movingLeftCar33();
    movingRightCar11();
    movingRightCar12();
    movingRightCar21();
    movingRightCar22();
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
   