// ✅1. Nested loops  
// ✅2. Recursion
// ✅3. Binary search
// ✅4. Linear search
// ✅5. Bubble sort
// =================================================================
let first = "✅1. Nested loops"
// let range = "-".repeat(100)
// let counter = 0
// for (let i of range.split("")) {
//     for (let i of range.split("")) {
//         counter += 1
//     }
// }
// console.log(counter)
// =================================================================
let second = "✅2. RECURSION"
//    - The logic is for calling onself in a function again and again
//      until the requirement is met.
// RULES:
//      + The function always should check a CONDITION to stop the recursion
//      + The function should call itself with DIFFERENT arguments
//      + The function should call ITSELF only so that it could be called a recursion 
// --------------
// EXAMPLES:
// *
// **
// ***
// ****
// *****
// function drawStarsUp(total_lines, counter = 1) {
//     console.log("*".repeat(counter))
//     if (counter == total_lines) {
//         return  // END
//     }
//     else {
//         return drawStarsUp(total_lines, counter + 1)
//     }
// }
// drawStarsUp(10)
// -----------------------------------
// *****
// ****
// ***
// **
// *
// function drawStarsDown(total_lines) {
//     if (total_lines == 0) return
//     console.log("*".repeat(total_lines))
//     return drawStarsDown(total_lines - 1)
// }
// drawStarsDown(5)
// -----------------------------------
// function factorial(n) {
//     if (n == 1) {
//         return 1
//     } else {
//         return n * factorial(n - 1)
//     }
// }
// 5 * 4 * 3 * 2 * 1 * 1 = 120

// let r = factorial(5) // 5*4*3*2*1  =>  120
// console.log(r)

// r = factorial(10)   //  10*9*8*7*6*5*4*3*2*1  => 3628800
// console.log(r)
// -----------------------------------

// function showVowels(text) {
//     if (text.length == 0) return

//     const firstLetter = text[0]
//     if('aouei'.includes(firstLetter)) {
//         console.log(firstLetter)
//     }
//     return showVowels(text.slice(1))
// "Hello world"    =>  H   =>  "ello world"
// "ello world"     =>  e   =>  "llo world"
// "llo world"      =>  l   =>  "lo world"
// "lo world"       =>  l   =>  "o world"
// "o world"        =>  o   =>  " world"
// ...
// }

// let text = "Hello world"
// showVowels(text)
// -----------------------------------
// -----------------------------------
// =================================================================
// =================================================================
let fourth = "✅4. Linear search"
// [1- ... -10000000]
// --------->>>>>>>>>
// let nums = [1,2,3,4,5,6,7,8,9,10]
// let search = 7
// for (let num of nums) {
//     if (num == search) {
//         console.log("Found")
//     }
// }
// =================================================================
// =================================================================
let fifth = "✅5. Bubble sort"
function bubble_sort(u_lst) {
    let sorted = false
    while (!sorted) {
        sorted = true
        for (let i = 0; i < u_lst.length - 1; i++) {
            if (u_lst[i] > u_lst[i + 1]) {
                [u_lst[i], u_lst[i + 1]] = [u_lst[i + 1], u_lst[i]]
                sorted = false
            }
        }
    }
    return u_lst
}
let arr_of_unsorted_nums = [5, 3, 8, 1, 4, 2]
let sorted_arr = bubble_sort(arr_of_unsorted_nums)
console.log(sorted_arr)





