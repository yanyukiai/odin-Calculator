console.log("Hello, Calculator Project!");

console.log(operate("add", 15, 20));
console.log(operate("substract", 15, 20));
console.log(operate("multiply", 15, 2));
console.log(operate("divide", 15, 2));

/**
 * display-prev window logic:
 *
 * User input: numbers, operators, del, AC, equal, TBD (ignore for now)
 * display-prev results:
 * 1. input AC: 0
 * 2. input numbers/operators/TBD: display previous inputs (stored in variables)
 * 3. input del:
 *      If no prev input, display 0
 *      If there's prev input, display previous inputs with last input deleted (stored in variables)
 * 4. input equal:
 *      check if the input is syntax correct:
 *          correct: display results
 *          wrong: display syntax error
 * */

let storedInput = "";
let currentInput = "";

const displayCurrent = document.querySelector(".display-current");
const displayPrev = document.querySelector(".display-prev");

const btnNumbers = document.querySelectorAll(".numbers");
btnNumbers.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.id;
    displayCurrent.textContent = currentInput;
    storedInput += button.id;
    displayPrev.textContent = storedInput;
  });
});

const btnOperators = document.querySelectorAll(".operators");
btnOperators.forEach((button) => {
  button.addEventListener("click", () => {
    displayCurrent.textContent = button.id;
    currentInput = "";
    storedInput += button.id;
    displayPrev.textContent = storedInput;
  });
});

const btnDel = document.querySelector(".del");
btnDel.addEventListener("click", () => {
  displayCurrent.textContent = "0";
});

const btnAC = document.querySelector(".AC");
btnAC.addEventListener("click", () => {
  displayCurrent.textContent = "0";
  displayPrev.textContent = "0";
  storedInput = "";
  currentInput = "";
});

const btnEqual = document.querySelector(".equal");
btnEqual.addEventListener(
  "click",
  () => (displayCurrent.textContent = "TBD: calculation results")
);

const btnTBDs = document.querySelectorAll(".TBD");
btnTBDs.forEach((button) => {
  button.addEventListener("click", () => {
    displayCurrent.textContent = button.id;
    displayPrev.textContent = button.id;
    storedInput = "TBD";
    currentInput = "TBD";
  });
});

function operate(operator, a, b) {
  switch (operator) {
    case "add":
      return add(a, b);
      break;
    case "substract":
      return substract(a, b);
      break;
    case "multiply":
      return multiply(a, b);
      break;
    case "divide":
      return divide(a, b);
      break;
    default:
      return "Operator is not among add, substract, multiply or divide.";
  }
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
