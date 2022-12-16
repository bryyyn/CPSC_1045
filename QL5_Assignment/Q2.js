/**
 * Bryan Escobar
 * Student ID: 100365104
 * CPSC 1045
 */

//return true if input is prime number
function isPrime(n){

    //repeatedly divide  n in the range of [2,sqrt(n)]
    let countMax = Math.sqrt(n);
    for(let i = 2;i < countMax; i++) {
        if(n % i == 0){
            return false;
        }
    }

    return true;
}
//Test case for true
console.log("Test case for true:\n Number 7 isPrime = " + isPrime(7));
//Test case for false
console.log("Test case for false:\n Number 21 isPrime = " + isPrime(21));
//isPrime(21);