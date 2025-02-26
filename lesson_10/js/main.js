'use strict';

// Task 10.1
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const hideBtn = document.getElementById('hide-btn');
const textForHide = document.getElementById('text');

hideBtn.onclick = function () {
    textForHide.style.display = 'none';
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
// const submitBtn = userInfoForm['submit-user-info'];

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
