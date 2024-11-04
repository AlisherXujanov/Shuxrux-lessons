// WHAT IS CALLBACK?
// callback in russian is => обратный вызов

// Callback is a function that is passed as an argument to 
// another function and is executed after some operation has been completed.
// RU: Callback - это функция, которая передается в качестве аргумента в
// другую функцию и выполняется после того, как какая-то операция была завершена.
// UZ: Callback - bu boshqa funksiya sifatida argument sifatida uzatiladi va
// biror operatsiya yakunlangandan keyin bajariladi.
// ========================================================================
// ========================================================================
// function ultiniBer(hero) {
//     console.log(`${hero} Ultini berish boshlandi...`)
// }
// function yugur(hero) {
//     console.log(`${hero} yuguryapti...`)
// }
// // ------------------------------------------------------------------
// function heroniAniqla(hero_bilan_ishlaydigan_fn) {
//     let heroName = "Juggernaut"
//     hero_bilan_ishlaydigan_fn(heroName)
// }
// heroniAniqla(ultiniBer)
// heroniAniqla(yugur)
// ========================================================================
// ========================================================================
// function showMessage(name) {
//     console.log(`Hello ${name}`)
// }
// function sendMessage(name) {
//     console.log(`Sending message to ${name}`)
// }
// function prepareFood(name) {
//     console.log(`Preparing food for ${name}`)
// }
// //! -----------------------------------------------
// function getName(cbFn) {
//     let clientName = "John"
//     cbFn(clientName)
// }
// // ! -----------------------------------------------
// getName(showMessage)
// getName(sendMessage)
// getName(prepareFood)
// ========================================================================
// ========================================================================
// let counter = 0
// let interval = setInterval(showName, 1000, "Shoxa")

// function showName(param) {
//     // console.log(`Hello ${param}`)
//     console.log("Counter: ", counter)
//     counter ++
//     if (counter == 10) {
//         clearInterval(interval)
//     }
// }
// ----------------------------------
// ----------------------------------
// setInterval(function (param) {
//     console.log(`Hello ${param}`)
// }, 1000, "Shoxa")
// // ----------------------------------
// setInterval(param => {
//     console.log(`Hello ${param}`)
// }, 1000, "Shoxa")
// ===================================================
// setTimeout(showName, 3000)
// ===================================================

// ------------------------------------------------------------------
// let names = ["Aziz", "Shaxzod", "Shoxrux", "Parviz", "Firuz", "Adham"]
// const oneSecond = 1000

// let interval = setInterval(showName, oneSecond/2)
// let counter = 0

// function showName() {
//     let cName = names[counter]
//     console.log(cName)
//     counter++
//     if (cName == "Firuz") {
//         clearInterval(interval)
//         console.log("Stop interval")
//     }
// }

// ====================================================================
// let text = "Shoxrux"
// function rotateText() {
//     console.log(text)
//     let lastLetter = text[text.length - 1]
//     let newText = lastLetter + text.slice(0, text.length - 1)
//     text = newText
// }
// const SECOND = 1000
// setInterval(rotateText, SECOND/10)
// ====================================================================

