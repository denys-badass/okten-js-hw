// Task 5.1
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const getRectangleArea = (a: number, b: number): number => a * b;

// Task 5.2
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const getCircleArea = (r: number): number => Math.PI * r * r;

// Task 5.3
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const getCylinderArea = (h: number, r: number): number => 2 * Math.PI * r * h;

// Task 5.4
// - створити функцію яка приймає масив та виводить кожен його елемент
const printElements = <T>(arr: T[]): void => {
    for (const element of arr) {
        console.log(element);
    }
}

// Task 5.5
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const writeParagraph = (text: string): void => document.write(`<p>${text}</p>`);

// Task 5.6
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const writeUList = (text: string): void => {
    document.write('<ul>');
    for (let i: number = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

// Task 5.7
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const writeListElements = (text: string, num: number): void => {
    document.write('<ul>');
    for (let i: number = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

// Task 5.8
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
type PrimitiveType = number | string | boolean;
const writeListFromArr = (arr: PrimitiveType[]): void => {
    document.write('<ul>');
    for (const element of arr) {
        document.write(`<li>${element}</li>`);
    }
    document.write('</ul>');
}

// Task 5.9
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
type User = {
    id: number;
    name: string;
    age: number;
}
const writeObjects = (arr: User[]): void => {
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
const getMinValue = (arr: number[]): number => {
    let min: number = Number.MAX_VALUE;
    for (const element of arr) {
        min = element < min ? element : min;
    }
    return min;
}

// Task 5.11
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
const sum = (arr: number[]): number => {
    let sum: number = 0;
    for (const element of arr) {
        sum += element;
    }
    return sum;
}

// Task 5.12
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = <T>(arr: T[], index1: number, index2: number): T[] => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}

// Task 5.13
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
type Currency = {
    currency: string;
    value: number;
}
const exchange = (sumUAH: number, currencyValues: Currency[], exchangeCurrency: string): number => {
    for (const element of currencyValues) {
        if (element.currency === exchangeCurrency) {
            return sumUAH / element.value;
        }
    }
    return 0;
}
