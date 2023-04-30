// ******************************************************
// VARIABLES
// ******************************************************

// empty array for numbers
let numbers = [];
let userNumbers = [];
let matchedNumbers = [];

// ******************************************************
// EVENT LISTENER
// ******************************************************

// on click start the Simon Says game
document.getElementById('start').addEventListener('click', initGame,);

// on click reset the Simon Says game
document.getElementById('reset').addEventListener('click', restGame,);

// ******************************************************
// FUNCTIONS
// ******************************************************

// Simon Says game
function initGame() {
    
    generateNumbers(); 
    setTimeout(checkNumbers, 3000); 
}

// Reset the Simon Says game
function restGame() {
    numbers = [];
    userNumbers = [];
    matchedNumbers = [];

    document.getElementById('numbers').innerHTML = '';
    document.getElementById('userNumbers').innerHTML = '';
    document.getElementById('matchedNumbers').innerHTML = '';
    document.getElementById('result').innerHTML = '';

    initGame();
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

function checkNumbers() {
       
    // random numbers are hidden
    document.getElementById('numbers').classList.add('hidden');

   
    // ask the user to insert 5 numbers
    for (let i = 0; i < 5; i++) {
        let userNumber = parseInt(prompt('Insert a number'));
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
} 