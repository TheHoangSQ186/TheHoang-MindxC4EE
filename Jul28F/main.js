const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const a = getRandomNumber(1, 2000);
  const b = getRandomNumber(-100, 100);
  
  console.log("Random a:", randomA);
  console.log("Random b:", randomB);

  import {posNeg, addNumber, minusNumber, multiNumber, divNumber, countNumberLength } from "./modules/lib.js"