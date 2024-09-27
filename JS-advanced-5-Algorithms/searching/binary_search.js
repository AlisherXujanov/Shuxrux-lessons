let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let search_value = 5
/**
 * Performs a binary search on a sorted array to find the target value.
 * RU: Выполняет двоичный поиск в отсортированном массиве для поиска целевого значения.
 * @param {any[]} arr - The sorted array to search within.
 * @param {any} target - The value to search for.
 * @returns {number} The index of the target value in the array, or -1 if the target is not found.
 */

function binary_search(list, target) {
    let start = 0
    let end = list.length - 1

    while (start <= end) {
        const MIDDLE = parseInt((start + end) / 2)
        if (list[MIDDLE] == target) {
            return MIDDLE
        }
        else {
            if (list[MIDDLE] < target) {
                start = MIDDLE + 1
                continue
            }
            else {
                end = MIDDLE - 1
                continue
            }
        }
    }
    return -1
}
// ---------------------------------------
let result = binary_search(arr, search_value)
console.log(result) // 4








