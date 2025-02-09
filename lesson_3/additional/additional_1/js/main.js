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
