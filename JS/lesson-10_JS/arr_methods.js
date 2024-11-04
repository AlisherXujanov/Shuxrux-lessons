// [...].find()     =>  finds onle first element that satisfies the condition
// [...].filter()   =>  finds all elements that satisfy the condition
// [...].map()      =>  gets all items into new-list but on the way, it can change them
// [...].forEach()  =>  works just like [].filter() but it doesn't return anything

// SYNTAX:  ->>    [...].method-name((val, idx) => { your code })
// ----------------
// [...].reduce((acc, next) => { your code }, initial-value)
// NOTE: INITIAL-VALUE is optional. If not given, then it takes first item of the list
// ====================================================
// FIND
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = arr.find((qiymat, index) => {
    if (qiymat%2 == 0) { // first even number 
        return qiymat
    }
})
// console.log(result) // Expected: 2
// ----------------------------------
let fruits = ['strawberry', 'apple', 'banana', 'mango', 'orange']

let fruit = fruits.find((val, idx) => {
    let last = val.charAt(val.length-1)
    if ("aouei".includes(last.toLowerCase())) {
        return val
    }
})
// console.log(fruit)
// ====================================================
// FILTER
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result2 = arr.filter((qiymat, index) => {
    if (qiymat%2 == 0) { // first even number 
        return qiymat
    }
})
// console.log(result2) // Expected: [2, 4, 6, 8]
// ====================================================
// MAP
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let new_arr = arr3.map((val, idx) => {
    return val**2
})
// console.log(new_arr)
// ====================================================
// FOREACH (UNIVERSAL)
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result3 = []
arr4.forEach((qiymat, index) => {
    if (qiymat%2 == 0) { 
        result3.push(qiymat)
    }
})
// console.log(result3)
// ====================================================
// REDUCE (Only one item from all items)
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result4 = arr5.reduce((acc, next) => {
    // acc == 1, next == 2
    // acc == 3, next == 3
    // acc == 6, next == 4
    // acc == 10, next == 5
    // acc == 15, next == 6
    // acc == 21, next == 7
    // acc == 28, next == 8
    // acc == 36, next == 9
    return acc + next
})
// console.log(result4)
// -----------------------
// REDUCE with initial-value
// let result4 = arr5.reduce((acc, next) => {
//     // acc == 10, next == 1
//     // acc == 11, next == 2
//     // ...
//     return acc + next
// }, 10)
// -----------------------
let max_number = arr5.reduce((acc, next) => {
    // acc == 1, next == 2    =>   2
    // acc == 2, next == 3    =>   3
    // ...
    // acc == 9, next == 10   =>   10
    // acc == 10, next == ?   =>   max_number==10
    if (acc > next) {
        return acc
    } else {
        return next
    }
})
// console.log(max_number)
// ====================================================
