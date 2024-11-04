function findItem(arr, item) {
    if (arr.length === 0) {
        return false
    }

    const middle = Math.floor(arr.length / 2)
    if (arr[middle] === item) {
        return true
    }

    if (arr.slice(0, middle).includes(item)) {
        return findItem(arr.slice(0, middle), item)
    } else {
        return findItem(arr.slice(middle + 1), item)
    }
}

const listOfNames = ["Parker", "Drew", "Cameron", "Logan", "Alex", "Chris", "Terry", "Jamie", "Jordan", "Taylor"]

console.log(findItem(listOfNames, "Alex"))  // True
console.log(findItem(listOfNames, "Andrew"))  // False
console.log(findItem(listOfNames, "Drew"))  // True
console.log(findItem(listOfNames, "Jared"))  // False

// =================================================================================================

function binarySearchWithPosition(arr, key) {
    arr.sort((a, b) => a - b)
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        const middle = Math.floor((left + right) / 2)

        if (arr[middle] === key) {
            console.log("Middle element")
            return middle
        } else if (arr[middle] > key) {
            console.log("Checking the left side")
            right = middle - 1
        } else {
            console.log("Checking the right side")
            left = middle + 1
        }
    }
    return -1
}

console.log(binarySearchWithPosition([10, 2, 9, 6, 7, 1, 5, 3, 4, 8], 1))
console.log(binarySearchWithPosition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))

// =================================================================================================

const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const number = Math.floor(Math.random() * 10) + 1

function binarySearchWithTries(arr, n) {
    let middle = Math.floor(arr.length / 2)
    let tries = 0

    while (n !== arr[middle]) {
        tries += 1
        if (arr[middle] > n) {
            arr = arr.slice(0, middle)
        } else {
            arr = arr.slice(middle + 1)
        }
        middle = Math.floor(arr.length / 2)
    }

    console.log(`За ${tries} попыток нашли число ${n} в списке ${arr}`)
    return true
}

binarySearchWithTries(l, number)
