'use strict';

// Task Additional 9.1.1
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

for (const course of coursesArray) {
    const courseDiv = document.createElement('div');
    const title = document.createElement('h2');
    const durationContainer = document.createElement('div');
    const monthDuration = document.createElement('p');
    const hourDuration = document.createElement('p');
    const modules = document.createElement('ul');
    
    courseDiv.classList.add('course');
    title.classList.add('course-title');
    durationContainer.classList.add('duration-container');
    monthDuration.classList.add('month-duration');
    hourDuration.classList.add('hour-duration');
    modules.classList.add('modules-list');
    
    title.innerText = course.title;
    monthDuration.innerText = `Months: ${course.monthDuration}`;
    hourDuration.innerText = `Hours: ${course.hourDuration}`;
    
    for (const module of course.modules) {
        const listElement = document.createElement('li');
        listElement.innerText = module;
        modules.appendChild(listElement);
    }
    
    durationContainer.append(monthDuration, hourDuration);
    courseDiv.append(title, durationContainer, modules);
    wrapper.appendChild(courseDiv);
}

// Task Additional MixKit
function MixKit(title, author, mp3) {
    this.title = title;
    this.author = author;
    this.mp3 = mp3;
}

const mixKitArr = [];

const itemGridCards = document.querySelectorAll('.item-grid-card');

for (const gridCard of itemGridCards) {
    const title = gridCard.querySelector('.item-grid-card__title').innerText;
    const author = gridCard.querySelector('.item-grid-music-preview__author').innerText.slice(3);
    const mp3 = gridCard.children[0].getAttribute('data-audio-player-preview-url-value');
    mixKitArr.push(new MixKit(title, author, mp3));
}
