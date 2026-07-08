let ptxt = document.getElementById('txt');
const changeBtn = document.getElementById('btn');
const fName = document.getElementById('name');
console.log(fName);
changeBtn.addEventListener("click", () => {
    let newPara = document.createElement('p');

    ptxt.innerHTML = "This is happened with the help of JS";
})

