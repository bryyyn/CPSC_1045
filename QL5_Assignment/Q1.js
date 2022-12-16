/**
 * Bryan Escobar
 * Student ID: 100365104
 * CPSC 1045
 * QL5
 */

//Part 1: generate random number in range of a - b,
//Where a and b are integers
function getRandNum(a, b){
    let x = Math.random() * (b-a) + a;
    return Math.floor(x);
}

//EDIT: Part 3: make 20 guess limit.
let count = 0;
let countMax = 20;

//Part 2: Create Guess number game 
function guessGame(){

    //Generate randome number
    let randomNum = getRandNum(1,100);

    //create boolean flag
    let correctGuess = false;

    do {
        //Ask user for input
        let input = +prompt("Guess a number between 1 - 100: ");

        //check input
        if(input == randomNum){
            alert("You Won!")
            count++;
            correctGuess = true;
        }

        else if(input < 1 || input > 100){
            alert("Error: Number not in range...")
            count++;
        }

        else if(input < randomNum){
            alert("Enter a larger value.");
            count++;
        }

        else if( input > randomNum){
            alert("Enter a smaller value.");
            count++;
        }

    } while(!correctGuess && count < countMax);

    //if countMax reached
    if(count == countMax){
        alert("You lost!");
    }

    console.log("Game over...");
    return;
}
// test game
guessGame();