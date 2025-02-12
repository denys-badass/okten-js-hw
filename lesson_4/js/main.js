'use strict';

// Task 4.1
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function getRectangleArea(a, b) {
    return a * b;
}

// Task 4.2
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function getCircleArea(r) {
    return Math.PI * r * r;
}

// Task 4.3
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
function getCylinderArea(h, r) {
    return getCircleArea(r) * h;
}

// Task 4.4
// - створити функцію яка приймає масив та виводить кожен його елемент
function printElements(arr) {
    for (const element of arr) {
        console.log(element);
    }
}

// Task 4.5
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function writeParagraph(text) {
    document.write(`<p>${text}</p>`);
}

// Task 4.6
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
function writeUList(text) {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

// Task 4.7
// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл) та виводить його через document.write
function writeListElements(text, num) {
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
