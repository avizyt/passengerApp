let countEL = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
    count += 1;
    countEL.textContent = count;
}

function save() {
    saveEl.textContent += count + " - ";
    countEL.textContent = 0;
    count = 0;
}
