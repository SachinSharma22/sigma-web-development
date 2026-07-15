let inpt = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = inpt.value;
    ul.appendChild(li);
    let dbtn = document.createElement('button');
    dbtn.innerText = "Delete";
    li.appendChild(dbtn);
    inpt.value = "";
})

ul.addEventListener('click', (e) => {
    if(e.target.tagName == "BUTTON") {
        e.target.parentElement.remove();
    }
})