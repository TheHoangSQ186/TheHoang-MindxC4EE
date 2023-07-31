// Bai 3
const posNeg = (number) => {
    return number <0 ? 'So Am ' : 'So Duong';
  };
console.log(posNeg(a)); 

const addNumber = (a, b) => a + b;
const minusNumber = (a, b) => a - b;
const multiNumber = (a,b) => a*b;
const divNumber = (a,b) => a/b;


const countNumberLength = (number) => {
    const numberString = String(number);
    return numberString.length;
  };
  

  const number = 12;
  const result = countNumberLength(number);
  console.log(result);


  export {posNeg, addNumber, minusNumber, multiNumber, divNumber, countNumberLength };