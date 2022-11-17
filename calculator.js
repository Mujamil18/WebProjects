const INPUT1 = document.getElementById("number1");
const INPUT2 = document.getElementById("number2");
const RESULT = document.getElementById("resultBox");

function showAddResult()
{
	let number1 = Number(INPUT1.value);
	let number2 = Number(INPUT2.value);
	let sum = number1 +number2;
	console.log(sum);
	RESULT.value= sum;
}

function showSubtractResult()
{
	let number1 = Number(INPUT1.value);
	let number2 = Number(INPUT2.value);
	let diff = number1 - number2;
	console.log(diff);
	RESULT.value= diff;
}
function showMultiplyResult()
{
	let number1 = Number(INPUT1.value);
	let number2 = Number(INPUT2.value);
	let multiply = number1 * number2;
	console.log(multiply);
	RESULT.value= multiply;

}
function showDivideResult()
{
	let number1 = Number(INPUT1.value);
	let number2 = Number(INPUT2.value);
	let division = number1 / number2;
	console.log(division);
	RESULT.value= division;

}
function showModuloResult()
{
	let number1 = Number(INPUT1.value);
	let number2 = Number(INPUT2.value);
	let modulo = number1 % number2;
	console.log(modulo);
	RESULT.value= modulo;

}
// function showFinalResult()
// {

// }
function resetCalculation()
{
	INPUT1.value="";
	INPUT2.value="";
	RESULT.value = "";
}
