// Task Additional 3.3.1
// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.
let arrForFill: number[] = [];
let num: number = 0;
let i: number = 0;

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

for (let i: number = 0; i < 20; i++) {
    arrForFill[i] = Math.floor(Math.random() * 128);
}
console.log(arrForFill);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
arrForFill = [];

for (let i: number = 0; i < 20; i++) {
    arrForFill[i] = Math.floor(Math.random() * 724 + 8);
}

console.log(arrForFill);

// Task Additional 3.3.2
// 2. Вивести за допомогою console.log кожен третій елемен
for (let i: number = 2; i < arrForFill.length; i += 3) {
    console.log(arrForFill[i]);
}

// Task Additional 3.3.3
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i:number = 2; i < arrForFill.length; i += 3) {
    const element: number = arrForFill[i];
    if (element % 2 === 0) {
        console.log(element);
    }
}

// Task Additional 3.3.4
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArrForFill: number[] = [];

for (let i: number = 2, j = 0; i < arrForFill.length; i += 3) {
    const element: number = arrForFill[i];
    if (element % 2 === 0) {
        console.log(element);
        newArrForFill[j] = element;
        j++;
    }
}
console.log(newArrForFill);

// Task Additional 3.3.5
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
for (let i: number = 1; i < arrForFill.length; i++) {
    const element: number = arrForFill[i];
    if (element % 2 === 0) {
        console.log(arrForFill[i - 1]);
    }
}

// Task Additional 3.3.6
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
// Обрахувати середній чек.
const purchases: number[] = [100, 250, 50, 168, 120, 345, 188];
let sum: number = 0;

for (const purchase of purchases) {
    sum += purchase;
}

const avgBill: number = sum / purchases.length;
console.log(avgBill);

// Task Additional 3.3.7
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
newArrForFill = [];

for (let i:number = 0; i < arrForFill.length; i++) {
    newArrForFill[i] = arrForFill[i] * 5;
}

console.log(newArrForFill);

// Task Additional 3.3.8
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.
const mixedArr: any[] = [
    42,
    "Hello, World!",
    true,
    null,
    undefined,
    {key: "value"},
    [1, 2, 3],
    false,
    "Another string",
    99,
    -15,
    "JavaScript Rocks!",
    [10, "mixed", false],
    {name: "John Doe"},
    true,
    0,
    "Random text",
    NaN,
    3.14,
    {nested: {inner: 5}},
    ["apple", "banana"],
    false,
    1024,
    "Coding is fun!",
    {numbers: [1, 2, 3]},
    -999,
    "Hello again!",
    [null, 42, true],
    2023,
    {value: undefined},
];
newArrForFill = [];
i = 0;

for (const element of mixedArr) {
    if (typeof element === 'number' && !isNaN(element)) {
        newArrForFill[i] = element;
        i++;
    }
}

console.log(newArrForFill);

// Task Additional 3.3.9
// - Дано 2 масиви з рівною кількістю об'єктів.
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
type City = {
    user_id: number;
    country: string;
    city: string;
}

type User = {
    id: number;
    name: string;
    age: number;
    status: boolean;
    address?: City;
}

const usersWithId: User[] = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

const citiesWithId: City[] = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

const usersWithCities: User[] = [];

for (let i: number = 0; i < usersWithId.length; i++) {
    const user: User = usersWithId[i];
    const city: City = citiesWithId[i];
    const userWithCity: User = JSON.parse(JSON.stringify(user));

    userWithCity.address = JSON.parse(JSON.stringify(city));

    usersWithCities[i] = userWithCity;
}

console.log(usersWithCities);

// Task Additional 3.3.10
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
const numbers: number[] = [5, 12, 24, 36, 47, 58, 69, 73, 84, 91];

for (const number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

// Task Additional 3.3.11
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
newArrForFill = [];

for (let i: number = 0; i < numbers.length; i++) {
    newArrForFill[i] = numbers[i];
}

console.log(newArrForFill);

// Task Additional 3.3.12
// - Дано масив: [ 'a', 'b', 'c'] .
// За допомогою циклу for зібрати всі букви в слово.
const letters: string[] = ['a', 'b', 'c'];
let word: string = '';

for (let i: number = 0; i < letters.length; i++) {
    word += letters[i];
}

console.log(word);

// За допомогою циклу while зібрати всі букви в слово.
i = 0;
word = '';

while (i < letters.length) {
    word += letters[i];
    i++;
}

console.log(word);

// За допомогою циклу for of зібрати всі букви в слово.
word = '';

for (const letter of letters) {
    word += letter;
}

console.log(word);
