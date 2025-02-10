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

// Task Additional 3.3.6
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
// Обрахувати середній чек.
const purchases = [100,250,50,168,120,345,188];
let sum = 0;

for (const purchase of purchases) {
    sum += purchase;
}

const avgBill = sum / purchases.length;
console.log(avgBill);

// Task Additional 3.3.7
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
newArrForFill = [];

for (let i = 0; i < arrForFill.length; i++) {
    newArrForFill[i] = arrForFill[i] * 5;
}

console.log(newArrForFill);

// Task Additional 3.3.8
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.
const mixedArr = [
    42,
    "Hello, World!",
    true,
    null,
    undefined,
    { key: "value" },
    [1, 2, 3],
    false,
    "Another string",
    99,
    -15,
    "JavaScript Rocks!",
    [10, "mixed", false],
    { name: "John Doe" },
    true,
    0,
    "Random text",
    NaN,
    3.14,
    { nested: { inner: 5 }},
    ["apple", "banana"],
    false,
    1024,
    "Coding is fun!",
    { numbers: [1, 2, 3] },
    -999,
    "Hello again!",
    [null, 42, true],
    2023,
    { value: undefined },
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
const usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

const citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

const usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    const user = usersWithId[i];
    const city = citiesWithId[i];
    const userWithCity = {};

    for (const userKey in user) {
        userWithCity[userKey] = user[userKey];
    }

    userWithCity.address = {};
    for (const cityKey in city) {
        userWithCity.address[cityKey] = city[cityKey];
    }
    usersWithCities[i] = userWithCity;
}

console.log(usersWithCities);

// Task Additional 3.3.10
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
const numbers = [5, 12, 24, 36, 47, 58, 69, 73, 84, 91];

for (const number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
