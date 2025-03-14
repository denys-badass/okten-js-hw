// Task 4.1
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function getRectangleArea(a: number, b: number): number {
    return a * b;
}

// Task 4.2
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function getCircleArea(r: number): number {
    return Math.PI * r * r;
}

// Task 4.3
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
function getCylinderArea(h: number, r: number): number {
    return 2 * Math.PI * r * h;
}

// Task 4.4
// - створити функцію яка приймає масив та виводить кожен його елемент
function printElements<T>(arr: T[]): void {
    for (const element of arr) {
        console.log(element);
    }
}

// Task 4.5
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function writeParagraph(text: string): void {
    document.write(`<p>${text}</p>`);
}

// Task 4.6
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
function writeUList(text: string): void {
    document.write('<ul>');
    for (let i: number = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

// Task 4.7
// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл) та виводить його через document.write
function writeListElements(text: string, num: number): void {
    document.write('<ul>');
    for (let i: number = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

// Task 4.8
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
type PrimitiveTypes = number | string | boolean;

function writeListFromArr(arr: PrimitiveTypes[]): void {
    document.write('<ul>');
    for (const element of arr) {
        document.write(`<li>${element}</li>`);
    }
    document.write('</ul>');
}

// Task 4.9
// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
type User = {
    id: number;
    name: string;
    age: number;
}
function writeObjects(arr: User[]): void {
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
function getMinValue(arr: number[]): number {
    let min: number = Number.MAX_VALUE;
    for (const element of arr) {
        min = element < min ? element : min;
    }
    return min;
}

// Task 4.11
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sum(arr: number[]): number {
    let sum: number = 0;
    for (const element of arr) {
        sum += element;
    }
    return sum;
}

// Task 4.12
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap<T>(arr: T[], index1:number, index2: number): T[] {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}

// Task 4.13
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
type Currency = {
    currency: string;
    value: number;
}
function exchange(sumUAH: number, currencyValues: Currency[], exchangeCurrency: string): number {
    for (const element of currencyValues) {
        if (element.currency === exchangeCurrency) {
            return sumUAH / element.value;
        }
    }
    return 0;
}
