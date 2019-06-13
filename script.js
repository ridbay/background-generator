// import {without} from 'lodash';
let _ = require('lodash');

// Testing Lodash without Method
// let array1 = [1,2,3,4,4,5,6];
// console.log(array1);
// console.log(_.without(array1, 4));

// Select the only one h3 element
let h3 = document.querySelector('h3');
// select the color input by class name
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
// select the body to be used to update the background color
let body = document.getElementById('gradient');

// // check to see the elements are selected and be sure you're doing things right
// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);



// The event listener for input is "input"

// color1.addEventListener("input", function(){
//     // console.log(color1.value); // check to see if it's listening to event
//     // change the style of the body
//     body.style.background = 
//     "linear-gradient(to right, " 
//     + color1.value 
//     + ", " 
//     + color2.value 
//     + ")";
// });

// color2.addEventListener("input", function(){
//     // console.log(color2.value); // check to see if it's listening to event
//         // change the style of the body
//         body.style.background = 
//         "linear-gradient(to right, " 
//         + color1.value 
//         + ", " 
//         + color2.value 
//         + ")";
// });



// Refactor the codes. DRY
function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    // render/print out the the css codes from the syle picker
    h3.textContent = "This is the CSS code: " + body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);