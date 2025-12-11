let a;
let b;
let c;
let d;
let x;
let y;
let bigNumber = "2000";
let smallNumber = "48";
a = 255 ** (1 / 2); // 15
b = 24 / 12 + 38; // 40
c = 2 ** 3 % 2; // ** будет выполняться первым, а % вторым // 0
d = 49 ** (1 / 2) + 169 ** (1 / 2); // 20
x = (a + b + d) ** c;
y = `Ваше число: ${x}`; // или по старому - y = "Ваше число:" + " " + x;
console.log(y);
console.log(+bigNumber + +smallNumber);