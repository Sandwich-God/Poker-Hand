//
//Poker Hand
//Reuben Clemens
//Due 11/24/20
//

//
//
const MIN = 1; //Constant Value that acts as the min for getting a random value in RandVal().
const MAX = 52; //Constant Value that acts as the max for getting a random value in RandVal().
user = []; //Is an array that is currently empty. Will be filled with the numbers pushed from checklist().
rand=""; //Has a null value that will get defined in RandVal(). It will act as a global variable.
check= ""; //Has a null value that will get defined in checklist(). It will act as a global variable.
time=0; // Has a integer value and is used in the DealingHand(). Will be used to count up to 10.
imgtime=0; // Has a integer value and is used in the changinImg(). Will be used to count up to 10.
i = 0; // Has a integer value and is used in the changinImg(). Will be used to change the id and array number.

/*
The RandVal() main purpose is to create a random integer from the MIN to MAX range. This 
will be used in checklist() to add to user. Since it is by itself in the function, It won't
have any issues when called upon at any time since it doesn't conflict with anything.
*/
function RandVal()
{
	rand = Math.floor(Math.random() * MAX) + MIN; //Chooses a random number from the ranges of MIN and MAX.
}

/*
The checklist() main purpose is to check if the rand value has already been used in the list or not. If not,
it will add to the list the rand value. If it does, it will call to RandVal() to create a new value for rand.
*/
function checklist() {
	
	var check = user.indexOf(rand); //Using indexOf, it checks the array user to see if the rand value has been used before in the list. Will define the check variable.
	
	//The if statement will only activate if check is equal to -1 which will only happen if indexOf does not
	//detect the use of the same value in the list. Will add to the list.
	if (check == -1)
	{
		console.log('pushed'); //Writes in the log and tells us that this if statement has been activated with the message 'pushed'.
		user.push(rand);
	}
	//The else statement will activate if check is anything but -1.
	else
	{
		console.log('rerolled'); //Writes in the log and tells us that this else statement has been activated with the message 'rerolled'.
		time--; //Will decrement if the else statement is activated. used to make sure that user is at the right length.
		RandVal() //Will call to RandVal() to create a new value for rand.
	}
}

/*
The timer() is used repeat the DealingHand().
*/
function timer()
{
	document.getElementById("button").disabled = true; //Disables the id that has 'button'.
	timersubtract = setInterval(DealingHand, 1); //Goes to DealingHand() every 1 millisecond. defines timersubtract.
}

/*
The DealingHand() main purpose is to run the RandVal() and checklist().
It will stop the timer() from calling on this once the time reaches 10.
*/
function DealingHand()
{
	RandVal() //Calls on RandVal() to create a rand value.
	checklist() //Calls on checklist() to check the rand value.
	time++; //Increments time.

	//The if statement will only activate once time equals 10.
	//Is used to stop the timer() and start the ImgTimer().
	if (time == 10)
	{
		clearInterval(timersubtract); //Stops the setInterval from running.
		ImgTimer() //Calls on ImgTimer to change the images.
		time=0; //Resets the time for the next run.
	}
}

/*
The timer() is used repeat the changinImg().
*/
function ImgTimer()
{
	imgtimersubtract = setInterval(changinImg, 250); //Goes to DealingHand() every 250 millisecond. defines imgtimersubtract.
}

/*
The changinImg() main purpose is to change the images of id 1-10.
It will stop the ImgTimer() from calling on this once the time reaches 10.
*/
function changinImg()
{
	imgtime++; //Increments imgtime.
	document.getElementById(i + 1).src = "images/" + user[i] + ".jpg"; //Changes the source of the images with id 1-10. Uses the numbers from the user array to pull the images.
	i++; //Increments i.

	//The if statement will only activate once imgtime equals 10.
	//Is used to stop the ImgTimer() and reset everything so user can do another run.
	if (imgtime == 10)
	{
		clearInterval(imgtimersubtract); //Stops the setInterval from running.
		imgtime=0; //Resets the imgtime for the next run.
		i = 0; //Resets the i for the next run.
		user = [] //Empties the user array for the next run.
		document.getElementById("button").disabled = false; //Enables the 'button' again.
	}
}