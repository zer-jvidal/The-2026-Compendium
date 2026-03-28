// February Session 1 - Javascript Syntax

// let vs const
let nickname = "The Ish"; // let is mutable;
// nickname = "Zer"; // This can override the value of nickname.
console.log(nickname);

const name = "JE Vidal"; // const is immutable;
console.log(name);

const motto = "Do your worst";
console.log(motto);

const belief = "My Script is Alive!";
console.log(belief);


// Second Part of the Session

const button = document.querySelector("button");
const text = document.querySelector("p");

let isVisible = false; // Adding States to the button.

button.addEventListener("click", () => {
    if (isVisible) {
        text.textContent = "...";
        isVisible = false;
    } else {
        text.textContent = "Now you do!";
        isVisible = true;   
    }
});