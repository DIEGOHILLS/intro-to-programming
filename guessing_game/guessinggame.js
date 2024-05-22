//Generate a random secret number between 1 and 20
let secret = Math.floor(Math.random() * 20) + 1;
let guess = 0;

//prompt the user until the guess is correct or they cancel
while (guess !== secret) {
    // Prompt the user and convert the input to an integer
    let answer = prompt("Please guess the secret number (1-20)");

    //Check if the user clicked (Cancel)
    if (answer === null) {
        alert("You canceled the game. The secret number was: " + secret);
        break;
    }

    //Convert the input to an integer
    guess = parseInt(answer);

    //Check if the guess is correct
    if (guess === secret) {
        alert("Correct Guess!");
    } else if (guess < secret) {
        alert("Incorrect, too low.");
    } else if (guess > secret) {
        alert("Incorrect, too high.");
    }
}
