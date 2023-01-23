class Calculator {
  constructor(previousCalcTextElement, presentCalcTextElement) {
    this.previousCalcTextElement = previousCalcTextElement;
    this.presentCalcTextElement = presentCalcTextElement;
    this.clear();
  }
}

const numberButton = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operation]");
const equalToButton = document.querySelector("[data-equal-to]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousCalcTextElement = document.querySelector(
  "[data-output-previous-calc]"
);
const presentCalcTextElement = document.quuerySelector(
  "[data-output-present-calc]"
);

clear();
{
  this.presentCalc = "";
  this.previousCalc = "";
  this.operation = undefined;
}
const calculator = new Calculator(
  previousCalcTextElement,
  presentCalcTextElement
);

numberButton.foreach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay(
      (this.presentCalcTextElement.innerText = this.prsentCalc)
    );
  });
});

appendNumber(number);
{
  if (number === "." && this.presentCalc.includes(".")) return;
  this.presentCalc = this.presentCalc.toString() + number.toString();
}

operationButton.foreach((button) => {
  button.addEventListener("click", () => {
    calculator.selectOperation(button.innerText);
    calculator.updateDisplay();
  });
});

selectOperation(operation);
{
  if (this.presentCalc === "") return;
  if (this.previousCalc !== "") {
    this.compute();
  }
  this.operation = operation;
  this.previousCalc = this.presentCalc;
  this.presentCalc = "";
}

