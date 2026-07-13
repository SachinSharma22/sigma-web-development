let arr = [1,2,3,4];

let result = arr.reduce((res,el) => (
    res+el
))

console.log(result)

let nums = [1,2,3,4,5, 44, 22,11,12,43, 56];

let ans = nums.reduce((max, el) => {
    if(max < el) {
        return el;
    } else {
        return max
    }
})

console.log(ans)