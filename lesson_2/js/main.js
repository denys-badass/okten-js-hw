'use strict';

// Task 2.1
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let mixArr = [
    125,
    3.14,
    'hello',
    true,
    'Denys',
    82034,
    false,
    ['a', 'b', 'c'],
    {id: 1, name: 'John'},
    'Two word string',
]

console.log(mixArr[0]);
console.log(mixArr[1]);
console.log(mixArr[2]);
console.log(mixArr[3]);
console.log(mixArr[4]);
console.log(mixArr[5]);
console.log(mixArr[6]);
console.log(mixArr[7]);
console.log(mixArr[8]);
console.log(mixArr[9]);

// Task 2.2
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'Dune', pageCount: 688, genre: 'Science Fiction'};
let book2 = {title: 'Sapiens: A Brief History of Humankind', pageCount: 464, genre: 'History'};
let book3 = {title: 'The Hobbit', pageCount: 310, genre: 'Fantasy'};

// Task 2.3
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let gatsbyBook = {
    title: 'The Great Gatsby',
    pageCount: 281,
    genre: 'Classic',
    authors: [
        {name: 'Scott Fitzgerald', age: 44},
    ],
};
let styleBook = {
    title: 'The Elements of Style',
    pageCount: 105,
    genre: 'Reference',
    authors: [
        {name: 'William Strunk Jr.', age: 85},
        {name: 'E.B. White', age: 86},
    ],
};
let daVinciBook = {
    title: 'The Da Vinci Code',
    pageCount: 454,
    genre: 'Thriller',
    authors: [
        {name: 'Dan Brown', age: 59},
    ],
};
