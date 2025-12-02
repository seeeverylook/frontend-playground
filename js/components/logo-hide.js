const input = document.querySelector(".ya-search-input");
const keyboard = document.querySelector(".ya-logo");

input.addEventListener("focus", () => (keyboard.style.display = "none"));
input.addEventListener("blur", () => (keyboard.style.display = "flex"));
