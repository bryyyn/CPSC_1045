/**
 * Bryan Escobar 
 * 
 * 
 * write a program that reads two umbers from the user, and proceeds as follows:
 * If the input numbers are == the program displays: Both numbers are ==
 * otherwise, the program logs all the ints in the range of the input numbers
 * from smaller to larger in the console.
 * 
 * note: that all the numbers are displayed in one line seperated by a single space
 * 
 * Display Error message for invalid input
 */

Q1();
function Q1(){

    //decalre variables
    let num1, num2;
    let output = "";

    //get user input
    num1 = +prompt("Enter a number");
    num2 = +prompt("Enter a number");
   
   //check for valid input
   if(num1 == NaN || num2 == NaN) {
       alert("Error: Invalid Input...")
       return;
   }
   else {
        if(num1 == num2){
            alert("Both numbers are the same!");
        }
        else {
            //find larger & small number
            let largeNum = num1 > num2 ? num1 : num2;
            let smallNum = num1 < num2 ? num1 : num2;

            for(let i = smallNum; i <= largeNum; i++){
                output += i + " ";
            }
        }
   }
   //log output
   console.log(output);
}

