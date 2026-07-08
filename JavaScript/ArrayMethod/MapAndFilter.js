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

// Filter method

let nums = [2,3,4,5,6,7,8,9,0];

let even = nums.filter((el) => 
    (el % 2 == 0)
)

console.log(even)