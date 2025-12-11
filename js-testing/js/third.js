let answer = prompt("Какое «официальное» название JavaScript?", "");

if (answer == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}

// else if
let number = prompt("Введите смешное число!");
number = Number(number);

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else if (number === 0) {
  alert(0);
} else {
  alert("Вы не ввели число!");
}

// Тернарный/условный оператор "?", конструкция "? :"

// Конструкция - const result = условие ? еслиПравда : ЕслиЛожь;

let anotherNumber = prompt("Введите еще одно смешное число!");
anotherNumber = Number(anotherNumber);

let userNumber =
  anotherNumber > 0
    ? 1
    : anotherNumber < 0
    ? -1
    : anotherNumber === 0
    ? 0
    : "Вы не ввели число!";

alert(userNumber);
