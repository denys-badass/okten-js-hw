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
    document.write('<ul>');
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

// Task 4.8
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
function writeListFromArr(arr) {
    document.write('<ul>');
    for (const element of arr) {
        document.write(`<li>${element}</li>`);
    }
    document.write('</ul>');
}

// Task 4.9
// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
function writeObjects(arr) {
    for (const element of arr) {
        document.write(`<div>
            <p>${element.id}</p>
            <p>${element.name}</p>
            <p>${element.age}</p>
        </div>`);
    }
}

// Task 4.10
// - створити функцію яка повертає найменьше число з масиву
function getMinValue(arr) {
    let min = Number.MAX_VALUE;
    for (const element of arr) {
        min = element < min ? element : min;
    }
    return min;
}

// Task 4.11
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum = 0;
    for (const element of arr) {
        sum += element;
    }
    return sum;
}

// Task 4.12
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}

// Task 4.13
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const element of currencyValues) {
        if (element.currency === exchangeCurrency) {
            return sumUAH / element.value;
        }
    }
}
