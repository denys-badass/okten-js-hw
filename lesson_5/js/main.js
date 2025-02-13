'use strict';

// Task 5.1
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const getRectangleArea = (a, b) => a * b;

// Task 5.2
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const getCircleArea = (r) => Math.PI * r * r;

// Task 5.3
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const getCylinderArea = (h, r) => 2 * Math.PI * r * h;

// Task 5.4
// - створити функцію яка приймає масив та виводить кожен його елемент
const printElements = (arr) => {
    for (const element of arr) {
        console.log(element);
    }
}

// Task 5.5
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const writeParagraph = (text) => document.write(`<p>${text}</p>`);

// Task 5.6
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const writeUList = (text) => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

// Task 5.7
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const writeListElements = (text, num) => {
    document.write('<ul>');
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

// Task 5.8
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const writeListFromArr = (arr) => {
    document.write('<ul>');
    for (const element of arr) {
        document.write(`<li>${element}</li>`);
    }
    document.write('</ul>');
}

// Task 5.9
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
const writeObjects = (arr) => {
    for (const element of arr) {
        document.write(`<div>
            <p>${element.id}</p>
            <p>${element.name}</p>
            <p>${element.age}</p>
        </div>`);
    }
}

// Task 5.10
// - створити функцію яка повертає найменьше число з масиву
const getMinValue = (arr) => {
    let min = Number.MAX_VALUE;
    for (const element of arr) {
        min = element < min ? element : min;
    }
    return min;
}
