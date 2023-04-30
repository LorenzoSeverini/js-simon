// ******************************************************
// VARIABLES
// ******************************************************

let numbers = [];
let userNumbers = [];
let matchedNumbers = [];
let timer;

// ******************************************************
// EVENT LISTENER
// ******************************************************

// on click start the Simon Says game
document.getElementById('start').addEventListener('click', initGame,);

// on click reset the Simon Says game
document.getElementById('reset').addEventListener('click', resetGame,);

// ******************************************************
// FUNCTIONS
// ******************************************************

// Simon Says game
function initGame() {
    generateNumbers(); 
    setTimer();
}

// Reset the Simon Says game
function resetGame() {
    numbers = [];
    userNumbers = [];
    matchedNumbers = [];

    document.getElementById('numbers').innerHTML = '';
    document.getElementById('userNumbers').innerHTML = '';
    document.getElementById('matchedNumbers').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('timer').innerHTML = '';
    document.getElementById('numbers').innerHTML = '';
    clearInterval(timer);
    enableButton();
}

// generate 5 random numbers
function generateNumbers() {
    for (let i = 0; i < 5; i++) {
        let number = Math.floor(Math.random() * 100) + 1;
        while (numbers.includes(number)) {
            number = Math.floor(Math.random() * 100) + 1;
        }
        numbers.push(number);
    }
    console.log('5 random numbers', numbers);
    // print the numbers for 30 seconds
    document.getElementById('numbers').innerHTML = numbers;
}

// check if the numbers inserted by the user are the same of the random numbers
function checkNumbers() {
       
    // ask the user to insert 5 numbers
    for (let i = 0; i < 5; i++) {
        let userNumber = parseInt(prompt('Insert a number'));
        while (isNaN(userNumber) || userNumber < 1 || userNumber > 100 || userNumbers.includes(userNumber)) {
        if (isNaN(userNumber)) {
            alert('Please insert a number');
            userNumber = parseInt(prompt('Insert a number'));
        } else if (userNumber < 1 || userNumber > 100) {
            alert('Please insert a number between 1 and 100');
            userNumber = parseInt(prompt('Insert a number'));
        } else if (userNumbers.includes(userNumber)) {
            alert('You have already inserted this number');
            userNumber = parseInt(prompt('Insert a number'));
        }
    }
        userNumbers.push(userNumber);
    }

    // print the numbers inserted by the user
    document.getElementById('userNumbers').innerHTML = userNumbers;

    // check if the numbers inserted by the user are the same of the random numbers
    for (let i = 0; i < numbers.length; i++) {
        if (userNumbers.includes(numbers[i])) {
            matchedNumbers.push(numbers[i]);
            console.log('You have matched ' + numbers[i]);
        } else {
            console.log('You have not matched ' + numbers[i]);
        }
    }
    
    if (matchedNumbers.length === 0) {
        document.getElementById('matchedNumbers').innerHTML = '0';
        console.log('You have not matched any number');
    } else
        document.getElementById('matchedNumbers').innerHTML = matchedNumbers;
        document.getElementById('result').innerHTML = 'You have matched ' + matchedNumbers.length + ' numbers';
        console.log('You have matched in total ' + matchedNumbers.length + ' numbers');
    
    document.getElementById('numbers').innerHTML = numbers;

    // reset the arrays
    numbers = [];
    userNumbers = [];
    matchedNumbers = [];

    // reset the timer
    clearInterval(timer);
} 

// set the timer for 30 seconds and then check the numbers
function setTimer() {
    let seconds = 30;
    timer = setInterval(function() {
        seconds--;
        document.getElementById('timer').innerHTML = 'Time left: ' + seconds;
        disableButton();
        if (seconds == 0) {
            document.getElementById('timer').innerHTML = 'Time over';
            // random numbers are hidden
            document.getElementById('numbers').innerHTML = '';
            clearInterval(timer);
            enableButton();
            setTimeout(function() {
                checkNumbers();
            }, 100);
        }
    }, 1000);
}  

// function to dont press button start again after start the game 
function disableButton() {
    document.getElementById('start').disabled = true;
}

// function to press button start again after start the game
function enableButton() {
    document.getElementById('start').disabled = false;
}


