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

