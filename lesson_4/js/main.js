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
