let text = document.querySelector('h3');

let i = 0;
let tagLine = "One stack at a time 🥞";
let speed = 50;

function typeOut() {
    if (i < tagLine.length) {
        text.innerHTML += tagLine.charAt(i);
        i++;
        setTimeout(typeOut, speed);
    }
}