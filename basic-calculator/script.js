// Getting display element
var displayDiv = document.querySelector("#display");

// Initializing variables
var currentNumber = "";
var operator = "";
var firstNumber = "";
var secondNumber = "";

// Function to update display
function updateDisplay(value) {
  displayDiv.innerText = value;
}

// Function to handle number button clicks
function press(num) {
  if (currentNumber.length < 10) {
    // Limiting the number of digits displayed
    currentNumber += num;
    updateDisplay(currentNumber);
  }
}

// Function to handle operator button clicks
function setOP(op) {
  operator = op;
  firstNumber = currentNumber;
  currentNumber = "";
}

// Function to handle clear button click
function clr() {
  currentNumber = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  updateDisplay("0");
}

// Function to calculate result
function calculate() {
  secondNumber = currentNumber;
  var result;
  switch (operator) {
    case "+":
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "*":
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "/":
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
    default:
      result = "Error";
  }
  updateDisplay(result);
  currentNumber = result.toString();
  firstNumber = "";
  secondNumber = "";
  operator = "";
}
