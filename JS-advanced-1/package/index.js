// Node Package Manager  ->  NPM
// Node Package Executor ->  NPX
// -----------------------------
// npm init  ->  initializes a new project
// npm init -y ->  adds default values to the project
// -----------------------------
// import { MY_CONSTANT } from "./main.js"
// import MY_CONSTANT from "./main.js"

// console.log(MY_CONSTANT)

// 1. export {...}          ->  export multiple variables
// 2. export default ...    ->  export a single variable
// -----------------------------
// -----------------------------
// -----------------------------
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"

function showAlert() {
    Toastify({
        text: "This is a toast",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

export { showAlert }








