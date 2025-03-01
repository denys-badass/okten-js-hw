'use strict';

// Task 10.1
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const hideBtn = document.getElementById('hide-btn');
const textForHide = document.getElementById('text');

hideBtn.onclick = function () {
    if (textForHide.style.display === 'none') {
        hideBtn.innerText = 'Hide';
        textForHide.style.display = 'block';
    } else {
        hideBtn.innerText = 'Show';
        textForHide.style.display = 'none';
    }
}

// Task 10.2
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
const ageInput = document.getElementById('age-input');
const ageCheckBtn = document.getElementById('check-age-btn');
const result = document.getElementById('result');

ageCheckBtn.onclick = function () {
    const age = +ageInput.value;
    result.innerText = age > 18 ? 'You age greater than 18' : 'You age less than 18';
}

// Task 10.3
// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const usersDiv = document.getElementById('users');
const userInfoForm = document.forms['user-info'];
const userName = userInfoForm.name;
const userSurname = userInfoForm.surname;
const userAge = userInfoForm.age;

userInfoForm.onsubmit = function (ev) {
    ev.preventDefault();
    const userDiv = document.createElement('div');
    const nameP = document.createElement('p');
    const surnameP = document.createElement('p');
    const ageP = document.createElement('p');
    userDiv.classList.add('user-div');
    
    nameP.innerText = `Name: ${userName.value}`;
    surnameP.innerText = `Surname: ${userSurname.value}`;
    ageP.innerText = `Age: ${userAge.value}`;
    
    userDiv.append(nameP, surnameP, ageP);
    usersDiv.appendChild(userDiv);
}

// Task 10.4
// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let counter = localStorage.getItem('counter') ?? 1;
const counterDiv = document.createElement('div');
counterDiv.innerText = `reloaded: ${counter}`;
document.body.appendChild(counterDiv);


document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        counter++;
        localStorage.setItem('counter', counter);
    }
}

// Task 10.5
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM
document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
        const sessionsList = JSON.parse(localStorage.getItem('sessionsList')) ?? [];
        sessionsList.push(new Date());
        localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
    }
})

// Task 10.6
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
const kg = document.getElementById('kg');
const lbs = document.getElementById('lbs');

kg.oninput = function () {
    lbs.value = Math.round(kg.value * 2.2046226218 * 100) / 100;
}

lbs.oninput = function () {
    kg.value = Math.round(lbs.value * 0.45359237 * 100) / 100;
}

// Task 10.7
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
const addToLocalStorage = (arrayName, objToAdd) => {
    const arr = JSON.parse(localStorage.getItem(arrayName)) ?? [];
    arr.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(arr));
}

// Task 10.8
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
const tableMakerForm = document.forms['table-maker'];
tableMakerForm.onsubmit = function (ev) {
    ev.preventDefault();
    const table = document.createElement('table');
    for (let i = 0; i < +tableMakerForm.rows.value; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < +tableMakerForm.cols.value; j++) {
            const cell = document.createElement('td');
            cell.innerText = tableMakerForm.content.value;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

// Task 10.9
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
let moneyCounter = JSON.parse(localStorage.getItem('money')) ?? 100;
const moneyDiv = document.getElementById('money');

document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
        const sessions = JSON.parse(localStorage.getItem('sessionsList')) ?? [];
        console.log(sessions)
        if (sessions.length > 1) {
            const nowSession = new Date(sessions[sessions.length - 1]).getTime();
            const lastSession = new Date(sessions[sessions.length - 2]).getTime();
            if (nowSession - lastSession >= 10_000) {
                moneyCounter += 10;
            }
        }
        moneyDiv.innerText = `Money: ${moneyCounter} грн`;
        localStorage.setItem('money', moneyCounter);
    }
})
