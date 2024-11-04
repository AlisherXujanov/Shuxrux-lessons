import { myAge as mA, myName as mN } from './person.js'
import bemiyya from './helpers.js'

console.log(mA, mN)
console.log(bemiyya(1, 2))


// EXPORTS:
// 1. export default ...  ->  exports only one item
// 2. export {...}        ->  exports multiple items but in container
// ---------------
// To get those exports in another file, we need to import them:
// ex:
// import { ..., ... } from './person.js'   ->  from export {}
// import ... from "./helpers.js"           ->  from export default ...
// ====================
// import { myAge, myName } from './person.js'
// import sumUp from './helpers.js'


export {
    mA,
    mN
}