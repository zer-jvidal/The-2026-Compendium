// Session 2 : Functions and Event Listeners

// Adding anotations for my codes.

function changeText () { // 1. Setting up a function; basically a logic to be followed.
    document.getElementById("text").innerHTML = "You're Awesome!"; // 2. Setting up the logic; basically what the function will do.
}

document
    .getElementById("myButton") // 3. Targeting the ID of the Button.
    .addEventListener("click", changeText); // 4. Setting up the event listener; this will happen when the button is clicked.


// This is more Advanced

// const button = document.querySelector("button");
// const text = document.getElementById("text");

// let isVisible = false; // STATE

// button.addEventListener("click", () => {
//     if (isVisible) {
//         text.textContent = "Why don't you click me?";
//         isVisible = false;
//     } else {
//         text.textContent = "You're Awesome!";
//         isVisible = true;
//     }
// }); 

// What is does is that when button is clicked, it will change the text content of the paragraph element with id "text" to "You're Awesome!"