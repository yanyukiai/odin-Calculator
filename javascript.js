console.log("Hello, Calculator Project!");

/**
 * display window logic:
 *
 * User input: numbers, operators, del, AC, equal, TBD (ignore for now)

 * 1. input AC: 0
 * 2. input numbers: display results in current display window
 * 3. input operators: 
 *      1) if there's first number input but no second number, store first number, display formula in current window, no display in results
 *      2) if previous input is operators/no previous number input, show "syntax error", only "del" button works in this case
 *      3ß) if previous input is number and we already have two numbers, store second number, calculate previous results, save as first number, repeat 2)
 * 4. input del:
 *      If no prev input, display 0
 *      If there's prev input, display previous inputs with last input deleted (stored in variables)
 * 5. input equal:
 *      check if the input is syntax correct (first number, second number, operator are all available): 
 *          1) yes - show results in results window
 *          2) no - show syntax error
 * 6. input TBD: display TBD
 * */

const maxLen = 10;
const displayResult = document.querySelector(".display-result");
const displayPrev = document.querySelector(".display-prev");
let storedInput, firstNum, secondNum, operator, validInput;
initialize();

/** Below variables are used for another calculator logic */
let arrayOfNum = null;
let arrayOfOperators = null;

const btnAC = document.querySelector(".AC");
btnAC.addEventListener("click", () => {
  initialize();
});

const btnDel = document.querySelector(".del");
btnDel.addEventListener("click", () => {
  if (validInput) {
    if (displayPrev.textContent.length <= 1) {
      initialize();
    } else {
      displayPrev.textContent = displayPrev.textContent.slice(0, -1);
    }
  }
});

const btnNumbers = document.querySelectorAll(".numbers");
btnNumbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (validInput && displayPrev.textContent.length < maxLen) {
      storedInput = storedInput === "0" ? button.id : storedInput + button.id;
      firstNum = operator === null ? Number(storedInput) : firstNum;
      secondNum = operator === null ? secondNum : Number(storedInput);
      //   console.log("first number: " + firstNum + "; second num: " + secondNum);
      displayPrev.textContent =
        operator === null ? firstNum : firstNum + operator + storedInput;
      displayResult.textContent = secondNum === null ? firstNum : secondNum;
    }
  });
});

const btnOperators = document.querySelectorAll(".operators");
btnOperators.forEach((button) => {
  button.addEventListener("click", () => {
    if (validInput && displayPrev.textContent.length < maxLen) {
      let lastInput = displayPrev.textContent.slice(-1);
      if (lastInput.match(/[+\-x/]/)) {
        displayPrev.textContent = "Syntax Error";
        displayResult.textContent = "Syntax Error";
        validInput = false;
      } else {
        storedInput = "0";
        firstNum =
          secondNum === null
            ? firstNum
            : operate(operator, firstNum, secondNum);
        displayResult.textContent = secondNum === null ? button.id : firstNum;
        secondNum = null;
        operator = button.id;
        displayPrev.textContent = firstNum + operator;
      }
    }
  });
});

const btnEqual = document.querySelector(".equal");
btnEqual.addEventListener("click", () => {
  if (validInput) {
    if (secondNum === null) {
      displayPrev.textContent = "Syntax Error";
      displayResult.textContent = "Syntax Error";
      validInput = false;
    } else {
      displayPrev.textContent = firstNum + operator + secondNum + "=";
      storedInput = "0";
      firstNum = operate(operator, firstNum, secondNum);
      displayResult.textContent = firstNum;
      secondNum = null;
    }
  }
});

const btnFloatPoint = document.querySelector(".floatPoint");
btnFloatPoint.addEventListener("click", () => {
  if (validInput && displayPrev.textContent.length < maxLen) {
    alert("Add float point function");
  }
});

/** This section is used for another calculator logic */
// const btnEqual = document.querySelector(".equal");
// btnEqual.addEventListener("click", () => {
//   if (storedInput.length >= 1) {
//     let extractResults = extractNumbers(storedInput);
//     if (extractResults === null) {
//       displayPrev.textContent = "Syntax Error";
//     } else {
//       displayPrev.textContent = cal(
//         extractResults.extractNums,
//         extractResults.extractOperators
//       );
//     }
//   }
// });

/** Test cases for functions */
console.log(operate("+", 15, 20));
console.log(operate("-", 15, 20));
console.log(operate("x", 15, 2));
console.log(operate("/", 15, 2));

notValidStr = "1+23-";
let notValidResults = extractNumbers(notValidStr);
console.log("Not valid results: " + notValidResults);

/** These tests are used for another calculator logic */
validStr = "1+23-456x78/10";
let results = extractNumbers(validStr);
console.log("Numbers: " + results.extractNums);
console.log("Operators: " + results.extractOperators);
console.log(
  "Calculation results: " + cal(results.extractNums, results.extractOperators)
);

console.log(1 + "30");
console.log(Number("1."));

/** Functions */

function initialize() {
  storedInput = "0";
  firstNum = Number(0);
  secondNum = null;
  operator = null;
  validInput = true;
  displayPrev.textContent = storedInput;
  displayResult.textContent = storedInput;
}

/** This function is used for another calculator logic */
function cal(numArray, operatorArray) {
  let result = numArray[0];
  for (let i = 0; i < operatorArray.length; i++) {
    let currentOp = operatorArray[i];
    let currentNum = numArray[i + 1];
    result = operate(currentOp, result, currentNum);
  }
  return result;
}

function extractNumbers(str) {
  // The formula should start/end with numbers, and follow by a operator, then number ..., no operators should come together
  // Use Regular Expression (Regex)
  const validPattern = /^(\d+)(([+\-x/])(\d+))+$/;
  // ^\d+: ^ asserts the start of the string, \d+ matches one or more digits.
  // (([+\-x/])(\d+))+: This part is a group (...) that allows for one or more occurrences +.
  // Inside the group:
  // "?:"" not capturing the groups (groups of operators+numbers), only capture groups of operators or numbers
  // [+\-x/]: This matches any one of the specified operators (+, -, x, or /).
  // \d+: This matches one or more digits.
  // $: This asserts the end of the string, so that the last input is not operators
  let matchResults = str.match(validPattern);
  if (matchResults) {
    let extractNums = matchResults[0] // the first element (matchResults[0]) is the entire matched string.
      .split(/[+\-x/]/) // splits the matched string into an array using operators as separators.
      .filter(Boolean) // removes any empty strings from the array
      .map(Number); // converts the remaining strings to numbers.
    let extractOperators = matchResults[0].split(/\d+/).filter(Boolean);
    return { extractNums, extractOperators };
  } else {
    return null;
  }
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return substract(a, b);
      break;
    case "x":
      return multiply(a, b);
      break;
    case "/":
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
