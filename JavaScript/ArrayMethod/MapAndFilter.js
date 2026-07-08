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

let fruits = ["apple", "banana", "graves"];

let newFruits = fruits.map((el) => {
    return el.toUpperCase();
})

let fruitDetail = fruits.map((el, index) => {
    console.log(index, el);
})

console.log(newFruits)

// Filter method

let nums = [2,3,4,5,6,7,8,9,0];

let even = nums.filter((el) => 
    (el % 2 == 0)
)

console.log(even)

// Filter and Map chain
const users = [
    { name: "Sachin", age: 22 },
    { name: "Rahul", age: 17 },
    { name: "Amit", age: 30 }
];

const name = users.filter((el) => {
    return el.age > 18;
})
.map((el) => {
    return el.name
})

console.log(name)