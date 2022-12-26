let numberButtons = document.getElementsByClassName("number");
let otherButtons = document.getElementsByClassName("other");
let operatorButtons = document.getElementsByClassName("operator");

let decminalKey = undefined;
let flag = 0;

let outputArea = document.querySelector(".output");
let expression = "";

for (let button of numberButtons) {
	button.addEventListener("click", function () {
		expression += button.value;
		evaluateExpression();
	});
}

// for (let button of operatorButtons) {
// 	console.log(button.value);
// 	switch (button.value) {
//         case "expon": break;,
//         case "divsion": break;
//         case "multiply": break;
//         case "subtract": break;
//         case "add": break;
//         case "sign": break;
// 	}
// 	button.addEventListener("click", function () {
// 		expression += button.value;
// 		evaluateExpression(expression);
// 	});
// }

for (let button of otherButtons) {
	console.log(button.value);
	switch (button.value) {
		case "clear":
			button.addEventListener("click", clearExpression);
			break;
		case "delete":
			button.addEventListener("click", removeLastEntry);
			break;
		case "decimal":
			decminalKey = button;
			button.addEventListener("click", addDecimal);
			break;
		case "evaulate":
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
	decminalKey.classList.toggle("key");
	expression += ".";
	decminalKey.toggleAttribute("disabled");
	updateOutputText();
}

function resetDecimal() {
	flag = 0;
	decminalKey.classList.toggle("key");
	decminalKey.toggleAttribute("disabled");
}

function evaluateExpression() {
	if (expression == "") {
		outputArea.textContent = "0";
		return;
	}
	outputArea.textContent = expression;
}
