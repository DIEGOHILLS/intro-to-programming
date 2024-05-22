let words = ["javascript", "monkey", "amazing", "pancake", "bomb", "car", "disaster", "euphoria"];
let word = words[Math.floor(Math.random() * words.length)];

// Empty array
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
let guessesLeft = 6;
let guess;
// Main game loop
while (remainingLetters > 0 && guessesLeft > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));

    // Take input from the player
    guess = prompt("Guess a single letter or click cancel to end the game");
    
    if (guess === null) {
        alert("You quit the game. Try again!");
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Convert to lowercase
        let guessLowercase = guess.toLowerCase();
        // Update answerArray and remainingLetters for every correct guess
        let correctGuess = false;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guessLowercase && answerArray[j] === "_" ){
                answerArray[j] = guessLowercase;
                remainingLetters--;
                correctGuess = true;
            }
        }
        if (!correctGuess) {
            guessesLeft--;
            alert(`Incorrect guess! ${guessesLeft} guesses left.`);
        }
    }
}

if (remainingLetters === 0) {
    alert("Congratulations :)");
}

// Alert the correct word if the player loses
alert(`The correct word was: ${word}`);


