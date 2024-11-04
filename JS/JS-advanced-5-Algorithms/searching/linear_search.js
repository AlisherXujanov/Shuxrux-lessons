let backend_info = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let client_suragan_son = 5
/**
 * Performs a linear search on an array to find the index of a given value.
 *
 * @param {any[]} arr - The array to search through.
 * @param {any} value - The value to search for in the array.
 * @returns {number} The index of the value in the array, or -1 if the value is not found.
 */
function linearSearch(arr, value) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] == value) {
            return i
        }
        //  i==0;    item==1;     1==5 ? false   =>  continue
        //  i==1;    item==2;     2==5 ? false   =>  continue
        //  i==2;    item==3;     3==5 ? false   =>  continue
        //  i==3;    item==4;     4==5 ? false   =>  continue
        //  i==4;    item==5;     5==5 ? false   =>  return 4
    }
    return -1
}
// ---------------------------------------
let result = linearSearch(backend_info, client_suragan_son)
console.log(result) // 4