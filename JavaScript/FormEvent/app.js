let ipt = document.querySelector('#name');
let pass = document.querySelector('#pass');
let form = document.querySelector('form');
let btn = document.querySelector('button');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(ipt.value == "") {
        alert("Please write something");
        return;
    }

    console.log(ipt.value);
    console.log(pass.value);
})