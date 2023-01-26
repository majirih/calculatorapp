class Calculator {  
  constructor(previousCalcTextElement, presentCalcTextElement) {
    this.previousCalcTextElement = previousCalcTextElement;
    this.presentCalcTextElement = presentCalcTextElement;
    this.clear();
  }

  clear() {
    this.presentCalc = "";
    this.previousCalc = "";
    this.operation = undefined;
  }

  deleteInput() {
    this.presentCalc = this.presentCalc.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.presentCalc.includes(".")) return;
    this.presentCalc = this.presentCalc.toString() + number.toString();
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousCalc);
    const present = parseFloat(this.presentCalc);
    if (isNaN(prev) || isNaN(present)) return;
    switch (this.operation) {
      case "+":
        computation = prev + present;
        break;
      case "-":
        computation = prev - present;
        break;
      case "*":
        computation = prev * present;
        break;
      case "÷":
        computation = prev / present;
        break;
      default:
        return;
    }
    this.presentCalc = computation;
    this.operation = undefined;
    this.previousCalc = "";
  }

  selectOperation(operation) {
    if (this.presentCalc === "") return;
    if (this.previousCalc !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousCalc = this.presentCalc;
    this.presentCalc = "";
  }

  updateDisplay() {
    this.presentCalcTextElement.innerText = this.presentCalc;
    if (this.operation != null) {
      this.previousCalcTextElement.innerText = `${this.previousCalc} ${this.operation}`;
    } else {
      this.previousCalcTextElement.innerText = "";
    }
  }
}

const numberButton = document.querySelectorAll("#data-number");
const operationButton = document.querySelectorAll("#data-operation");
const equalToButton = document.querySelector("#data-equal-to");
const deleteButton = document.querySelector("#data-delete");
const allClearButton = document.querySelector("#data-all-clear");
const previousCalcTextElement = document.querySelector(
  "#data-output-previouscalc"
);
const presentCalcTextElement = document.querySelector(
  "#data-output-presentcalc"
);

const calculator = new Calculator(
  previousCalcTextElement,
  presentCalcTextElement
);

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.selectOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalToButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.deleteInput();
  calculator.updateDisplay();
});
