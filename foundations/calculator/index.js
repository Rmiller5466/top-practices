let numberButtons = document.getElementsByClassName("number");
let otherButtons = document.getElementsByClassName("other");
let operatorButtons = document.getElementsByClassName("operator");

let decimalKey = undefined;
let decimalFlag = 0;

let outputArea = document.querySelector(".output");
let expression = "";
let validOps = "+-/*^";

for (let button of numberButtons) {
	button.addEventListener("click", () => {
		expression += button.value;
		updateOutputText();
	});
}

for (let button of otherButtons) {
	switch (button.value) {
		case "clear":
			button.addEventListener("click", clearExpression);
			break;
		case "delete":
			button.addEventListener("click", removeLastEntry);
			break;
		case "decimal":
			decimalKey = button;
			button.addEventListener("click", addDecimal);
			break;
		case "evaluate":
			button.addEventListener("click", evaluateExpression);
			break;
	}
}

for (let button of operatorButtons) {
	switch (button.value) {
		case "expon":
			button.addEventListener("click", () => handleOperator("^"));
			break;
		case "divsion":
			button.addEventListener("click", () => handleOperator("/"));
			break;
		case "multiply":
			button.addEventListener("click", () => handleOperator("*"));
			break;
		case "subtract":
			button.addEventListener("click", () => handleOperator("-"));
			break;
		case "add":
			button.addEventListener("click", () => handleOperator("+"));
			break;
	}
}

function handleOperator(operator) {
	console.log(operator);
	expression += operator;
	updateOutputText();
	if (decimalFlag) resetDecimal();
}

function updateOutputText() {
	if (expression == "") {
		outputArea.textContent = "0";
		return;
	}
	outputArea.textContent = expression;
}

function clearExpression() {
	expression = "";
	updateOutputText();
	if (decimalFlag) resetDecimal();
}

function removeLastEntry() {
	if (!(expression.length > 0)) return;

	if (expression.at(-1) == ".") resetDecimal();

	expression = expression.slice(0, -1);
	updateOutputText();
}

function addDecimal() {
	decimalFlag = 1;
	decimalKey.classList.toggle("key");
	expression += ".";
	decimalKey.toggleAttribute("disabled");
	updateOutputText();
}

function resetDecimal() {
	decimalFlag = 0;
	decimalKey.classList.toggle("key");
	decimalKey.toggleAttribute("disabled");
}

function evaluateExpression() {
	tempExpr = "";
	operands = [];
	operators = [];

	for (let character of expression) {
		if (validOps.includes(character)) {
			operands.push(parseFloat(tempExpr));
			operators.push(character);
			tempExpr = "";
		} else tempExpr += character;
	}
	operands.push(parseFloat(tempExpr));

	if (operands.includes(NaN)) {
		expression = "Error! Invalid Expression!";
		updateOutputText();
		setTimeout(clearExpression, 2000);
		return;
	}

	operands.reverse();
	console.log(operands);
	console.log(operators);

	let num1 = operands.pop();
	let num2 = 0;

	for (let operator of operators) {
		num2 = operands.pop();

		switch (operator) {
			case "+":
				num1 = num1 + num2;
				break;
			case "-":
				num1 = num1 - num2;
				break;
			case "/":
				num1 = num1 / num2;
				break;
			case "*":
				num1 = num1 * num2;
				break;
			case "^":
				num1 = num1 ** num2;
				break;
		}
	}

	console.log(num1);
	expression = num1.toString();
	updateOutputText();
	expression = "";
}
