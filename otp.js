let otp;
let clearId;
let enteredOtp;
const TIMELEFT =  document.getElementById("timing");
function getRandomNumber(lower, upper)
{
	return Math.round(Math.random()*(upper-lower)+lower);
}
function generateOtp()
{
	otp = getRandomNumber(100000, 999999);
}
function displayOtp()
{
	generateOtp();
	let displayBox = document.getElementById("otpbox");
	displayBox.innerText = otp;
	enableTimer();
	timer= 30;
}
let timer = 30;
function timing()
{
	TIMELEFT.innerText = timer;
	if(timer == 0)
	{
		console.log("Resend otp");
		clearInterval(clearId);
		document.getElementById("resendBtn").style.color = "#112D4E";
	}
	if(timer <= 10)
	{
		TIMELEFT.style.color = "red";
	}
	
	timer--;
	console.log(timer);
	
}

function enableTimer()
{
    clearId = setInterval(timing, 1000);
}
function concatInput()
{
	let b1 = document.getElementById("box1").value;
	let b2 = document.getElementById("box2").value;
	let b3 = document.getElementById("box3").value;
	let b4 = document.getElementById("box4").value;
	let b5 = document.getElementById("box5").value;
	let b6 = document.getElementById("box6").value;
	enteredOtp = b1+b2+b3+b4+b5+b6;
	return enteredOtp;
}
// display();
setTimeout(displayOtp, 1000);

function validate()
{
	if(concatInput()==otp)
	{
		document.getElementById("container").style.display = "none";
		document.getElementById("result").style.display="block";
	}
	else
	{
		document.getElementById("incorrect").style.visibility = "visible";	
	}
}


