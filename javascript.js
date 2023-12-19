console.log("Hello, Calculator Project!");

console.log(operate("add", 15, 20));
console.log(operate("substract", 15, 20));
console.log(operate("multiply", 15, 2));
console.log(operate("divide", 15, 2));

/**
 * display window logic:
 *
 * User input: numbers, operators, del, AC, equal, TBD (ignore for now)

 * 1. input AC: 0
 * 2. input numbers:
 *      Display results in current display window
 * 3. input operators:
 *      Display results in current display window
 * 4. input del:
 *      If no prev input, display 0
 *      If there's prev input, display previous inputs with last input deleted (stored in variables)
 * 5. input equal:
 *      check if the input is syntax correct:
 *          correct: display results, results are saved as first number
 *          wrong: display syntax error
 * 6. input TBD: display TBD
 * */

let storedInput = "";
let currentInput = "";

const displayResult = document.querySelector(".display-result");
const displayCurrent = document.querySelector(".display-current");

const btnAC = document.querySelector(".AC");
btnAC.addEventListener("click", () => {
  storedInput = "";
  currentInput = "";
  displayCurrent.textContent = "0";
  displayResult.textContent = "TBD: calculation results";
});

const btnNumbers = document.querySelectorAll(".numbers");
btnNumbers.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput = button.id;
    storedInput += currentInput;
    displayCurrent.textContent = storedInput;
  });
});

const btnOperators = document.querySelectorAll(".operators");
btnOperators.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput = button.id;
    storedInput += currentInput;
    displayCurrent.textContent = storedInput;
  });
});

const btnDel = document.querySelector(".del");
btnDel.addEventListener("click", () => {
  if (storedInput.length <= 1) {
    displayCurrent.textContent = "0";
  } else {
    storedInput = storedInput.slice(0, -1);
    displayCurrent.textContent = storedInput;
  }
});

const btnEqual = document.querySelector(".equal");
btnEqual.addEventListener(
  "click",
  () => (displayResult.textContent = "TBD: calculation results")
);

const btnTBDs = document.querySelectorAll(".TBD");
btnTBDs.forEach((button) => {
  button.addEventListener("click", () => {
    displayCurrent.textContent = button.id;
    storedInput = "TBD";
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
