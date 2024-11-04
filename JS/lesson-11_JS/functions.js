 // DRY  =>  Dont Repeat Yourself
// Function MUST do only one thing at a time
// And do it well
// -----------------------------
// The difference between declaration and expression is 
// 1- You can call the declarative function before it is declared
// 2- You can't call the expression function before it is declared

// -----------------------------------------------------------

// When we create a function, we should be careful about choosing its
// name. So, the function would explain itself what it does
// showModal(),  calculateSum(),  createTag(),  addSmth() ...
// RU: При создании функции мы должны быть осторожны при выборе ее
//     имени. Так, функция сама должна объяснять, что она делает
//     показатьМодель(),  рассчитатьСумму(),  создатьТег(),  добавитьЧтото() ...
// UZ: Funksiya yaratganda, uning nomini tanlashda ehtiyot bo'lishimiz kerak.
//    Shunday qilib, funksiya o'zini qiladigan ishni tushunishini aytishi kerak
//    modalniKo'rsat(),  summaniHisobla(),  tegYarat(),  qo'shish() ...
// -----------------------------------------------------------
// return (Возврат) => is used for returning the value of the function outside
//                 RU: используется для возвращения значения функции вне
// -----------------------------------------------------------

// =============================================================
// DECLARATION of functions
// SYNTAX: function functionName() {}

// function blender(fruit, fruit2="Berry") {
//     // console.log("Blending: " + fruit + " and " + fruit2)
//     return "Blending: " + fruit + " and " + fruit2
// }
// =============================================================
// blender("Banana", "Orange")  // Blending: Banana and Orange
// blender("Banana")            // Blending: Banana and Berry
// blender()                    // Blending: undefined and Berry
// =============================================================
// let glass1 = blender("Banana", "Orange")
// let glass2 = blender("Banana")
// console.log(glass1)
// console.log(glass2)


// =============================================================
// FUNCTION EXPRESSIONs
// SYNTAXes: 
// let functionName = function() {
    // line-1
    // return line-2
// }
// ---------------------------
// let functionName = (a, b) => line-1
// ---------------------------
// IF ONLY ONE PARAMETER
// let functionName = param => console.log(param)
// ---------------------------

// let blender = fruit => console.log(`Blending ${fruit} and Berry`)
// let blender = fruit => `Blending ${fruit} and Berry`
// let glass1 = blender("Banana")
// console.log(glass1)


