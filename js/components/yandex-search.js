document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector(".ya-search-form");
  const input = main.querySelector(".ya-search-input");

  const clearBtn = main.querySelector(".ya-clear");
  const submitBtn = main.querySelector(".ya-submit");

  const keyboardBtn = main.querySelector(".ya-keyboard");
  const voiceBtn = main.querySelector(".ya-voice");
  const cameraBtn = main.querySelector(".ya-camera");

  // Ввод текста
  input.addEventListener("input", () => {
    const hasText = input.value.trim() !== "";

    // Показ / скрытие очистки и отправки
    clearBtn.style.display = hasText ? "flex" : "none";
    submitBtn.style.display = hasText ? "flex" : "none";

    // Скрытие кнопок при вводе текста
    keyboardBtn.style.display = hasText ? "none" : "flex";
    voiceBtn.style.display = hasText ? "none" : "flex";
    cameraBtn.style.display = hasText ? "none" : "flex";
  });

  // Очистка строки по клику на очистку
  clearBtn.addEventListener("mousedown", (event) => {
    event.preventDefault();

    input.value = "";

    clearBtn.style.display = "none";
    submitBtn.style.display = "none";

    // Показать кнопки
    keyboardBtn.style.display = "flex";
    voiceBtn.style.display = "flex";
    cameraBtn.style.display = "flex";

    input.focus();
  });

  // Кастомизация
  input.addEventListener("blur", () => {

    if (input.value.trim() !== "") {
      main.style.background = "#383839";
      input.style.marginLeft = "20px";
      input.style.paddingLeft = "0";
    }
  });
});

// :(
