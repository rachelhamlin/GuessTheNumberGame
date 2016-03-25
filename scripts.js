console.log("hello");

// Create an object to hold the whole game
var guessNumberGame = {};

// accept a guess and manage game's response
guessNumberGame.makeGuess = function(guess) { // accepts a guess from the user
  if (guess == this.answer) {  // if the guess equals the answer...
    this.winGame(); // run winGame function
  } else { // if it does not match...
    this.promptUser(guess); // run promptUser function
  }
};



// Managing response: prompt user if the answer is
// higher or lower
guessNumberGame.promptUser = function(guess) {
  if (guess > this.answer) { // if the guess is too big...
    var message = "Nope! It's lower than " + guess; // give the user this message.
  } else if (guess < this.answer) { // if the guess is too small...
    var message = "Nope! It's higher than " + guess; // give them this one.
  }
  this.$promptArea.text(message);
};


// Managing response: if the user gets it right,
// let them know they win
guessNumberGame.winGame = function() {
  this.$promptArea.text("You got it!"); // edit the text in the prompt area to say "You win!"
};


// Handle the form containing the guess
guessNumberGame.setUpFormHandler = function() {
  var scope = this; // copy the scope 'this' to be guessNumberGame
  this.$guessForm.on('submit', function(e) { // handler for when the form receives a submission
    e.preventDefault(); // stop the form from sending stuff
    var guessInput = $(this).find('input') // find the input element from the form
    var guess = guessInput.val(); // find the value of the input, aka the user's guess
    scope.makeGuess(guess); // make the guess in the makeguess function
  });
};

// Initialize the game with everything it requires to begin
guessNumberGame.init = function($guessForm, $promptArea) {
  var maxAnswerValuePossible = 100; // The random number answer will not be larger than 100.
  this.answer = Math.floor(Math.random() * maxAnswerValuePossible); // This will generate a random integer no bigger than 100 and assign it to the game as 'answer'
  this.$guessForm = $guessForm // now the game object owns $guessForm (#guess-place)
  this.$promptArea = $promptArea // now the game object owns $promptArea (#user-prompt)
  this.setUpFormHandler(); // set up the form handler on initialization
};


// Defining
// ************
// Using


$(function(){

var $guessForm = $('#guess-place');
var $promptArea = $('#user-prompt');
guessNumberGame.init($guessForm, $promptArea); // initalize the game on load

});
