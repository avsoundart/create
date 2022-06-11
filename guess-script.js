let numberSlot = document.querySelector(".result"); //Computer Number ?
let guessNumber = document.querySelector(".guess");
let gamePlays = document.querySelector(".plays");
let gameScore = 10;
let roll = document.querySelector(".roll");
let playAgain = document.querySelector(".playBtn"); //Play Again
let reset = document.querySelector(".reset"); //Reset
let randomNumber = Math.trunc(Math.random() * 10) + 1;
let win = new Audio('chimes.mp3');

    roll.addEventListener("click", function() {
        let x = Number(guessNumber.value);

        if (x === randomNumber) {
            win.play();
           numberSlot.textContent = `You Guessed It!`;
           numberSlot.classList.add("changeGreen");
           gamePlays.textContent = `Game Plays ${gameScore++}`;
           playAgain.classList.add("gold");
        } if (x !== randomNumber) {
            numberSlot.textContent = `My number was ${randomNumber}!`;
            numberSlot.classList.add("changeRed");
            gamePlays.textContent = `Game Plays ${gameScore--}`;
            playAgain.classList.add("gold");
        } if (x === 0 || x > 10) {
            numberSlot.textContent = "Enter # from 1 - 10";
            numberSlot.classList.remove("changeRed");
        }

        playAgain.addEventListener("click", function() {
            guessNumber.value = " ";
            numberSlot.textContent = "?";
            randomNumber = Math.trunc(Math.random() * 10) + 1;
            numberSlot.classList.remove("changeRed","changeGreen");
            playAgain.classList.remove("gold");
        });

        if (gameScore <= 0) {
            gamePlays.textContent = `Out of Game Plays`;
            numberSlot.textContent = `Play Again.`;
            reset.classList.add("gold");
            playAgain.classList.remove("gold");
        };

        reset.addEventListener("click", function() {
            window.location.reload();
            reset.classList.remove("gold");
            
        });

    });

    