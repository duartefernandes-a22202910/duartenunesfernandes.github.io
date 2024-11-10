
let counter = 0;
const heading = document.querySelector('h1');

function count() {
    counter++;
    heading.textContent = counter;
} 
 

document.getElementById("button").addEventListener("click", function() {
    alert("Button clicked!");
});