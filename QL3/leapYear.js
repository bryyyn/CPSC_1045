// declare variables
let userInput;
userInput = +prompt("Enter a year: ");
if(userInput >= 1582){
    //check for leap year
    if((userInput % 4 == 0 && userInput % 100 != 0 )  || userInput % 400 == 0){
        alert(userInput + " is a leap year");
    }
    else {
        alert(userInput + " is not a leap year");
    }
}
else {
    alert("Error: Invalid Input!");
}

