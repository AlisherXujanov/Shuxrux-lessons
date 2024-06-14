// The main thing that sets do is removing duplicates from an array
// {1, 2, 3, 4, 5}

let arr = [1,1, 2,2, 3,3]
let my_set = new Set(arr)
console.log(my_set) // Set(3) { 1, 2, 3 }


my_set.has(1) // True
my_set.has(4) // False

my_set.size // 3  // length


let text = "Hello world"
let my_set2 = new Set(text.split(""))
console.log(my_set2) // Set(8) { 'H', 'e', 'l', 'o', ' ', 'w', 'r', 'd' }


