//BUTTON

const backToTopButton = document.querySelector("#back-to-top")

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block"
  }
  else {
    backToTopButton.style.display = "none";
  }
}

backToTopButton.addEventListener("click", backToTop)

function backToTop() {
  window.scrollTo(0, 0);
}

//MODAL

const modal = document.getElementById("ifu-modal")
const img = document.getElementById("open-image")
const span = document.getElementById("close")

img.onclick = () => {
  modal.style.display = "flex";
}

span.onclick = () => {
  modal.style.display = "none";
}

window.onclick = () => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

document.body.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
})

//FORM VALIDATION
const form = document.getElementById("netlify-form")

const userName = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")

const nameError = document.getElementById("name-error")
const emailError = document.getElementById("email-error")
const messageError = document.getElementById("message-error")

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
})

const checkInputs = () => {
  const nameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (nameValue === '') {
    nameError.style.visibility = "visible";
  }

  if (emailValue === '') {
    emailError.style.visibility = "visible";
  } else if (!isEmail(emailValue)) {
    emailError.style.visibility = "visible";
  }

  if (messageValue === '') {
    messageError.style.visibility = "visible";
  }

}

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

