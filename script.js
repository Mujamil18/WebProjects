// //document.body.style.backgroundColor ="red"

// var totalScore;
// var courseName;

// // alert(courseAuthor);

// var score = 10;
// var username = "Mujamil"; //can use single quotes for string('mujamil')
// //can use backticks(template literla) for expression (` `)
// var prefix = " Ms.";
// // var nameWithPrefix = "My name is " + prefix + username; //dont use $ when using ""
// var nameWithPrefix = `My name is ${prefix} ${username}.`; 

// let uerPwd;
// //JS Object
// let Mujamil= {
// 	nickame:"muji",
// 	age:23
// }
// //objects values can be accessed by dot(.) operator
// // var colors =["red", "yellow"]; //Arrays

// // score = score+10; //score += 10;
// const arrayLength =2;
// const colors = ["red", "yellow"]; 
// /* reference variables
// Arrays and Objects */
//  /*In primitive variables when it is const , cannot change or reassign the values
// If it is an Object(Array or object) , when it is const , you can change the values.*/

// if(1){
// 	console.log("if block");
// }
// else
// {
//    console.log("else block");
// }
// //undefined is a falsy value
// //null is a falsy value
// //empty string is a falsy value

// console.log("17th Oct");
// //17th Oct
// /* Datatypes in JavaScript
// * Numbers
// * String
// * Objects (objects and Arrays)
// * booloean
// * Undefined
// */
// //defintion of let variable
// //let is a block level scope
// let colorname ='green'
// let myFavColor;
// if(1)
// {
// 	let myFavColor = 'pink';
// 	console.log(myFavColor);
// }
// else
// {
// 	console.log("Sorry");
// }
// console.log(myFavColor);
// // defintion of var variable
// //var is global scope
// if(1)
// {
// 	var myFavColor1 = 'pink';
// 	console.log(myFavColor1);
// }
// else
// {
// 	console.log("Sorry");
// }
// console.log(myFavColor1);
// console.log("---");

// // let redValue = Math.round(Math.random()*255);
// // let greenValue = Math.round(Math.random()*255);
// // let blueValue = Math.round(Math.random()*255);
// // let randomColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
// // console.log(randomColor);
// // document.body.style.backgroundColor = randomColor;

// //FUNCTIONS
// /* 1. function defintion
//    2. function call */

// //Syntax:
// /*function functionName(){ 
//   Statements;
// } */

// // function generateRandomColor()
// // {
// //    let red = Math.round(Math.random()*255);
// // 	let green = Math.round(Math.random()*255);
// // 	let blue = Math.round(Math.random()*255);
// // 	var randomColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
// // 	console.log(randomColor);
// // 	document.body.style.backgroundColor = randomColor;
// // }  


// //19th OCT
// console.log("19th Oct");

// // var randomColor=""; //global scope, it can be accessed anywhere
// function generateRandomColor()
// {
//    let red = Math.round(Math.random()*255);
// 	let green = Math.round(Math.random()*255);
// 	let blue = Math.round(Math.random()*255);
// 	if(red!=0 && green!=0 && blue!=0)
// 	{
// 	  randomColor = `rgb(${red}, ${green}, ${blue})`;
//    }
//    //var is the fucntion scope
	
// 	return randomColor;
// 	// console.log("Color -> " + randomColor); /* it won't work*/
// }  
// let newColor = generateRandomColor();

//  only when var is declared as global varaible,
// it can be usedn outside of the function. 

// /* it will return undefined , when we call a function inside a
// console.log() without returning any value */
// console.log("Random Color -> " + newColor);


// // console.log("Random Color " + randomColor);



// function generateRandomNumber1(limit)
// {
// 	return Math.round(Math.random()*255);
// }

// // funtion generateNumberTill1000()
// // {
// // 	return Math.round(Math.random()*1000);
// // }
// // function generateColor()
// // {
// // 	let red = generateRandomNumber1();
// // 	let green = generateRandomNumber1();
// // 	let blue = generateRandomNumber1();
// // 	let randomColor = `rgb(${red}, ${green}, ${blue})`;
// //    return randomColor;
// // }

