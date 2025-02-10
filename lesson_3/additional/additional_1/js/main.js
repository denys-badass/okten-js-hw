'use strict';

// Task Additional 3.1.1
// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
const mixArr = [42, 7, 19, 100, 3, "apple", "banana", "cherry", "grape", "mango", "hello", 25, true, "world", false,];
// I don`t get it. Should I print to console full array or each element separate?
console.log(mixArr);

for (const element of mixArr) {
    console.log(element);
}

// Task Additional 3.1.2
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arrForFill = [];

for (let i = 0; i < 10; i++) {
    arrForFill[i] = `Line number ${i + 1}`;
}

for (const element of arrForFill) {
    console.log(element);
}

// Task Additional 3.1.3
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let numArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
let i = 0;
while (i < numArr.length) {
    console.log(numArr[i]);
    i++;
}

// 2. перебрати його циклом for
for (const number of numArr) {
    console.log(number);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < numArr.length) {
    if (i % 2 !== 0) {
        console.log(numArr[i]);
    }
    i++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < numArr.length; i++) {
    if (i % 2 !== 0) {
        console.log(numArr[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < numArr.length) {
    if (i % 2 === 0) {
        console.log(numArr[i]);
    }
    i++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < numArr.length; i++) {
    if (i % 2 === 0) {
        console.log(numArr[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 3 === 0) {
        numArr[i] = 'okten';
    }
}

// 8. вивести масив в зворотньому порядку.
for (let i = numArr.length - 1; i >= 0; i--) {
    console.log(numArr[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
numArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

i = numArr.length - 1;
while (i >= 0) {
    console.log(numArr[i]);
    i--;
}

for (let i = numArr.length - 1; i >= 0; i--) {
    console.log(numArr[i]);
}

i = numArr.length - 1;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(numArr[i]);
    }
    i--;
}

for (let i = numArr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(numArr[i]);
    }
}

i = numArr.length - 1;
while (i >= 0) {
    if (i % 2 === 0) {
        console.log(numArr[i]);
    }
    i--;
}

for (let i = numArr.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(numArr[i]);
    }
}

for (let i = numArr.length; i >= 0; i--) {
    if (numArr[i] % 3 === 0) {
        numArr[i] = 'okten';
    }
}

console.log(numArr);

// Task Additional 3.1.4
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const numbers = [5, 12, 24, 36, 47, 58, 69, 73, 84, 91];

for (const number of numbers) {
    console.log(number);
}

// Task Additional 3.1.5
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const strings = ["apple", "banana", "cherry", "grape", "mango", "orange", "peach", "plum", "kiwi", "melon"];

for (const string of strings) {
    console.log(string);
}

// Task Additional 3.1.6
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const mixedArr = [42, "Hello, Okten", true, null, undefined, {id: 1, key: 'value'}, [1, 2, 3], false, NaN, 99,];

for (const element of mixedArr) {
    console.log(element);
}

// Task Additional 3.1.7
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
const threeTypesArr = [42, "apple", true, 7, "banana", false, 99, "cherry", true, 18];

for (const element of threeTypesArr) {
    if (typeof element === 'boolean') {
        console.log(element);
    }
}

// Task Additional 3.1.8
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
for (const element of threeTypesArr) {
    if (typeof element === 'number') {
        console.log(element);
    }
}

// Task Additional 3.1.9
// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
for (const element of threeTypesArr) {
    if (typeof element === 'string') {
        console.log(element);
    }
}

// Task Additional 3.1.10
//  - Створити порожній масив. 
//  Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. 
//  Вивести в консоль всі його елементи в циклі.
arrForFill = [];

for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
        arrForFill[i] = `Element with index ${i}`;
    } else if (i % 3 === 1) {
        arrForFill[i] = i * 512;
    } else {
        arrForFill[i] = i % 2 === 0;
    }
}

for (const element of arrForFill) {
    console.log(element)
}

// Task Additional 3.1.11
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    const step = `step ${i}`;
    console.log(step);
    document.write(`${step} `);
}

// separate line
document.write('<hr>');

// Task Additional 3.1.12
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    const step = `step ${i}`;
    console.log(step);
    document.write(`${step} `);
}

// separate line
document.write('<hr>');

// Task Additional 3.1.13
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 200; i += 2) {
    const step = `step ${i}`;
    console.log(step);
    document.write(`${step} `);
}

// separate line
document.write('<hr>');

