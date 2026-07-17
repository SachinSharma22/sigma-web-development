let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let btns = ["yellow", "red", "purple", "green"];

document.addEventListener('keypress', () => {
    if(started == false) {
        console.log("Game is started")
        started = true;

        levelUp();
    }
});

function flashBtn(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 100);
}
function levelUp() {
    level++;
    h2.innerText = "Level " + level;
    flashBtn();


    let randIndex = Math.floor(Math.random() * 4);
    let randColor = buttonColors[randIndex];
    btns.push(randColor);
    gameSeq.push(randIndex);
}