let ptxt = document.getElementById('txt');
const changeBtn = document.getElementById('btn');
const fName = document.getElementById('name');
console.log(fName);
changeBtn.addEventListener("click", () => {
    let newPara = document.createElement('p');
    newPara.innerText = fName.value;
    document.body.appendChild(newPara);
    ptxt.innerText = "This is happened with the help of JS";
})

