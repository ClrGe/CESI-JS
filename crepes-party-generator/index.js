let button = document.getElementById("validationBtn");
let nbInvites = document.getElementById("number-guest");

button.addEventListener("click", function () {
    let newValue = parseInt(nbInvites.value);
    nbInvites.value = newValue;
});
console.log(button, nbInvites.value);

const prompt    = require('prompt-sync')();

let  flour      =   63;
     eggs       =   1;
     milk       =   0.2,
     sugar      =   0.5,
     butter     =   13,
     numberOfGuests;

function ask() {
    numberOfGuests = prompt("How many guests ?");
    console.log("Number of guests : " + " " + numberOfGuests);
    console.log("");
        if(numberOfGuests >= 1){
        flour   *=  numberOfGuests;
        eggs    *=  numberOfGuests;
        milk    *=  numberOfGuests;
        sugar   *=  numberOfGuests;
        butter  *=  numberOfGuests;
        console.log("Butter: "  + Math.round(butter/100)*100 + "G");
        console.log("Flour : "  + Math.round(flour/100)*100 + "G");
        console.log("Eggs : "   + Math.round(eggs));
        console.log("Milk : "   + Math.round(milk) + "L");
        console.log("Sugar : "  + Math.round(sugar) + "G");
    } else {
        console.log("Please provide a valid number of guests");
    }
}

ask();
