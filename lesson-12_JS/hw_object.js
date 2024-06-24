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

// ================ INTERMEDIATE LEVEL ==============
// 1.Создайте функцию, которая принимает объект
//  в качестве параметра и возвращает сумму всех значений,
//  которые являются числами.

// const number = {
//   a: 4,
//   b: 7,
//   c: 10,
//   d: 23,
//   e: 77,
// };
// const sum = addSum(number);

// function addSum(obj) {
//   return Object.values(obj).reduce((acc, next) => {
//     if (typeof Object.values(obj) === "number") return acc + next;
//   });
// }
// console.log(sum);

// ============================================================================================
// 2.Создайте функцию, которая принимает объект
//  в качестве параметра и преобразует каждый ключ в обратный
//  регистр (назад-вперёд) и возвращает новый объект.

// ============================================================================================

// 3.Создайте функцию, которая принимает столько объектов,
//  сколько захотите, и возвращает объект,
//  который содержит все ключи и значения переданных объектов.

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
//   const sortKeys = Object.keys(obj).sort();
//   const sortObj = {};

//   sortKeys.forEach((e) => {
//     sortObj[e] = obj[e];
//   });
//   return sortObj;
// }
// console.log(newKey);

// ============================================================================================

// 5.Создайте функцию, которая принимает объект в
// качестве параметра и возвращает объект, отсортированный
//  по его значениям (а не ключам)

let userInfo = {
  name: "вася",
  age: 30,
  "like js": true,
};

let user = Object.assign({}, userInfo);

user.age = 20;
console.log("default user info :", userInfo);
console.log("new user info :", user);
