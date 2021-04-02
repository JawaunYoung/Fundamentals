//Objects, Interfaces, and API's

/*
let dog = {
    name: "simba",
    color: "brown",
    breed: "its really a baby lion",
    size: "it's small...right now!",
    roar: function (typeOfRoar) {
        console.log("Roar!");
    },
};
*/

//_____________________________

function x(y) {
    y.num = y.num + 5;
    console.log(y);
}

let y = {
    name: "Tom",
    num: 10,
}
x(y);
console.log(y);