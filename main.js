const barIcon = document.getElementById("barIcon");
const menu = document.getElementById("menu");
const closeButton = document.getElementById("bar-close");
barIcon.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
closeButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Theme
const theme = document.getElementById("theme");
const body = document.querySelector("body");
theme.addEventListener("click", () => {
  body.classList.toggle("dark");
});
