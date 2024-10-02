/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2.slice(0, n))
    nums1.sort((a, b) => a - b)
}g
let nums1 = [1]
let nums2 = []
let m = 1
let n = 0
merge(nums1, m, nums2, n)
console.log(nums1) // [1,2,2,3,5,6]

