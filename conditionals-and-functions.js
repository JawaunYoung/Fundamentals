/*
Conditionals, Functions, Scope, and Loops
 */

//_____________variables/conditionals_____equal to (1 == '1'), not equal(!=) to (1 === '1')

//Equals
let equals = 1 == '1';
console.log(equals);

//________________________________________

//Greater Than
let greaterThan = 5 > 1;

// Less Than
let lessThan = 2< 10;

//Greater Than Equal to
let greaterThanEq = 5 >= 5;

// Less Than Equal to
let lessThanEq = 4 <= 9;

// Not Equal
let notEqual = 5 !==2

//____________________Statements__________________________

let storeA = 3.10;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;

if (storeAIsLower) {
    console.log("Store A has a lower price")
}
    else if (storeB < storeA) {
        console.log("Store B has a lower price")
}   else {
        console.log("There prices are equal")
}
//______________________functions__________________________

let x = 10;
    function addNumber (n, m, x) {
        console.log(x);
        return n + m;
    }

    addNumber(2, 3, 8); //in the global scope javaScript will still equal 10...3 levels of "Scope"!
// Global scope, function scope, and block scope

//_____________________arrays_forLoops_and whileLoops________
//              0, 1, 2, 3, 4 [indexes]
let ourArray = [1, 2, 3, 4, 5, 6, 7]; //arrays start at zero, 0,1,2,3,4 etc...

for (let i = 0; i<ourArray.length; i++) {
    console.log("i is equal to: " + i)
}
 //   console.log(ourArray[i]);


//while loop
/*
let x = 0;
while (x < 10) {
    console.log('Ran');
    x = x + 1;
}
*/


