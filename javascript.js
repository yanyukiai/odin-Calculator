console.log("Hello, Calculator Project!");

console.log(operate("add", 15, 20));
console.log(operate("substract", 15, 20));
console.log(operate("multiply", 15, 2));
console.log(operate("divide", 15, 2));

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

const displayCurrent = document.querySelector(".display-current");

const btnNumbers = document.querySelectorAll(".numbers");
btnNumbers.forEach((button) => {
  button.addEventListener(
    "click",
    () => (displayCurrent.textContent = button.id)
  );
});

const btnOperators = document.querySelectorAll(".operators");
btnOperators.forEach((button) => {
  button.addEventListener(
    "click",
    () => (displayCurrent.textContent = button.id)
  );
});

const btnDel = document.querySelector(".del");
btnDel.addEventListener("click", () => {
  displayCurrent.textContent = "0";
});

const btnAC = document.querySelector(".AC");
btnAC.addEventListener("click", () => {
  displayCurrent.textContent = "0";
});

const btnTBDs = document.querySelectorAll(".TBD");
btnTBDs.forEach((button) => {
  button.addEventListener(
    "click",
    () => (displayCurrent.textContent = button.id)
  );
});

const btnEqual = document.querySelector(".equal");
btnEqual.addEventListener(
  "click",
  () => (displayCurrent.textContent = "TBD: calculation results")
);
