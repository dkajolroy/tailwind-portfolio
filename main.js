const barIcon = document.getElementById("barIcon");
const menu = document.getElementById("menu");
const closeButton = document.getElementById("bar-close");
barIcon.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
closeButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
