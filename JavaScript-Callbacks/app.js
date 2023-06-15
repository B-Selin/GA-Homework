// Exercise 1

// A fellow student shows you this code.  When he runs it, he expects it to
// wait three seconds, then write "Ding!" to the console.  Instead, it writes
// "Ding!" immediately.  Find the bug and fix it.

function writeDing() {
  console.log('Ding!');
}

let timerId = setTimeout(writeDing, 3000);


// Exercise 2

// Javascript arrays have a built-in sort method that can take
// a callback to tell it how to compare the things you want to sort.

// Research the array sort method.

// Write the sorting callback as a named function declaration
function compareLength(wordOne, wordTwo) {
  return wordTwo.length - wordOne.length;
}

// I googled and the first SO link was literally the answer *facepalm*
// You can use Array.sort method to sort the array. A sorting function that considers the length of string as the sorting criteria can be used as follows:

// arr.sort(function(a, b){
//   // ASC  -> a.length - b.length
//   // DESC -> b.length - a.length
//   return b.length - a.length;
// });

// Write the callback function to provide to the sort method so that
// the following code sorts the words from shortest to longest.

const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];

// The sort method sorts "in place", that is, it modifies the array

//mow we have the function declared. Sort will go through every word(because its an array) and automatically sort the length from shortest ot longest
//****************** DO NOT INVOKE THE CALLBACK FUNCTION, SORT METHOD WILL DO IT FOR US *****************
words.sort(compareLength);
console.log(words.sort(compareLength));
// Check that logging words now outputs
// ["nice", "short", "medium", "lengthy", "delicious"]

// Exercise 3
//
// Filter the words array from above to create a new array
// named longWords that includes only the words with 7 or more
// characters

const longWords = words.filter(function(word) {
  return word.length >= 7;  
});

//Mozilla filter method:
/* The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
Expected output: Array ["exuberant", "destruction", "present"] */

// Check that logging longWords outputs
console.log(longWords)
// ["lengthy", "delicious"]


// Exercise 4

// Code a forEach method:
// Write a function named forEach.
// The forEach function accepts two args, an array & a callback.
// Code the forEach method such that it iterates over each element in the array arg (use a for loop).
// For each iteration, invoke the callback arg, passing to it, the element and the index of the element.
function forEach(arr, callback){
  for (let el = 0; el < arr.length; el++){
  callback(arr[el], el);
 }
}
// Test with this array
const colors = ['red', 'green', 'blue', 'purple'];
// and this callback
function log(elem, idx) {
  console.log(`Index: ${idx} / Element Value: ${elem}`);
}
forEach(colors, log);
// calling forEach(colors, log) should resulting in this output:
// Index: 0 / Element Value: red
// Index: 1 / Element Value: green
// Index: 2 / Element Value: blue
// Index: 3 / Element Value: purple


// Exercise 5

function step1(cb) {
  setTimeout(function() {
    console.log('STEP 1 COMPLETE');
    cb()
  }, 750);
}

function step2(cb) {
  setTimeout(function() {
    console.log('STEP 2 COMPLETE');
    cb()
  }, 500);
}
	
function step3(cb) {
  setTimeout(function() {
    console.log('STEP 3 COMPLETE');
    cb()
  }, 250);
}

/*
The above functions are working asynchronous functions - DO NOT
change any of their code. They are what we call "black boxes"
because we do not need to know anything that goes on inside of them. (yeah I hear you)

Each of the three functions accept a single argument - a callback function.

Write the code that invokes the three functions such that the output in the console will be:

STEP 1 COMPLETE
STEP 2 COMPLETE
STEP 3 COMPLETE
FINISHED

Hints: 
- Call `step1` first.

- You cannot call `step2` until after `step1` has "finished", similarly, you cannot call `step3` until `step2` has "finished".
- You must console.log the last line of the output, `FINISHED`, after `step3` has "finished".
*/

// Solution is, we need to kinda nest the steps into each other. We cant do it like step1 taking the argument step2, and step2 taking the argument step 3. Why? I dont know, I tried and it did not work. 
step1(function() {
  step2(function() {
    step3 (function (){
      console.log('FINISHED')
    });
  });
});


//Asked ChatGPT about this:
// Flexibility: By passing an anonymous function as a callback, you can define custom behavior on the fly without the need to create a named function separately. It allows you to have more control and flexibility in specifying the desired action without cluttering your codebase.

/*Write function named countdown that accepts as an arg the starting number of seconds and console.logs the count down to zero one second apart from each other.

For example:

countdown(3);

console.logs something like the following:

Count: 3
Count: 2
Count: 1
Count: 0*/

/* so we want some kind of a countdown function
it should be similar to the ex 5, or maybe a while loop?
let's try while loop it makes more sense
as long as the parameter is greater than 0, decrease by 1 and log*/
/* addind the time set function is the issue now */
/* I will literally copy from the first exercise in here; setTimeout(writeDing, 3000); */

/*setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1 second");*/

//While loop did not work because we couldnt figure out where to put the i
//that sounded sexual, its not
//so used for loop instead, where i is decrementing itself within the for loop.

function countdown(seconds){
  for( let i = seconds; i >= 0; i--){
  	setTimeout(function(){
	  	console.log(`Count: ${i}`);
	  }, 1000);
  }
}
countdown(3)