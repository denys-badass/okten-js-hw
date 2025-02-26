'use strict';

// Task 10.1
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const hideBtn = document.getElementById('hide-btn');
const textForHide = document.getElementById('text');

hideBtn.onclick = function () {
    textForHide.style.display = 'none';
}
