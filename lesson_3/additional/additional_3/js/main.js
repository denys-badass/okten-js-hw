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

// Task Additional 3.3.3
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < arrForFill.length; i += 3) {
    const element = arrForFill[i];
    if (typeof element === 'number' && element % 2 === 0) {
        console.log(element);
    }
}

// Task Additional 3.3.4
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArrForFill = [];

for (let i = 2, j = 0; i < arrForFill.length; i += 3) {
    const element = arrForFill[i];
    if (typeof element === 'number' && element % 2 === 0) {
        console.log(element);
        newArrForFill[j] = element;
        j++;
    }
}
console.log(newArrForFill);

// Task Additional 3.3.5
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
for (let i = 1; i < arrForFill.length; i++) {
    const element = arrForFill[i];
    if (typeof element === 'number' && element % 2 === 0) {
        console.log(arrForFill[i - 1]);
    }
}
