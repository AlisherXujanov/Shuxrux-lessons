// ✅1. Linear search
// ✅2. Binary search
// ✅3. Nested loops
// ✅4. Recursion
// ✅5. Bubble sort
// =======================================================
// =======================================================
let next3 = "✅3. Nested loops"
// Time complexity: O(n)
// Memory complexity: O(1)
// function test(n) {
//     for (let i=0; i<n; i++) {
//         for (let i2=0; i2<n; i2++) {
//             console.log("Index: ", i2)
//         }
//     }
// }
// // 100**2  =>   100*100   =>  10000
// test(1000)

// TWO POINTERs
// function removeDuplicates(nums) {
//     let chap = 0
//     for (let ung=1; ung<nums.length; ung++) {
//         if (nums[chap] != nums[ung]) {
//             chap ++
//             nums[chap] = nums[ung]
//         }
//     }
//     // for (let j = chap + 1; j < nums.length; j++) {
//     //     nums[j] = "_";
//     // }
//     return chap + 1
// }
// let nums = [0,0,1,1,1,2,2,3,3,4]
// let result = removeDuplicates(nums)
// console.log(nums)
// console.log("K: ", result)
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// let arr = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3]
// let my_set = new Set(arr)
// console.log(Array.from(my_set))
// =======================================================
// =======================================================
let next4 = "✅4. Recursion"
// function count_down(max_height) {
//     for (let i = max_height; i > 0; i--) {
//         console.log(i)
//     }
// }
// // count_down(10)

// function count_recursively_down(max_height) {
//     // RULES:
//     // 1. Recursive function must call itself to be called RECURSION
//     // 2. Every recursive function should be stopped to escape 
//     //    infinite loop. To stop it, we use a condition
//     // 3. When called itself, it should pass different parameter
//     if (max_height > 0) {
//         console.log(max_height)
//         return count_recursively_down(max_height-1)
//     }
// }
// // count_recursively_down(100)
// // ==================================================================
// function count_up(max_height) {
//     for (let i = 0; i < max_height; i++) {
//         console.log(i+1)
//     }
// }
// // count_up(10)

// function count_recursively_up(max_height, counter=1) {
//     if (counter <= max_height) {
//         console.log(counter)
//         return count_recursively_up(max_height, counter+1)
//     }
// }
// count_recursively_up(10)

let next5 = "✅5. Bubble sort"


function bubble_sort(arr_of_nums) {
    // [5, 3, 8, 4, 2, 1, 9, 7, 6]
    let sorted = false
    while (!sorted) {
        sorted = true
        for (let i=0;  i<arr_of_nums.length-1;  i++) {
            if (arr_of_nums[i] > arr_of_nums[i+1]) {
                [arr_of_nums[i], arr_of_nums[i+1]] = [arr_of_nums[i+1], arr_of_nums[i]]
                sorted = false
            }
        }
        // [5, 3, 8, 4, 2, 3, 1, 9, 7, 6, 9]
        // [3, 5, 4, 2, 3, 1, 8, 7, 6, 9, 9]
        // ...
    }
    return arr_of_nums
}

let array_of_unsorted_numbers = [5, 9, 3, 8, 4, 2, 3, 1, 9, 7, 6]
let result = bubble_sort(array_of_unsorted_numbers)
console.log("Sorted: ", result) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
let r_duplicates = new Set(result)
console.log("Removed duplicates: ", Array.from(r_duplicates))