// function generateColor()
// {
// 	return `rgb(${generateRandomNumber1(255)}, ${generateRandomNumber1(255)}, ${generateRandomNumber1(255)})`
// }

// let newColor1 = generateColor();
// let number = generateRandomNumber1(255);

// console.log("Random Color -> " + newColor1);
// console.log("Random number -> " + number);

// // //20th OCT
// console.log("20th OCT");

// // function isEven(givenNumber)
// // {
// // 	if(givernNumber%2 == 0)
// // 	{
// // 		return "Even Number";
// // 	}
// // 	else
// // 	{
// // 		return "Odd Number";
// // 	}
// // 	return false;
// // }
// // console.log(isEven(25));
// // let returnedValue = isEven(25);

// // changeBackgroundColor(); 
// // /*hoisting - all the declaration part will be moved up.
// // Can call the function before the line of function definition*/
// // console.log("Color Value --> " + someColor);

// // function changeBackgroundColor(someColor)
// // {
// // 	console.log("Value of Some Color --> " + someColor);
// // }
// // var someColor = "red";

// function getRandomNumber(limit)
// {
// 	return Math.round(Math.random()*limit);
// }

// function getRandomColor()
// {
// 	return `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;
// }

// function changeBackgroundColor()
// {
// 	// document.body.style.backgroundColor = getRandomColor();
// 	// document.getElementById("colorMe").style.backgroundColor = getRandomColor();
// 	// document.getElementById("colorMe").style.color = getRandomColor();
// 	const MYDIV = document.getElementById("colorMe");
// 	MYDIV.style.backgroundColor = getRandomColor();
// 	MYDIV.style.color = getRandomColor();
// 	/* document.getElementById("ID of element") --> Object of that element*/

// }

// 26th OCT
// const INPUTELEMENT1 = document.getElementById("number1");
// const INPUTELEMENT2 = document.getElementById("number2");
// const RESULTELEMENT = document.getElementById("result");

// function showAddResut()
// {
// 	let number1 = Number(INPUTELEMENT1.value);
// 	let number2 = Number(INPUTELEMENT2.value)
// 	let sumOfTwoNumbers = addition(number1, number2);
// 	console.log(sumOfTwoNumbers);
// 	RESULTELEMENT.value = sumOfTwoNumbers;
// }
// function showDifferenceResult()
// {
// 	let number1 = Number(INPUTELEMENT1.value);
// 	let number2 = Number(INPUTELEMENT2.value);
// 	let diffOfTwoNumbers = difference(number1, number2);
// 	console.log(diffOfTwoNumbers);
// 	RESULTELEMENT.value = diffOfTwoNumbers;

// }
// setTimeOut()
// setInterval()

console.log("17th NOV");
// let numbersArray = [1, 2, 3, 4, 5, 6, 7];

// function square(n){
// 	return n * n;
// }

// let squaredNumbersArray = [];

// function myMap(arr){
// 	let myNewArray = [];
// 	for(let i =0; i<arr.length; i++)
// 	{
// 		myNewArray.push(square(arr[i]));
// 	}
// }


// function sayHi()
// {
// 	console.log("hi");
// 	// return funciton(){console.log("hello")}
// 	return "hi";
// }

// let newSqArray = numbersArray.map(square);
/* since, sayHi method returns nothing, this variable will return undefined 7 times
for()
{
	square(1, 0, [])
	square(2, 1, [])
}
*/
//to filter even numbers from an array
// let numbersArray = [31, 22, 43, 48, 5, 16, 27];
// /* to filter tye particular elements from an array */
// let evenArray = [];
// for(let i=0; i<numbersArray.length; i++){
// 	if(numbersArray[i] % 2 == 0){
// 		evenArray.push(numbersArray[i]);
// 	}
// }

// let truthyValues = numbersArray.filter(function(n){
// 	return n % 2 == 0;
// 	// n % 2 == 0; //it returns undefined (falsy value)
// 	// return 1===1; //it return true;
// 	// return 1===true; //it return false, since the date types are different

// });

let countries = ["Afganistan", "Albania", "Armenia", "Azerbeijan". "Brazil"];
//[AFG, ALB, ARG]