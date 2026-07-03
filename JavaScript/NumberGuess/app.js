let myNum = prompt("Enter a number between 1 and 10");
let sysNum = Math.floor(Math.random() * 10) + 1;

console.log("Your number: " + myNum);
console.log("System number: " + sysNum);

if (myNum == sysNum) {
    console.log("You won!");
} else {
    console.log("You lost!");
}