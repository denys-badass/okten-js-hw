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

// Task 2.4
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Denys Podobrii', username: 'badass', password: '5up3r53cr3t'},
    {name: 'Alexander Harris', username: 'aharris8x', password: ' HarriX@Lex@21'},
    {name: 'Evelyn Scott', username: 'evyscot22', password: '$c0ttEvy@99'},
    {name: 'Daniel Gomez', username: 'dangomez8', password: 'G@mez_D4n!33%'},
    {name: 'Isabella Lopez', username: 'izzlopezx', password: '!LoP3z_Izz2X'},
    {name: 'Harper Nelson', username: 'hnelson22', password: 'Nels@HarP99%'},
    {name: 'Elijah Howard', username: 'elijhow88', password: 'E!lij3Howard@X'},
    {name: 'Olivia Morris', username: 'liv_morris', password: '$MorrisL1v@33!'},
    {name: 'Benjamin Cooper', username: 'ben_coopx', password: 'C0op@!B3nj88'},
    {name: 'Charlotte Diaz', username: 'char_dia8', password: 'CharT3@Dia_22'},
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Task 2.5
//  описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//  Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
//  Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let week = [
    {day: 'Monday', morningTemp: '-4C', afternoonTemp: '-2C', eveningTemp: '-9C'},
    {day: 'Tuesday', morningTemp: '-4C', afternoonTemp: '-5C', eveningTemp: '-10C'},
    {day: 'Wednesday', morningTemp: '-2C', afternoonTemp: '-3C', eveningTemp: '-9C'},
    {day: 'Thursday', morningTemp: '-2C', afternoonTemp: '+1C', eveningTemp: '-7C'},
    {day: 'Friday', morningTemp: '0C', afternoonTemp: '+2C', eveningTemp: '-5C'},
    {day: 'Saturday', morningTemp: '-1C', afternoonTemp: '0C', eveningTemp: '-5C'},
    {day: 'Sunday', morningTemp: '-2C', afternoonTemp: '-4C', eveningTemp: '-6C'},
];
