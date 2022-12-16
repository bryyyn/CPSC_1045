//read 10 numbers from keyboard and log min and max values in console

//decalre values
let max;
let min;
let userInput;

// step 1 get the user initial input
userInput = +prompt("Enter a number: ");

//step 2 assign input to max and min
max = userInput;
min = max;

//step 3 use a for loop to compare values for the rest of input
for(let i = 0; i < 9; i++){
    userInput = +prompt("Enter a number: ");
    if(userInput > max){
        max = userInput;
    }
    if(userInput < min){
        min = userInput;
    }
}

//step 4 display max and min
console.log("Max is: " + max);
console.log("Min is: " + min);




