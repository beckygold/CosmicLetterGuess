// Variables and arrays
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerLetter = "";
var dimensions = ["Angry Cats", "All Dogs Are Chihuahuas", "Overripe Vegetable", "Reference Bookshelves", "Crazy Staircase", "Melted Clock Face", "Every Day Is Monday", "Jurassic Park", "Room Temperature Soda", ];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []

// Load score text
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessesSoFarText = document.getElementById("guessessofar-text");

// The computer picks a random letter when the page is loaded. 
// The computer picks a new random letter if the user wins.
window.onload = function ( ) {
    window.computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("letter: " + computerLetter);
}

// The user guesses a letter
document.onkeyup = function (event) {
    var userPick = event.key;
    // Compare the letter to the one chosen by the computer, if it is correct then alert the user and +1 to Wins. Have computer pick new letter for user to guess. 
    if (userPick === computerLetter) {
        alert("You chose " + userPick +"." + "\nYou are correct.\nYou may rematerialize in the dimension of your choice.");
        wins++;
        winsText.textContent = "Wins: " + wins;
        guessesLeft = 9;
        guessesSoFar = [];
        window.computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("letter: " + computerLetter);
    } // If the user guesses incorrectly, alert "nope" and -1 Guesses. Add guessed letter to guessedSoFar.
    else {
        alert("You chose " + userPick +"." + "\nThat is incorrect.");
        guessesLeft--;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft ;
        guessesSoFar.push(userPick);
        guessesSoFarText.textContent = "Guesses So Far: " + guessesSoFar ;
        console.log(guessesSoFar);
    } // If remaining guesses = 0, +1 losses and reset guessesLeft and guessesSoFar. Have computer pick a new letter for user to guess.
    if  (guessesLeft === 0) { 
        alert("You are out of guesses.\nYour physical body is being rematerialized in the...\n" + dimensions[Math.floor(Math.random() * dimensions.length)] + " Dimension.");
        losses++;
        lossesText.textContent = "Losses: " + losses;
        guessesLeft = 9;
        guessesSoFar = [];
        window.computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("letter: " + computerLetter);
    }
    
};