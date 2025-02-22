'use strict';

// Task 9.1
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
const body = document.body;
const firstWrapper = document.createElement('div');
firstWrapper.className = 'wrap, collapse, alpha, beta';
firstWrapper.style.background = 'cyan';
firstWrapper.style.color = 'gray';
firstWrapper.style.fontSize = '18px';

body.appendChild(firstWrapper);

const secondWrapper = firstWrapper.cloneNode(true);

body.appendChild(secondWrapper);

// Task 9.2
// - Є масив:
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const pages = ['Main', 'Products', 'About us', 'Contacts'];
const navList = document.createElement('ul');

for (const page of pages) {
    const li = document.createElement('li');
    li.innerText = page;
    navList.appendChild(li);
}

body.appendChild(navList);

// Task 9.3
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    const courseDiv = document.createElement('div');
    courseDiv.innerText = `${course.title} - ${course.monthDuration}`;
    body.appendChild(courseDiv);
}

// Task 9.4
// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    const courseDiv = document.createElement('div');
    const courseHeading = document.createElement('h1');
    const courseDescription = document.createElement('p');
    courseDiv.className = 'item';
    courseHeading.className = 'heading';
    courseDescription.className = 'description';
    courseHeading.innerText = `${course.title}`;
    courseDescription.innerText = `${course.monthDuration}`;
    courseDiv.append(courseHeading, courseDescription);
    body.appendChild(courseDiv);
}
