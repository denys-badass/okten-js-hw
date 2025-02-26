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
