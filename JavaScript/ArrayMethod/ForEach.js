arr = [1,2,3,4,5];
arr.forEach((element) => {
    console.log(element);
});

arr.forEach((element, index) => {
    console.log(element, index);
});

arr.forEach((element, index, array) => {
    console.log(element, index, array);
});

arr.forEach((element, index, arr) => {
    arr[index] = element*2;
})

console.log(arr);