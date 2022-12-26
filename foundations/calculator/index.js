let numberButtons = document.getElementsByClassName("number");
let otherButtons = document.getElementsByClassName("other");
let operatorButtons = document.getElementsByClassName("operator");

let decimalKey = undefined;
let flag = 0;

let outputArea = document.querySelector(".output");
let expression = "";
let validOps = "+-/*^";

for (let button of numberButtons) {
	button.addEventListener("click", function () {
		expression += button.value;
		updateOutputText();
	});
}

for (let button of operatorButtons) {
	switch (button.value) {
		case "expon":
			button.addEventListener("click", function () {
				expression += "^";
				updateOutputText();
			});
			break;
		case "divsion":
			button.addEventListener("click", function () {
				expression += "/";
				updateOutputText();
			});
			break;
		case "multiply":
			button.addEventListener("click", function () {
				expression += "*";
				updateOutputText();
			});
			break;
		case "subtract":
			button.addEventListener("click", function () {
				expression += "-";
				updateOutputText();
			});
			break;
		case "add":
			button.addEventListener("click", function () {
				expression += "+";
				updateOutputText();
			});
			break;
	}
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

function updateOutputText() {
	if (expression == "") {
		outputArea.textContent = "0";
		return;
	}
	outputArea.textContent = expression;
}

function clearExpression() {
	expression = "";
	updateOutputText(expression);
	if (flag) resetDecimal();
}

function removeLastEntry() {
	if (!(expression.length > 0)) return;

	if (expression.at(-1) == ".") resetDecimal();

	expression = expression.slice(0, -1);
	updateOutputText();
}

function addDecimal() {
	flag = 1;
	decimalKey.classList.toggle("key");
	expression += ".";
	decimalKey.toggleAttribute("disabled");
	updateOutputText();
}

function resetDecimal() {
	flag = 0;
	decimalKey.classList.toggle("key");
	decimalKey.toggleAttribute("disabled");
}

function evaluateExpression() {
	tempExpr = "";
	operands = [];
	operators = [];

	for (let character of expression) {
		if (validOps.includes(character)) {
			operands.push(tempExpr);
			operators.push(character);
			tempExpr = "";
		} else tempExpr += character;
	}
	operands.push(tempExpr);

	console.log(operands);
	console.log(operators);
	clearExpression();
}
