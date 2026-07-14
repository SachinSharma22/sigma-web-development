let colorValue = document.querySelector('h1');
let btn = document.querySelector('button');
let divCont = document.getElementById('container');

btn.addEventListener('click', () => {
    let randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
    divCont.style.backgroundColor = "#" + randomColor;
    colorValue.innerText = "#" + randomColor;
})
