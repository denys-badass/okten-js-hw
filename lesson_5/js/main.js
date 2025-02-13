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
