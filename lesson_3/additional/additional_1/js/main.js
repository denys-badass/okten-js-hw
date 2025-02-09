'use strict';

// Task Additional 3.1.1
// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
const mixArr = [
    42, 7, 19, 100, 3,
    "apple", "banana", "cherry", "grape", "mango",
    "hello", 25, true, "world", false,
];
// I don`t get it. Should I print to console full array or each element separate?
console.log(mixArr);

for (const element of mixArr) {
    console.log(element);
}

// Task Additional 3.1.2
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const arrForFill = [];

for (let i = 0; i < 10; i++) {
    arrForFill[i] = `Line number ${i + 1}`;
}

for (const element of arrForFill) {
    console.log(element);
}

// Task Additional 3.1.3
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let numArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
let i = 0;
while (i < numArr.length) {
    console.log(numArr[i]);
    i++;
}

// 2. перебрати його циклом for
for (const number of numArr) {
    console.log(number);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < numArr.length) {
    if (i % 2 !== 0) {
        console.log(numArr[i]);
    }
    i++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < numArr.length; i++) {
    if (i % 2 !== 0) {
        console.log(numArr[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < numArr.length) {
    if (i % 2 === 0) {
        console.log(numArr[i]);
    }
    i++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < numArr.length; i++) {
    if (i % 2 === 0) {
        console.log(numArr[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 3 === 0) {
        numArr[i] = 'okten';
    }
}

// 8. вивести масив в зворотньому порядку.
for (let i = numArr.length - 1; i >= 0; i--) {
    console.log(numArr[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
numArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

i = numArr.length - 1;
while (i >= 0) {
    console.log(numArr[i]);
    i--;
}

for (let i = numArr.length - 1; i >= 0 ; i--) {
    console.log(numArr[i]);
}

i = numArr.length - 1;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(numArr[i]);
    }
    i--;
}

for (let i = numArr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(numArr[i]);
    }
}

i = numArr.length - 1;
while (i >= 0) {
    if (i % 2 === 0) {
        console.log(numArr[i]);
    }
    i--;
}

for (let i = numArr.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(numArr[i]);
    }
}

for (let i = numArr.length; i >= 0; i--) {
    if (numArr[i] % 3 === 0) {
        numArr[i] = 'okten';
    }
}

console.log(numArr);

// Task Additional 3.1.4
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const numbers = [5, 12, 24, 36, 47, 58, 69, 73, 84, 91];

for (const number of numbers) {
    console.log(number);
}

// Task Additional 3.1.5
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const strings = ["apple", "banana", "cherry", "grape", "mango", "orange", "peach", "plum", "kiwi", "melon"];

for (const string of strings) {
    console.log(string);
}

// Task Additional 3.1.6
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const mixedArr = [
    42,
    "Hello, Okten",
    true,
    null,
    undefined,
    { id: 1, key: 'value' },
    [1, 2, 3],
    false,
    NaN,
    99,
];

for (const element of mixedArr) {
    console.log(element);
}

// Task Additional 3.1.7
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
const threeTypesArr = [42, "apple", true, 7, "banana", false, 99, "cherry", true, 18];

for (const element of threeTypesArr) {
    if (typeof element === 'boolean') {
        console.log(element);
    }
}

// Task Additional 3.1.8
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
for (const element of threeTypesArr) {
    if (typeof element === 'number') {
        console.log(element);
    }
}