// Task Additional 3.1.14
// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        const step = `step ${i}`;
        console.log(step);
        document.write(`${step} `);
    }
}

// separate line
document.write('<hr>');

// Task Additional 3.1.15
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        const step = `step ${i}`;
        console.log(step);
        document.write(`${step} `);
    }
}

// separate line
document.write('<hr>');

// Task Additional 3.1.16
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
const books = [{
    title: "Good Omens",
    pages: 432,
    authors: ["Neil Gaiman", "Terry Pratchett"],
    genres: ["Fantasy", "Comedy", "Apocalyptic Fiction"]
}, {
    title: "The Art of Computer Programming",
    pages: 672,
    authors: ["Donald Knuth"],
    genres: ["Computer Science", "Programming", "Mathematics"]
}, {
    title: "The Diamond Age", pages: 499, authors: ["Neal Stephenson"], genres: ["Science Fiction", "Cyberpunk"]
}, {
    title: "The Federalist Papers",
    pages: 615,
    authors: ["Alexander Hamilton", "James Madison", "John Jay"],
    genres: ["Politics", "History", "Philosophy"]
}, {
    title: "Principia Mathematica",
    pages: 1200,
    authors: ["Alfred North Whitehead", "Bertrand Russell"],
    genres: ["Mathematics", "Philosophy", "Logic"]
}, {
    title: "The Phoenix Project",
    pages: 400,
    authors: ["Gene Kim", "Kevin Behr", "George Spafford"],
    genres: ["Business", "Technology", "Management"]
}, {
    title: "The Pragmatic Programmer",
    pages: 352,
    authors: ["Andrew Hunt", "David Thomas"],
    genres: ["Programming", "Technology", "Software Development"]
}, {
    title: "Artificial Intelligence: A Guide to Thinking Machines",
    pages: 320,
    authors: ["Blay Whitby"],
    genres: ["Artificial Intelligence", "Technology"]
}, {
    title: "The Mythical Man-Month",
    pages: 322,
    authors: ["Frederick P. Brooks Jr."],
    genres: ["Software Development", "Project Management", "Technology"]
}, {
    title: "Design Patterns",
    pages: 395,
    authors: ["Erich Gamma", "Richard Helm", "Ralph Johnson", "John Vlissides"],
    genres: ["Programming", "Software Engineering"]
}];

// - знайти наібльшу книжку.
let maxPagesBook;
let maxPage = 0;

for (const book of books) {
    if (book.pages > maxPage) {
        maxPage = book.pages;
        maxPagesBook = book;
    }
}

document.write(`<p>The most fat book is ${maxPagesBook.title}, it has ${maxPagesBook.pages} pages.</p>`);

// - знайти книжку/ки з найбільшою кількістю жанрів
let maxAuthor = 0;

for (const book of books) {
    const numOfAuthors = book.authors.length;
    if (numOfAuthors > maxAuthor) {
        maxAuthor = numOfAuthors;
    }
}

document.write('<p>The books which have the most number of authors:</p>')
document.write('<ul>')
for (const book of books) {
    const numOfAuthors = book.authors.length;
    if (numOfAuthors === maxAuthor) {
        document.write(`<li>${book.title} has ${numOfAuthors} authors</li>`);
    }
}
document.write('</ul>');

// - знайти книжку/ки з найдовшою назвою
let maxLengthTitle = 0;

for (const book of books) {
    const lengthTitle = book.title.length;
    if (lengthTitle > maxLengthTitle) {
        maxLengthTitle = lengthTitle;
    }
}

document.write('<p>The longest title of books:</p>');
document.write('<ul>');
for (const book of books) {
    if (book.title.length === maxLengthTitle) {
        document.write(`<li>${book.title}</li>`);
    }
}
document.write('</ul>');

// - знайти книжку/ки які писали 2 автори
document.write('<p>This books was wroten by 2 authors</p>');
document.write('<ul>');
for (const book of books) {
    if (book.authors.length === 2) {
        document.write(`<li>${book.title}, (${book.authors[0]}, ${book.authors[1]})</li>`);
    }
}
document.write('</ul>');

// - знайти книжку/ки які писав 1 автор
document.write('<p>Single author books:</p>');
document.write('<ul>');
for (const book of books) {
    if (book.authors.length === 1) {
        document.write(`<li>${book.title}, (${book.authors[0]})</li>`);
    }
}
document.write('</ul>');
