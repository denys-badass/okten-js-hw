// Task Additional 3.3.1
// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.
let arrForFill = [];
let num = 0;
let i = 0;

while (arrForFill.length < 50) {
    if (num % 2 === 0) {
        arrForFill[i] = num;
        i++;
    }
    num++;
}
console.log(arrForFill);

// b. заповнити його 50 непарними числами за допомоги циклу.
arrForFill = [];
num = 0;
i = 0;

while (arrForFill.length < 50) {
    if (num % 2 !== 0) {
        arrForFill[i] = num;
        i++;
    }
    num++;
}
console.log(arrForFill);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
arrForFill = [];

for (let i = 0; i < 20; i++) {
    arrForFill[i] = Math.floor(Math.random() * 128);
}
console.log(arrForFill);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
arrForFill = [];

for (let i = 0; i < 20; i++) {
    arrForFill[i] = Math.floor(Math.random() * 724 + 8);
}

console.log(arrForFill);

// Task Additional 3.3.2
// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < arrForFill.length; i += 3) {
    console.log(arrForFill[i]);
}

