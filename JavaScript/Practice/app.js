// let ptxt = document.getElementById('txt');
// const changeBtn = document.getElementById('btn');
// const fName = document.getElementById('name');
// console.log(fName);
// changeBtn.addEventListener("click", () => {
//     let newPara = document.createElement('p');
//     newPara.innerText = fName.value;
//     document.body.appendChild(newPara);
//     ptxt.innerText = "This is happened with the help of JS";
// })

// Promises

function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 5) {
      resolve(data);
    } else {
      reject("Internet speed is too slow");
    }
  });
}

saveToDb("Sachin Sharma")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
