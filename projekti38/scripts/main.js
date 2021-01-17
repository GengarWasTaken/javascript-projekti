//calculators parts

const calculator = document.querySelector(".calculator");

const display = document.querySelector(".display");

const keyboard = document.querySelector(".keyboard");

const numbers = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operator")

    const add = document.querySelector(".add");

    const sub = document.querySelector(".sub");

    const mul = document.querySelector(".mul");

    const div = document.querySelector(".div");

const clear = document.querySelector(".all-clear");

const equals = document.querySelector(".equals");

let preventDuplication = display.textContent.charAt(display.textContent.length-1);

//keyboard functionality
keyboard.addEventListener("click", e => {

    if(e.target.textContent !== "=" || e.target.textContent !== "AC")

    display.textContent += e.target.textContent;
    
});

//calculation
equals.addEventListener("click", e => {

    let formula = display.textContent;

    let calculation = eval(formula);

    display.textContent = calculation;

    event.stopPropagation();

});

//all clear
clear.addEventListener("click", e => {

    display.textContent = "";

    event.stopPropagation();

});

//operators (to prevent operator duplication)
add.addEventListener("click", e => {

    let preventDuplication = display.textContent;

    if
    (preventDuplication.charAt(preventDuplication.length-1) === "+" ||
    preventDuplication.charAt(preventDuplication.length-1) === "-" ||
    preventDuplication.charAt(preventDuplication.length-1) === "*" ||
    preventDuplication.charAt(preventDuplication.length-1) === "/") {

        let newString = preventDuplication.slice(0, -1);
        newString += e.target.textContent;
        display.textContent = newString;

       } else {

        display.textContent += e.target.textContent;

       }

       event.stopPropagation();

});

sub.addEventListener("click", e => {

    let preventDuplication = display.textContent;

    if
    (preventDuplication.charAt(preventDuplication.length-1) === "+" ||
    preventDuplication.charAt(preventDuplication.length-1) === "-" ||
    preventDuplication.charAt(preventDuplication.length-1) === "*" ||
    preventDuplication.charAt(preventDuplication.length-1) === "/") {

        let newString = preventDuplication.slice(0, -1);
        newString += e.target.textContent;
        display.textContent = newString;

       } else {

        display.textContent += e.target.textContent;

       }

       event.stopPropagation();

});

mul.addEventListener("click", e => {

    let preventDuplication = display.textContent;

    if
    (preventDuplication.charAt(preventDuplication.length-1) === "+" ||
    preventDuplication.charAt(preventDuplication.length-1) === "-" ||
    preventDuplication.charAt(preventDuplication.length-1) === "*" ||
    preventDuplication.charAt(preventDuplication.length-1) === "/") {

        let newString = preventDuplication.slice(0, -1);
        newString += e.target.textContent;
        display.textContent = newString;

       } else {

        display.textContent += e.target.textContent;

       }

       event.stopPropagation();

});

div.addEventListener("click", e => {

    let preventDuplication = display.textContent;

    if
    (preventDuplication.charAt(preventDuplication.length-1) === "+" ||
    preventDuplication.charAt(preventDuplication.length-1) === "-" ||
    preventDuplication.charAt(preventDuplication.length-1) === "*" ||
    preventDuplication.charAt(preventDuplication.length-1) === "/") {

        let newString = preventDuplication.slice(0, -1);
        newString += e.target.textContent;
        display.textContent = newString;

       } else {

        display.textContent += e.target.textContent;

       }

       event.stopPropagation();

});