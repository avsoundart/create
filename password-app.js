

// const caleb = new Map([
//     ['1', 'Sexy'],
//     ['2', 'Fun'],
//     ['3', 'Stylish'],
// ]);

// const calebScores = [9, 3, 4, 7, 8];


// calebScores.forEach(function (cm) {
//     if (cm > 6) {
//         console.log("He's a winner!");
//     } else {
//         console.log('Meh. Not his night.');
//     }
// })




const button = document.querySelector("button");
const username = document.querySelector(".username");
const password = document.querySelector(".password");

function passCode(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function letters() {
    const newCA = ['s', 'g', 'k', 'e', 'x'];

    for (i = 0; i < newCA.length; i++) {
        i = Math.floor(Math.random() * 4) + 1;
        return newCA[i].toUpperCase();
    }
}


button.addEventListener('click', function () {
    const first = document.getElementById("first").value;
    const last = document.getElementById("last").value;
    const newFirst = first.slice(0, 2).toLowerCase();
    const newLast = last.slice(0, 2).toLowerCase();

    if (first.length === 0 || last.length === 0) {
        alert(`Enter fields.`);
    } else {
        username.innerHTML = `New username: ${newFirst}${newLast}`;
        password.innerHTML = `New password: ${passCode(1000, 10000)}${letters()}`;
    }
});


