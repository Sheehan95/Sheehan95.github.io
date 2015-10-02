// AUTHOR:	ALAN SHEEHAN
// DATE:	28/11/2013

document.onkeydown = checkKey;							// KEYBOARD BUTTONS
window.addEventListener("load", proverb, false);		// RANDOM PROVERB
window.addEventListener("load", displayTimer, false);	// IMAGE SLIDER
		

// GLOBAL VARIABLES
var count = 1,						// FOR DISPLAY
	timer = null,					// FOR TIMER
	infoText = "",					// INFO FOR IMAGE SLIDER
	food = 0,						// FOOD VALUE
	value = 0,						// VALUE VALUE
	service = 0,					// SERVICE VALUE
	atmosphere = 0;					// ATMOSPHERE VALUE
	

function proverb(){					// GENERATES RANDOM PROVERB ONLOAD
	// DECLARING VARIABLES
	var proverb1 = "A bird does not sing because it has an answer, it sings because it has a song",
		proverb2 = "A bit of fragrance clings to the hand that gives flowers",
		proverb3 = "A book holds a house of gold",
		proverb4 = "A book is like a garden carried in the pocket",
		proverb5 = "A book tightly shut is but a block of paper",
		proverb6 = "If you want to climb a mountain, begin at the top",
		proverb7 = "A diamond with a flaw is worth more than a pebble without imperfections",
		proverb8 = "Be not afraid of growing slowly, be afraid only of standing still",
		proverb9 = "Deep doubts, deep wisdom; small doubts, little wisdom",
		proverb10 = "Dig the well before you are thirsty",
		proverb11 = "Reading ten thousand books is not as useful as travelling ten thousand miles",
		proverb12 = "If one does not plow, there will be no harvest",
		proverb13 = "When there's no work for a day, there's no eating for a day",
		proverb14 = "To know the road ahead, ask those returning",
		proverb15 = "The ripest fruit falls by itself",
		proverb16 = "Teachers open the door; you enter by yourself",
		proverb17 = "To know the road ahead, ask those returning",
		proverb18 = "An inch of gold can't buy an inch of time",
		proverb19 = "If you always give you will always have",
		proverb20 = "Blame yourself as you blame others; forgive others as you forgive yourself";
			
	var rand = Math.ceil(Math.random() * 20);		// GETS RANDOM NUMBER BETWEEN 1 & 20
	
	// PRINTING RANDOM PROVERB
	switch(rand){
		case 1:
			document.getElementById("proverb").innerHTML = proverb1;
			break;
			
		case 2:
			document.getElementById("proverb").innerHTML = proverb2;
			break;
			
		case 3:
			document.getElementById("proverb").innerHTML = proverb3;
			break;
		
		case 4:
			document.getElementById("proverb").innerHTML = proverb4;
			break;
		
		case 5:
			document.getElementById("proverb").innerHTML = proverb5;
			break;
		
		case 6:
			document.getElementById("proverb").innerHTML = proverb6;
			break;
		
		case 7:
			document.getElementById("proverb").innerHTML = proverb7;
			break;
		
		case 8:
			document.getElementById("proverb").innerHTML = proverb8;
			break;
		
		case 9:
			document.getElementById("proverb").innerHTML = proverb9;
			break;
		
		case 10:
			document.getElementById("proverb").innerHTML = proverb10;
			break;
		
		case 11:
			document.getElementById("proverb").innerHTML = proverb11;
			break;
		
		case 12:
			document.getElementById("proverb").innerHTML = proverb12;
			break;
		
		case 13:
			document.getElementById("proverb").innerHTML = proverb13;
			break;
		
		case 14:
			document.getElementById("proverb").innerHTML = proverb14;
			break;
		
		case 15:
			document.getElementById("proverb").innerHTML = proverb15;
			break;
		
		case 16:
			document.getElementById("proverb").innerHTML = proverb16;
			break;
		
		case 17:
			document.getElementById("proverb").innerHTML = proverb17;
			break;
		
		case 18:
			document.getElementById("proverb").innerHTML = proverb18;
			break;
		
		case 19:
			document.getElementById("proverb").innerHTML = proverb19;
			break;
		
		case 20:
			document.getElementById("proverb").innerHTML = proverb20;
			break;
	}
}



// DISPLAYING VALUE OF SLIDERS
function showFood(value){
	food = getValue(value);
	document.getElementById("showFood").innerHTML=food;
}

function showValue(value){
	value = getValue(value);
	document.getElementById("showValue").innerHTML=value;
}

function showService(value){
	service = getValue(value);
	document.getElementById("showService").innerHTML=service;
}

function showAtmosphere(value){
	atmosphere = getValue(value);
	document.getElementById("showAtmosphere").innerHTML=atmosphere;
}

function feedbackReset(){		// USED TO RESET ALL SHOW FUNCTIONS
	showFood(3);
	showValue(3);
	showService(3);
	showAtmosphere(3);
}

function getValue(value){		// TURNS VALUE INTO STRING FOR DISPLAY

	if (value == 1){
		value = "poor";
	}
	else if (value == 2){
		value = "fair";
	}
	else if (value == 3){
		value = "average";
	}
	else if (value == 4){
		value = "good";
	}
	else {
		value = "excellent";
	}
	
	return value;				// RETURNS THE VALUE AS A STRING
}



// FUNCTIONS FOR DISPLAY TIMER
function displayTimer(){		// STARTS / RESTARTS TIMER
	timer = setInterval (displayAuto, 12000);
}

function displayEnd(){			// ENDS TIMER
	clearInterval(timer);
}


// FUNCTIONS FOR DISPLAY CHANGE
function displayPlus(){			// GOES TO NEXT DISPLAY
	displayEnd();
	displayTimer();

	displayAuto();
}

function displayMinus(){		// GOES TO PREVIOUS DISPLAY
	displayEnd();
	displayTimer();
	
	count--;
	
	if (count == 0){
		count = 5;
	}
	
	infoText = getInfo(count);
	printInfo();
}

function displayAuto(){			// AUTOMATICALLY GOES TO NEXT DISPLAY
	count++;
	
	if (count == 6){
		count = 1;
	}
	
	infoText = getInfo(count);
	printInfo();
}


// DISPLAY CHANGE WITH KEYBOARD BUTTONS
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '39') {			// RIGHT ARROW KEY
		displayPlus();
    }
    else if (e.keyCode == '37') {		// LEFT ARROW KEY
		displayMinus();
    }
}


// FUNCTIONS FOR CHANGING / PRINTING INFO / IMAGE
function getInfo(count){
	switch(count){
		case 1:
			infoText = "Welcome to the Man Fu Palace";
			break;
		case 2:
			infoText = "<a href=\"review.html\">See what others are saying about us</a>";
			break;
		case 3:
			infoText = "<a href=\"menu.html\">View our menu of delicious food online</a>";
			break;
		case 4:
			infoText = "We only use the finest ingredients";
			break;
		case 5:
			infoText = "Our chefs have have decades of experience";
			break;
	}
	
	return infoText;
}

function printInfo(){
	document.getElementById("image").setAttribute("src", "images/display" + count + ".jpg");
	document.getElementById("info").innerHTML = infoText;
}