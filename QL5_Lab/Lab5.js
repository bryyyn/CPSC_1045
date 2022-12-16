/**
 * Bryan Escobar
 * 
 * Create 4 functions, each will create a shape of chars
 * Create main function and call each function once
 */



 // function to print a shape of char
function shape(n =1,ch ='?',choice = 'r'){


    //check for valid input
    let validInput = true;
    if(+isNaN(n) || n < 0) {
        validInput = false;
        alert("Error: Invalid input.");
    }

    //if n is a valid number, floor it
    n = Math.floor(n);

    if(ch.length > 1){
        validInput = false;
        alert("Error: Invalid input.");
    }
    if(choice != 'r' && choice != 'c' && choice !='hs' && choice !='fs'){
        validInput = false;
        alert("Error: Invalid input.");
    }




    //if input is valid continue 
    if(validInput) {

        //prints a row
        let drawRow = function(n,ch){
            let row = "";
            for(let i=0; i < n; i++){
              row += ch;
            }
            return row;
        };

        //prints a column
        let drawColumn = function(n,ch){
            let column= "";
            for(let i=0; i < n;i++){
                column += ch + "\n";
            }
            return column;
        };

        //prints a filled square
        let drawFilledSquare = function(n,ch){
            let fs = "";
            for(let i =0; i < n; i++){
                for(let j =0; j < n; j++){
                    fs += ch;
                }
                fs += "\n";
            }
            return fs;
        };

        //prints a hollow square
        let drawHollowSquare = function(n,ch){
            let hs = "";
            //make first line of square
            for(let i=0; i < n; i++){
                hs += ch;
            }

            //make hollow part of square 
            let whiteSpace = ""
            for(let k=0; k< n-2; k++){
                whiteSpace += " ";
            }

            for(let j=0; j<n;j++){
                if(j%2 == 0){
                    hs += "\n";
                }
                else{
                    hs += ch + whiteSpace + ch;
                }
            }

            //last line of square
            for(let l = 0; l<n; l++){
                hs += ch;
            }
            return hs;
        };

        //select proper choice
        if(choice == 'r'){
            console.log(drawRow(n,ch));
        }
        else if(choice =='c'){
            console.log(drawColumn(n,ch));
        }
        else if( choice =='hs'){
            console.log(drawHollowSquare(n,ch));
        }
        else {
            console.log(drawFilledSquare(n,ch));
        }

    }


}

//main function 
function main(){

    //declare variables
    let n = +prompt("Enter an Integer: ");
    let ch = prompt("Enter a single character: ");
    let choice = prompt("Enter 'r' to draw row\nEnter 'c' to draw column\nEnter 'fs' to draw filled sqaure\nEnter 'hs' to draw hollow square ");

    //draw shape
    shape(n,ch,choice);
    alert("Checking default args..");
    shape();

}
main();