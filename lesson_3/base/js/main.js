'use strict';

// Task 3.1
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>Block from loop</div>');
}


// Task 3.2
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Block number ${i} from loop</div>`);
}

// Task 3.3
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
for (let i = 0; i < 20; i++) {
    document.write('<h1>Header from loop</h1>');
}

// Task 3.4
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
for (let i = 0; i < 20; i++) {
    document.write(`<h1>Header number ${i} from loop</h1>`);
}

// Task 3.5
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>')
for (const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`);
}
document.write('</ul>');
