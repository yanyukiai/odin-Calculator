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
