let arr = [
    {
        name: "sachin",
        marks:95
    },
    {
        name: "saurabh",
        marks: 44
    },
    {
        name: "surubhi",
        marks: 99
    }
]

let resultGPA = arr.map((el) => {
    return el.marks/10;
})

console.log(resultGPA)