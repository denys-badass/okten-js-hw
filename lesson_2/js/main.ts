// Task 2.1
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
type MinUser = {
    id: number;
    name: string;
}
type MixTypesForArray = number | string | boolean | string[] | MinUser;

let mixArr: MixTypesForArray[] = [
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
type Book = {
    title: string;
    pageCount: number;
    genre: string;
    authors?: Author[];
}

type Author = {
    name: string;
    age: number;
}

let book1: Book = {title: 'Dune', pageCount: 688, genre: 'Science Fiction'};
let book2: Book = {title: 'Sapiens: A Brief History of Humankind', pageCount: 464, genre: 'History'};
let book3: Book = {title: 'The Hobbit', pageCount: 310, genre: 'Fantasy'};

// Task 2.3
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.


let gatsbyBook: Book = {
    title: 'The Great Gatsby',
    pageCount: 281,
    genre: 'Classic',
    authors: [
        {name: 'Scott Fitzgerald', age: 44},
    ],
};
let styleBook: Book = {
    title: 'The Elements of Style',
    pageCount: 105,
    genre: 'Reference',
    authors: [
        {name: 'William Strunk Jr.', age: 85},
        {name: 'E.B. White', age: 86},
    ],
};
let daVinciBook: Book = {
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
type User = {
    name: string;
    username: string;
    password: string;
}

let users: User[] = [
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
type Day = {
    day: string;
    morningTemp: string;
    afternoonTemp: string;
    eveningTemp: string;
}

let week: Day[] = [
    {day: 'Monday', morningTemp: '-4C', afternoonTemp: '-2C', eveningTemp: '-9C'},
    {day: 'Tuesday', morningTemp: '-4C', afternoonTemp: '-5C', eveningTemp: '-10C'},
    {day: 'Wednesday', morningTemp: '-2C', afternoonTemp: '-3C', eveningTemp: '-9C'},
    {day: 'Thursday', morningTemp: '-2C', afternoonTemp: '+1C', eveningTemp: '-7C'},
    {day: 'Friday', morningTemp: '0C', afternoonTemp: '+2C', eveningTemp: '-5C'},
    {day: 'Saturday', morningTemp: '-1C', afternoonTemp: '0C', eveningTemp: '-5C'},
    {day: 'Sunday', morningTemp: '-2C', afternoonTemp: '-4C', eveningTemp: '-6C'},
];

// Task 2.6
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 1;
// let x = 0;
let x: number = -3;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// Task 2.7
// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time: number = 44;

if (time >= 0 && time < 15) {
    console.log('Перша');
} else if (time >= 15 && time < 30) {
    console.log('Друга');
} else if (time >= 30 && time < 45) {
    console.log('Треття');
} else if (time >= 45 && time < 60) {
    console.log('Четверта');
} else {
    console.log('Wrong time!');
}

// Task 2.8
// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).\
let day: number = 17;

if (day >= 1 && day <= 10) {
    console.log('Перша декада');
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада');
} else if (day >= 21 && day <= 31) {
    console.log('Треття декада');
} else {
    console.log('Невірний день!!!');
}

// Task 2.9
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
let dayOfWeek: number = Number(prompt("Enter the day of week") ?? 0);

switch (dayOfWeek) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Wrong day!');
}


// Task 2.10
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let firstNum: number = Number(prompt("Enter the first number") ?? 0);
let secondNum: number = Number(prompt("Enter the second number") ?? 0);

if (firstNum < secondNum) {
    console.log(secondNum);
} else if (firstNum > secondNum) {
    console.log(firstNum);
} else if (firstNum === secondNum) {
    console.log('Numbers are equal');
}

// Task 2.11
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//  (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x1: any;
x1 = !x1 ? 'default': x1;

// Task 2.12
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
type Course = {
    title: string,
    monthDuration: number,
}

let coursesAndDurationArray: Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}