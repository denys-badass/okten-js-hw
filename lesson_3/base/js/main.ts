// Task 3.1
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i: number = 0; i < 10; i++) {
    document.write('<div>Block from loop</div>');
}


// Task 3.2
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i: number = 0; i < 10; i++) {
    document.write(`<div>Block number ${i} from loop</div>`);
}

// Task 3.3
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i: number = 0;

while (i < 20) {
    document.write('<h1>Header from loop</h1>');
    i++;
}
// Task 3.4
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
i = 0;

while (i < 20) {
    document.write(`<h1>Header number ${i} from loop</h1>`);
    i++;
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
let listOfItems: string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>')
for (const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`);
}
document.write('</ul>');

// separate line
document.write('<hr>');

// Task 3.6
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
type Product = {
    title: string;
    price: number;
    image: string;
}
let products: Product[] = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://us-east-1-shared-usea1-02.graphassets.com/A2lCPH6tTelhrsostvMQpz/auto_image/resize=fit:max,width:640/quality=value:75/U2XuqyczRPSgluTFZ2PA'
        // Changed link to actually
    },
];
for (const product of products) {
    document.write(`<div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="${product.title}" class="product-image">
    </div>`);
}

// Separate line
document.write('<hr>');

// Task 3.7
// є масив
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років
type User = {
    name: string;
    age: number;
    status: boolean;
}
let users: User[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write('<h4> True status users:</h4>');
document.write('<ul>');
for (const user of users) {
    if (user.status) {
        document.write(`<li>${user.name}</li>`);
    }
}
document.write('</ul>');

document.write('<h4> False status users:</h4>');
document.write('<ul>');
for (const user of users) {
    if (!user.status) {
        document.write(`<li>${user.name}</li>`);
    }
}
document.write('</ul>');

document.write('<h4>Users older than 30:</h4>');
document.write('<ul>');
for (const user of users) {
    if (user.age > 30) {
        document.write(`<li>${user.name}</li>`);
    }
}
document.write('</ul>');
