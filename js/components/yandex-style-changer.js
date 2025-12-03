document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".ya-search-input");
  const form = document.querySelector(".ya-search-form");

  input.addEventListener("focus", () => {
    form.style.outline = "5px solid #383839";
    form.style.background = "#232325";
  });

  input.addEventListener("blur", () => {
    form.style.outline = "";
    form.style.background = "";

  });
});
