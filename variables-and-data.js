//variables, Data Types, and Typing


//variables. left side of equal sign is called the declaration
//you give the variable a name after its declared
//the equal sign is the assignment operator
//; ends a statement

let wordData = "Word List";
console.log("wordData");
//_______________________________________________________________//

/*
let x = 100;
let y = x * 0.07;
let z = y + x;
________________________
*/
let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;

console.log("totalWithTax");



//Data Types

let obj = {
    key1: "value",
    key2: 4,
        obj2: {
            obj2Key1: "value of inner object",
        },
};
console.log(obj.obj2.obj2Key1);
//______________________________________________________


let add = 1 + 2;
let sub = 2 - 1;
let mult = 2 * 4;
let division = 4 / 2;
let mod =  5 % 2;

let string ="String 1 " + "String 2";
console.log(string);


