/* 1. Generate a random secret number
https://www.w3schools.com/jsref/jsref_random.asp gives the following code to create a random number:*/

//Let the player input the maximum value of the secret number.
let maxNumber = prompt('Enter the maximum number: ');


let randomSecretNumber = Math.floor((Math.random() * parseInt(maxNumber)) + 1);

//console.log(randomSecretNumber);

// 2. Declare a variable to hold the player's guess

let playersGuess;

//Keep track of the number of wrong guesses and print a message if that number exceeds a predetermined maximum amount.
let wrongGuesses = 0;
let maxWrongGuesses = 30;

// about prompting the user when max wrong guesses reached, I want to use a function, that breaks when those two are equal. console does not accept my break :()

// 3. Loop while the player's guess is not correct

while(playersGuess !== randomSecretNumber){
  if (wrongGuesses === maxWrongGuesses){
    console.log ('You have reached maximum number of attemps!');
    break;
  }
  // 3.1. Prompt for the player's guess
  playersGuess = prompt('Enter your guess: ');
  // 3.2. Convert the player's input into a number
  //I've been googling 'how to convert string into int' for 3 years now
  //https://www.w3schools.com/jsref/jsref_parseint.asp
  guessAsNumber = parseInt(playersGuess);
  //console.log(typeof guessAsNumber);
  if (guessAsNumber < randomSecretNumber){
    console.log('You guessed too low, try again!');
    wrongGuesses ++;
  } else {
    console.log('You guessed too high, try again!');
    wrongGuesses ++;
  }
}
if (playersGuess === randomSecretNumber){
  console.log('Yaay you guessed it!!!');
} 

  
  
  // 3.3. If the guess is lower or higher than the secret 
  //      number, print a message that informs the player as such
// 4. Print a message congratulating the player

