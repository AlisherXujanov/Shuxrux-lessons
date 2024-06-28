// ================== BEGINNER LEVEL (Newbie) ===================
// 1. Создайте объект под названием car с следующими
//    свойствами: brand, model, color, year.
//    Выведите каждое свойство в консоль

// let car = {
//   brand: "Tayota",
//   model: "Carola",
//   color: "Black",
//   year: 2024,
// };
// console.log(car.brand);
// console.log(car.model);
// console.log(car.color);
// console.log(car.year);

// ============================================================================================
// 2. У вас есть объект, получите длину ключей и значений объекта.

// let student = {
//   name: "Lucy",
//   age: 20,
//   hobby: "Learn programming",
//   isMerried: false,
// };

// console.log(Object.keys(student).length);
// console.log(Object.values(student).length);

// ============================================================================================
// 3. Создайте функцию, которая принимает объект и ключ в качестве
//    параметров. Затем удалите ключ из объекта и верните
//    оставшийся объект.

// function defaultObject(obj, key) {
//   delete obj[key];
//   return obj;
// }

// const x = { a: "Alisher", b: "Shokhrukh", c: "Olim" };
// const z = "b";

// const newObject = defaultObject(x, z);
// console.log("new obj: ", newObject);
// console.log("Deleted key: ", z);

// ================== INTERMEDIATE LEVEL (Junior) ===================
// 1.Создайте функцию, которая принимает объект
//  в качестве параметра и возвращает сумму всех значений,
//  которые являются числами.

// const NUMBERS = {
//   a: 4,
//   b: 7,
//   g: 'Hello',
//   c: 10,
//   d: 23,
//   e: 77,
// };
// const sum = addSum(NUMBERS);

// function addSum(obj) {
//   // acc == 0,   next == 4        =>  4
//   // acc == 4,   next == 7        =>  11
//   // acc == 11,  next == "Hello"  =>  11
//   // ...
//   return Object.values(obj).reduce((acc, next) => {
//     if (typeof(next) === "number") return acc + next
//     return acc
//   }, 0);
// }
// console.log(sum)

// ============================================================================================
// 2. Создайте функцию, которая принимает объект в качестве параметра и
//    меняет местами ключи с значениями.

// let testObject = {
//   a: "Alisher",
//   b: "Shokhrukh",
//   c: "Olim",
//   d: undefined,
//   e: 99,
// }
// OUTPUT:
// {
//   "Alisher" : "A",
//   "Shokhrukh": "B",
//   "Olim": "C",
//   d: undefined,
//   e: 99,
// }
// ------------------------------
// function swapKeyValues(obj) {
//   const result = {}
//   Object.keys(obj).forEach(key => {
//     const val = obj[key]
//     if (typeof(val) === 'string') {
//       result[val] = key
//     } else {
//       result[key] = val
//     }
//   })
//   return result
// }
// let result1 = swapKeyValues(testObject)
// console.log(result1)

// ============================================================================================

// 3.Создайте функцию, которая принимает столько объектов,
//  сколько захотите, и возвращает объект,
//  который содержит все ключи и значения переданных объектов.

// let obj1 = { name: "Alisher", age: 25 }
// let obj2 = { hobby: "Learn programming", isMerried: false }
// let obj3 = { city: "Tashkent", country: "Uzbekistan" }
// let obj4 = { job: "Frontend developer", salary: 1000 }
// let obj5 = { isStudent: true, isEmployed: false }


// function mergeObjects(...objects) {
//   const RESULT = {}
//   objects.forEach(obj => {
//     Object.keys(obj).forEach(key => {
//       RESULT[key] = obj[key]
//     })
//   })
//   return RESULT
//   // ----------------------------------------
//   // return objects.reduce((acc, next) => {
//   //   return {...acc, ...next}
//   // })
// }

// let result2 = mergeObjects(obj1, obj2, obj3, obj4, obj5)
// console.table(result2)

// ============================================================================================

// 4. Создайте функцию, которая принимает объект
//  в качестве параметра и возвращает объект,
//  отсортированный по его ключам

// const defObj = {
//   c: "start",
//   d: 23,
//   a: true,
//   b: null,
// };

// const newKey = keySort(defObj);

// function keySort(obj) {
//   const sortKeys = Object.keys(obj).sort()
//   const sortObj = {}

//   sortKeys.forEach((e) => {
//     sortObj[e] = obj[e]
//   })
//   return sortObj
// }

// console.log(newKey)
// ============================================================================================

// 5.Создайте функцию, которая принимает объект в
// качестве параметра и возвращает объект, отсортированный
// по его значениям (а не ключам)


// function valueSort(obj) {
//   const valSort = Object.values(obj).sort((a, b) => a - b);
//   const result = {};

//   valSort.forEach(num => {
//     // 1. You have a number
//     // 2. You have to find that number's location so that you can find the key
//     Object.keys(obj).forEach(key => {
//       if(obj[key] === num){
//         result[key] = num;
//       }
//     })
//   })
//   return result;
// }


// let testObject = { a: 15, b: 10, c: 20, d: 5 }
// // [5, 10, 15, 20]
// // OUTPUT:
// // { d: 5,   b: 10,   a: 15,   c: 20 }
// let result3 = valueSort(testObject)
// console.table(result3)


// ================== ADVANCED LEVEL (Pro) ===================
// Напишите функцию, чтобы подсчитать, 
// сколько раз каждое значение встречается в объекте. 


// function countValues(obj) {
//   const RESULT = {}

//   let vals = Object.values(obj)
//   vals.forEach(val => {
//     const KEY = String(val)
//     if(Object.keys(RESULT).includes(KEY)) {
//       RESULT[KEY] += 1
//     } else {
//       RESULT[KEY] = 1
//     }
//   })
//   return RESULT
// }



// let testObject = {
//   a: 5, b: 10, c: 15,
//   d: 5, e: 10, f: 15,
//   g: 20, h: true, i: 20,
//   j: 20, k: true, l: 35,
//   m:undefined,  n:null,  o:undefined
// }
// // OUTPUT:
// // { "5":2,  "10":2,  "15":2,  ... ...}
// let result4 = countValues(testObject)
// console.table(result4)

