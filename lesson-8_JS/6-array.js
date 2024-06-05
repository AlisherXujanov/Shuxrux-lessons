// let arr = [1, 2, 3, 4, 5]
// GET from array
// 1. by index
//     - arr[index]  ->  gets the exact element by index
//     - arr[arr.length-1]  -> last item
//     - arr[parseInt(arr.length/2)]  ->  middle item
// 2. slice 
//     - arr.slice(start, end)  ->  gets the elements from start to end
// ...
// ----------------------------------------
// Some string related methods can be used with arrays too. BUT NOT ALL!
// ex:  "".trim()  -> logically incorrect for arrays
// ----------------------------------------
// SET || UPDATE  an array

// 1. [].push()     ->  adds el to the end 
// 2. [].pop()      ->  removes el from the end
// 3. [].shift()    ->  removes el from the start
// 4. [].unshift()  ->  adds el to the start
// NOTE: all these methods change the ORIGINAL array
// RU:   все эти методы изменяют ОРИГИНАЛЬНЫЙ массив

// let arr = [1, 2, 'a', 'b', true, false]
// let len = arr.unshift(10)
// console.log("New length: ", len)
// let removedItem = arr.pop()
// console.log(arr)
// console.log("Removed item is: ", removedItem)

// ---------------
// A little more difficult
// 5. [].splice(start, removeCount, el1, el2, el3, ...)  
//   - start  ->  starting point where we want to add or remove
//   - removeCount ->  count of the items to remove
//          -> if 0, no items will be removed
//          -> if not shown, all items are deleted
//   - all other items are the items to add
// let arr = [1, 2, 'a', 'b']
// let удаленныеЕлементы = arr.splice(2, 1, 10, 11, 12, '...')
// console.log("Удаленные Елементы: ", удаленныеЕлементы)
// console.log("Оригинал массив: ", arr)

