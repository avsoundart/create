let btnRoll = document.querySelectorAll(".slots"); //buttons 1-6
let picks = document.querySelector(".picks"); //Player Picks Text
let betBox = document.querySelectorAll(".betBox"); // button bets 10 -15
let roll = document.querySelector(".roll"); //Roll Button
let playAgain = document.querySelector(".playAgain"); //Play Again
let matches = document.querySelector(".matches"); //matched number
let cashBox = document.querySelector(".placeBet"); // Text to show Bet
let boDy = document.body;
let rules = document.querySelector(".rules"); //Game Rule Button
let hiddenRules = document.querySelector(".hideRules"); //Game Rules
let close = document.querySelector(".close-rules"); //Game Rules

let play = document.querySelector(".play"); // 
let mute = document.querySelector(".mute"); // 
let music = new Audio('music.mp3');

rules.addEventListener("click", function () {
    hiddenRules.classList.add("showRules");
});
close.addEventListener("click", function () {
    hiddenRules.classList.remove("showRules");
});

play.addEventListener("click", function () {
    music.play();
    music.loop = true;
});
mute.addEventListener("click", function () {
    music.pause();
});

//Place Bet

for (i = 0; i < betBox.length; i++) {
    betBox[i].addEventListener('click', function () {
        playerBet = Number(this.textContent);
        cashBox.textContent = `Bet $${playerBet}`;
    });
}

//Pick Number
for (i = 0; i < btnRoll.length; i++) {
    btnRoll[i].addEventListener('click', function () {
        let playerPicks = this.textContent;
        let changePicks = Number(playerPicks);

        switch (playerPicks) {
            case '1':
                picks.textContent = changePicks;
                break;
            case '2':
                picks.textContent = changePicks;
                break;
            case '3':
                picks.textContent = changePicks;
                break;
            case '4':
                picks.textContent = changePicks;
            case '5':
                picks.textContent = changePicks;
                break;
            case '6':
                picks.textContent = changePicks;
                break;
        }

        //Place Bet
        roll.addEventListener('click', function () {
            let randomNumber = Math.trunc(Math.random() * 6) + 1;
            let bet = Number(playerBet * 2);

            if (randomNumber === changePicks) {
                matches.textContent = `🎲 ${randomNumber}`;
                cashBox.textContent = `Win $${bet}`;
                playAgain.textContent = `Cash Out`;
                playAgain.style.backgroundColor = "green";
                playAgain.addEventListener("click", function () {
                    playAgain.textContent = `Play`;
                    playAgain.style.backgroundColor = "purple";
                });
            } if (randomNumber !== changePicks) {
                matches.textContent = `🎲 ${randomNumber}`;
                cashBox.classList.add("lose");
                cashBox.textContent = `No Match!`;
                playAgain.textContent = `Play`;
                playAgain.style.backgroundColor = "purple";
                playAgain.addEventListener("click", function () {
                    playAgain.textContent = `Play`;
                });
            }
        });
    });

    playAgain.addEventListener('click', function () {
        picks.textContent = "__";
        playerPicks = "";
        changePicks = "";
        cashBox.textContent = "Bet";
        matches.textContent = "🎲";
        playerBet = "";
    });
}
