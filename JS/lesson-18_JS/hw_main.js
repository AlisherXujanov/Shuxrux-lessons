// form section start
// variables start
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const passInput = document.getElementById("pass");
const submitBtn = document.querySelector('button[type="submit"]');
const resetBtn = document.querySelector('button[type="reset"]');
const showPasswordEye = document.getElementById("show-password-eye");
const offPasswordEye = document.getElementById("off-password-eye");
const body = document.querySelector("body");
// variables end

// functions
function submit(e) {
  e.preventDefault();
  console.log("submitted");
}
submitBtn.addEventListener("click", submit);
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nameInput.value = "";
  passInput.value = "";
  showError(nameInput, false, "", true);
  showError(passInput, false, "", true);
});
// --------------------------------------

//(event, show) => nameInput ichidagi showError(e, false) yoki showError(e, true);
// event bu (e), show bu (true) yoki (false)
function showError(input, show, msg = "", zero = false) {
  const errorField = input.parentElement.querySelector(".error");
  if (show) {
    input.style.outline = "3px solid rgb(255, 0, 0)";
    form.style.boxShadow = "0px 0px 105px 45px rgb(255, 0, 0)";
    form.style.border = "1px solid rgb(255, 0, 0)";
    errorField.innerText = msg;
    body.style.backdropFilter = "hue-rotate(90deg)";
  } else {
    input.style.outline = "3px solid #007bff";
    form.style.boxShadow = "none";
    form.style.border = "none";
    errorField.innerText = "";
    body.style.backdropFilter = "";
  }

  if (zero) {
    input.style.outline = "none";
  }
}

// Validation
let startCheckingName = false;
nameInput.addEventListener("input", (e) => {
  const VAL = e.target.value;
  const PATTERN_VAL = /^[a-zA-Z0-9]{6,12}$/;

  if (VAL.length == 0) {
    startCheckingName = false;
    return showError(e.target, false, (zero = true));
  }

  if (VAL.length >= 6) {
    startCheckingName = true;
  }

  if (startCheckingName) {
    if (PATTERN_VAL.test(VAL)) {
      showError(e.target, false);
    } else {
      let msg = "Only one word without symbols. Length 6-12";
      showError(e.target, true, msg);
    }
  }
});

let startCheckingPass = false;
passInput.addEventListener("input", (e) => {
  const VAL = e.target.value;
  const PATTERN_PASS = /^[a-zA-Z0-9]{8}$/;

  if (VAL.length == 0) {
    startCheckingPass = false;
    return showError(e.target, false, (zero = true));
  }

  if (VAL.length >= 8) {
    startCheckingPass = true;
  }

  if (startCheckingPass) {
    if (PATTERN_PASS.test(VAL)) {
      showError(e.target, false);
    } else {
      let msg = "Only one word without symbols. Length 8<";
      showError(e.target, true, msg);
    }
  }
});

// show password start
showPasswordEye.addEventListener("click", (e) => {
  if (passInput.type == "password") {
    passInput.type = "text";
    showPasswordEye.style.display = "none";
    offPasswordEye.style.display = "block";
  } else {
    passInput.type = "password";
  }
});

offPasswordEye.addEventListener("click", (e) => {
  passInput.type = "password";
  showPasswordEye.style.display = "block";
  offPasswordEye.style.display = "none";
});
// show password end
// form section end

// hover for button
let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  let text = button.textContent;
  button.innerHTML = "";

  for (let letter of text) {
    // '\u00A0'   ===>>>   is special character for space

    // let span = document.createElement('span');
    // span.textContent = letter === ' ' ? '\u00A0' : letter;
    // button.appendChild(span);

    let span = `<span>${letter === " " ? "\u00A0" : letter}</span>`;
    button.innerHTML += span;
  }
  let spans = button.querySelectorAll("span");

  button.addEventListener("mouseenter", () => {
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("hover");
      }, index * 50);
    });
  });

  button.addEventListener("mouseleave", () => {
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.remove("hover");
      }, index * 50);
    });
  });
});
