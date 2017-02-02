var add = function(number1, number2) {
	return number1 + number2;
}

var subtract = function(number1, number2) {
	return number1 - number2;
}

var multiply = function(number1, number2) {
	return number1 * number2;
}

var divide = function(number1, number2) {
	return number1 / number2;
}

var number1 = parseInt(prompt("What is your number?"));
var number2 = parseInt(prompt("What is your second number?"));
var result = divide(number1, number2);
alert(result);
