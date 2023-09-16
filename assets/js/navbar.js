const openButton = document.querySelector(".offcanvas-open");
const offcanvas = document.querySelector(".offcanvas");
const closeButton = document.querySelector(".offcanvas-close");
const overlay = document.querySelector(".overlay");

openButton.addEventListener("click", () => {
  offcanvas.classList.add("offcanvas-active");
  overlay.classList.add("overlay-active");
});

closeButton.addEventListener("click", () => {
  offcanvas.classList.remove("offcanvas-active");
  overlay.classList.remove("overlay-active");
});
