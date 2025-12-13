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

let result;
result = a + b < 4 ? "мало" : "много";
alert(result);

let message;
if (login == "Сотрудник") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
}

let anotherMessage =
  anotherlogin == "Сотрудник"
    ? "Привет"
    : anotherlogin == "Директор"
    ? "Здравствуйте"
    : anotherlogin == ""
    ? "Нет логина"
    : "";

let age;
let negativeAge;
let superNegativeAge;

// Диапазон от 14 до 90 включительно
if (age >= 14 && age <= 90) {
  alert(age);
}

// Негативный результат диапазона
// Все остальное но, не диапазон от 14 до 90 включительно
if (!(negativeAge >= 14 && negativeAge <= 90)) {
  alert(negativeAge);
}

// Негативный результат диапазона (без оператора НЕ "!")
// Все остальное но, не диапазон от 14 до 90 включительно
if (superNegativeAge < 14 || superNegativeAge > 90) {
  alert(superNegativeAge);
}
