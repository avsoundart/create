 let logo = document.querySelector('.logo');
 let music = new Audio('music.mp3');

 function playMusic() {
     music.play();
 }
 
 logo.addEventListener('click', playMusic);

 let one = document.querySelector('.one');
 let oneSay = document.querySelector('.curly');

 let textHere = document.querySelector('.quote');

 let two = document.querySelector('.two');
 let twoSay = document.querySelector('.wavy');

 let three = document.querySelector('.three');
 let threeSay = document.querySelector('.tots');

function showCaption() {
    one.addEventListener('mouseover', function() {
        textHere.style.visibility = "visible";
        textHere.textContent = oneSay.innerText;
    })

    two.addEventListener('mouseover', function() {
        textHere.textContent = twoSay.innerText;
    })

    three.addEventListener('mouseover', function() {
        textHere.textContent = threeSay.innerText;
    })
}
