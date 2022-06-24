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
function symbol() {
    const newCA = ['$', '_', '*', '@', '?'];

    for (i = 0; i < newCA.length; i++) {
        i = Math.floor(Math.random() * 4) + 1;
        return newCA[i];
    }
}


button.addEventListener('click', function () {
    const first = document.getElementById("first").value;
    const last = document.getElementById("last").value;
    const newFirst = first.slice(0,3).toUpperCase();
    const newLast = last.slice(-3).toUpperCase();

    if (first.length < 2 || last.length < 2) {
        alert(`Enter at least two characters.`);
        username.innerHTML = "no username";
        password.innerHTML = "######";
    }
    else {
        username.innerHTML = `New username: $_${newFirst}${newLast}${letters()}${passCode(10, 100)}`;
        password.innerHTML = `New password: ${letters()}${passCode(1000, 10000)}${newLast}`;
    }

    button.disabled = true;
});



